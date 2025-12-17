import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const stories = [
  {
    id: 1,
    thumb: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=600&fit=crop",
    title: "Depoimentos",
    type: "image"
  },
  {
    id: 2,
    thumb: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=600&fit=crop",
    title: "Pele Radiante",
    type: "image"
  },
  {
    id: 3,
    thumb: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=600&fit=crop",
    title: "Antes e Depois",
    type: "image"
  },
  {
    id: 4,
    thumb: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=600&fit=crop",
    title: "Benefícios",
    type: "image"
  },
  {
    id: 5,
    thumb: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&h=600&fit=crop",
    title: "Como Usar",
    type: "image"
  },
  {
    id: 6,
    thumb: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=600&fit=crop",
    title: "Cabelos Fortes",
    type: "image"
  },
  {
    id: 7,
    thumb: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=600&fit=crop",
    title: "Fórmula 3 em 1",
    type: "image"
  },
  {
    id: 8,
    thumb: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=600&fit=crop",
    title: "Unhas Saudáveis",
    type: "image"
  },
  {
    id: 9,
    thumb: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=400&h=600&fit=crop",
    title: "Rejuvenescimento",
    type: "image"
  },
  {
    id: 10,
    thumb: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=600&fit=crop",
    title: "Hidratação",
    type: "image"
  }
];

export default function StoriesSection() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openStory = (index) => {
    setCurrentIndex(index);
    setSelectedStory(stories[index]);
  };

  const closeStory = () => {
    setSelectedStory(null);
  };

  const nextStory = () => {
    const nextIndex = (currentIndex + 1) % stories.length;
    setCurrentIndex(nextIndex);
    setSelectedStory(stories[nextIndex]);
  };

  const prevStory = () => {
    const prevIndex = currentIndex === 0 ? stories.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedStory(stories[prevIndex]);
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
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-pink-600 p-[2px]">
                    <div className="w-full h-full rounded-full bg-white p-[2px]">
                      <img
                        src={story.thumb}
                        alt={story.title}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Play icon for videos */}
                  {story.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-4 h-4 text-gray-800 fill-gray-800 ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-700 mt-2 text-center max-w-[80px] truncate">
                  {story.title}
                </p>
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
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
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
                    className={`h-full bg-white transition-all duration-300 ${
                      idx === currentIndex ? 'w-full' : idx < currentIndex ? 'w-full' : 'w-0'
                    }`}
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
              <img
                src={selectedStory.thumb}
                alt={selectedStory.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              
              {/* Story title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl">
                <h3 className="text-white text-xl font-bold">{selectedStory.title}</h3>
                <p className="text-white/90 text-sm mt-2">
                  Toque nas laterais para navegar entre os stories
                </p>
              </div>
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