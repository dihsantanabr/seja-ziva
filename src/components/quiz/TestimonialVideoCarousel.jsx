import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

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
  const [activeIdx, setActiveIdx] = useState(() => Math.floor((videos || []).length / 2));
  const [expanded, setExpanded] = useState(null); // index or null

  if (!videos || videos.length === 0) return null;
  const count = videos.length;

  return (
    <div style={{ marginTop: 20 }}>
      {title && (
        <h4 style={{ fontSize: 15, fontWeight: 700, color: '#1A1A1A', textAlign: 'center', marginBottom: 12, lineHeight: 1.4 }}>
          {title}
        </h4>
      )}
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'stretch' }}>
        {videos.map((src, i) => {
          const active = i === activeIdx;
          return (
            <button
              key={i}
              type="button"
              onClick={() => {
                if (active) {
                  setExpanded(i);
                } else {
                  setActiveIdx(i);
                }
              }}
              style={{
                position: 'relative',
                padding: 0,
                border: 'none',
                borderRadius: 16,
                overflow: 'hidden',
                background: '#000',
                flex: 1,
                aspectRatio: '9 / 16',
                maxHeight: 460,
                cursor: 'pointer',
                boxShadow: active ? '0 6px 22px rgba(196,86,106,0.35)' : '0 2px 10px rgba(0,0,0,0.12)',
                outline: active ? '2px solid #C4566A' : '2px solid transparent',
                opacity: active ? 1 : 0.62,
                transition: 'all 0.25s ease',
              }}
            >
              <HlsVideo src={src} active={active} />
              {active ? (
                <div style={{
                  position: 'absolute', top: 8, left: 8,
                  background: 'rgba(196,86,106,0.92)', color: '#fff',
                  fontSize: 10, fontWeight: 800, padding: '3px 8px',
                  borderRadius: 50, letterSpacing: 0.3, pointerEvents: 'none',
                }}>
                  ▶ EM REPRODUÇÃO
                </div>
              ) : (
                <div style={{
                  position: 'absolute', inset: 0, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', pointerEvents: 'none',
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'rgba(0,0,0,0.5)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: 18,
                  }}>▶</div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {expanded !== null && (
        <div
          onClick={() => setExpanded(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.9)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', padding: 16,
          }}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setExpanded(null); }}
            aria-label="Fechar"
            style={{
              position: 'absolute', top: 16, right: 16,
              width: 44, height: 44, borderRadius: '50%', border: 'none',
              background: 'rgba(255,255,255,0.15)', color: '#fff', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <X size={24} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative', borderRadius: 16, overflow: 'hidden',
              height: '90vh', maxWidth: '100%', aspectRatio: '9 / 16',
              boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
            }}
          >
            <HlsVideo src={videos[expanded]} active />
          </div>
        </div>
      )}
    </div>
  );
}