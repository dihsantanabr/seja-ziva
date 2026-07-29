import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HLS_CDN = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.13/dist/hls.min.js';

function loadHls() {
  if (window.Hls) return Promise.resolve(window.Hls);
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = HLS_CDN;
    s.onload = () => resolve(window.Hls);
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

function HlsVideo({ src, active }) {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let cancelled = false;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS (Safari/iOS)
      video.src = src;
      if (active) video.play().catch(() => {});
    } else {
      loadHls().then((Hls) => {
        if (cancelled || !Hls) return;
        if (hlsRef.current) hlsRef.current.destroy();
        const hls = new Hls({ maxBufferLength: 12, lowLatencyMode: false });
        hlsRef.current = hls;
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (active) video.play().catch(() => {});
        });
      }).catch(() => {});
    }

    return () => {
      cancelled = true;
      if (hlsRef.current) { hlsRef.current.destroy(); hlsRef.current = null; }
    };
  }, [src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (active) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [active]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      autoPlay={active}
      preload="metadata"
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', background: '#000' }}
    />
  );
}

export default function TestimonialVideoCarousel({ videos = [], title }) {
  const [index, setIndex] = useState(0);
  const count = videos.length;
  if (count === 0) return null;

  const go = (n) => setIndex((i) => (n < 0 ? count - 1 : n >= count ? 0 : n));

  return (
    <div style={{ marginTop: 20 }}>
      {title && (
        <h4 style={{ fontSize: 15, fontWeight: 700, color: '#1A1A1A', textAlign: 'center', marginBottom: 12, lineHeight: 1.4 }}>
          {title}
        </h4>
      )}
      <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 18px rgba(0,0,0,0.12)', background: '#000' }}>
        <div style={{ aspectRatio: '9 / 16', maxHeight: 420, width: '100%' }}>
          <HlsVideo src={videos[index]} active />
        </div>

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Anterior"
          style={{
            position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)',
            width: 36, height: 36, borderRadius: '50%', border: 'none',
            background: 'rgba(0,0,0,0.45)', color: '#fff', display: 'flex',
            alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            backdropFilter: 'blur(2px)',
          }}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Próximo"
          style={{
            position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)',
            width: 36, height: 36, borderRadius: '50%', border: 'none',
            background: 'rgba(0,0,0,0.45)', color: '#fff', display: 'flex',
            alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            backdropFilter: 'blur(2px)',
          }}
        >
          <ChevronRight size={20} />
        </button>

        <div style={{
          position: 'absolute', bottom: 10, left: 0, right: 0, display: 'flex',
          justifyContent: 'center', gap: 7, pointerEvents: 'none',
        }}>
          {videos.map((_, i) => (
            <span
              key={i}
              style={{
                width: i === index ? 18 : 6, height: 6, borderRadius: 3,
                background: i === index ? '#C4566A' : 'rgba(255,255,255,0.7)',
                transition: 'all 0.25s ease',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}