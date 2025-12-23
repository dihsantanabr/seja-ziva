import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const stories = [
  {
    id: 1,
    thumb: "https://cdn.shopify.com/videos/c/o/v/8c7e63ef736e4ae99a74ce1fe2e64ac9.mov",
    title: "Vídeo 1",
    type: "video",
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/8c7e63ef736e4ae99a74ce1fe2e64ac9.mov"
  },
  {
    id: 2,
    thumb: "https://cdn.shopify.com/videos/c/o/v/09f47f4a7d3847179df9d5c73a78a958.mov",
    title: "Vídeo 2",
    type: "video",
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/09f47f4a7d3847179df9d5c73a78a958.mov"
  },
  {
    id: 3,
    thumb: "https://cdn.shopify.com/videos/c/o/v/a25aedc576a247aeb237240ab5bac844.mov",
    title: "Vídeo 3",
    type: "video",
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/a25aedc576a247aeb237240ab5bac844.mov"
  },
  {
    id: 4,
    thumb: "https://cdn.shopify.com/videos/c/o/v/83fec81f2c4e453a8c158658b72a4f05.mov",
    title: "Vídeo 4",
    type: "video",
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/83fec81f2c4e453a8c158658b72a4f05.mov"
  },
  {
    id: 5,
    thumb: "https://cdn.shopify.com/videos/c/o/v/e1b79f5249a242ceb7af49597b05b453.mov",
    title: "Vídeo 5",
    type: "video",
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/e1b79f5249a242ceb7af49597b05b453.mov"
  },
  {
    id: 6,
    thumb: "https://cdn.shopify.com/videos/c/o/v/7c74cc6c6bd54f1fb2b9ec9d62bc91ee.mov",
    title: "Vídeo 6",
    type: "video",
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/7c74cc6c6bd54f1fb2b9ec9d62bc91ee.mov"
  },
  {
    id: 7,
    thumb: "https://cdn.shopify.com/videos/c/o/v/47cd27d0c8f84e1088ebc3ad5cb69837.mov",
    title: "Vídeo 7",
    type: "video",
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/47cd27d0c8f84e1088ebc3ad5cb69837.mov"
  },
  {
    id: 8,
    thumb: "https://cdn.shopify.com/videos/c/o/v/0b72f612fb324682acd82bb0bdbd222e.mov",
    title: "Vídeo 8",
    type: "video",
    videoUrl: "https://cdn.shopify.com/videos/c/o/v/0b72f612fb324682acd82bb0bdbd222e.mov"
  }
];

export default function GreemyStories() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = React.useRef(null);

  const openStory = (index) => {
    setCurrentIndex(index);
    setSelectedStory(stories[index]);
    setProgress(0);
  };

  const closeStory = () => {
    setSelectedStory(null);
  };

  const nextStory = () => {
    const nextIndex = (currentIndex + 1) % stories.length;
    setCurrentIndex(nextIndex);
    setSelectedStory(stories[nextIndex]);
    setProgress(0);
  };

  const handleVideoEnd = () => {
    if (autoAdvance) {
      setTimeout(() => {
        nextStory();
      }, 500);
    }
  };

  const prevStory = () => {
    const prevIndex = currentIndex === 0 ? stories.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedStory(stories[prevIndex]);
    setProgress(0);
  };

  const handleTimeUpdate = (e) => {
    const video = e.target;
    if (video.duration) {
      const progressPercent = (video.currentTime / video.duration) * 100;
      setProgress(progressPercent);
    }
  };

  return (
    <>
      {/* Stories Strip */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide justify-center">
            {stories.map((story, index) => (
              <button
                key={story.id}
                onClick={() => openStory(index)}
                className="flex-shrink-0 group"
              >
                <div className="relative">
                  {/* Gradient border */}
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 p-[2px]">
                    <div className="w-full h-full rounded-full bg-white p-[2px] overflow-hidden">
                      <video
                        src={story.videoUrl}
                        className="w-full h-full rounded-full object-cover"
                        muted
                        playsInline
                        preload="metadata"
                      />
                    </div>
                  </div>
                  {/* Play icon for videos */}
                  {story.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-3 h-3 lg:w-4 lg:h-4 text-gray-800 fill-gray-800 ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Story Viewer Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-green-600 to-lime-600 z-50 flex items-center justify-center"
            onClick={closeStory}
          >
            {/* Progress bars */}
            <div className="absolute top-0 left-0 right-0 flex gap-1 p-2 z-10">
              {stories.map((_, idx) => (
                <div
                  key={idx}
                  className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
                >
                  <div
                    className="h-full bg-white transition-all duration-100"
                    style={{
                      width: idx === currentIndex 
                        ? `${progress}%` 
                        : idx < currentIndex 
                        ? '100%' 
                        : '0%'
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Close button */}
            <button
              onClick={closeStory}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevStory();
              }}
              className="absolute left-4 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextStory();
              }}
              className="absolute right-4 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Story content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full h-[80vh] mx-4"
            >
              {selectedStory.type === 'video' ? (
                <video
                  ref={videoRef}
                  key={currentIndex}
                  src={selectedStory.videoUrl}
                  className="w-full h-full rounded-2xl object-cover"
                  autoPlay
                  playsInline
                  onEnded={handleVideoEnd}
                  onTimeUpdate={handleTimeUpdate}
                />
              ) : (
                <img
                  src={selectedStory.thumb}
                  alt={selectedStory.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}