export type StoredChunk = { id: string; url: string; title?: string; text: string };

// Sparse BM25/TF-IDF store (no external dependencies)

type SparseDoc = {
  id: string;
  url: string;
  title?: string;
  text: string;
  length: number; // token count
};

type Store = {
  docs: Map<string, SparseDoc>;
  // inverted index: term -> map(docId -> term frequency in doc)
  inv: Map<string, Map<string, number>>;
  // document frequencies: term -> number of docs containing term
  df: Map<string, number>;
  // total docs and average doc length
  N: number;
  avgdl: number;
};

// Global in-memory store (persists for server process lifetime)
const g = globalThis as unknown as { __RAG_SPARSE_STORE?: Store };
if (!g.__RAG_SPARSE_STORE) {
  g.__RAG_SPARSE_STORE = { docs: new Map(), inv: new Map(), df: new Map(), N: 0, avgdl: 0 } as Store;
}
const store: Store = g.__RAG_SPARSE_STORE as Store;

function normalize(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}
function tokenize(text: string): string[] {
  return normalize(text).split(' ').filter(Boolean);
}

export function addSparseDocuments(items: StoredChunk[]) {
  for (const it of items) {
    const tokens = tokenize(it.text);
    const tf = new Map<string, number>();
    const seen = new Set<string>();
    for (const t of tokens) {
      tf.set(t, (tf.get(t) || 0) + 1);
      if (!seen.has(t)) {
        seen.add(t);
        store.df.set(t, (store.df.get(t) || 0) + 1);
      }
    }
    // write to inverted index
    tf.forEach((freq, term) => {
      let postings = store.inv.get(term);
      if (!postings) { postings = new Map(); store.inv.set(term, postings); }
      postings.set(it.id, freq);
    });
    // add doc
    store.docs.set(it.id, { id: it.id, url: it.url, title: it.title, text: it.text, length: tokens.length });
  }
  // update corpus stats
  store.N = store.docs.size;
  let totalLen = 0;
  store.docs.forEach(d => totalLen += d.length);
  store.avgdl = store.N ? totalLen / store.N : 0;
}

export function resetStore() {
  store.docs.clear();
  store.inv.clear();
  store.df.clear();
  store.N = 0;
  store.avgdl = 0;
}

export function size() {
  return { count: store.docs.size, avgdl: store.avgdl };
}

export function listDocs(limit = 50) {
  const arr: { id: string; url: string; title?: string; length: number }[] = [];
  store.docs.forEach((d) => arr.push({ id: d.id, url: d.url, title: d.title, length: d.length }));
  return arr.slice(0, Math.max(0, limit));
}

// BM25 scoring
export function searchSparse(query: string, k = 5, k1 = 1.5, b = 0.75) {
  const qTokens = tokenize(query);
  const qTerms = Array.from(new Set(qTokens));
  const scores = new Map<string, number>();
  for (const term of qTerms) {
    const df = store.df.get(term) || 0;
    if (df === 0 || store.N === 0) continue;
    const idf = Math.log(1 + (store.N - df + 0.5) / (df + 0.5));
    const postings = store.inv.get(term)!;
    postings?.forEach((tf, docId) => {
      const d = store.docs.get(docId)!;
      const denom = tf + k1 * (1 - b + b * (d.length / (store.avgdl || 1)));
      const scoreAdd = idf * ((tf * (k1 + 1)) / (denom || 1));
      scores.set(docId, (scores.get(docId) || 0) + scoreAdd);
    });
  }
  const ranked = Array.from(scores.entries())
    .sort((a, b2) => b2[1] - a[1])
    .slice(0, k)
    .map(([docId, s]) => {
      const d = store.docs.get(docId)!;
      return { id: d.id, url: d.url, title: d.title, text: d.text, score: s };
    });
  return ranked;
}
