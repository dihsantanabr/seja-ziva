import React from 'react';
import { Baby, Heart, Droplets, Scale, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const painPoints = [
  {
    icon: Droplets,
    title: "Fez cirurgia bariátrica",
    description: "Precisa de reposição completa de nutrientes"
  },
  {
    icon: Scale,
    title: "Sofre com fadiga crônica",
    description: "Sente cansaço constante e falta de energia"
  },
  {
    icon: Heart,
    title: "Tem deficiências nutricionais",
    description: "Anemia, queda de cabelo, unhas fracas"
  },
  {
    icon: Baby,
    title: "Baixa absorção intestinal",
    description: "Dificuldade em absorver vitaminas e minerais"
  },
  {
    icon: Clock,
    title: "Imunidade comprometida",
    description: "Gripes e infecções frequentes"
  },
  {
    icon: Users,
    title: "Problemas ósseos e musculares",
    description: "Ossos fracos, dores musculares ou cãibras"
  }
];

export default function ForWhoSection() {
  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#FF6B35] font-medium text-sm uppercase tracking-wider">
            Esse é o seu caso?
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            O polivitamínico ideal para quem passou pela bariátrica!
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Também essencial para qualquer pessoa que precise de reposição completa de vitaminas
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
              className="group bg-orange-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-orange-100"
              >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-all">
                <point.icon className="w-7 h-7 text-[#FF6B35]" />
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
          <p className="text-lg text-gray-700 bg-orange-100 inline-block px-6 py-3 rounded-full">
            🧡 Se você se identificou com algum desses casos, <strong>esse produto foi feito para você</strong>
          </p>
        </div>
      </div>
    </section>
  );
}