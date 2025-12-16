import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Shield } from 'lucide-react';

const herbs = [
  {
    name: "Feno-Grego",
    benefit: "Galactagogo clássico, aumenta prolactina",
    emoji: "🌿"
  },
  {
    name: "Cardo Santo",
    benefit: "Estimula produção e qualidade do leite",
    emoji: "🌸"
  },
  {
    name: "Melissa",
    benefit: "Efeito calmante, favorece descida",
    emoji: "🍃"
  },
  {
    name: "Funcho",
    benefit: "Estimula ejeção e reduz cólicas no bebê",
    emoji: "🌾"
  },
  {
    name: "Camomila",
    benefit: "Reduz ansiedade da mãe",
    emoji: "🌼"
  },
  {
    name: "Capim-Cidreira",
    benefit: "Relaxante natural para amamentação",
    emoji: "🌱"
  }
];

export default function FormulaSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#F2E8E2]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#C9A875] font-medium text-sm uppercase tracking-wider">
            A ciência por trás
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            O que vai na fórmula deste extrato?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Uma opção natural e segura, formulada com ervas tradicionais
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
            <div className="w-32 h-32 bg-gradient-to-br from-[#C9A875] to-[#b8976a] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-5xl">👩‍⚕️</span>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Criado por Consultora em Lactação
              </h3>
              <p className="text-gray-600 mb-4">
                Fórmula desenvolvida por especialista com base em literatura de herbologia e bancos de dados como LactMed. 
                Mais de 60.000 famílias já confiaram nos produtos Mamamais.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Award className="w-5 h-5 text-[#C9A875]" />
                  Especialista certificada
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <BookOpen className="w-5 h-5 text-[#C9A875]" />
                  Base científica
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Shield className="w-5 h-5 text-[#C9A875]" />
                  Segurança comprovada
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
              className="bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
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