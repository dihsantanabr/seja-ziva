import React from 'react';
import { Battery, Users, Zap, HeartPulse, Brain, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const painPoints = [
  {
    icon: Battery,
    title: "Cansaço e fadiga constante",
    description: "Falta de energia durante o dia"
  },
  {
    icon: Brain,
    title: "Dificuldade de concentração",
    description: "Mente cansada e dispersa"
  },
  {
    icon: HeartPulse,
    title: "Imunidade baixa",
    description: "Defesas do corpo enfraquecidas"
  },
  {
    icon: Zap,
    title: "Energia instável",
    description: "Picos e quedas de energia"
  },
  {
    icon: Sun,
    title: "Falta de disposição",
    description: "Desânimo e preguiça"
  },
  {
    icon: Users,
    title: "Vida corrida",
    description: "Busca energia natural e saudável"
  }
];

export default function GreemyForWho({ onOpenQuiz }) {
  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600 font-medium text-sm uppercase tracking-wider">
            Esse é o seu caso?
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Energia verde ideal para quem quer viver melhor!
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Perfeito para quem busca energia natural, saúde e bem-estar
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100"
              >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-all">
                <point.icon className="w-7 h-7 text-green-600" />
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
          <p className="text-lg text-gray-700 bg-gradient-to-r from-green-100 to-lime-100 inline-block px-6 py-3 rounded-full">
            💚 Se você se identificou com algum desses casos, <strong>o Greemy foi feito para você</strong>
          </p>
          
          <div className="mt-6">
            <Button 
              onClick={onOpenQuiz}
              className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white text-lg font-semibold py-6 px-12 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              🎯 Descobrir se Greemy é para mim
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}