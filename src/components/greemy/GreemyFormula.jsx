import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Shield } from 'lucide-react';

const ingredients = [
  {
    name: "Colágeno Verisol®",
    benefit: "Peptídeos bioativos",
    emoji: "💊"
  },
  {
    name: "Ácido Hialurônico",
    benefit: "Hidratação profunda",
    emoji: "💧"
  },
  {
    name: "Vitamina C",
    benefit: "Síntese de colágeno",
    emoji: "🍊"
  },
  {
    name: "Biotina",
    benefit: "Saúde da pele",
    emoji: "✨"
  },
  {
    name: "Zinco",
    benefit: "Antioxidante",
    emoji: "🛡️"
  },
  {
    name: "Vitamina E",
    benefit: "Proteção celular",
    emoji: "🌟"
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
            Por que o Colágeno Verisol® é diferente?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Peptídeos bioativos de alta absorção + ácido hialurônico para beleza completa
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
              <span className="text-5xl">💊</span>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Desenvolvido com Tecnologia Verisol®
              </h3>
              <p className="text-gray-600 mb-4">
                Fórmula cientificamente desenvolvida com colágeno hidrolisado de baixo peso molecular, 
                garantindo máxima absorção e eficácia. Peptídeos bioativos que atuam diretamente na redução de rugas e aumento da firmeza da pele.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Award className="w-5 h-5 text-pink-500" />
                  Clinicamente testado
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <BookOpen className="w-5 h-5 text-pink-500" />
                  Alta biodisponibilidade
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Shield className="w-5 h-5 text-pink-500" />
                  Qualidade garantida
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