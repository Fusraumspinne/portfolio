"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type TrackInfo = {
  title: string;
  artists: string;
  cover: string | null;
  is_playing: boolean;
};

export default function SpotifyPlayingState() {
  const [track, setTrack] = useState<TrackInfo | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchTrack() {
    try {
      setLoading(true);
      const res = await fetch("/api/spotify/current");
      if (!res.ok) {
        setTrack(null);
        return;
      }
      const json = await res.json();

      const t = json?.track ?? json;

      if (!t) {
        setTrack(null);
        return;
      }

      const info: TrackInfo = {
        title: t.title ?? t.name ?? "Unkown Title",
        artists: t.artists ?? (t.artist ? t.artist : "Unkown Artist"),
        cover: t.cover ?? null,
        is_playing: Boolean(t.is_playing),
      };
      setTrack(info);
    } catch (err) {
      console.error("Spotify fetch error:", err);
      setTrack(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTrack();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full w-full p-4">
        <div className="text-sm text-gray-300">Loading Spotify...</div>
      </div>
    );
  }

  if (!track) {
    return (
      <div className="flex flex-col items-center gap-2 h-full w-full p-4 text-center">
        <div className="sm:w-40 sm:h-40 w-28 h-28 rounded-md bg-gray-700 flex items-center justify-center text-xs text-gray-300">
          No Cover
        </div>
        <div className="font-medium text-white">No songs found</div>
        <div className="text-sm text-gray-400">
          Start Spotify and connect your account
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-col items-center h-full w-full">
      <div className="flex flex-row md:flex-col items-center justify-center gap-4 w-full max-w-md">
        <div className="sm:w-40 sm:h-40 w-28 h-28 relative overflow-hidden border border-white/[0.2] rounded-xl flex-shrink-0">
          {track.cover ? (
            <Image
              src={track.cover}
              alt={track.title}
              fill
              sizes="128px"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xs text-gray-300">
              Kein Cover
            </div>
          )}
        </div>

        <div className="flex flex-col md:text-center text-left">
          <div className="text-white text-sm font-semibold truncate max-w-[14rem]">
            {track.title}
          </div>
          <div className="text-sm text-gray-300 truncate max-w-[14rem]">
            {track.artists}
          </div>
          <div className="text-xs mt-1">
            {track.is_playing ? (
              <span className="text-green-400">▶ Currently Playing</span>
            ) : (
              <span className="text-gray-400">Last Played</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
