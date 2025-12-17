import React from 'react';
import { Check, X, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const comparisons = [
  {
    feature: "Absorção de nutrientes",
    bari: { value: "Otimizada", highlight: true },
    comum: { value: "Baixa", highlight: false },
    varios: { value: "Variável", highlight: false }
  },
  {
    feature: "Minerais quelados",
    bari: { value: true, highlight: true },
    comum: { value: false, highlight: false },
    varios: { value: "Parcial", highlight: false }
  },
  {
    feature: "Dosagem para bariátricos",
    bari: { value: true, highlight: true },
    comum: { value: false, highlight: false },
    varios: { value: false, highlight: false }
  },
  {
    feature: "Vitaminas ativas",
    bari: { value: true, highlight: true },
    comum: { value: false, highlight: false },
    varios: { value: "Parcial", highlight: false }
  },
  {
    feature: "Praticidade (cápsulas/dia)",
    bari: { value: "Apenas 2", highlight: true },
    comum: { value: "Várias", highlight: false },
    varios: { value: "Muitas", highlight: false }
  },
  {
    feature: "Fórmula completa +20",
    bari: { value: true, highlight: true },
    comum: { value: false, highlight: false },
    varios: { value: "Incompleta", highlight: false }
  }
];

const ValueCell = ({ value, highlight }) => {
  if (value === true) {
    return (
      <div className={`flex justify-center ${highlight ? 'text-[#FF6B35]' : 'text-gray-400'}`}>
        <Check className="w-6 h-6" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center text-gray-300">
        <X className="w-6 h-6" />
      </div>
    );
  }
  return (
    <span className={`${highlight ? 'text-[#FF6B35] font-semibold' : 'text-gray-500'}`}>
      {value}
    </span>
  );
};

export default function ComparisonSection() {
  return (
    <section className="py-16 lg:py-24 bg-orange-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#FF6B35] font-medium text-sm uppercase tracking-wider">
            Compare e decida
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Bari Essential vs Polivitamínicos Comuns
          </h2>
          <p className="text-gray-600 mt-4">
            Entenda por que o Bari Essential é a melhor opção para você
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-5 px-6 font-medium text-gray-500">
                    Característica
                  </th>
                  <th className="py-5 px-6">
                    <div className="bg-[#FF6B35] text-white rounded-xl py-2 px-4 font-semibold">
                      Bari Essential
                    </div>
                  </th>
                  <th className="py-5 px-6 text-gray-700 font-medium">
                    Polivitamínico comum
                  </th>
                  <th className="py-5 px-6 text-gray-700 font-medium">
                    Vários separados
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="border-t border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center bg-[#FF6B35]/5">
                      <ValueCell value={row.bari.value} highlight={row.bari.highlight} />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <ValueCell value={row.comum.value} highlight={row.comum.highlight} />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <ValueCell value={row.varios.value} highlight={row.varios.highlight} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}