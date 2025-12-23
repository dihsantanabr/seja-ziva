import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const painMatches = [
  {
    pain: "Cansaço Extremo",
    solution: "Energia Natural Duradoura",
    ingredient: "22 superalimentos que fornecem energia sustentável sem quedas",
    color: "from-green-100 to-emerald-100",
    border: "border-green-200"
  },
  {
    pain: "Imunidade Baixa",
    solution: "Sistema Imune Fortalecido",
    ingredient: "Vitaminas e antioxidantes que protegem e fortalecem",
    color: "from-emerald-100 to-teal-100",
    border: "border-emerald-200"
  },
  {
    pain: "Falta de Foco",
    solution: "Clareza Mental",
    ingredient: "Nutrientes que melhoram concentração e cognição",
    color: "from-green-50 to-green-100",
    border: "border-green-200"
  },
  {
    pain: "Digestão Irregular",
    solution: "Saúde Intestinal",
    ingredient: "Fibras e probióticos que regulam o sistema digestivo",
    color: "from-teal-50 to-emerald-100",
    border: "border-teal-200"
  }
];

export default function GreemyPainMatch() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600 font-medium text-sm uppercase tracking-wider">
            Soluções
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Transforme seus desafios em conquistas
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Cada problema tem sua solução no Greemy
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100"
        >
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-green-600 to-lime-600">
                  <th className="px-6 py-4 text-left text-white font-semibold">
                    ❌ Problema
                  </th>
                  <th className="px-6 py-4 text-left text-white font-semibold">
                    ✅ Solução
                  </th>
                  <th className="px-6 py-4 text-left text-white font-semibold">
                    💡 Como Funciona
                  </th>
                </tr>
              </thead>
              <tbody>
                {painMatches.map((match, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className={`border-b border-gray-100 ${
                      idx % 2 === 0 ? 'bg-green-50/30' : 'bg-white'
                    }`}
                  >
                    <td className="px-6 py-5 font-semibold text-gray-900">
                      {match.pain}
                    </td>
                    <td className="px-6 py-5 font-semibold text-green-700">
                      {match.solution}
                    </td>
                    <td className="px-6 py-5 text-gray-700">
                      {match.ingredient}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden divide-y divide-gray-100">
            {painMatches.map((match, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6"
              >
                <div className="space-y-4">
                  <div>
                    <div className="text-red-500 text-xs font-semibold mb-1">❌ PROBLEMA</div>
                    <p className="font-bold text-gray-900">{match.pain}</p>
                  </div>
                  <div>
                    <div className="text-green-600 text-xs font-semibold mb-1">✅ SOLUÇÃO</div>
                    <p className="font-bold text-green-700">{match.solution}</p>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-semibold mb-1">💡 COMO FUNCIONA</div>
                    <p className="text-sm text-gray-700">{match.ingredient}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}