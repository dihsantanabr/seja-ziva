import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Droplets, Clock, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: "Dissolva em água",
    description: "Misture 1 sachê em 200ml de água fria",
    icon: Droplets
  },
  {
    number: 2,
    title: "Tome em jejum",
    description: "Consuma pela manhã com estômago vazio",
    icon: Coffee
  },
  {
    number: 3,
    title: "Use diariamente",
    description: "Mantenha constância de 1 sachê ao dia",
    icon: Clock
  },
  {
    number: 4,
    title: "Sinta os resultados",
    description: "Primeiras melhoras em 7-14 dias",
    icon: CheckCircle
  }
];

const timelineResults = [
  {
    period: "7 dias",
    title: "Primeiros sinais",
    results: ["Menos coceira", "Redução de odores", "Mais conforto"],
    approval: 87,
    color: "from-pink-50 to-rose-50"
  },
  {
    period: "14 dias",
    title: "Melhora notável",
    results: ["pH equilibrado", "Corrimento normalizado", "Flora restaurada"],
    approval: 91,
    color: "from-pink-100 to-rose-100"
  },
  {
    period: "30 dias",
    title: "Transformação completa",
    results: ["Infecções prevenidas", "Proteção duradoura", "Saúde íntima ideal"],
    approval: 94,
    color: "from-pink-100 to-pink-200"
  },
  {
    period: "60 dias",
    title: "Proteção máxima",
    results: ["Flora fortificada", "Zero recorrências", "Bem-estar total"],
    approval: 97,
    color: "from-rose-100 to-pink-200"
  }
];

export default function GreemyHowToUse() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Product Image - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <img
            src="https://sejaziva.com.br/cdn/shop/files/PROBIOTICO_-_04.png"
            alt="Simbiótico Íntimo Ziva"
            className="max-w-md w-full h-auto rounded-3xl shadow-2xl"
          />
        </motion.div>

        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-500 font-medium text-sm uppercase tracking-wider">
            Modo de Uso
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Como usar o Simbiótico Íntimo?
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 px-4 lg:px-0">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-5 lg:p-6 shadow-lg border border-pink-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
                <step.icon className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Expectations Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 mb-16 border border-pink-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Quando você verá resultados?
          </h3>
          <p className="text-gray-700 text-center mb-6">
            Os primeiros resultados aparecem em 7 dias, mas é com o uso contínuo por 30 dias que você experimenta proteção duradoura e equilíbrio completo!
          </p>
          <div className="bg-white rounded-xl p-4 border border-pink-100">
            <p className="text-sm text-gray-600 text-center">
              <strong className="text-pink-500">💡 Importante:</strong> Use diariamente em jejum para melhores resultados. A saúde íntima começa de dentro para fora!
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Linha do tempo dos resultados
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-4 lg:px-0">
            {timelineResults.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-5 lg:p-6 shadow-lg`}
              >
                <div className="text-pink-700 font-bold text-lg mb-2">
                  {item.period}
                </div>
                <h4 className="text-gray-800 font-semibold mb-3">
                  {item.title}
                </h4>
                <ul className="space-y-2 mb-4">
                  {item.results.map((result, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                      {result}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-pink-200/50">
                  <p className="text-sm font-semibold text-pink-700">
                    {item.approval}% de aprovação
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}