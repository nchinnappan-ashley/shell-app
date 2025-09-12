/* eslint-disable @typescript-eslint/no-explicit-any */
// Minimal embedder abstraction. Defaults to OpenAI embeddings via dynamic import.
// You can swap to Azure OpenAI or other providers by changing this file only.

export type Embedder = {
  embed(texts: string[]): Promise<number[][]>;
  dim(): number;
};

export function createOpenAIEmbedder(model = 'text-embedding-3-small'): Embedder {
  let _dim = 1536; // default for text-embedding-3-small
  return {
    async embed(texts: string[]) {
      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey) {
        throw new Error('OPENAI_API_KEY is not set. Please add it to .env.local');
      }
      // dynamic import to avoid hard dependency during build if not installed yet
      const mod: any = await import('openai');
      const client = new mod.default({ apiKey });
      const res = await client.embeddings.create({ model, input: texts });
      const vectors = res.data.map((r: any) => r.embedding as number[]);
      if (vectors[0]) _dim = vectors[0].length;
      return vectors;
    },
    dim() { return _dim; },
  };
}

