import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const stories = [
  {
    id: 1,
    thumb: "https://img.youtube.com/vi/3GVepPRz-Fw/maxresdefault.jpg",
    title: "Vídeo 1",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/3GVepPRz-Fw"
  },
  {
    id: 2,
    thumb: "https://img.youtube.com/vi/6911rRVzWDQ/maxresdefault.jpg",
    title: "Vídeo 2",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/6911rRVzWDQ"
  },
  {
    id: 3,
    thumb: "https://img.youtube.com/vi/GguN0iJbUhI/maxresdefault.jpg",
    title: "Vídeo 3",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/GguN0iJbUhI"
  },
  {
    id: 4,
    thumb: "https://img.youtube.com/vi/n4dvDiHPtaE/maxresdefault.jpg",
    title: "Vídeo 4",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/n4dvDiHPtaE"
  },
  {
    id: 5,
    thumb: "https://img.youtube.com/vi/fuq2ctWBp2M/maxresdefault.jpg",
    title: "Vídeo 5",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/fuq2ctWBp2M"
  },
  {
    id: 6,
    thumb: "https://img.youtube.com/vi/1HDEioG6alo/maxresdefault.jpg",
    title: "Vídeo 6",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/1HDEioG6alo"
  },
  {
    id: 7,
    thumb: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=600&fit=crop",
    title: "Energia Natural",
    type: "image"
  },
  {
    id: 8,
    thumb: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=600&fit=crop",
    title: "Depoimentos",
    type: "image"
  },
  {
    id: 9,
    thumb: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
    title: "22 Superalimentos",
    type: "image"
  },
  {
    id: 10,
    thumb: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=600&fit=crop",
    title: "Benefícios",
    type: "image"
  },
  {
    id: 11,
    thumb: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=400&h=600&fit=crop",
    title: "Como Usar",
    type: "image"
  },
  {
    id: 12,
    thumb: "https://images.unsplash.com/photo-1594881023712-525caa8fd5a7?w=400&h=600&fit=crop",
    title: "Foco Mental",
    type: "image"
  },
  {
    id: 13,
    thumb: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=600&fit=crop",
    title: "Fórmula Verde",
    type: "image"
  },
  {
    id: 14,
    thumb: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=600&fit=crop",
    title: "Imunidade",
    type: "image"
  },
  {
    id: 15,
    thumb: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&h=600&fit=crop",
    title: "Sabores",
    type: "image"
  },
  {
    id: 16,
    thumb: "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=400&h=600&fit=crop",
    title: "Vitalidade",
    type: "image"
  }
];

export default function GreemyStories() {
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
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-green-600 via-lime-500 to-lime-600 p-[2px]">
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
              {selectedStory.type === 'video' ? (
                <iframe
                  src={selectedStory.videoUrl}
                  title={selectedStory.title}
                  className="w-full h-full rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  src={selectedStory.thumb}
                  alt={selectedStory.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              )}
              
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