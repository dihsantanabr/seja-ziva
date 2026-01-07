import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Shield, Sparkles, Heart, ArrowRight } from 'lucide-react';

const results = [
  {
    icon: Droplets,
    title: "Reduz rugas",
    description: "Suaviza linhas de expressão"
  },
  {
    icon: Shield,
    title: "Aumenta firmeza",
    description: "Elasticidade e sustentação"
  },
  {
    icon: Sparkles,
    title: "Hidrata profundamente",
    description: "Pele macia e radiante"
  },
  {
    icon: Heart,
    title: "Estimula colágeno",
    description: "Beleza de dentro para fora"
  }
];

export default function GreemyResults() {
  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-500 font-medium text-sm uppercase tracking-wider">
            Benefícios
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Resultados visíveis em 4 semanas!
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {results.map((result, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-pink-100 hover:shadow-xl transition-all border border-pink-100"
              >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <result.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                {result.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {result.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mechanism Explanation */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-pink-200">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Como funciona no seu corpo?
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            <div className="bg-pink-50 rounded-2xl p-6 text-center flex-1 max-w-xs border border-pink-100">
              <div className="text-4xl mb-3">💊</div>
              <h4 className="font-semibold text-gray-900 mb-1">Colágeno Verisol®</h4>
              <p className="text-sm text-gray-600">Peptídeos bioativos</p>
            </div>

            <ArrowRight className="w-8 h-8 text-pink-500 rotate-90 lg:rotate-0 flex-shrink-0" />

            <div className="bg-rose-50 rounded-2xl p-6 text-center flex-1 max-w-xs border border-rose-100">
              <div className="text-4xl mb-3">💧</div>
              <h4 className="font-semibold text-gray-900 mb-1">Ácido Hialurônico</h4>
              <p className="text-sm text-gray-600">Hidratação profunda</p>
            </div>

            <ArrowRight className="w-8 h-8 text-pink-500 rotate-90 lg:rotate-0 flex-shrink-0" />

            <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-6 text-center flex-1 max-w-xs">
              <div className="text-4xl mb-3">✨</div>
              <h4 className="font-semibold text-gray-900 mb-1">Rejuvenescimento</h4>
              <p className="text-sm text-gray-600">Pele renovada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}