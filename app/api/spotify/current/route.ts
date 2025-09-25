import { NextResponse } from "next/server";

interface SpotifyImage {
  url: string;
  height: number | null;
  width: number | null;
}

interface SpotifyArtist {
  name: string;
}

interface SpotifyTrack {
  name: string;
  artists: SpotifyArtist[];
  album: {
    images: SpotifyImage[];
  };
}

interface SpotifyNowPlayingResponse {
  is_playing: boolean;
  item: SpotifyTrack | null;
}

async function getAccessToken(): Promise<string | null> {
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    client_id: process.env.SPOTIFY_CLIENT_ID!,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
  });

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  if (!response.ok) return null;

  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}

export async function GET() {
  const accessToken = await getAccessToken();
  if (!accessToken) {
    return NextResponse.json({ error: "No access token" }, { status: 401 });
  }

  const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (response.status === 204 || response.status > 400) {
    const recentRes = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const recentData = (await recentRes.json()) as { items: { track: SpotifyTrack }[] };

    const last = recentData.items[0].track;

    return NextResponse.json({
      track: {
        title: last.name,
        artists: last.artists.map((a) => a.name).join(", "),
        cover: last.album.images[0]?.url ?? null,
        is_playing: false,
      },
    });
  }

  const data = (await response.json()) as SpotifyNowPlayingResponse;

  if (!data.item) {
    return NextResponse.json({ track: null });
  }

  return NextResponse.json({
    track: {
      title: data.item.name,
      artists: data.item.artists.map((a) => a.name).join(", "),
      cover: data.item.album.images[0]?.url ?? null,
      is_playing: data.is_playing,
    },
  });
}