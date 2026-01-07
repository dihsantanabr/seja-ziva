import React from 'react';
import { Star, Leaf, Heart, Check, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';

export default function LPTextHero() {
  const formattedReviews = '238.917';

  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-pink-50 py-16 lg:py-24 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 lg:space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 text-sm">
              🏆 Mais de 2 Milhões de Vendas
            </Badge>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Transforme Sua Pele em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
              Apenas 4 Semanas
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            Colágeno Verisol® + Ácido Hialurônico: A combinação perfeita para reduzir rugas, 
            aumentar firmeza e hidratar profundamente sua pele
          </motion.p>

          {/* Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-gray-900 text-lg">4.9</span>
            <span className="text-gray-600">({formattedReviews} avaliações)</span>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Badge variant="outline" className="border-pink-500 text-pink-600 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Colágeno Verisol®
            </Badge>
            <Badge variant="outline" className="border-pink-500 text-pink-600 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Ácido Hialurônico
            </Badge>
            <Badge variant="outline" className="border-pink-500 text-pink-600 px-4 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Reduz Rugas
            </Badge>
            <Badge variant="outline" className="border-pink-500 text-pink-600 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Aumenta Firmeza
            </Badge>
            <Badge variant="outline" className="border-pink-500 text-pink-600 px-4 py-2">
              <ShieldCheck className="w-4 h-4 mr-2" />
              Hidratação Profunda
            </Badge>
            <Badge variant="outline" className="border-pink-500 text-pink-600 px-4 py-2">
              <Leaf className="w-4 h-4 mr-2" />
              Resultados em 4 Semanas
            </Badge>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8"
          >
            {[
              { icon: Heart, text: 'Reduz Rugas em 20%' },
              { icon: Sparkles, text: 'Aumenta Firmeza' },
              { icon: Shield, text: 'Hidratação Profunda' },
              { icon: Zap, text: 'Pele Luminosa' }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 shadow-md border border-pink-100">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">{benefit.text}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-4"
          >
            <button
              onClick={() => {
                const purchaseSection = document.getElementById('comprar');
                if (purchaseSection) {
                  purchaseSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg shadow-pink-500/25 transition-all hover:shadow-xl hover:shadow-pink-500/30"
            >
              Começar Minha Transformação
            </button>
            <p className="text-sm text-gray-500 mt-3">✨ Frete Grátis + 10% Cashback</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}