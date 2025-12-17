import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Star, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const kits = [
  {
    name: "Kit Força e Estética",
    description: "Bari Essential + Root Booster + Slim Tea",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941e696a4baa9c466e144f4/ce3b783c3_image.png",
    price: 299.00,
    paymentInfo: "Em até 3x sem juros no cartão",
    popular: false
  },
  {
    name: "Kit Imunidade e Digestão",
    description: "Kit Bari Essential + Fort Immune + Slim Bari",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941e696a4baa9c466e144f4/eaab8fbfd_image.png",
    price: 299.00,
    paymentInfo: "Em até 3x sem juros no cartão",
    popular: true
  },
  {
    name: "Kit Energia e Foco",
    description: "Kit Bari Essential + Mind Fuel + Fit Bari",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941e696a4baa9c466e144f4/4d5934e42_image.png",
    price: 299.00,
    paymentInfo: "Em até 3x sem juros no cartão",
    popular: false
  }
];

export default function KitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#FF6B35] font-medium text-sm uppercase tracking-wider">
            Potencialize seus resultados
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Kits Recomendados
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Escolha o kit ideal para sua jornada de recuperação nutricional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {kits.map((kit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all border border-orange-100"
            >
              {kit.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Mais vendido
                </Badge>
              )}

              <div className="absolute top-6 right-6">
                <button className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors">
                  <span className="text-[#FF6B35] text-xl">♡</span>
                </button>
              </div>
              
              <div className="mb-6 flex justify-center">
                <img 
                  src={kit.image} 
                  alt={kit.name}
                  className="w-full h-64 object-contain"
                />
              </div>

              <div className="text-center mb-4">
                <Badge className="bg-orange-100 text-[#FF6B35] mb-3">
                  KITS
                </Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {kit.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {kit.description}
                </p>
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">
                  R$ {kit.price.toFixed(2).replace('.', ',')}
                </div>
                <p className="text-sm text-gray-500">
                  {kit.paymentInfo}
                </p>
              </div>

              <Button 
                className="w-full bg-[#FF6B35] text-white hover:bg-[#E55A2B] font-semibold"
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