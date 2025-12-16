import React from 'react';
import { Baby, Heart, Droplets, Scale, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const painPoints = [
  {
    icon: Droplets,
    title: "Baixa produção de leite",
    description: "Quase nada saindo na bombinha ou ordenha"
  },
  {
    icon: Scale,
    title: "Bebê sem ganhar peso",
    description: "Dificuldade no ganho de peso adequado"
  },
  {
    icon: Heart,
    title: "Lactação induzida",
    description: "Adoção, relactação ou casais homoafetivos"
  },
  {
    icon: Baby,
    title: "Uso de fórmula",
    description: "Deseja reduzir e aumentar o leite materno"
  },
  {
    icon: Clock,
    title: "Peito que não enche",
    description: "Pouca ejeção ou demora na descida do leite"
  },
  {
    icon: Users,
    title: "Pós-parto difícil",
    description: "Cesárea, prematuro ou outras dificuldades"
  }
];

export default function ForWhoSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#FF9133] font-medium text-sm uppercase tracking-wider">
            Esse é o seu caso?
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Para quem este extrato foi feito?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Uma opção natural e segura para diferentes jornadas de amamentação
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
              className="group bg-[#fdefe2] rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-all">
                <point.icon className="w-7 h-7 text-[#FF9133]" />
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
          <p className="text-lg text-gray-700 bg-[#F5E6E8] inline-block px-6 py-3 rounded-full">
            💜 Se você se identificou com algum desses casos, <strong>esse extrato foi feito para você</strong>
          </p>
        </div>
      </div>
    </section>
  );
}