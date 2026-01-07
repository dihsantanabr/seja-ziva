import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Truck, ThumbsUp, Leaf } from 'lucide-react';

const guarantees = [
  {
    icon: Stethoscope,
    title: "Recomendado por Dermatologistas",
    description: "Aprovado por profissionais de saúde"
  },
  {
    icon: Truck,
    title: "Frete Grátis",
    description: "Para todo Brasil acima de R$ 200"
  },
  {
    icon: ThumbsUp,
    title: "+ de 98% dos Clientes Recomendam",
    description: "Satisfação comprovada"
  },
  {
    icon: Leaf,
    title: "Colágeno Verisol® Patenteado",
    description: "Tecnologia cientificamente comprovada"
  }
];

export default function GreemyGuarantee() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-500 font-medium text-sm uppercase tracking-wider">
            Garantias
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Compre com Confiança
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-0">
          {guarantees.map((guarantee, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-5 lg:p-6 text-center shadow-lg border border-pink-100 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <guarantee.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm lg:text-lg">
                {guarantee.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-3xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Informações importantes
          </h3>
          <div className="text-left max-w-2xl mx-auto space-y-2 text-gray-700">
            <p>✓ Uso diário simples e prático</p>
            <p>✓ Não é medicamento, é suplemento alimentar</p>
            <p>✓ Compra segura no site oficial</p>
            <p className="mt-4 text-sm text-gray-600 italic">Os resultados são progressivos e variam de pessoa para pessoa. A constância e a escolha correta fazem toda a diferença.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}