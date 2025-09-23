import { NextResponse } from 'next/server';

// Server-side Meta Conversion API proxy
// Expects POST JSON body with at least { event_name, event_source_url, event_time, user_data, custom_data }
// user_data should include at minimum one of: em, ph, external_id (hashed with SHA256, lowercase, trimmed)
// We also augment with client IP and user agent from the request.

export async function POST(request) {
  try {
    const pixelId = process.env.FB_PIXEL_ID || '1126959302219911';
    const accessToken = process.env.FB_ACCESS_TOKEN;
    const testEventCode = process.env.FB_TEST_EVENT_CODE; // optional

    if (!accessToken) {
      return NextResponse.json({ error: 'Missing FB_ACCESS_TOKEN' }, { status: 500 });
    }

    const body = await request.json().catch(() => ({}));
    const {
      event_name,
      event_time = Math.floor(Date.now() / 1000),
      event_source_url,
      action_source = 'website',
      user_data = {},
      custom_data = {},
      event_id,
    } = body || {};

    if (!event_name) {
      return NextResponse.json({ error: 'event_name is required' }, { status: 400 });
    }

    // Pull IP and UA
    const forwardedFor = request.headers.get('x-forwarded-for');
    const clientIp = (forwardedFor || '').split(',')[0]?.trim() || undefined;
    const userAgent = request.headers.get('user-agent') || undefined;

    const payload = {
      data: [
        {
          event_name,
          event_time,
          event_source_url,
          action_source,
          event_id,
          user_data: {
            ...user_data,
            client_ip_address: user_data.client_ip_address || clientIp,
            client_user_agent: user_data.client_user_agent || userAgent,
          },
          custom_data,
        },
      ],
      test_event_code: testEventCode || undefined,
    };

    const url = `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`;

    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      // Pass-through IP/UA as recommended
      next: { revalidate: 0 },
    });

    const json = await resp.json().catch(() => ({}));
    if (!resp.ok) {
      return NextResponse.json({ error: 'Meta CAPI error', meta: json }, { status: 502 });
    }
    return NextResponse.json({ ok: true, meta: json });
  } catch (err) {
    return NextResponse.json({ error: 'Server error', message: String(err?.message || err) }, { status: 500 });
  }
}


