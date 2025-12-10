import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Star, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const kits = [
  {
    name: "Kit Lactação Induzida",
    description: "Combinação completa para quem está fazendo protocolo de lactação induzida",
    products: ["Extrato Lactação Induzida", "Buenas Noches", "Banho de Assento"],
    originalPrice: 179.70,
    price: 149.90,
    popular: true
  },
  {
    name: "Kit Aumento de Produção",
    description: "Para quem quer potencializar a produção de leite",
    products: ["Extrato Lactação Induzida", "Extrato Amamentação"],
    originalPrice: 119.80,
    price: 99.90,
    popular: false
  },
  {
    name: "Kit Relaxamento",
    description: "Para mães que precisam de calma para a descida do leite",
    products: ["Extrato Lactação Induzida", "Buenas Noches"],
    originalPrice: 119.80,
    price: 99.90,
    popular: false
  }
];

export default function KitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#2D5A4A] font-medium text-sm uppercase tracking-wider">
            Potencialize seus resultados
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Kits Recomendados
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Combine produtos para resultados ainda melhores
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
              className={`relative rounded-3xl p-6 ${
                kit.popular 
                  ? 'bg-gradient-to-b from-[#2D5A4A] to-[#234539] text-white' 
                  : 'bg-[#F9F6F2]'
              }`}
            >
              {kit.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Mais vendido
                </Badge>
              )}
              
              <h3 className={`text-xl font-bold mb-2 ${kit.popular ? 'text-white' : 'text-gray-900'}`}>
                {kit.name}
              </h3>
              <p className={`text-sm mb-4 ${kit.popular ? 'text-white/80' : 'text-gray-600'}`}>
                {kit.description}
              </p>

              <div className="space-y-2 mb-6">
                {kit.products.map((product, pIdx) => (
                  <div 
                    key={pIdx} 
                    className={`flex items-center gap-2 text-sm ${kit.popular ? 'text-white/90' : 'text-gray-700'}`}
                  >
                    <Plus className="w-4 h-4" />
                    {product}
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <span className={`text-sm line-through ${kit.popular ? 'text-white/60' : 'text-gray-400'}`}>
                  R$ {kit.originalPrice.toFixed(2).replace('.', ',')}
                </span>
                <div className={`text-3xl font-bold ${kit.popular ? 'text-white' : 'text-gray-900'}`}>
                  R$ {kit.price.toFixed(2).replace('.', ',')}
                </div>
              </div>

              <Button 
                className={`w-full ${
                  kit.popular 
                    ? 'bg-white text-[#2D5A4A] hover:bg-gray-100' 
                    : 'bg-[#2D5A4A] text-white hover:bg-[#234539]'
                }`}
              >
                Adicionar Kit
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}