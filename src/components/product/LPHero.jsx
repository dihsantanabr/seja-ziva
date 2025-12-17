import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, CheckCircle2, ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function LPHero() {
  const scrollToPrice = () => {
    const priceSection = document.getElementById('preco');
    if (priceSection) {
      priceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#D946EF] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A855F7] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8 lg:pt-12 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 lg:space-y-8"
          >
            {/* Badge */}
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
              ✨ Beleza que vem de dentro
            </Badge>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transforme sua{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 relative">
                pele, cabelo e unhas
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 3 250 3 298 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9333EA" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {' '}em 30 dias
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-2xl text-gray-700 leading-relaxed">
              O <strong>Multicolágeno</strong> com 3 tipos de colágeno + Ácido Hialurônico que rejuvenesce, 
              fortalece e hidrata de dentro para fora
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <div className="flex items-center gap-2 bg-white rounded-full px-3 sm:px-4 py-2 shadow-sm border border-purple-100">
                <Users className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600" />
                <span className="font-semibold text-gray-900 text-sm sm:text-base">50.000+ clientes</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-3 sm:px-4 py-2 shadow-sm border border-pink-100">
                <Award className="w-4 sm:w-5 h-4 sm:h-5 text-pink-600" />
                <span className="font-semibold text-gray-900 text-sm sm:text-base">4.9/5 estrelas</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-3 sm:px-4 py-2 shadow-sm border border-purple-100">
                <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600" />
                <span className="font-semibold text-gray-900 text-sm sm:text-base">Garantia 30 dias</span>
              </div>
            </div>

            {/* Benefits list */}
            <div className="space-y-2 sm:space-y-3">
              {[
                'Reduz rugas e linhas de expressão',
                'Fortalece cabelos e unhas quebradiças',
                'Melhora a elasticidade da pele',
                'Sabor neutro - mistura em qualquer bebida'
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                onClick={scrollToPrice}
                size="lg"
                className="w-full lg:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-base sm:text-lg lg:text-xl px-6 sm:px-12 py-6 lg:py-7 rounded-xl sm:rounded-2xl font-bold shadow-2xl shadow-purple-600/30 hover:shadow-3xl transition-all group"
              >
                <span className="hidden sm:inline">Quero Rejuvenescer Minha Pele Agora</span>
                <span className="sm:hidden">Rejuvenescer Agora</span>
                <ArrowDown className="ml-2 sm:ml-3 w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-y-1 transition-transform" />
              </Button>
              <p className="text-xs sm:text-sm text-gray-500 mt-3 text-center lg:text-left">
                ⚡ Oferta por tempo limitado • Frete grátis para todo Brasil
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative max-w-sm mx-auto lg:max-w-lg">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl" />
              
              {/* Product image */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/2e60b72f8_20241220-_Z5F0119.jpg"
                alt="Multicolágeno"
                className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
              />

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, repeat: Infinity, repeatType: "reverse", duration: 2 }}
                className="absolute top-5 sm:top-10 left-2 sm:-left-5 bg-white rounded-xl sm:rounded-2xl shadow-xl p-2 sm:p-4 border-2 border-purple-600"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">53%</div>
                  <div className="text-[10px] sm:text-xs font-semibold text-gray-700">DE DESCONTO</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 2.5 }}
                className="absolute bottom-5 sm:bottom-10 right-2 sm:-right-5 bg-white rounded-xl sm:rounded-2xl shadow-xl p-2 sm:p-4 border-2 border-pink-500"
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-pink-600">50.000+</div>
                  <div className="text-[10px] sm:text-xs font-semibold text-gray-700">CLIENTES</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">Role para saber mais</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}