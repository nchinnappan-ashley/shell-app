export type Chunk = { id: string; url: string; title?: string; text: string };

// Very lightweight chunker: split by paragraphs/headings, keep ~800-1200 chars per chunk
export function chunkText(input: string, url: string, title?: string, maxChars = 1000): Chunk[] {
  const cleaned = normalizeWhitespace(input);
  const blocks = cleaned.split(/\n{2,}/g).map(b => b.trim()).filter(Boolean);
  const chunks: Chunk[] = [];
  let buf: string[] = [];
  let size = 0;
  const flush = () => {
    if (!buf.length) return;
    const text = buf.join("\n").trim();
    if (text) chunks.push({ id: `${url}#${chunks.length + 1}`.slice(0, 200), url, title, text });
    buf = [];
    size = 0;
  };
  for (const block of blocks) {
    if (size + block.length + 1 > maxChars && size > 0) {
      flush();
    }
    buf.push(block);
    size += block.length + 1;
  }
  flush();
  return chunks;
}

export function normalizeWhitespace(s: string): string {
  return s
    .replace(/\r/g, "\n")
    .replace(/\t/g, " ")
    .replace(/[\u00A0\u2000-\u200B]/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

