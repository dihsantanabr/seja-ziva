import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisons = [
  { feature: "10 Bilhões de UFC", greemy: true, regular: "Variável", others: "Baixo" },
  { feature: "Prebiótico FOS Incluso", greemy: true, regular: false, others: "Raro" },
  { feature: "Previne Candidíase", greemy: true, regular: "Limitado", others: "Parcial" },
  { feature: "Regula pH Vaginal", greemy: true, regular: false, others: "Moderado" },
  { feature: "Elimina Odores", greemy: true, regular: "Superficial", others: "Moderado" },
  { feature: "Cepas Específicas Vaginais", greemy: true, regular: false, others: "Genérico" },
  { feature: "Cranberry Natural", greemy: true, regular: false, others: "Variável" },
  { feature: "Sem Glúten e Lactose", greemy: true, regular: false, others: "Variável" },
  { feature: "Resultados em 7 Dias", greemy: true, regular: false, others: "4-6 Semanas" },
  { feature: "Sinergia Pro + Prebiótico", greemy: true, regular: "Raro", others: "Limitado" }
];

const ValueCell = ({ value }) => {
  if (value === true) {
    return <Check className="w-3 h-3 lg:w-6 lg:h-6 text-green-600 mx-auto" />;
  } else if (value === false) {
    return <X className="w-3 h-3 lg:w-6 lg:h-6 text-red-400 mx-auto" />;
  } else {
    return <span className="text-gray-600 text-[9px] lg:text-sm">{value}</span>;
  }
};

export default function GreemyComparison() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-500 font-medium text-sm uppercase tracking-wider">
            Comparativo
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Por que escolher o Simbiótico Íntimo Ziva?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Veja como nos destacamos de outros probióticos
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-pink-100"
        >
          <div className="lg:overflow-x-auto">
            <table className="w-full lg:min-w-[600px]">
              <thead>
                <tr className="bg-gradient-to-r from-pink-400 to-pink-500">
                  <th className="px-2 lg:px-6 py-2 lg:py-4 text-left text-white font-semibold text-[10px] lg:text-base">
                    Características
                  </th>
                  <th className="px-1 lg:px-6 py-2 lg:py-4 text-center text-white font-semibold text-[10px] lg:text-base">
                    Nosso Simbiótico
                  </th>
                  <th className="px-1 lg:px-6 py-2 lg:py-4 text-center text-white font-semibold text-[10px] lg:text-base">
                    Probiótico Comum
                  </th>
                  <th className="px-1 lg:px-6 py-2 lg:py-4 text-center text-white font-semibold text-[10px] lg:text-base">
                    Outros Probióticos
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comp, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className={`border-b border-gray-100 ${
                      idx % 2 === 0 ? 'bg-pink-50/30' : 'bg-white'
                    }`}
                  >
                    <td className="px-2 lg:px-6 py-2 lg:py-4 font-medium text-gray-900 text-[10px] lg:text-base">
                      {comp.feature}
                    </td>
                    <td className="px-1 lg:px-6 py-2 lg:py-4 text-center">
                      <ValueCell value={comp.greemy} />
                    </td>
                    <td className="px-1 lg:px-6 py-2 lg:py-4 text-center">
                      <ValueCell value={comp.regular} />
                    </td>
                    <td className="px-1 lg:px-6 py-2 lg:py-4 text-center">
                      <ValueCell value={comp.others} />
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