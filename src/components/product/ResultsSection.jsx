import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Baby, Activity, ArrowRight } from 'lucide-react';

const results = [
  {
    icon: TrendingUp,
    title: "Rejuvenesce a pele",
    description: "Reduz rugas e linhas de expressão"
  },
  {
    icon: Zap,
    title: "Hidratação profunda",
    description: "Melhora elasticidade e firmeza"
  },
  {
    icon: Activity,
    title: "Fortalece cabelos",
    description: "Reduz queda e fortalece os fios"
  },
  {
    icon: Baby,
    title: "Unhas mais fortes",
    description: "Crescimento saudável e resistente"
  }
];

export default function ResultsSection() {
  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium text-sm uppercase tracking-wider">
            Benefícios
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Beleza e saúde de dentro para fora!
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {results.map((result, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-purple-100 hover:shadow-xl transition-all border border-purple-100"
              >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-purple-200">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Como funciona no seu corpo?
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            <div className="bg-purple-50 rounded-2xl p-6 text-center flex-1 max-w-xs border border-purple-100">
              <div className="text-4xl mb-3">💎</div>
              <h4 className="font-semibold text-gray-900 mb-1">3 Tipos de Colágeno</h4>
              <p className="text-sm text-gray-600">Tipos I, II e III</p>
            </div>

            <ArrowRight className="w-8 h-8 text-purple-600 rotate-90 lg:rotate-0 flex-shrink-0" />

            <div className="bg-pink-50 rounded-2xl p-6 text-center flex-1 max-w-xs border border-pink-100">
              <div className="text-4xl mb-3">💧</div>
              <h4 className="font-semibold text-gray-900 mb-1">Ácido Hialurônico</h4>
              <p className="text-sm text-gray-600">Hidratação intensa</p>
            </div>

            <ArrowRight className="w-8 h-8 text-purple-600 rotate-90 lg:rotate-0 flex-shrink-0" />

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 text-center flex-1 max-w-xs">
              <div className="text-4xl mb-3">✨</div>
              <h4 className="font-semibold text-gray-900 mb-1">Pele Rejuvenescida</h4>
              <p className="text-sm text-gray-600">Resultados visíveis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}