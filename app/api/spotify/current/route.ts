import { NextResponse } from 'next/server';

async function refreshAccessToken() {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  if (!refreshToken) throw new Error('Missing SPOTIFY_REFRESH_TOKEN');

  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  });

  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  });

  const data = await tokenRes.json();
  if (data.error) throw new Error('Could not refresh token: ' + JSON.stringify(data));
  return data.access_token as string;
}

export async function GET() {
  try {
    const accessToken = await refreshAccessToken();

    let resp = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (resp.status === 200) {
      const json = await resp.json();
      if (json && json.item) {
        const item = json.item;
        const track = {
          title: item.name,
          artists: item.artists.map((a: any) => a.name).join(', '),
          cover: item.album?.images?.[0]?.url || null,
          is_playing: json.is_playing ?? false,
          progress_ms: json.progress_ms ?? 0,
        };
        return NextResponse.json({ track });
      }
    }

    resp = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!resp.ok) {
      const text = await resp.text();
      return NextResponse.json({ error: 'Spotify recently-played failed', detail: text }, { status: 500 });
    }
    const recent = await resp.json();
    const recentItem = recent.items?.[0]?.track;
    if (!recentItem) return NextResponse.json({ track: null }, { status: 404 });

    const track = {
      title: recentItem.name,
      artists: recentItem.artists.map((a: any) => a.name).join(', '),
      cover: recentItem.album?.images?.[0]?.url || null,
      is_playing: false,
      progress_ms: 0,
    };
    return NextResponse.json({ track });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}