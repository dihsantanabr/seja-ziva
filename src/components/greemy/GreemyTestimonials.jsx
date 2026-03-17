import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Award, Check } from 'lucide-react';
import GreemyVideoCarousel from './GreemyVideoCarousel';

const stats = [
  { number: "+2.352", label: "Avaliações", icon: Users },
  { number: "4.9/5", label: "Avaliação média", icon: Star },
  { number: "98%", label: "Recomendam", icon: Award }
];

const testimonials = [
  {
    name: "Ana Paula",
    review: "Em 2 semanas a candidíase que voltava todo mês sumiu! Estou livre dos desconfortos.",
    rating: 5,
    result: "Sem candidíase"
  },
  {
    name: "Carla Silva",
    review: "O odor desagradável que me incomodava tanto desapareceu completamente!",
    rating: 5,
    result: "Odor eliminado"
  },
  {
    name: "Mariana Costa",
    review: "Coceira e irritação sumiram na primeira semana. Sensação de conforto total!",
    rating: 5,
    result: "Zero desconforto"
  },
  {
    name: "Juliana Mendes",
    review: "Resultado incrível! pH regulado, sem corrimento e muito mais confiança.",
    rating: 5,
    result: "pH equilibrado"
  },
  {
    name: "Roberta Alves",
    review: "Melhor probiótico que já tomei! Proteção natural e saúde íntima de volta.",
    rating: 5,
    result: "Flora restaurada"
  },
  {
    name: "Patricia Lima",
    review: "Em 30 dias vi resultados reais. Sem infecções, protegida e muito mais segura.",
    rating: 5,
    result: "Proteção duradoura"
  }
];

export default function GreemyTestimonials() {
  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <div className="text-center mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-500 font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            O que nossas clientes dizem
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 lg:gap-6 mb-10 lg:mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.08, duration: 0.3 }}
              className="bg-white rounded-2xl p-3 lg:p-8 text-center shadow-md border border-pink-100"
            >
              <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-4">
                <stat.icon className="w-5 h-5 lg:w-8 lg:h-8 text-white" />
              </div>
              <div className="text-lg lg:text-3xl font-bold text-gray-900 mb-1 lg:mb-2">
                {stat.number}
              </div>
              <p className="text-xs lg:text-base text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Video Carousel */}
        <GreemyVideoCarousel />

        {/* Testimonials */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-3 lg:p-6 shadow-lg border border-pink-100"
            >
              <div className="flex gap-1 mb-2 lg:mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 lg:w-5 lg:h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs lg:text-base text-gray-700 mb-3 lg:mb-4 italic">
                "{testimonial.review}"
              </p>
              <div className="flex items-center justify-between pt-3 lg:pt-4 border-t border-gray-100">
                <div>
                  <p className="text-xs lg:text-base font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs lg:text-sm text-pink-500 flex items-center gap-1">
                    <Check className="w-3 h-3 lg:w-4 lg:h-4" />
                    {testimonial.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}