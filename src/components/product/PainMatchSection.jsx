import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const matches = [
  {
    pain: "Fadiga e cansaço extremo",
    solution: "Repõe vitaminas do complexo B e ferro, combatendo a fadiga pós-bariátrica",
    color: "from-[#FF6B35]/20 to-[#FF6B35]/10",
    border: "border-[#FF6B35]/20"
  },
  {
    pain: "Anemia recorrente",
    solution: "Ferro quelado + vitamina C garantem absorção otimizada e normalização da hemoglobina",
    color: "from-[#FF6B35]/20 to-[#FF6B35]/10",
    border: "border-[#FF6B35]/20"
  },
  {
    pain: "Queda de cabelo e unhas fracas",
    solution: "Biotina, zinco e vitaminas essenciais fortalecem cabelo, pele e unhas",
    color: "from-[#FF6B35]/20 to-[#FF6B35]/10",
    border: "border-[#FF6B35]/20"
  },
  {
    pain: "Baixa imunidade",
    solution: "Vitaminas C, D3 e zinco fortalecem o sistema imunológico naturalmente",
    color: "from-[#FF6B35]/20 to-[#FF6B35]/10",
    border: "border-[#FF6B35]/20"
  },
  {
    pain: "Dores musculares e ósseas",
    solution: "Cálcio + vitamina D3 + magnésio fortalecem ossos e músculos",
    color: "from-[#FF6B35]/20 to-[#FF6B35]/10",
    border: "border-[#FF6B35]/20"
  }
];

export default function PainMatchSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#FF6B35] font-medium text-sm uppercase tracking-wider">
            Match perfeito
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Para cada problema, uma solução
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Entenda exatamente como o Bari Essential atua no seu caso específico
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
                    <Check className="w-5 h-5 text-[#FF6B35]" />
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