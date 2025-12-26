import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Shield, Sparkles, Heart, ArrowRight } from 'lucide-react';

const results = [
  {
    icon: Droplets,
    title: "Hidratação profunda",
    description: "Pele macia e nutrida"
  },
  {
    icon: Shield,
    title: "Cicatrização acelerada",
    description: "Regeneração celular rápida"
  },
  {
    icon: Sparkles,
    title: "Ação antioxidante",
    description: "Combate radicais livres"
  },
  {
    icon: Heart,
    title: "Alívio de irritações",
    description: "Acalma e protege a pele"
  }
];

export default function GreemyResults() {
  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-teal-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 font-medium text-sm uppercase tracking-wider">
            Benefícios
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Regeneração e vitalidade para sua pele!
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
              className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-teal-100 hover:shadow-xl transition-all border border-teal-100"
              >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-teal-200">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Como funciona na sua pele?
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            <div className="bg-teal-50 rounded-2xl p-6 text-center flex-1 max-w-xs border border-teal-100">
              <div className="text-4xl mb-3">🥑</div>
              <h4 className="font-semibold text-gray-900 mb-1">Óleo de Avocado</h4>
              <p className="text-sm text-gray-600">Rico em nutrientes</p>
            </div>

            <ArrowRight className="w-8 h-8 text-teal-600 rotate-90 lg:rotate-0 flex-shrink-0" />

            <div className="bg-emerald-50 rounded-2xl p-6 text-center flex-1 max-w-xs border border-emerald-100">
              <div className="text-4xl mb-3">💨</div>
              <h4 className="font-semibold text-gray-900 mb-1">Ozonização</h4>
              <p className="text-sm text-gray-600">Potencializa propriedades</p>
            </div>

            <ArrowRight className="w-8 h-8 text-teal-600 rotate-90 lg:rotate-0 flex-shrink-0" />

            <div className="bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl p-6 text-center flex-1 max-w-xs">
              <div className="text-4xl mb-3">✨</div>
              <h4 className="font-semibold text-gray-900 mb-1">Regeneração</h4>
              <p className="text-sm text-gray-600">Pele renovada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}