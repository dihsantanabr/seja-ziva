import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const painMatches = [
  {
    pain: "Cansaço Extremo",
    solution: "Energia Natural Duradoura",
    ingredient: "22 superalimentos que fornecem energia sustentável sem quedas",
    color: "from-green-100 to-emerald-100",
    border: "border-green-200"
  },
  {
    pain: "Imunidade Baixa",
    solution: "Sistema Imune Fortalecido",
    ingredient: "Vitaminas e antioxidantes que protegem e fortalecem",
    color: "from-emerald-100 to-teal-100",
    border: "border-emerald-200"
  },
  {
    pain: "Falta de Foco",
    solution: "Clareza Mental",
    ingredient: "Nutrientes que melhoram concentração e cognição",
    color: "from-green-50 to-green-100",
    border: "border-green-200"
  },
  {
    pain: "Digestão Irregular",
    solution: "Saúde Intestinal",
    ingredient: "Fibras e probióticos que regulam o sistema digestivo",
    color: "from-teal-50 to-emerald-100",
    border: "border-teal-200"
  }
];

export default function GreemyPainMatch() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600 font-medium text-sm uppercase tracking-wider">
            Soluções
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Transforme seus desafios em conquistas
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Cada problema tem sua solução no Greemy
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {painMatches.map((match, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-3xl p-6 lg:p-8 shadow-xl border-2 ${match.border} hover:shadow-2xl transition-all`}
            >
              <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Pain */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="text-red-500 text-sm font-semibold mb-2">❌ PROBLEMA</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {match.pain}
                  </h3>
                </div>

                <ArrowRight className={`w-8 h-8 bg-gradient-to-r ${match.color} text-white rounded-full p-1.5 flex-shrink-0 rotate-90 lg:rotate-0`} />

                {/* Solution */}
                <div className="flex-1 text-center lg:text-right">
                  <div className="text-green-600 text-sm font-semibold mb-2">✅ SOLUÇÃO</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {match.solution}
                  </h3>
                </div>
              </div>

              <div className={`mt-6 bg-gradient-to-r ${match.color} bg-opacity-10 rounded-xl p-4`}>
                <p className="text-sm text-gray-700">
                  <strong className="text-green-700">Como funciona:</strong> {match.ingredient}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}