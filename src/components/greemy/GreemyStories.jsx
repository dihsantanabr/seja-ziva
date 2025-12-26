import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Heart, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGreemy } from './GreemyContext';
import { Button } from "@/components/ui/button";

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
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const videoRef = React.useRef(null);
  const { selectedSize, setSelectedSize, selectedFlavor, setSelectedFlavor } = useGreemy();

  const openStory = (index) => {
    setCurrentIndex(index);
    setSelectedStory(stories[index]);
    setProgress(0);
    setIsVideoLoading(true);
  };

  const closeStory = () => {
    setSelectedStory(null);
    setShowPurchaseModal(false);
  };

  const nextStory = () => {
    const nextIndex = (currentIndex + 1) % stories.length;
    setCurrentIndex(nextIndex);
    setSelectedStory(stories[nextIndex]);
    setProgress(0);
    setIsVideoLoading(true);
  };

  const handleVideoEnd = () => {
    if (autoAdvance) {
      nextStory();
    }
  };

  const prevStory = () => {
    const prevIndex = currentIndex === 0 ? stories.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedStory(stories[prevIndex]);
    setProgress(0);
    setIsVideoLoading(true);
  };

  const handleTimeUpdate = (e) => {
    const video = e.target;
    if (video.duration) {
      const progressPercent = (video.currentTime / video.duration) * 100;
      setProgress(progressPercent);
    }
  };

  const getCheckoutLink = () => {
    const checkoutMap = {
      '1 Óleo': {
        '30ml': 'https://checkout.payt.com.br/ee91bf192ee17c186a710bcec716322e/?src=aquisicao&coupon=GREEMY39'
      },
      '3 Óleos': {
        '30ml': 'https://checkout.payt.com.br/cad3fbe52f17ce161d687847c744ea9d?src=aquisicao&coupon=GREEMY57'
      }
    };
    return checkoutMap[selectedSize]?.[selectedFlavor] || checkoutMap['1 Óleo']['30ml'];
  };

  const handleBuyClick = () => {
    window.location.href = getCheckoutLink();
  };

  const handleShare = () => {
    const message = encodeURIComponent('Amiga, olha esse produto que descobri...');
    const url = encodeURIComponent('https://gremy.com.br/');
    window.open(`https://wa.me/?text=${message}%20${url}`, '_blank');
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
                onClick={() => openStory(0)}
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
                        preload="none"
                      />
                    </div>
                  </div>
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
              className="absolute left-4 z-10 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition"
            >
              <ChevronLeft className="w-3 h-3" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextStory();
              }}
              className="absolute right-4 z-10 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition"
            >
              <ChevronRight className="w-3 h-3" />
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
                <>
                  <video
                    ref={videoRef}
                    key={currentIndex}
                    src={selectedStory.videoUrl}
                    className="w-full h-full rounded-2xl object-cover"
                    autoPlay
                    playsInline
                    preload="metadata"
                    onLoadedData={() => setIsVideoLoading(false)}
                    onWaiting={() => setIsVideoLoading(true)}
                    onPlaying={() => setIsVideoLoading(false)}
                    onEnded={handleVideoEnd}
                    onTimeUpdate={handleTimeUpdate}
                  />
                  {isVideoLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl">
                      <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                  )}
                </>
                ) : (
                <img
                  src={selectedStory.thumb}
                  alt={selectedStory.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                )}

                {/* Interactive Icons - Right Side */}
                <div className="absolute bottom-20 right-4 flex flex-col gap-3 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLiked(!isLiked);
                  }}
                  className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition"
                >
                  <Heart 
                    className={`w-5 h-5 transition-all ${
                      isLiked ? 'fill-red-500 text-red-500' : 'text-white'
                    }`}
                  />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare();
                  }}
                  className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
                </div>

                {/* Buy Button - Bottom Bar */}
              {!showPurchaseModal && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowPurchaseModal(true);
                  }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 rounded-b-2xl shadow-lg"
                >
                  Comprar Agora
                </motion.button>
              )}

              {/* Purchase Modal */}
              <AnimatePresence>
                {showPurchaseModal && (
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    className="absolute bottom-0 left-0 right-0 bg-white rounded-b-2xl p-4 space-y-3 shadow-2xl z-20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close button for modal */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowPurchaseModal(false);
                      }}
                      className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-5 h-5" />
                    </button>



                    {/* Size Selection */}
                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-2">Escolha a quantidade:</p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { name: '1 Óleo', duration: 'Dura 30 Dias' },
                          { name: '3 Óleos', duration: 'Dura 90 Dias', badge: '+ Vendido' }
                        ].map((size) => (
                          <button
                            key={size.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedSize(size.name);
                            }}
                            className={`relative px-4 py-4 rounded-lg border-2 font-medium transition-all text-center ${
                              selectedSize === size.name
                                ? 'border-green-600 bg-green-600 text-white'
                                : 'border-gray-200 text-gray-700'
                            }`}
                          >
                            {size.badge && (
                              <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                                <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                                  {size.badge}
                                </span>
                              </div>
                            )}
                            <div className="text-sm font-bold leading-tight mb-1">{size.name}</div>
                            <div className={`text-xs ${selectedSize === size.name ? 'text-white/80' : 'text-gray-500'}`}>
                              {size.duration}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Buy Button */}
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBuyClick();
                      }}
                      className="w-full bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white font-semibold rounded-lg"
                    >
                      Comprar Agora
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
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