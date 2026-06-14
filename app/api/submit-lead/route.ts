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

    // Google Apps Script exec URL redirects POST→GET (302), losing the body.
    // Send as GET with query params so doGet(e) reads e.parameter correctly.
    const url = new URL(SHEET_URL);
    for (const [k, v] of Object.entries(data as Record<string, unknown>)) {
      url.searchParams.set(k, String(v ?? ''));
    }

    const res = await fetch(url.toString(), { method: 'GET' });

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

// Hit /api/submit-lead in the browser to test connectivity to the Apps Script
export async function GET() {
  try {
    const url = new URL(SHEET_URL);
    url.searchParams.set('name', 'Test');
    url.searchParams.set('phone', '9999999999');
    url.searchParams.set('source', 'health-check');
    url.searchParams.set('timestamp', new Date().toISOString());

    const res = await fetch(url.toString(), { method: 'GET' });
    const body = await res.text();

    return NextResponse.json({
      status: res.ok ? 'ok' : 'error',
      httpStatus: res.status,
      scriptUrl: SHEET_URL.slice(0, 60) + '…',
      response: body.slice(0, 200),
    });
  } catch (err) {
    return NextResponse.json({ status: 'error', message: String(err) }, { status: 500 });
  }
}
