import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const painMatches = [
  {
    pain: "Pele Ressecada",
    solution: "Hidratação Profunda",
    ingredient: "Ômega-9 e vitamina E que nutrem e restauram a hidratação",
    color: "from-teal-100 to-emerald-100",
    border: "border-teal-200"
  },
  {
    pain: "Cicatrizes e Marcas",
    solution: "Regeneração Acelerada",
    ingredient: "Ozônio que estimula a renovação celular e cicatrização",
    color: "from-emerald-100 to-teal-100",
    border: "border-emerald-200"
  },
  {
    pain: "Irritações e Inflamações",
    solution: "Alívio e Proteção",
    ingredient: "Fitoesteróis com ação anti-inflamatória e calmante",
    color: "from-teal-50 to-teal-100",
    border: "border-teal-200"
  },
  {
    pain: "Envelhecimento Precoce",
    solution: "Rejuvenescimento Natural",
    ingredient: "Antioxidantes e carotenoides que combatem radicais livres",
    color: "from-emerald-50 to-emerald-100",
    border: "border-emerald-200"
  }
];

export default function GreemyPainMatch() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 font-medium text-sm uppercase tracking-wider">
            Soluções
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Transforme seus desafios em conquistas
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Cada problema de pele tem sua solução no Óleo Ozonizado
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-teal-100"
        >
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-teal-600 to-emerald-600">
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
                      idx % 2 === 0 ? 'bg-teal-50/30' : 'bg-white'
                    }`}
                  >
                    <td className="px-6 py-5 font-semibold text-gray-900">
                      {match.pain}
                    </td>
                    <td className="px-6 py-5 font-semibold text-teal-700">
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

          {/* Mobile Table */}
          <div className="lg:hidden">
            <table className="w-full table-fixed">
              <thead>
                <tr className="bg-gradient-to-r from-teal-600 to-emerald-600">
                  <th className="w-[28%] px-2 py-3 text-left text-white font-semibold text-[10px] leading-tight">
                    ❌ Problema
                  </th>
                  <th className="w-[22%] px-2 py-3 text-left text-white font-semibold text-[10px] leading-tight">
                    ✅ Solução
                  </th>
                  <th className="w-[50%] px-2 py-3 text-left text-white font-semibold text-[10px] leading-tight">
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
                      idx % 2 === 0 ? 'bg-teal-50/30' : 'bg-white'
                    }`}
                  >
                    <td className="px-2 py-3 font-semibold text-gray-900 text-[10px] leading-tight">
                      {match.pain}
                    </td>
                    <td className="px-2 py-3 font-semibold text-teal-700 text-[10px] leading-tight">
                      {match.solution}
                    </td>
                    <td className="px-2 py-3 text-gray-700 text-[10px] leading-tight">
                      {match.ingredient}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}