import { NextRequest, NextResponse } from 'next/server';

const SHEET_URL =
  process.env.GOOGLE_SHEET_URL ||
  'https://script.google.com/macros/s/AKfycbynDEbMQqfStBwK-sJa5UoLuZtBDNvSPZ4HLvcpuZxTSe6lUy7nuIbxWbQ3QOPovG6N/exec';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.name || !data.phone || !data.source) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const payload = new URLSearchParams(
      Object.fromEntries(
        Object.entries(data as Record<string, unknown>).map(([k, v]) => [k, String(v ?? '')])
      )
    );

    const res = await fetch(SHEET_URL, {
      method: 'POST',
      body: payload,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`[submit-lead] Apps Script error ${res.status}:`, body.slice(0, 300));
      return NextResponse.json({ error: 'upstream_error' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[submit-lead] error:', err);
    return NextResponse.json({ error: 'internal_error' }, { status: 500 });
  }
}
