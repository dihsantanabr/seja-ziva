import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Shield } from 'lucide-react';

const herbs = [
  {
    name: "Colágeno Tipo I",
    benefit: "Pele, ossos e tendões",
    emoji: "💎"
  },
  {
    name: "Colágeno Tipo II",
    benefit: "Articulações e cartilagens",
    emoji: "🦴"
  },
  {
    name: "Colágeno Tipo III",
    benefit: "Pele e vasos sanguíneos",
    emoji: "💪"
  },
  {
    name: "Ácido Hialurônico",
    benefit: "Hidratação profunda",
    emoji: "💧"
  },
  {
    name: "Vitamina C",
    benefit: "Potencializa absorção",
    emoji: "🍊"
  },
  {
    name: "Biotina",
    benefit: "Cabelos e unhas fortes",
    emoji: "✨"
  }
];

export default function FormulaSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium text-sm uppercase tracking-wider">
            Fórmula
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Por que o Multicolágeno é diferente?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            3 tipos de colágeno + Ácido Hialurônico para resultados completos
          </p>
        </div>

        {/* Creator Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-5xl">💜</span>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Desenvolvido com Ciência e Tecnologia
              </h3>
              <p className="text-gray-600 mb-4">
                Fórmula cientificamente desenvolvida com 3 tipos de colágeno hidrolisado + Ácido Hialurônico. 
                Criado especialmente para rejuvenescer pele, fortalecer cabelos e unhas, com sabor neutro para misturar em qualquer bebida.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Award className="w-5 h-5 text-purple-600" />
                  Fórmula premium
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  Base científica
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Shield className="w-5 h-5 text-purple-600" />
                  Qualidade garantida
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Herbs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {herbs.map((herb, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-purple-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">{herb.emoji}</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{herb.name}</h4>
              <p className="text-xs text-gray-500">{herb.benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}