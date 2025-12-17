import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Eye } from 'lucide-react';

const videos = [
  {
    thumbnail: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/8c5a34710_Screenshot2025-12-17at182404.png",
    views: "2.4M"
  },
  {
    thumbnail: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/8c5a34710_Screenshot2025-12-17at182404.png",
    views: "1.8M"
  },
  {
    thumbnail: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/8c5a34710_Screenshot2025-12-17at182404.png",
    views: "3.1M"
  },
  {
    thumbnail: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/8c5a34710_Screenshot2025-12-17at182404.png",
    views: "1.5M"
  }
];

export default function ViralTikTokSection() {
  const [viewCount, setViewCount] = useState(0);
  const targetViews = 8500000; // 8.5 milhões

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

        {/* Videos Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-[9/16] bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
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
          ))}
        </div>
      </div>
    </section>
  );
}