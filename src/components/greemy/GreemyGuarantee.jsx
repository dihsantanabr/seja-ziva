import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Truck, RefreshCw } from 'lucide-react';

const guarantees = [
  {
    icon: Shield,
    title: "Garantia de 30 dias",
    description: "Devolução total se não ficar satisfeita"
  },
  {
    icon: Truck,
    title: "Frete Grátis",
    description: "Para todo Brasil acima de R$ 200"
  },
  {
    icon: Award,
    title: "100% Natural",
    description: "Óleo puro de avocado ozonizado"
  },
  {
    icon: RefreshCw,
    title: "Troca Fácil",
    description: "Processo simples e rápido"
  }
];

export default function GreemyGuarantee() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 font-medium text-sm uppercase tracking-wider">
            Garantias
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Compre com Confiança
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {guarantees.map((guarantee, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-4 lg:p-6 text-center shadow-lg border border-teal-100 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <guarantee.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm lg:text-lg mb-1 lg:mb-2">
                {guarantee.title}
              </h3>
              <p className="text-gray-600 text-xs lg:text-sm">
                {guarantee.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            💚 Confiança Total em Cada Compra
          </h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Milhares de clientes confiam em nosso Óleo Ozonizado para transformar e regenerar sua pele. 
            Junte-se a elas e experimente a diferença!
          </p>
        </motion.div>
      </div>
    </section>
  );
}