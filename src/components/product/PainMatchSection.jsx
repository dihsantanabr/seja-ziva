import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const matches = [
  {
    pain: "Rugas e linhas de expressão",
    solution: "Colágeno tipo I e III preenchem rugas de dentro para fora, suavizando linhas de expressão",
    color: "from-purple-600/20 to-purple-600/10",
    border: "border-purple-600/20"
  },
  {
    pain: "Pele sem viço e opaca",
    solution: "Ácido Hialurônico + Vitamina C hidratam profundamente e iluminam a pele",
    color: "from-purple-600/20 to-purple-600/10",
    border: "border-purple-600/20"
  },
  {
    pain: "Cabelo fraco e quebradiço",
    solution: "Biotina + colágeno fortalecem os fios, reduzem queda e aumentam volume",
    color: "from-purple-600/20 to-purple-600/10",
    border: "border-purple-600/20"
  },
  {
    pain: "Unhas fracas que quebram",
    solution: "Colágeno + biotina fortalecem as unhas, evitando descamação e quebra",
    color: "from-purple-600/20 to-purple-600/10",
    border: "border-purple-600/20"
  },
  {
    pain: "Flacidez e perda de firmeza",
    solution: "3 tipos de colágeno restauram elasticidade e firmeza da pele",
    color: "from-purple-600/20 to-purple-600/10",
    border: "border-purple-600/20"
  }
];

export default function PainMatchSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium text-sm uppercase tracking-wider">
            Match perfeito
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Para cada problema, uma solução
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Entenda exatamente como o Multicolágeno atua no seu caso específico
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
                    <Check className="w-5 h-5 text-purple-600" />
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