import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Award, Check } from 'lucide-react';
import GreemyStories from './GreemyStories';

const stats = [
  { number: "22.000+", label: "Clientes satisfeitos", icon: Users },
  { number: "4.9/5", label: "Avaliação média", icon: Star },
  { number: "98%", label: "Recomendam", icon: Award }
];

const testimonials = [
  {
    name: "Ana Paula",
    review: "Óleo incrível! Minha pele ficou super hidratada e as manchas estão sumindo.",
    rating: 5,
    result: "Pele hidratada"
  },
  {
    name: "Carlos Silva",
    review: "Usei nas cicatrizes de acne e vi resultados rápidos. Absorção perfeita!",
    rating: 5,
    result: "Cicatrização"
  },
  {
    name: "Mariana Costa",
    review: "Excelente para peles sensíveis! Acalmou minha dermatite em dias.",
    rating: 5,
    result: "Pele calmante"
  },
  {
    name: "Juliana Mendes",
    review: "Textura leve e não oleosa. Minha pele ficou radiante e saudável!",
    rating: 5,
    result: "Pele radiante"
  },
  {
    name: "Roberto Alves",
    review: "Produto de qualidade! Uso diariamente e minha pele está renovada.",
    rating: 5,
    result: "Regeneração"
  },
  {
    name: "Patricia Lima",
    review: "Melhor óleo que já usei! Hidrata profundamente sem deixar oleosa.",
    rating: 5,
    result: "Hidratação intensa"
  }
];

export default function GreemyTestimonials() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Stories */}
        <div className="mb-12">
          <GreemyStories />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-3 lg:p-8 text-center shadow-lg border border-teal-100"
            >
              <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-4">
                <stat.icon className="w-5 h-5 lg:w-8 lg:h-8 text-white" />
              </div>
              <div className="text-lg lg:text-3xl font-bold text-gray-900 mb-1 lg:mb-2">
                {stat.number}
              </div>
              <p className="text-xs lg:text-base text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-3 lg:p-6 shadow-lg border border-teal-100"
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
                  <p className="text-xs lg:text-sm text-teal-600 flex items-center gap-1">
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