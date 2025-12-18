import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Shield } from 'lucide-react';

const ingredients = [
  {
    name: "Spirulina",
    benefit: "Proteína e energia",
    emoji: "🌀"
  },
  {
    name: "Chlorella",
    benefit: "Desintoxicação",
    emoji: "💚"
  },
  {
    name: "Wheatgrass",
    benefit: "Vitaminas e minerais",
    emoji: "🌾"
  },
  {
    name: "Matcha",
    benefit: "Foco e energia",
    emoji: "🍵"
  },
  {
    name: "Couve",
    benefit: "Antioxidantes",
    emoji: "🥬"
  },
  {
    name: "Espinafre",
    benefit: "Ferro e vitaminas",
    emoji: "🥗"
  }
];

export default function GreemyFormula() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600 font-medium text-sm uppercase tracking-wider">
            Fórmula
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Por que o Greemy é diferente?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            22 superalimentos verdes + vitaminas para energia completa
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
            <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-lime-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-5xl">💚</span>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Desenvolvido com Nutrição e Ciência
              </h3>
              <p className="text-gray-600 mb-4">
                Fórmula cientificamente desenvolvida com 22 superalimentos verdes, vitaminas e minerais essenciais. 
                Criado especialmente para fornecer energia natural, fortalecer imunidade e melhorar foco, com sabores deliciosos Limão Siciliano e Laranja.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Award className="w-5 h-5 text-green-600" />
                  Fórmula premium
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  Base científica
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Shield className="w-5 h-5 text-green-600" />
                  Qualidade garantida
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {ingredients.map((ingredient, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-green-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-lime-50 rounded-full flex items-center justify-center mx-auto mb-3">
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