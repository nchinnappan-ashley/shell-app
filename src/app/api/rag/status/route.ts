import { NextRequest, NextResponse } from 'next/server';
import { size, listDocs } from '@/lib/rag/store';

export const runtime = 'nodejs';

export async function GET(_req: NextRequest) {
  try {
    const sz = size();
    const sample = listDocs(50);
    return NextResponse.json({ ok: true, size: sz, sample });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

