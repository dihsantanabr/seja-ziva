import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisons = [
  { feature: "22 Superalimentos", greemy: true, regular: false, others: "Poucos" },
  { feature: "Energia Natural", greemy: true, regular: false, others: true },
  { feature: "Sabor Delicioso", greemy: true, regular: false, others: "Variável" },
  { feature: "Vitaminas Completas", greemy: true, regular: false, others: true },
  { feature: "Sem Açúcar", greemy: true, regular: false, others: "Variável" },
  { feature: "Fácil Dissolução", greemy: true, regular: false, others: false },
  { feature: "Frete Grátis", greemy: true, regular: false, others: false },
  { feature: "Garantia 30 Dias", greemy: true, regular: false, others: false }
];

const ValueCell = ({ value }) => {
  if (value === true) {
    return <Check className="w-6 h-6 text-green-600 mx-auto" />;
  } else if (value === false) {
    return <X className="w-6 h-6 text-red-400 mx-auto" />;
  } else {
    return <span className="text-gray-600 text-sm">{value}</span>;
  }
};

export default function GreemyComparison() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600 font-medium text-sm uppercase tracking-wider">
            Comparativo
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Por que escolher Greemy?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Veja como nos destacamos da concorrência
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-green-600 to-lime-600">
                  <th className="px-6 py-4 text-left text-white font-semibold">
                    Características
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold">
                    Greemy
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold">
                    Suplementos Regulares
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold">
                    Outros Verdes
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
                      idx % 2 === 0 ? 'bg-green-50/30' : 'bg-white'
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {comp.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <ValueCell value={comp.greemy} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <ValueCell value={comp.regular} />
                    </td>
                    <td className="px-6 py-4 text-center">
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