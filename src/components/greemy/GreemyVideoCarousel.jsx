import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 1,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/73a16eb3d4e64bff8af3a553fa855c2f.mp4"
  },
  {
    id: 2,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/eea813e52745445a8305e669b9d9e2cf.mov"
  },
  {
    id: 3,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/82446e001a2c41ec9d224c3b9b440b59.mp4"
  },
  {
    id: 4,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/60b9f5c988dd42728c0dad47567c7a08.mp4"
  },
  {
    id: 5,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/4bc03fe1fed84425b6e11bf8a9d5280c.mov"
  },
  {
    id: 6,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/e8c8c1e1beac4a09bbeafb65e405170e.mp4"
  },
  {
    id: 7,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/f407ac39c7ac4ba986535898c00dd85c.mp4"
  },
  {
    id: 8,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/a390e2505bb54cf7a4eb22431df3cf40.mp4"
  }
];

export default function GreemyVideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    // Pause other videos when switching
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentIndex]);

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
                <div className={`rounded-2xl overflow-hidden shadow-xl ${isCenter ? 'ring-4 ring-teal-500' : ''}`}>
                  <video
                    ref={(el) => {
                      if (isCenter) {
                        videoRefs.current[currentIndex] = el;
                      }
                    }}
                    src={video.videoUrl}
                    className="w-48 h-80 lg:w-64 lg:h-[500px] object-cover"
                    playsInline
                    loop
                    preload="metadata"
                    controls
                  />
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
                idx === currentIndex ? 'bg-teal-600 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}