import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
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
  const videoRef = React.useRef(null);
  const { selectedSize, setSelectedSize, selectedFlavor, setSelectedFlavor } = useGreemy();

  const openStory = (index) => {
    setCurrentIndex(index);
    setSelectedStory(stories[index]);
    setProgress(0);
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
      '1 Caixa': {
        'Laranja': 'https://checkout.payt.com.br/ee91bf192ee17c186a710bcec716322e/?src=aquisicao&coupon=GREEMY39',
        'Limão Siciliano': 'https://checkout.payt.com.br/a98c9dca642830499f63e8749f01f7ec?src=aquisicao&coupon=GREEMY39',
        'Mix (Limão + Laranja)': 'https://checkout.payt.com.br/ee91bf192ee17c186a710bcec716322e/?src=aquisicao&coupon=GREEMY39'
      },
      '2 Caixas': {
        'Laranja': 'https://checkout.payt.com.br/528b0bef28f9ed531353075bfc211b7d/?src=aquisicao&coupon=GREEMY52',
        'Limão Siciliano': 'https://checkout.payt.com.br/0f04a6e502e38d0ffcac166f92421aeb?src=aquisicao&coupon=GREEMY52',
        'Mix (Limão + Laranja)': 'https://checkout.payt.com.br/37eae21c9cd4e4a1a578ae95a4efa48f?src=aquisicao&coupon=GREEMY52'
      },
      '3 Caixas + 1 Grátis': {
        'Laranja': 'https://checkout.payt.com.br/cad3fbe52f17ce161d687847c744ea9d?src=aquisicao&coupon=GREEMY57',
        'Limão Siciliano': 'https://checkout.payt.com.br/537982529d72bb012d61180f0351f4da?src=aquisicao&coupon=GREEMY57',
        'Mix (Limão + Laranja)': 'https://checkout.payt.com.br/9f085256f8dcc84f8b32ad555c7673e6?src=aquisicao&coupon=GREEMY57'
      }
    };
    return checkoutMap[selectedSize]?.[selectedFlavor] || checkoutMap['1 Caixa']['Laranja'];
  };

  const handleBuyClick = () => {
    window.location.href = getCheckoutLink();
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
                <video
                  ref={videoRef}
                  key={currentIndex}
                  src={selectedStory.videoUrl}
                  className="w-full h-full rounded-2xl object-cover"
                  autoPlay
                  playsInline
                  preload="auto"
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

              {/* Buy Button - Bottom Bar */}
              {!showPurchaseModal && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowPurchaseModal(true);
                  }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white font-bold py-3 rounded-b-2xl shadow-lg border-4 border-orange-500"
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
                    className="absolute bottom-0 left-0 right-0 bg-white rounded-b-2xl p-4 space-y-3 shadow-2xl"
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

                    {/* Flavor Selection */}
                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-2">Escolha o sabor:</p>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { name: 'Limão Siciliano', icon: '🍋' },
                          { name: 'Laranja', icon: '🍊' },
                          { name: 'Mix (Limão + Laranja)', icon: '🍋🍊' }
                        ].map((flavor) => (
                          <button
                            key={flavor.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedFlavor(flavor.name);
                              if (flavor.name === 'Mix (Limão + Laranja)' && selectedSize === '1 Caixa') {
                                setSelectedSize('2 Caixas');
                              }
                            }}
                            className={`relative px-2 py-2 rounded-lg border-2 font-medium transition-all text-center text-xs ${
                              selectedFlavor === flavor.name
                                ? 'border-green-600 bg-green-600 text-white'
                                : 'border-gray-200 text-gray-700'
                            }`}
                          >
                            {flavor.name === 'Mix (Limão + Laranja)' && (
                              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2">
                                <span className="bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap">
                                  + Vendido
                                </span>
                              </div>
                            )}
                            <div className="text-lg mb-0.5">{flavor.icon}</div>
                            <div className="text-[10px] leading-tight">{flavor.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Size Selection */}
                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-2">Escolha a quantidade:</p>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { name: '1 Caixa', duration: 'Duração 30 dias', discount: '26% OFF' },
                          { name: '2 Caixas', duration: 'Duração 60 dias', discount: '41% OFF', badge: '+ Vendido' },
                          { name: '3 Caixas + 1 Grátis', duration: 'Duração 120 dias', discount: '52% OFF' }
                        ].map((size) => {
                          const isDisabled = size.name === '1 Caixa' && selectedFlavor === 'Mix (Limão + Laranja)';
                          return (
                            <button
                              key={size.name}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (!isDisabled) setSelectedSize(size.name);
                              }}
                              disabled={isDisabled}
                              className={`relative px-2 py-2 rounded-lg border-2 font-medium transition-all text-center ${
                                isDisabled 
                                  ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                                  : selectedSize === size.name
                                  ? 'border-green-600 bg-green-600 text-white'
                                  : 'border-gray-200 text-gray-700'
                              }`}
                            >
                              {size.badge && (
                                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2">
                                  <span className="bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap">
                                    {size.badge}
                                  </span>
                                </div>
                              )}
                              <div className="text-[11px] font-bold leading-tight">{size.name}</div>
                              <div className={`text-[9px] mt-0.5 ${selectedSize === size.name ? 'text-white/80' : 'text-gray-500'}`}>
                                {size.duration}
                              </div>
                              <div className={`text-[9px] ${selectedSize === size.name ? 'text-white/90' : 'text-green-600'}`}>
                                {size.discount}
                              </div>
                            </button>
                          );
                        })}
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