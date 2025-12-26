import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGreemy } from './GreemyContext';

export default function LPHero() {
  const { selectedSize, setSelectedSize } = useGreemy();

  const scrollToPurchase = () => {
    const purchaseSection = document.getElementById('purchase-boxes');
    if (purchaseSection) {
      purchaseSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 -left-20 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Mais de 50.000 pessoas transformadas</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transforme Sua Pele com{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                Óleo Ozonizado
              </span>
              {' '}Natural
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Óleo de avocado ozonizado que hidrata intensamente, acelera a cicatrização 
              e regenera sua pele naturalmente. 
              <strong className="text-teal-700"> 100% natural, cruelty-free e vegano.</strong>
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-gray-700 font-semibold">4.9/5.0</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-700 font-medium">+12.847 avaliações</span>
            </div>

            {/* Benefits list */}
            <div className="space-y-3 mb-8">
              {[
                'Hidratação intensa e toque sedoso',
                'Acelera cicatrização de feridas e irritações',
                'Rico em vitaminas e antioxidantes',
                'Estimula produção natural de colágeno'
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                onClick={scrollToPurchase}
                className="w-full lg:w-auto bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all group"
              >
                Quero Transformar Minha Pele Agora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-gray-500 mt-3">
                ✅ Frete Grátis para todo Brasil • 🔒 Compra 100% Segura
              </p>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ea9ab35ba4900f99f354a/0f6a2443d_CopiadeAvozon2023MidiasSociais-11.jpg"
                alt="Óleo de Avocado Ozonizado"
                className="w-full max-w-lg mx-auto drop-shadow-2xl rounded-2xl"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 -left-4 lg:left-0 bg-white rounded-2xl shadow-xl p-4 max-w-[140px]"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">98%</div>
                <div className="text-xs text-gray-600">Recomendam</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-10 -right-4 lg:right-0 bg-white rounded-2xl shadow-xl p-4 max-w-[140px]"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">30ml</div>
                <div className="text-xs text-gray-600">Óleo Puro</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}