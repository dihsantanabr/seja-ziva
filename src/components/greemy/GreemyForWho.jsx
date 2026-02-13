import React from 'react';
import { Droplets, Heart, Sparkles, Shield, Wind, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const painPoints = [
  {
    icon: Heart,
    title: "Candidíase recorrente",
    description: "Infecções que voltam constantemente"
  },
  {
    icon: Droplets,
    title: "Corrimento anormal",
    description: "Fluxo vaginal irregular ou com odor"
  },
  {
    icon: Shield,
    title: "pH desequilibrado",
    description: "Flora vaginal desregulada"
  },
  {
    icon: Wind,
    title: "Odor desagradável",
    description: "Desconforto íntimo persistente"
  },
  {
    icon: Sparkles,
    title: "Coceira e irritação",
    description: "Incômodo na região íntima"
  },
  {
    icon: Star,
    title: "Proteção natural",
    description: "Busca por equilíbrio íntimo"
  }
];

export default function GreemyForWho({ onOpenQuiz }) {
  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-500 font-medium text-sm uppercase tracking-wider">
            Sinais de desequilíbrio íntimo
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Você se identifica com algum desses sintomas?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A flora vaginal pode ser afetada por diversos fatores como estresse, antibióticos, alimentação e higiene inadequada, causando desequilíbrio no pH e desconfortos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 px-4 lg:px-0">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-5 lg:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-100"
              >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-all">
                <point.icon className="w-7 h-7 text-pink-500" />
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


      </div>
    </section>
  );
}