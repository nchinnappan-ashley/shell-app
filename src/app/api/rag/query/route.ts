import { NextRequest, NextResponse } from 'next/server';
import { searchSparse } from '@/lib/rag/store';

export const runtime = 'nodejs';

function normalize(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}
function tokenize(text: string): string[] {
  return normalize(text).split(' ').filter(Boolean);
}
function splitSentences(text: string): string[] {
  // simple sentence splitter on ., !, ?, or double newlines
  return text
    .split(/(?<=[.!?])\s+|\n{2,}/g)
    .map(s => s.trim())
    .filter(Boolean);
}

// very light stopwords to find informative overlap
const STOPWORDS = new Set([
  'the','a','an','and','or','of','to','in','on','for','by','with','is','are','was','were','be','been','at','as','it','that','this','these','those',
  'what','when','why','how','which','who','whom','about','tell','me','year'
]);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const query: string = body?.query || '';
    const topK: number = Math.min(Math.max(parseInt(body?.topK || '5', 10) || 5, 1), 10);
    const topSentences: number = Math.min(Math.max(parseInt(body?.topSentences || '4', 10) || 4, 1), 8);
    if (!query) return NextResponse.json({ error: 'Provide { query: string }' }, { status: 400 });

    // Expand candidate set, then re-rank to avoid Ashley Direct when not requested
    const candidates = searchSparse(query, Math.max(topK * 3, topK));
    const qLowerAll = query.toLowerCase();
    const mentionsDirectInQuery = /(ashley\s*direct|ashleydirect|ashley\s*net|ashleynet|direct portal|adp\b)/i.test(qLowerAll);
    const rescored = candidates.map(h => {
      let s = h.score || 0;
      const meta = ((h.title || '') + ' ' + (h.url || '') + ' ' + h.text.slice(0, 200)).toLowerCase();
      const hasDirectMeta = /(ashley\s*direct|ashleydirect|ashley\s*net|ashleynet)/i.test(meta);
      const hasBrandMeta = /(about ashley|ashley furniture|ashley industries|company|history|founded|established)/i.test(meta);
      if (!mentionsDirectInQuery && hasDirectMeta) s *= 0.2; // penalize Direct when user didn't ask
      if (!mentionsDirectInQuery && hasBrandMeta) s *= 1.2;   // promote brand context
      if (mentionsDirectInQuery && hasDirectMeta) s *= 1.15;  // slight boost when explicitly asking about Direct
      return { ...h, score: s };
    }).sort((a,b) => (b.score - a.score)).slice(0, topK);

    const hits = rescored;

    // Build concise extractive answer from top sentences across hits
    const allTerms = tokenize(query);
    const qImportantBase = Array.from(new Set(allTerms.filter(t => !STOPWORDS.has(t) && t !== 'ashley')));
    // Synonym expansion for brand/system tokens (e.g., "ashley direct" -> "ashleydirect")
    const qImportantSet = new Set(qImportantBase);
    const hasAshley = allTerms.includes('ashley');
    if (hasAshley && (allTerms.includes('direct') || /ashley\s*direct/i.test(qLowerAll))) qImportantSet.add('ashleydirect');
    if (hasAshley && /ashley\s*net/i.test(qLowerAll)) qImportantSet.add('ashleynet');
    const qImportant = Array.from(qImportantSet);

    const isWhen = /(^|\b)(when|what year)(\b|$)/.test(qLowerAll);
    const isMerger = /(\bmerge(d)?\b|\bmerger\b|\bacquire(d|s|ment)?\b|\bacquisition\b|\bcombine(d|s)?\b|\bconsolidat(e|ed|ion)\b|\bjoin(ed)?\b)/i.test(qLowerAll);
    const isGeneric = qImportant.length === 0; // e.g., "tell about ashley"
    type ScoredSentence = { s: string; score: number; from: number };
    const scored: ScoredSentence[] = [];
    hits.forEach((h, idx) => {
      const sentences = splitSentences(h.text);
      for (const s of sentences) {
        const tokens = tokenize(s);
        if (!tokens.length) continue;
        // overlap score using informative query tokens only
        let overlap = 0;
        for (const t of qImportant) {
          if (tokens.includes(t)) overlap += 1;
        }
        if (!isWhen && !isGeneric && overlap === 0) continue; // require at least one informative match for non-generic queries
        // favor shorter, more focused sentences and earlier ones
        const lenPenalty = Math.log(1 + tokens.length);
        const score = (overlap / lenPenalty) + (1 / (1 + sentences.indexOf(s)));
        scored.push({ s, score, from: idx });
      }
    });
    // Intent-specific filtering: merger vs founding
    if (isMerger) {
      const kwMerger = /(merge|merged|merger|acquire|acquired|acquisition|combine|combined|consolidat|join)/i;
      const mergerOnly = scored.filter(s => kwMerger.test(s.s));
      if (mergerOnly.length) { scored.splice(0, scored.length, ...mergerOnly); }
    }

    // If the query asks "when/what year", prefer sentences with a year and intent-aligned keywords
    if (isWhen) {
      const yearRe = /\b(18|19|20)\d{2}\b/;
      const kwFounding = /(establish|founded|incorporat|since|started|begin|origin)/i;
      const kwMerger = /(merge|merged|merger|acquire|acquired|acquisition|combine|combined|consolidat|join)/i;
      const kw = isMerger ? kwMerger : kwFounding;
      const filtered = scored.filter(s => yearRe.test(s.s) && kw.test(s.s));
      if (filtered.length) { scored.splice(0, scored.length, ...filtered); }
    }

    scored.sort((a, b) => b.score - a.score);

    // Deduplicate by Jaccard similarity on token sets
    const pick: ScoredSentence[] = [];
    const jaccard = (a: string[], b: string[]) => {
      const A = new Set(a), B = new Set(b);
      let inter = 0;
      A.forEach(x => { if (B.has(x)) inter++; });
      const uni = A.size + B.size - inter || 1;
      return inter / uni;
    };
    for (const cand of scored) {
      const ctok = tokenize(cand.s);
      if (pick.some(p => jaccard(tokenize(p.s), ctok) > 0.6)) continue;
      pick.push(cand);
      if (pick.length >= topSentences) break;
    }

    let answer = pick.map(p => p.s).join(' ');
    if ((!answer || answer.trim().length === 0) && hits.length) {
      // Fallback: synthesize from leading sentences of top documents
      const fallback: string[] = [];
      for (const h of hits) {
        const ss = splitSentences(h.text).slice(0, 2);
        fallback.push(...ss);
        if (fallback.length >= topSentences) break;
      }
      answer = fallback.slice(0, topSentences).join(' ');
    }

    return NextResponse.json({ ok: true, hits, answer });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

