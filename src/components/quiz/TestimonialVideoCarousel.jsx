import React, { useEffect, useRef } from 'react';

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
  const count = videos.length;
  if (count === 0) return null;
  const mid = Math.floor(count / 2);

  return (
    <div style={{ marginTop: 20 }}>
      {title && (
        <h4 style={{ fontSize: 15, fontWeight: 700, color: '#1A1A1A', textAlign: 'center', marginBottom: 12, lineHeight: 1.4 }}>
          {title}
        </h4>
      )}
      <div style={{
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        {videos.map((src, i) => {
          const active = i === mid;
          return (
            <div
              key={i}
              style={{
                position: 'relative',
                borderRadius: 16,
                overflow: 'hidden',
                background: '#000',
                flex: 1,
                aspectRatio: '9 / 16',
                maxHeight: 460,
                boxShadow: active ? '0 6px 22px rgba(196,86,106,0.35)' : '0 2px 10px rgba(0,0,0,0.12)',
                border: active ? '2px solid #C4566A' : '2px solid transparent',
                transition: 'all 0.25s ease',
                opacity: active ? 1 : 0.62,
              }}
            >
              <HlsVideo src={src} active={active} />
              {active && (
                <div style={{
                  position: 'absolute', top: 8, left: 8,
                  background: 'rgba(196,86,106,0.92)', color: '#fff',
                  fontSize: 10, fontWeight: 800, padding: '3px 8px',
                  borderRadius: 50, letterSpacing: 0.3,
                }}>
                  ▶ EM REPRODUÇÃO
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}