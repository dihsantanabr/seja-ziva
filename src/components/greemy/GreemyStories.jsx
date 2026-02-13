import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Heart, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGreemy } from './GreemyContext';
import { Button } from "@/components/ui/button";

const stories = [
    {
      id: 1,
      thumb: "https://cdn.shopify.com/videos/c/o/v/1b10d50adaf9454b8eee613c27ca6aa6.mp4#t=2",
      title: "História 1",
      type: "video",
      videoUrl: "https://cdn.shopify.com/videos/c/o/v/1b10d50adaf9454b8eee613c27ca6aa6.mp4"
    },
    {
      id: 2,
      thumb: "https://cdn.shopify.com/videos/c/o/v/c4818141206d4b94bfce2f94f8a81782.mp4#t=2",
      title: "História 2",
      type: "video",
      videoUrl: "https://cdn.shopify.com/videos/c/o/v/c4818141206d4b94bfce2f94f8a81782.mp4"
    },
    {
      id: 3,
      thumb: "https://cdn.shopify.com/videos/c/o/v/62fccb63127f40dea49cd861cf921f95.mp4#t=2",
      title: "História 3",
      type: "video",
      videoUrl: "https://cdn.shopify.com/videos/c/o/v/62fccb63127f40dea49cd861cf921f95.mp4"
    },
    {
      id: 4,
      thumb: "https://cdn.shopify.com/videos/c/o/v/30c967b74afc472d8de80100ad9b4ecc.mp4#t=2",
      title: "História 4",
      type: "video",
      videoUrl: "https://cdn.shopify.com/videos/c/o/v/30c967b74afc472d8de80100ad9b4ecc.mp4"
    },
    {
      id: 5,
      thumb: "https://cdn.shopify.com/videos/c/o/v/1ec76456af4d49e0bb5dc2ead9ad4951.mp4#t=2",
      title: "História 5",
      type: "video",
      videoUrl: "https://cdn.shopify.com/videos/c/o/v/1ec76456af4d49e0bb5dc2ead9ad4951.mp4"
    },
    {
      id: 6,
      thumb: "https://cdn.shopify.com/videos/c/o/v/a8ce95f7aac745199b52c1f0e9ad7f8c.mp4#t=2",
      title: "História 6",
      type: "video",
      videoUrl: "https://cdn.shopify.com/videos/c/o/v/a8ce95f7aac745199b52c1f0e9ad7f8c.mp4"
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
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const videoRef = React.useRef(null);
  const { selectedSize, setSelectedSize, selectedFlavor, setSelectedFlavor } = useGreemy();

  const flavors = [
    { id: 'cranberry', name: 'Cranberry', emoji: '🍒', color: 'from-red-500 to-pink-500', mostChosen: true, code: '6J3KDTF80E' },
    { id: 'tropical', name: 'Frutas Tropicais', emoji: '🍍', color: 'from-yellow-500 to-orange-500', code: 'GAA70WUDT7' },
    { id: 'limao', name: 'Limão', emoji: '🍋', color: 'from-lime-500 to-green-500', code: 'OY7JZG4UE9' },
    { id: 'pink-lemonade', name: 'Pink Lemonade', emoji: '🍹', color: 'from-pink-400 to-rose-400', code: 'Q7TJA8P8X6' },
    { id: 'tangerina', name: 'Tangerina', emoji: '🍊', color: 'from-orange-500 to-amber-500', code: '4JF2A26WUQ' },
    { id: 'chocolate', name: 'Chocolate', emoji: '🍫', color: 'from-amber-700 to-brown-600', hasLactose: true, code: 'OY9KOFHD8D' }
  ];

  // Mapa de códigos para garantir consistência
  const FLAVOR_CODES = {
    'cranberry': '6J3KDTF80E',
    'tropical': 'GAA70WUDT7',
    'limao': 'OY7JZG4UE9',
    'pink-lemonade': 'Q7TJA8P8X6',
    'tangerina': '4JF2A26WUQ',
    'chocolate': 'OY9KOFHD8D'
  };

  const getFlavorCount = (flavorId) => {
    return selectedFlavors.filter(f => f === flavorId).length;
  };

  const handleFlavorClick = (flavorId) => {
    const count = getFlavorCount(flavorId);
    const totalSelected = selectedFlavors.length;
    const maxFlavors = 3;
    
    if (totalSelected < maxFlavors) {
      setSelectedFlavors([...selectedFlavors, flavorId]);
    } else if (count > 0) {
      const newFlavors = selectedFlavors.filter(f => f !== flavorId);
      setSelectedFlavors(newFlavors);
    }
  };

  const openStory = (index) => {
    setCurrentIndex(index);
    setSelectedStory(stories[index]);
    setProgress(0);
    setIsVideoLoading(true);
    setSelectedSize('1 Unidade');
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

  const handleBuyClick = () => {
    const maxFlavors = 3;
    
    // Verificar se os sabores foram selecionados
    if (!selectedFlavors || selectedFlavors.length === 0 || selectedFlavors.length !== maxFlavors) {
      return;
    }

    // Contar quantas vezes cada sabor foi selecionado
    const flavorCounts = {};
    selectedFlavors.forEach(flavorId => {
      flavorCounts[flavorId] = (flavorCounts[flavorId] || 0) + 1;
    });

    // Gerar a string de produtos no formato CODIGO:QUANTIDADE
    const productParts = [];
    Object.entries(flavorCounts).forEach(([flavorId, quantity]) => {
      const code = FLAVOR_CODES[flavorId];
      if (code) {
        productParts.push(`${code}:${quantity}`);
      } else {
        console.error('Código não encontrado para sabor:', flavorId);
      }
    });

    if (productParts.length === 0) {
      alert('Erro ao gerar link de checkout. Por favor, tente novamente.');
      console.error('Nenhum código de produto gerado');
      return;
    }

    // Montar a URL final
    const baseUrl = 'https://renovabe5.pay.yampi.com.br/r/';
    const checkoutUrl = baseUrl + productParts.join(',');
    
    console.log('=== DEBUG CHECKOUT STORIES ===');
    console.log('Tamanho selecionado:', selectedSize);
    console.log('Sabores selecionados (array):', selectedFlavors);
    console.log('Contagem de sabores:', flavorCounts);
    console.log('Códigos gerados:', productParts);
    console.log('URL final:', checkoutUrl);
    console.log('==============================');
    
    // Redirecionar imediatamente
    window.location.href = checkoutUrl;
  };

  const handleShare = () => {
    const message = encodeURIComponent('Amiga, olha esse colágeno! Tem cupom desconto aqui: CUPOM https://www.renovabe.com.br/renova-be-colageno-1-pote.html?srsltid=AfmBOoqJS2lfaw-sb3O4hVxhOOIesRrRu84JHjfxbUz63csRmk2B-qXi');
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Stories Strip */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto lg:px-4">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide lg:justify-center pl-6 pr-4 lg:px-0 snap-x snap-mandatory">
            {stories.map((story, index) => (
              <button
                key={story.id}
                onClick={() => openStory(index)}
                className="flex-shrink-0 group snap-start"
              >
                <div className="relative">
                  {/* Gradient border */}
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 p-[2px]">
                    <div className="w-full h-full rounded-full bg-white p-[2px] overflow-hidden">
                      <video
                        src={story.thumb}
                        className="w-full h-full rounded-full object-cover"
                        muted
                        playsInline
                        preload="metadata"
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
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: '#000000' }}
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
                    closeStory();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-bold py-3 rounded-b-3xl shadow-lg"
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
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg rounded-3xl p-3 space-y-2 shadow-2xl z-20 max-h-[70vh] overflow-y-auto"
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
                      <X className="w-4 h-4" />
                    </button>



                    {/* Flavor Selection */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <p className="text-xs font-semibold text-gray-700">
                          Escolha seus sabores:
                        </p>
                        <span className="text-[10px] text-pink-600 font-medium">
                          {selectedFlavors.length}/3
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {flavors.map((flavor) => {
                          const count = getFlavorCount(flavor.id);
                          const maxFlavors = 3;
                          const isDisabled = selectedFlavors.length >= maxFlavors && count === 0;

                          return (
                            <button
                              key={flavor.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleFlavorClick(flavor.id);
                              }}
                              disabled={isDisabled}
                              className={`relative p-2 rounded-lg border-2 transition-all text-center ${
                                count > 0
                                  ? 'border-pink-500 bg-gradient-to-br ' + flavor.color + ' text-white'
                                  : isDisabled
                                  ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                                  : 'border-gray-200 hover:border-pink-300 text-gray-700'
                              }`}
                            >
                              {count > 0 && (
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-600 text-white rounded-full flex items-center justify-center text-[9px] font-bold">
                                  {count}
                                </div>
                              )}
                              {flavor.mostChosen && (
                                <div className="absolute -top-1.5 -left-1">
                                  <span className="bg-green-500 text-white text-[8px] font-bold px-1 py-0.5 rounded-full whitespace-nowrap">
                                    + Escolhido
                                  </span>
                                </div>
                              )}
                              {flavor.hasLactose && (
                                <div className="absolute -top-1.5 -left-1">
                                  <span className="bg-amber-500 text-white text-[8px] font-bold px-1 py-0.5 rounded-full whitespace-nowrap">
                                    Contém Lactose
                                  </span>
                                </div>
                              )}
                              <div className="text-lg mb-0.5">{flavor.emoji}</div>
                              <div className={`text-[9px] font-semibold leading-tight ${count > 0 ? 'text-white' : ''}`}>
                                {flavor.name}
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
                      disabled={selectedFlavors.length < 3}
                      className="w-full bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white font-semibold rounded-lg text-sm py-2 disabled:opacity-50"
                    >
                      {selectedFlavors.length < 3
                        ? `Selecione ${3 - selectedFlavors.length} sabor${3 - selectedFlavors.length > 1 ? 'es' : ''}`
                        : 'Comprar Agora'
                      }
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