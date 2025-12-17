import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Clock, Calendar, AlertCircle, Check } from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "10g por dia",
    description: "1 dosador ao dia",
    icon: Droplet
  },
  {
    number: "2",
    title: "Misture em qualquer bebida",
    description: "Água, suco, café, vitamina - sabor neutro",
    icon: "🥤"
  },
  {
    number: "3",
    title: "Pode ser frio ou quente",
    description: "Solúvel em qualquer temperatura",
    icon: Clock
  },
  {
    number: "4",
    title: "Uso diário",
    description: "Use todos os dias para resultados visíveis",
    icon: Calendar
  }
];

const timelineResults = [
  {
    period: "7 dias",
    title: "Primeira Semana",
    results: [
      "Pele mais hidratada",
      "Unhas mais resistentes",
      "Cabelos com mais brilho"
    ],
    approval: "91%",
    color: "bg-purple-500"
  },
  {
    period: "14 dias",
    title: "Segunda Semana",
    results: [
      "Redução de linhas finas",
      "Menos queda de cabelo",
      "Unhas crescendo mais fortes"
    ],
    approval: "94%",
    color: "bg-purple-500"
  },
  {
    period: "30 dias",
    title: "Um Mês",
    results: [
      "Pele mais firme e elástica",
      "Rugas reduzidas",
      "Cabelos mais volumosos"
    ],
    approval: "96%",
    color: "bg-purple-500"
  },
  {
    period: "90 dias",
    title: "Três Meses",
    results: [
      "Rejuvenescimento visível",
      "Pele radiante",
      "Resultados duradouros"
    ],
    approval: "98%",
    color: "bg-purple-500"
  }
];

export default function HowToUseSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium text-sm uppercase tracking-wider">
            Modo de uso
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Como usar o Multicolágeno?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 h-full border border-purple-100">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-purple-600/30" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Expectations Card */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-10 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Quando esperar resultados?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Hidratação visível em <strong>7 dias</strong> de uso contínuo</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Redução de rugas em <strong>30 dias</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Rejuvenescimento completo em <strong>90 dias</strong></span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-2">Importante saber</h4>
                  <p className="text-sm text-white/90">
                    O colágeno age de dentro para fora. Cada organismo responde de forma única. 
                    O uso diário e consistente é fundamental para resultados duradouros e rejuvenescimento visível.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Results */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Resultados do uso contínuo
            </h3>
            <p className="text-gray-600 mt-2">
              Veja o que esperar em cada fase da jornada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineResults.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className={`${item.color} text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4`}>
                  {item.period}
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-4">
                  {item.title}
                </h4>
                <ul className="space-y-2 mb-6">
                  {item.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    {item.approval}
                  </div>
                  <div className="text-xs text-gray-500">aprovação</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}