import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana S.",
    text: "Minha energia voltou! Não sentia mais aquele cansaço extremo. Meus exames normalizaram e estou me sentindo muito melhor.",
    rating: 5,
    result: "Energia recuperada"
  },
  {
    name: "Carlos R.",
    text: "Depois da bariátrica estava com anemia severa. Em 2 meses usando o Bari Essential, minha hemoglobina normalizou!",
    rating: 5,
    result: "Anemia corrigida"
  },
  {
    name: "Juliana M.",
    text: "Meu cabelo parou de cair e minhas unhas ficaram muito mais fortes. A diferença é visível!",
    rating: 5,
    result: "Cabelo e unhas"
  },
  {
    name: "Roberto F.",
    text: "Estava com deficiência de B12 e sentia muita fadiga. Agora tenho disposição para trabalhar e treinar!",
    rating: 5,
    result: "Mais disposição"
  },
  {
    name: "Fernanda L.",
    text: "Fiz bariátrica há 6 meses e o Bari Essential é essencial na minha rotina. Previne todas as deficiências!",
    rating: 5,
    result: "Pós-bariátrica"
  },
  {
    name: "Patricia A.",
    text: "Minha imunidade melhorou muito! Antes ficava doente toda hora, agora raramente tenho gripes.",
    rating: 5,
    result: "Imunidade forte"
  }
];

const stats = [
  { value: "15.000+", label: "Clientes atendidos" },
  { value: "4.9/5", label: "Avaliação média" },
  { value: "96%", label: "Recomendam" },
  { value: "3.500+", label: "Avaliações reais" }
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#FF6B35] font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            O que dizem nossos clientes
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
              className="bg-orange-50 rounded-2xl p-6 text-center border border-orange-100"
            >
              <div className="text-3xl lg:text-4xl font-bold text-[#FF6B35] mb-1">
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
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-orange-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-[#FF6B35]/20 mb-2" />
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <span className="font-medium text-gray-900">{testimonial.name}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-[#FF6B35] font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {testimonial.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Netão Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-8 lg:p-12 shadow-2xl border border-orange-200"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941e696a4baa9c466e144f4/b029f12f0_Screenshot2025-12-17at145158.png"
                alt="Netão - Influenciador Digital"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="lg:w-2/3">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <Quote className="w-12 h-12 text-[#FF6B35]/30 mb-4" />
              <p className="text-xl lg:text-2xl text-gray-800 font-medium mb-6 italic leading-relaxed">
                "Após minha cirurgia bariátrica, o Bari Essential foi essencial para minha recuperação! 
                Ele me ajudou a manter meus níveis de energia altos e prevenir deficiências nutricionais. 
                É um produto que realmente faz diferença na vida de quem passou pela bariátrica!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  N
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Netão</p>
                  <p className="text-gray-600">Influenciador Digital e Bariátrico</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}