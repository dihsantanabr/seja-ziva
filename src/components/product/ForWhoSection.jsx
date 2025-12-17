import React from 'react';
import { Baby, Heart, Droplets, Scale, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const painPoints = [
  {
    icon: Droplets,
    title: "Pele sem viço e brilho",
    description: "Pele opaca, sem hidratação e elasticidade"
  },
  {
    icon: Scale,
    title: "Rugas e linhas de expressão",
    description: "Sinais visíveis de envelhecimento precoce"
  },
  {
    icon: Heart,
    title: "Cabelo fraco e quebradiço",
    description: "Queda excessiva e fios sem força"
  },
  {
    icon: Baby,
    title: "Unhas fracas e quebradiças",
    description: "Unhas que quebram e descascam facilmente"
  },
  {
    icon: Clock,
    title: "Flacidez e perda de firmeza",
    description: "Pele sem sustentação e definição"
  },
  {
    icon: Users,
    title: "Sinais de envelhecimento",
    description: "Quer prevenir e reverter o envelhecimento"
  }
];

export default function ForWhoSection() {
  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium text-sm uppercase tracking-wider">
            Esse é o seu caso?
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            O colágeno ideal para quem quer rejuvenescer!
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Perfeito para quem busca beleza, saúde e bem-estar de dentro para fora
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-100"
              >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-all">
                <point.icon className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 bg-gradient-to-r from-purple-100 to-pink-100 inline-block px-6 py-3 rounded-full">
            💜 Se você se identificou com algum desses casos, <strong>o Multicolágeno foi feito para você</strong>
          </p>
        </div>
      </div>
    </section>
  );
}