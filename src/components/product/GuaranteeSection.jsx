import React from 'react';
import { Shield, MessageCircle, Users, Heart, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const guarantees = [
  {
    icon: MessageCircle,
    title: "Orientação no uso",
    description: "Nossa equipe te ajuda a usar o produto da melhor forma"
  },
  {
    icon: Users,
    title: "Suporte especializado",
    description: "Conte com suporte para tirar todas as suas dúvidas"
  },
  {
    icon: Heart,
    title: "+15.000 clientes",
    description: "Já ajudamos milhares de pessoas na recuperação pós-bariátrica"
  },
  {
    icon: Shield,
    title: "Garantia de satisfação",
    description: "Se não se adaptar, fale com a gente"
  }
];

export default function GuaranteeSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#FF6B35] font-medium text-sm uppercase tracking-wider">
            Você não está sozinho(a)
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Garantia de Satisfação + Apoio Bari Essential
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {guarantees.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="w-14 h-14 bg-[#FF6B35]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-[#FF6B35]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl text-center"
        >
          <div className="w-20 h-20 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Compre com tranquilidade
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            A recuperação pós-bariátrica é uma jornada única. Estamos aqui para te apoiar em cada etapa. 
            Se o produto não atender suas expectativas, entre em contato conosco.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Troca fácil', 'Suporte WhatsApp', 'Envio seguro', 'Embalagem discreta'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-700">
                <Check className="w-5 h-5 text-[#FF6B35]" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}