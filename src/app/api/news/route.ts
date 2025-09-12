import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

// Very lightweight HTML extraction tailored for WordPress-like news listing pages
function parseNews(html: string, baseUrl: string) {
  const out: { id: string; title: string; summary: string; date: string; href?: string; image?: string; tag?: string }[] = [];

  // Split by article-like containers
  const parts = html.split(/<article\b/gi).slice(1);
  for (const p of parts) {
    const block = '<article ' + p.split(/<\/article>/i)[0];

    const hrefMatch = block.match(/<a[^>]+href=["']([^"']+)["'][^>]*>(?:\s*<img|\s*<h2|\s*<span|\s*<div)/i);
    const href = hrefMatch ? new URL(hrefMatch[1], baseUrl).toString() : undefined;

    const titleRaw = (block.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1]
      || block.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)?.[1]
      || '').trim();
    const title = stripHtml(titleRaw).slice(0, 180);

    const imgMatch = block.match(/<img[^>]+(?:data-src|src)=["']([^"']+)["'][^>]*>/i);
    const image = imgMatch ? new URL(imgMatch[1], baseUrl).toString() : undefined;

    const dateAttr = block.match(/<time[^>]+datetime=["']([^"']+)["']/i)?.[1]
      || block.match(/class=["'][^"']*(?:date|time|entry-date|published)[^"']*["'][^>]*>([\s\S]*?)<\/time>/i)?.[1]
      || '';
    const dateText = dateAttr ? stripHtml(dateAttr) : '';

    const paraRaw = (block.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] || '').trim();
    const summary = stripHtml(paraRaw).slice(0, 220);

    const catRaw = (block.match(/<a[^>]+rel=["']category["'][^>]*>([\s\S]*?)<\/a>/i)?.[1] || '').trim();
    const tag = stripHtml(catRaw).slice(0, 40) || undefined;

    if (title || summary) {
      const id = href || image || title || Math.random().toString(36).slice(2);
      out.push({ id, title: title || summary, summary, date: dateText || '', href, image, tag });
    }
  }

  // Fallback: if no <article>, try list items with class post
  if (!out.length) {
    const liParts = html.split(/<li[^>]+class=["'][^"']*(?:post|news)[^"']*["'][^>]*>/gi).slice(1);
    for (const raw of liParts) {
      const block = '<li ' + raw.split(/<\/li>/i)[0];
      const href = block.match(/<a[^>]+href=["']([^"']+)["']/i)?.[1];
      const title = stripHtml(block.match(/<a[^>]*>([\s\S]*?)<\/a>/i)?.[1] || '').slice(0, 180);
      const image = block.match(/<img[^>]+(?:data-src|src)=["']([^"']+)["']/i)?.[1];
      const summary = stripHtml(block.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] || '').slice(0, 220);
      if (title || summary) out.push({ id: href || image || title, title, summary, date: '', href, image });
    }
  }

  // Limit
  return out.slice(0, 16);
}

export async function GET(req: NextRequest) {
  try {
    const url = req.nextUrl.searchParams.get('url') || 'https://ashley.biz/news/';
    const res = await fetch(url, { headers: { 'User-Agent': 'Ashley-AI-News/1.0' }, cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
    const html = await res.text();
    const items = parseNews(html, url);
    return NextResponse.json({ ok: true, items });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ ok: false, error: msg, items: [] }, { status: 200 });
  }
}

