import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

const photoReviews = [
  {
    id: 1,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69396daec670e290ac178dc1/c87395b7c_Screenshot2025-12-16at090925.png",
    name: "Juliana S.",
    location: "São Paulo, SP",
    comment: "Consegui amamentar minha bebê! Após 3 semanas usando o extrato, minha produção aumentou significativamente. Gratidão!"
  },
  {
    id: 2,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69396daec670e290ac178dc1/1b7b2711e_Screenshot2025-12-16at090937.png",
    name: "Maria Clara L.",
    location: "Rio de Janeiro, RJ",
    comment: "Produto maravilhoso! Estava quase desistindo da amamentação, mas o extrato me ajudou muito. Recomendo!"
  },
  {
    id: 3,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69396daec670e290ac178dc1/85cf70907_Screenshot2025-12-16at090956.png",
    name: "Fernanda M.",
    location: "Belo Horizonte, MG",
    comment: "Fiz lactação induzida e funcionou! Hoje consigo amamentar meu filho adotivo. Obrigada Mamamais! 💜"
  }
];

export default function PhotoReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photoReviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photoReviews.length) % photoReviews.length);
  };

  return (
    <div className="mt-16 bg-gradient-to-br from-[#F2E8D8] to-white rounded-3xl p-8 lg:p-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 mb-4">
          <Heart className="w-5 h-5 text-[#C9AE7A] fill-[#C9AE7A]" />
          <span className="font-semibold text-gray-900">Momentos reais</span>
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Mães que transformaram suas jornadas
        </h3>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-6 lg:p-10 shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src={photoReviews[currentIndex].image}
                  alt={photoReviews[currentIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {photoReviews[currentIndex].name}
                  </h4>
                  <p className="text-[#C9AE7A] font-medium">
                    {photoReviews[currentIndex].location}
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  "{photoReviews[currentIndex].comment}"
                </p>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Navigation dots */}
                <div className="flex gap-2 pt-4">
                  {photoReviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentIndex 
                          ? 'w-8 bg-[#C9AE7A]' 
                          : 'w-2 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#C9AE7A] hover:text-white transition-all group"
        >
          <ChevronLeft className="w-6 h-6 text-[#C9AE7A] group-hover:text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#C9AE7A] hover:text-white transition-all group"
        >
          <ChevronRight className="w-6 h-6 text-[#C9AE7A] group-hover:text-white" />
        </button>
      </div>
    </div>
  );
}