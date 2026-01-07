import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 1,
    videoUrl: "https://cdn.shopify.com/videos/c/vp/484494cbb6e349b188ab013a41a870d3/484494cbb6e349b188ab013a41a870d3.HD-720p-4.5Mbps-65676654.mp4"
  },
  {
    id: 2,
    videoUrl: "https://cdn.shopify.com/videos/c/vp/06798b54702445e3b13d06d0a3d4fe17/06798b54702445e3b13d06d0a3d4fe17.HD-720p-1.6Mbps-65676655.mp4"
  },
  {
    id: 3,
    videoUrl: "https://cdn.shopify.com/videos/c/vp/f5f10887b8cb45b68861dd3bad9ab4eb/f5f10887b8cb45b68861dd3bad9ab4eb.HD-720p-4.5Mbps-65676651.mp4"
  },
  {
    id: 4,
    videoUrl: "https://cdn.shopify.com/videos/c/vp/dca5d2fd6e964fcdb90e3cf456c8d179/dca5d2fd6e964fcdb90e3cf456c8d179.HD-720p-4.5Mbps-65676653.mp4"
  },
  {
    id: 5,
    videoUrl: "https://cdn.shopify.com/videos/c/vp/4dde27f93fec43fc832e51409e92d929/4dde27f93fec43fc832e51409e92d929.HD-720p-4.5Mbps-65676652.mp4"
  }
];

export default function GreemyVideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRefs = useRef([]);

  useEffect(() => {
    // Pause all videos when switching
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
    setIsPlaying(false);
  }, [currentIndex]);

  const togglePlay = () => {
    const video = videoRefs.current[currentIndex];
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const video = videoRefs.current[currentIndex];
    if (video) {
      video.muted = !video.muted;
      setIsMuted(!isMuted);
    }
  };

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const getVisibleVideos = () => {
    const result = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + videos.length) % videos.length;
      result.push({ ...videos[index], position: i });
    }
    return result;
  };

  return (
    <div className="relative py-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Quem usa, ama!</h3>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={prevVideo}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={nextVideo}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Video Carousel */}
        <div className="flex items-center justify-center gap-4 px-16 overflow-hidden">
          {getVisibleVideos().map((video, idx) => {
            const isCenter = video.position === 0;
            const scale = isCenter ? 1 : 0.7;
            const opacity = Math.abs(video.position) === 2 ? 0.3 : Math.abs(video.position) === 1 ? 0.6 : 1;
            const zIndex = isCenter ? 20 : 10 - Math.abs(video.position);

            return (
              <motion.div
                key={`${video.id}-${idx}`}
                animate={{
                  scale,
                  opacity,
                  x: video.position * 20
                }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 relative"
                style={{ zIndex }}
              >
                <div className={`rounded-2xl overflow-hidden shadow-xl relative ${isCenter ? 'ring-4 ring-pink-500' : ''}`}>
                  <video
                    ref={(el) => {
                      if (isCenter) {
                        videoRefs.current[currentIndex] = el;
                      }
                    }}
                    src={video.videoUrl}
                    className="w-56 h-96 lg:w-72 lg:h-[550px] object-cover"
                    playsInline
                    loop
                    preload="metadata"
                    muted={isMuted}
                  />
                  {isCenter && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                      <button
                        onClick={togglePlay}
                        className="text-white hover:text-pink-400 transition"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="text-white hover:text-pink-400 transition"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {videos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-pink-500 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}