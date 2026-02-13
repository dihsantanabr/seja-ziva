import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Shield } from 'lucide-react';

const ingredients = [
  {
    name: "L. Rhamnosus",
    benefit: "10 bilhões de UFC",
    emoji: "🦠"
  },
  {
    name: "L. Reuteri",
    benefit: "Proteção natural",
    emoji: "🛡️"
  },
  {
    name: "Prebiótico FOS",
    benefit: "Nutre flora vaginal",
    emoji: "🌾"
  },
  {
    name: "Cranberry",
    benefit: "Previne infecções",
    emoji: "🍒"
  },
  {
    name: "Vitamina C",
    benefit: "Imunidade íntima",
    emoji: "🍊"
  },
  {
    name: "Zinco",
    benefit: "Proteção celular",
    emoji: "✨"
  }
];

export default function GreemyFormula() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-500 font-medium text-sm uppercase tracking-wider">
            Fórmula
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Por que o Simbiótico Íntimo é diferente?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            10 bilhões de UFC + prebiótico FOS + cranberry para saúde íntima completa
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
            <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-5xl">🦠</span>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Sinergia Probiótico + Prebiótico
              </h3>
              <p className="text-gray-600 mb-4">
                Fórmula cientificamente desenvolvida com cepas probióticas específicas para saúde vaginal (L. Rhamnosus e L. Reuteri) 
                combinadas com prebiótico FOS que nutre as bactérias benéficas. Essa sinergia restaura o pH, elimina odores e previne infecções recorrentes.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Award className="w-5 h-5 text-pink-500" />
                  Cientificamente comprovado
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <BookOpen className="w-5 h-5 text-pink-500" />
                  10 bilhões de UFC
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Shield className="w-5 h-5 text-pink-500" />
                  Sem glúten e lactose
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4 px-4 lg:px-0">
          {ingredients.map((ingredient, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-4 lg:p-5 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-pink-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-50 to-rose-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">{ingredient.emoji}</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{ingredient.name}</h4>
              <p className="text-xs text-gray-500">{ingredient.benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}