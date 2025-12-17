import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Baby, Activity, ArrowRight } from 'lucide-react';

const results = [
  {
    icon: TrendingUp,
    title: "Estimula a produção",
    description: "Aumenta naturalmente a produção de leite materno"
  },
  {
    icon: Zap,
    title: "Auxilia na indução",
    description: "Ideal para lactação induzida e relactação"
  },
  {
    icon: Activity,
    title: "Melhora a ejeção",
    description: "Aumenta a descida e ejeção do leite"
  },
  {
    icon: Baby,
    title: "Ajuda o bebê",
    description: "Contribui para o ganho de peso do bebê"
  }
];

export default function ResultsSection() {
  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#FF6B35] font-medium text-sm uppercase tracking-wider">
            Resultados esperados
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            O que este produto faz por você?
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
              className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-orange-100 hover:shadow-xl transition-all border border-orange-100"
              >
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-2xl flex items-center justify-center mx-auto mb-4">
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
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-orange-200">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Como funciona no seu corpo?
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            <div className="bg-orange-50 rounded-2xl p-6 text-center flex-1 max-w-xs border border-orange-100">
              <div className="text-4xl mb-3">💊</div>
              <h4 className="font-semibold text-gray-900 mb-1">Vitaminas e Minerais</h4>
              <p className="text-sm text-gray-600">+20 nutrientes essenciais</p>
            </div>

            <ArrowRight className="w-8 h-8 text-[#FF6B35] rotate-90 lg:rotate-0 flex-shrink-0" />

            <div className="bg-orange-100 rounded-2xl p-6 text-center flex-1 max-w-xs border border-orange-200">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-semibold text-gray-900 mb-1">Alta Absorção</h4>
              <p className="text-sm text-gray-600">Minerais quelados otimizados</p>
            </div>

            <ArrowRight className="w-8 h-8 text-[#FF6B35] rotate-90 lg:rotate-0 flex-shrink-0" />

            <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl p-6 text-center flex-1 max-w-xs">
              <div className="text-4xl mb-3">✨</div>
              <h4 className="font-semibold text-gray-900 mb-1">Energia e Imunidade</h4>
              <p className="text-sm text-gray-600">Recuperação completa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}