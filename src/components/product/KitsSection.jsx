import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Star, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const kits = [
  {
    name: "Multicolágeno + Greemy",
    description: "Beleza completa: colágeno triplo + energia verde",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/5c3c1e82d_Screenshot2025-12-17at185053.png",
    price: 347.80,
    paymentInfo: "Em até 3x sem juros no cartão",
    popular: false
  },
  {
    name: "Multicolágeno + DreamsCoffee",
    description: "Rejuvenescimento + energia natural do café",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/8536205da_20240930-_Z5F1385.jpg",
    price: 347.80,
    paymentInfo: "Em até 3x sem juros no cartão",
    popular: true
  },
  {
    name: "Combo Completo",
    description: "Multicolágeno + Greemy + DreamsCoffee",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/864923f50_20241220-_Z5F09111.jpg",
    price: 527.70,
    paymentInfo: "Em até 3x sem juros no cartão",
    popular: false
  }
];

export default function KitsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium text-xs sm:text-sm uppercase tracking-wider">
            Mix de Produtos
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 sm:mt-3">
            Kits Recomendados
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
            Combine produtos e potencialize seus resultados
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {kits.map((kit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all border border-purple-100"
            >
              {kit.popular && (
                <Badge className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Mais vendido
                </Badge>
              )}

              <div className="text-center mb-3 sm:mb-4 pt-3 sm:pt-4">
                <Badge className="bg-purple-100 text-purple-600 mb-2 sm:mb-3 text-xs">
                  KIT
                </Badge>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">
                  {kit.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                  {kit.description}
                </p>
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-1.5 sm:mb-2">
                  R$ {kit.price.toFixed(2).replace('.', ',')}
                </div>
                <p className="text-xs sm:text-sm text-gray-500">
                  {kit.paymentInfo}
                </p>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-sm sm:text-base py-5 sm:py-6 active:scale-95 touch-manipulation"
              >
                COMPRAR 🛒
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}