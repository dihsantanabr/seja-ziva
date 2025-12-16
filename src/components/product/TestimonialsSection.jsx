import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: "Camila S.",
    text: "De 10ml na bombinha para 60ml em 10 dias! Não acreditava que seria possível, mas funcionou muito.",
    rating: 5,
    result: "+500% produção"
  },
  {
    name: "Amanda R.",
    text: "Consegui reduzir a fórmula pela metade. Meu bebê está mamando muito melhor agora.",
    rating: 5,
    result: "-50% fórmula"
  },
  {
    name: "Patricia M.",
    text: "Meu bebê finalmente começou a ganhar peso. Estou muito emocionada com os resultados.",
    rating: 5,
    result: "Bebê ganhando peso"
  },
  {
    name: "Juliana F.",
    text: "Estou fazendo lactação induzida e já comecei a ter produção! Incrível esse produto.",
    rating: 5,
    result: "Lactação induzida"
  },
  {
    name: "Fernanda L.",
    text: "Depois da cesárea meu leite demorou a descer. O extrato ajudou muito nesse processo.",
    rating: 5,
    result: "Pós-cesárea"
  },
  {
    name: "Beatriz A.",
    text: "Uso junto com outros produtos da Mamamais e os resultados foram ainda melhores!",
    rating: 5,
    result: "Kit completo"
  }
];

const stats = [
  { value: "60.000+", label: "Famílias atendidas" },
  { value: "4.9/5", label: "Avaliação média" },
  { value: "93%", label: "Recomendam" },
  { value: "3.500+", label: "Avaliações reais" }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#C9A875] font-medium text-sm uppercase tracking-wider">
            Prova social
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            O que dizem nossas mães
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#F2E8E2] rounded-2xl p-6 text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-[#C9A875] mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-gradient-to-br from-[#F2E8E2] to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-[#C9A875]/20 mb-2" />
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#C9A875] rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <span className="font-medium text-gray-900">{testimonial.name}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-[#C9A875] font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {testimonial.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}