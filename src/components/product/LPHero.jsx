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
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B35] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <Badge className="bg-[#FF6B35] text-white text-sm px-4 py-2">
              🎯 Exclusivo para Bariátricos
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Pare de sofrer com{' '}
              <span className="text-[#FF6B35] relative">
                fadiga extrema
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 3 250 3 298 10" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
              {' '}após a bariátrica
            </h1>

            {/* Sub-headline */}
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Descubra o único polivitamínico de <strong>alta absorção</strong> que corrige 
              deficiências nutricionais e recupera sua energia em apenas 30 dias
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-orange-100">
                <Users className="w-5 h-5 text-[#FF6B35]" />
                <span className="font-semibold text-gray-900">15.000+ clientes</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-orange-100">
                <Award className="w-5 h-5 text-[#FF6B35]" />
                <span className="font-semibold text-gray-900">96% aprovam</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-orange-100">
                <Shield className="w-5 h-5 text-[#FF6B35]" />
                <span className="font-semibold text-gray-900">Garantia total</span>
              </div>
            </div>

            {/* Benefits list */}
            <div className="space-y-3">
              {[
                'Elimina a fadiga e recupera sua energia',
                'Previne anemia e deficiências graves',
                'Fortalece cabelo, unhas e imunidade',
                'Apenas 2 cápsulas por dia'
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
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
                className="w-full lg:w-auto bg-[#FF6B35] hover:bg-[#E55A2B] text-white text-xl px-12 py-7 rounded-2xl font-bold shadow-2xl shadow-[#FF6B35]/30 hover:shadow-3xl transition-all group"
              >
                Quero Recuperar Minha Energia Agora
                <ArrowDown className="ml-3 w-6 h-6 group-hover:translate-y-1 transition-transform" />
              </Button>
              <p className="text-sm text-gray-500 mt-3 text-center lg:text-left">
                ⚡ Oferta por tempo limitado • Frete grátis para todo Brasil
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-[#E55A2B]/20 rounded-3xl blur-3xl" />
              
              {/* Product image */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941e696a4baa9c466e144f4/9539d4095_Screenshot2025-12-17at134320.png"
                alt="Bari Essential"
                className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
              />

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, repeat: Infinity, repeatType: "reverse", duration: 2 }}
                className="absolute top-10 -left-5 bg-white rounded-2xl shadow-xl p-4 border-2 border-[#FF6B35]"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF6B35]">60%</div>
                  <div className="text-xs font-semibold text-gray-700">DE DESCONTO</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 2.5 }}
                className="absolute bottom-10 -right-5 bg-white rounded-2xl shadow-xl p-4 border-2 border-green-500"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">15.000+</div>
                  <div className="text-xs font-semibold text-gray-700">CLIENTES</div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">Role para saber mais</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}