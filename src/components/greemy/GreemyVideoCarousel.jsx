import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 1,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/1b10d50adaf9454b8eee613c27ca6aa6.mp4"
  },
  {
    id: 2,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/c4818141206d4b94bfce2f94f8a81782.mp4"
  },
  {
    id: 3,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/62fccb63127f40dea49cd861cf921f95.mp4"
  },
  {
    id: 4,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/30c967b74afc472d8de80100ad9b4ecc.mp4"
  },
  {
    id: 5,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/1ec76456af4d49e0bb5dc2ead9ad4951.mp4"
  },
  {
    id: 6,
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/a8ce95f7aac745199b52c1f0e9ad7f8c.mp4"
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

  const visibleVideos = getVisibleVideos();

  return (
    <div className="relative py-6">
      <div className="text-center mb-4">
        <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Quem usa, ama!</h3>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={prevVideo}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 active:scale-95 transition touch-manipulation"
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
        </button>

        <button
          onClick={nextVideo}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 active:scale-95 transition touch-manipulation"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
        </button>

        {/* Video Carousel — only renders adjacent videos for performance */}
        <div className="flex items-center justify-center gap-2 lg:gap-4 px-12 lg:px-16 overflow-hidden">
          {visibleVideos.map((video, idx) => {
            const isCenter = video.position === 0;
            const scale = isCenter ? 1 : 0.7;
            const opacity = Math.abs(video.position) === 2 ? 0.3 : Math.abs(video.position) === 1 ? 0.6 : 1;
            const zIndex = isCenter ? 20 : 10 - Math.abs(video.position);

            return (
              <motion.div
                key={`${video.id}-${idx}`}
                animate={{ scale, opacity, x: video.position * 10 }}
                transition={{ duration: 0.25 }}
                className="flex-shrink-0 relative"
                style={{ zIndex }}
              >
                <div className={`rounded-2xl overflow-hidden shadow-xl relative ${isCenter ? 'ring-4 ring-pink-500' : ''}`}>
                  <video
                    ref={(el) => { if (isCenter) videoRefs.current[currentIndex] = el; }}
                    src={video.videoUrl}
                    className="w-44 h-[300px] lg:w-72 lg:h-[550px] object-cover"
                    playsInline
                    loop
                    preload={isCenter ? 'metadata' : 'none'}
                    muted={isMuted}
                  />
                  {isCenter && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                      <button onClick={togglePlay} className="text-white hover:text-pink-400 transition touch-manipulation">
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </button>
                      <button onClick={toggleMute} className="text-white hover:text-pink-400 transition touch-manipulation">
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
        <div className="flex justify-center gap-2 mt-5">
          {videos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all touch-manipulation ${
                idx === currentIndex ? 'bg-pink-500 w-8' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}