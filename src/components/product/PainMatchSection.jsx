import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const matches = [
  {
    pain: "Baixa produção extrema",
    solution: "Aumenta prolactina e ativa resposta do corpo para produção de leite",
    color: "from-rose-50 to-pink-50",
    border: "border-rose-200"
  },
  {
    pain: "Bebê abaixo do peso",
    solution: "Favorece aumento de oferta para mais mamadas eficientes",
    color: "from-amber-50 to-orange-50",
    border: "border-amber-200"
  },
  {
    pain: "Indução de lactação",
    solution: "Ajuda a iniciar produção mesmo sem parto - ideal para adoção",
    color: "from-purple-50 to-violet-50",
    border: "border-purple-200"
  },
  {
    pain: "Relactação",
    solution: "Auxilia na retomada da produção após interrupção",
    color: "from-blue-50 to-cyan-50",
    border: "border-blue-200"
  },
  {
    pain: "Redução de fórmula",
    solution: "Mais produção = mais leite materno = menor dependência de fórmula",
    color: "from-emerald-50 to-green-50",
    border: "border-emerald-200"
  }
];

export default function PainMatchSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#F9F6F2] to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#2D5A4A] font-medium text-sm uppercase tracking-wider">
            Match perfeito
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Para cada dor, como ele ajuda
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Entenda exatamente como o extrato atua no seu caso específico
          </p>
        </div>

        <div className="space-y-4">
          {matches.map((match, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-gradient-to-r ${match.color} rounded-2xl p-6 border ${match.border}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex items-center gap-3 lg:w-1/3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Check className="w-5 h-5 text-[#2D5A4A]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {match.pain}
                  </h3>
                </div>
                <div className="lg:w-2/3 lg:pl-8 lg:border-l border-gray-200">
                  <p className="text-gray-700">
                    {match.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}