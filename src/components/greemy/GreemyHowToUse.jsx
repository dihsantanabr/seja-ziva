import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Droplets, Clock, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: "Misture 1 dose",
    description: "Adicione 1 colher (6g) em 200ml de água",
    icon: Droplets
  },
  {
    number: 2,
    title: "Agite bem",
    description: "Misture até dissolver completamente",
    icon: Coffee
  },
  {
    number: 3,
    title: "Tome pela manhã",
    description: "Consuma em jejum ou no café da manhã",
    icon: Clock
  },
  {
    number: 4,
    title: "Use diariamente",
    description: "Consistência é fundamental para resultados",
    icon: CheckCircle
  }
];

const timelineResults = [
  {
    period: "7 dias",
    title: "Primeiros sinais",
    results: ["Mais disposição pela manhã", "Melhora na digestão"],
    approval: 87,
    color: "from-green-50 to-emerald-50"
  },
  {
    period: "14 dias",
    title: "Energia constante",
    results: ["Energia duradoura", "Menos cansaço", "Foco melhorado"],
    approval: 92,
    color: "from-green-100 to-emerald-100"
  },
  {
    period: "30 dias",
    title: "Resultados visíveis",
    results: ["Imunidade fortalecida", "Mais vitalidade", "Pele mais saudável"],
    approval: 96,
    color: "from-green-100 to-teal-100"
  },
  {
    period: "90 dias",
    title: "Transformação completa",
    results: ["Energia sustentável", "Saúde intestinal", "Bem-estar total"],
    approval: 98,
    color: "from-emerald-100 to-teal-100"
  }
];

export default function GreemyHowToUse() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600 font-medium text-sm uppercase tracking-wider">
            Modo de Uso
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Como usar o Greemy?
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-green-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-lime-600 rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
                <step.icon className="w-6 h-6 text-green-600" />
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
          className="bg-gradient-to-br from-green-50 to-lime-50 rounded-3xl p-8 mb-16 border border-green-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Quando você verá resultados?
          </h3>
          <p className="text-gray-700 text-center mb-6">
            Os primeiros resultados aparecem em 7 dias, mas é com o uso contínuo que você experimenta a transformação completa!
          </p>
          <div className="bg-white rounded-xl p-4 border border-green-100">
            <p className="text-sm text-gray-600 text-center">
              <strong className="text-green-600">💡 Importante:</strong> Use todos os dias para melhores resultados. A energia natural vem com consistência!
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Linha do tempo dos resultados
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineResults.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-lg`}
              >
                <div className="text-green-700 font-bold text-lg mb-2">
                  {item.period}
                </div>
                <h4 className="text-gray-800 font-semibold mb-3">
                  {item.title}
                </h4>
                <ul className="space-y-2 mb-4">
                  {item.results.map((result, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {result}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-green-200/50">
                  <p className="text-sm font-semibold text-green-700">
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