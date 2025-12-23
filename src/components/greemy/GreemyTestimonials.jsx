import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Award, Check } from 'lucide-react';

const stats = [
  { number: "50.000+", label: "Clientes satisfeitos", icon: Users },
  { number: "4.9/5", label: "Avaliação média", icon: Star },
  { number: "98%", label: "Recomendam", icon: Award }
];

const testimonials = [
  {
    name: "Ana Paula",
    review: "Greemy mudou minha rotina! Energia natural o dia todo sem aquele cansaço do café.",
    rating: 5,
    result: "Mais energia"
  },
  {
    name: "Carlos Silva",
    review: "Adorei o sabor de limão! Tomo todo dia e sinto muita diferença na disposição.",
    rating: 5,
    result: "Mais disposição"
  },
  {
    name: "Mariana Costa",
    review: "Excelente! Meu intestino regulou e estou com muito mais energia para treinar.",
    rating: 5,
    result: "Saúde intestinal"
  },
  {
    name: "Juliana Mendes",
    review: "Sensação de leveza incrível! Acabou aquele inchaço que me incomodava tanto. Recomendo!",
    rating: 5,
    result: "Menos inchaço"
  },
  {
    name: "Roberto Alves",
    review: "Produto de qualidade! Notei melhora na digestão logo na primeira semana.",
    rating: 5,
    result: "Digestão melhorada"
  },
  {
    name: "Patricia Lima",
    review: "Estava sempre cansada, agora tenho energia para tudo. O sabor de laranja é delicioso!",
    rating: 5,
    result: "Energia constante"
  }
];

export default function GreemyTestimonials() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600 font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            O que nossos clientes dizem
          </h2>
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
              className="bg-white rounded-2xl p-8 text-center shadow-lg border border-green-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-lime-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-green-100"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.review}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <Check className="w-4 h-4" />
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