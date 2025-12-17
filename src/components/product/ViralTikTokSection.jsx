import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const videos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=700&fit=crop",
    views: "2.4M"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1598966739654-5e9451d83c4b?w=400&h=700&fit=crop",
    views: "1.8M"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=700&fit=crop",
    views: "3.1M"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=400&h=700&fit=crop",
    views: "1.5M"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=700&fit=crop",
    views: "2.9M"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=400&h=700&fit=crop",
    views: "3.6M"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=700&fit=crop",
    views: "2.2M"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=700&fit=crop",
    views: "1.9M"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=700&fit=crop",
    views: "4.1M"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=700&fit=crop",
    views: "3.3M"
  }
];

export default function ViralTikTokSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  });
  const [viewCount, setViewCount] = useState(0);
  const targetViews = 8500000; // 8.5 milhões

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const duration = 3000; // 3 segundos
    const steps = 60;
    const increment = targetViews / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setViewCount(Math.floor(increment * currentStep));
      } else {
        setViewCount(targetViews);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const formatViews = (views) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    }
    if (views >= 1000) {
      return `${(views / 1000).toFixed(0)}K`;
    }
    return views.toString();
  };

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium text-sm uppercase tracking-wider">
            Sucesso nas Redes
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Viralizou no TikTok
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Várias pessoas estão comentando e aproveitando todos os benefícios do único Multicolágeno 3 em 1 do Brasil!
          </p>
        </div>

        {/* View Counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <Eye className="w-5 h-5 text-purple-600" />
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            {formatViews(viewCount)} visualizações
          </span>
        </motion.div>

        {/* Videos Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="flex-[0_0_280px] lg:flex-[0_0_240px]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                >
                  <img
                    src={video.thumbnail}
                    alt={`Vídeo viral ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* View Count Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-white" />
                      <span className="text-white font-semibold text-sm">{video.views} views</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}