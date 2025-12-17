import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Preciso mesmo tomar polivitamínico depois da bariátrica?",
    answer: "Sim! A cirurgia bariátrica reduz drasticamente a absorção de nutrientes. Mesmo com uma alimentação balanceada, é impossível suprir todas as necessidades apenas pela comida. O Bari Essential foi desenvolvido especificamente para corrigir essas deficiências e prevenir problemas graves de saúde."
  },
  {
    question: "Por que não posso usar qualquer polivitamínico comum?",
    answer: "Os polivitamínicos comuns não têm as dosagens adequadas nem os minerais na forma quelada, essencial para quem fez bariátrica. O Bari Essential possui concentrações até 10x maiores de nutrientes críticos e minerais quelados que garantem absorção máxima mesmo com o intestino reduzido."
  },
  {
    question: "É muito caro? Vale a pena o investimento?",
    answer: "Comparado ao custo de tratar deficiências graves (anemia, osteoporose, problemas neurológicos) e a qualidade de vida que você perde, o Bari Essential é um investimento pequeno. Além disso, oferecemos descontos progressivos: quanto mais você compra, mais economiza. O kit de 5 unidades tem 50% de desconto."
  },
  {
    question: "Quanto tempo vou precisar tomar?",
    answer: "O uso é para a vida toda após a cirurgia bariátrica. Seu corpo não volta a absorver nutrientes como antes da cirurgia. Mas pense assim: são apenas 2 cápsulas por dia que garantem sua saúde, energia e bem-estar por toda a vida."
  },
  {
    question: "E se eu esquecer de tomar alguns dias?",
    answer: "É essencial manter a consistência. Quando você para de tomar, as deficiências voltam rapidamente. Os sintomas como fadiga, queda de cabelo e anemia podem retornar em poucas semanas. Por isso criamos uma fórmula de apenas 2 cápsulas ao dia para facilitar a rotina."
  },
  {
    question: "Vou ter que tomar muitas cápsulas por dia?",
    answer: "Não! O Bari Essential tem apenas 2 cápsulas por dia, muito mais prático que a maioria dos polivitamínicos que exigem 4-6 cápsulas. Nossa fórmula é super concentrada para facilitar sua rotina."
  },
  {
    question: "Funciona mesmo? Como sei que vou ter resultado?",
    answer: "Mais de 15.000 pacientes bariátricos já usam o Bari Essential com 96% de aprovação. Em 30 dias você sentirá mais energia, em 60 dias seus exames começarão a normalizar. Temos garantia de satisfação - se não funcionar, devolvemos seu dinheiro."
  },
  {
    question: "Posso comprar na farmácia ou só pela internet?",
    answer: "O Bari Essential é um produto exclusivo, não está disponível em farmácias. Vendemos apenas pelo site oficial para garantir a procedência, qualidade e o melhor preço. Oferecemos frete grátis para todo Brasil e entrega rápida."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#FF6B35] font-medium text-sm uppercase tracking-wider">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-orange-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-orange-50 transition"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
                  <span className="font-medium text-gray-900">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pl-14 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}