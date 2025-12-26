import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Droplets, Clock, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: "Limpe a área",
    description: "Lave e seque bem a região a ser tratada",
    icon: Droplets
  },
  {
    number: 2,
    title: "Aplique o óleo",
    description: "Use algumas gotas diretamente na pele",
    icon: Coffee
  },
  {
    number: 3,
    title: "Massageie suavemente",
    description: "Espalhe com movimentos circulares até absorver",
    icon: Clock
  },
  {
    number: 4,
    title: "Use regularmente",
    description: "Aplique 1-2x ao dia para melhores resultados",
    icon: CheckCircle
  }
];

const timelineResults = [
  {
    period: "3 dias",
    title: "Primeiros sinais",
    results: ["Pele mais macia", "Hidratação imediata"],
    approval: 89,
    color: "from-teal-50 to-emerald-50"
  },
  {
    period: "7 dias",
    title: "Melhora visível",
    results: ["Redução de irritações", "Pele mais uniforme", "Toque sedoso"],
    approval: 93,
    color: "from-teal-100 to-emerald-100"
  },
  {
    period: "15 dias",
    title: "Transformação notável",
    results: ["Cicatrização acelerada", "Manchas atenuadas", "Brilho natural"],
    approval: 96,
    color: "from-teal-100 to-cyan-100"
  },
  {
    period: "30 dias",
    title: "Resultados completos",
    results: ["Pele regenerada", "Proteção duradoura", "Vitalidade renovada"],
    approval: 98,
    color: "from-emerald-100 to-cyan-100"
  }
];

export default function GreemyHowToUse() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Product Image - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694ea9ab35ba4900f99f354a/093a836af_Copiade07_2024-Avozon0366.jpg"
            alt="Óleo de Avocado Ozonizado"
            className="max-w-md w-full h-auto rounded-3xl shadow-2xl"
          />
        </motion.div>

        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 font-medium text-sm uppercase tracking-wider">
            Modo de Uso
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Como usar o Óleo de Avocado Ozonizado?
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
              className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
                <step.icon className="w-6 h-6 text-teal-600" />
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
          className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-8 mb-16 border border-teal-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Quando você verá resultados?
          </h3>
          <p className="text-gray-700 text-center mb-6">
            Os primeiros resultados aparecem em 3 dias, mas é com o uso contínuo que você experimenta a transformação completa na sua pele!
          </p>
          <div className="bg-white rounded-xl p-4 border border-teal-100">
            <p className="text-sm text-gray-600 text-center">
              <strong className="text-teal-600">💡 Importante:</strong> Use regularmente para melhores resultados. A regeneração natural vem com consistência!
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
                <div className="text-teal-700 font-bold text-lg mb-2">
                  {item.period}
                </div>
                <h4 className="text-gray-800 font-semibold mb-3">
                  {item.title}
                </h4>
                <ul className="space-y-2 mb-4">
                  {item.results.map((result, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      {result}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-teal-200/50">
                  <p className="text-sm font-semibold text-teal-700">
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