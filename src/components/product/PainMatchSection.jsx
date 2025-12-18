import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const matches = [
  {
    problem: "Rugas e linhas de expressão",
    solution: "Colágeno I e III",
    description: "Preenchem rugas de dentro para fora",
    emoji: "😔"
  },
  {
    problem: "Pele sem viço e opaca",
    solution: "Ácido Hialurônico + Vitamina C",
    description: "Hidratação profunda e iluminação",
    emoji: "😟"
  },
  {
    problem: "Cabelo fraco e quebradiço",
    solution: "Biotina + Colágeno",
    description: "Fortalecimento e redução de queda",
    emoji: "😣"
  },
  {
    problem: "Unhas fracas que quebram",
    solution: "Colágeno + Biotina",
    description: "Crescimento forte e saudável",
    emoji: "😕"
  },
  {
    problem: "Flacidez e perda de firmeza",
    solution: "3 Tipos de Colágeno",
    description: "Restauração de elasticidade",
    emoji: "😰"
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

        <div className="space-y-6">
          {matches.map((match, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border border-purple-100"
            >
              <div className="grid md:grid-cols-[1fr,auto,1fr] gap-6 items-center">
                {/* Problema */}
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <div className="text-4xl mb-2">{match.emoji}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    Problema
                  </h3>
                  <p className="text-gray-700">
                    {match.problem}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center rotate-0 md:rotate-0">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Solução */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 text-center">
                  <div className="text-4xl mb-2">✨</div>
                  <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-lg mb-1">
                    {match.solution}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {match.description}
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