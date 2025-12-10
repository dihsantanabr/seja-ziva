import React from 'react';
import { Check, X, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const comparisons = [
  {
    feature: "Potência/Concentração",
    extrato: { value: "Alta", highlight: true },
    cha: { value: "Baixa", highlight: false },
    outros: { value: "Variável", highlight: false }
  },
  {
    feature: "Tempo de resposta",
    extrato: { value: "3-7 dias", highlight: true },
    cha: { value: "Semanas", highlight: false },
    outros: { value: "Incerto", highlight: false }
  },
  {
    feature: "Praticidade",
    extrato: { value: "Muito alta", highlight: true },
    cha: { value: "Baixa", highlight: false },
    outros: { value: "Variável", highlight: false }
  },
  {
    feature: "Segurança comprovada",
    extrato: { value: true, highlight: true },
    cha: { value: "Parcial", highlight: false },
    outros: { value: "Incerta", highlight: false }
  },
  {
    feature: "Formulação por especialista",
    extrato: { value: true, highlight: true },
    cha: { value: false, highlight: false },
    outros: { value: false, highlight: false }
  },
  {
    feature: "Dose padronizada",
    extrato: { value: true, highlight: true },
    cha: { value: false, highlight: false },
    outros: { value: "Parcial", highlight: false }
  }
];

const ValueCell = ({ value, highlight }) => {
  if (value === true) {
    return (
      <div className={`flex justify-center ${highlight ? 'text-[#2D5A4A]' : 'text-gray-400'}`}>
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
    <span className={`${highlight ? 'text-[#2D5A4A] font-semibold' : 'text-gray-500'}`}>
      {value}
    </span>
  );
};

export default function ComparisonSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#F9F6F2]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#2D5A4A] font-medium text-sm uppercase tracking-wider">
            Compare e decida
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Extrato vs Chá vs Tentativas Comuns
          </h2>
          <p className="text-gray-600 mt-4">
            Entenda por que o extrato é a melhor opção para você
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
                    <div className="bg-[#2D5A4A] text-white rounded-xl py-2 px-4 font-semibold">
                      Extrato Mamamais
                    </div>
                  </th>
                  <th className="py-5 px-6 text-gray-700 font-medium">
                    Chá comum
                  </th>
                  <th className="py-5 px-6 text-gray-700 font-medium">
                    Outros métodos
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="border-t border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center bg-[#2D5A4A]/5">
                      <ValueCell value={row.extrato.value} highlight={row.extrato.highlight} />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <ValueCell value={row.cha.value} highlight={row.cha.highlight} />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <ValueCell value={row.outros.value} highlight={row.outros.highlight} />
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