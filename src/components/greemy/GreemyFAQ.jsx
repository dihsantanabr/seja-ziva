import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "O que é o Greemy?",
    answer: "Greemy é um suplemento verde com 22 superalimentos, vitaminas e minerais que fornecem energia natural, fortalecem a imunidade e melhoram o foco mental."
  },
  {
    question: "Como devo tomar o Greemy?",
    answer: "Misture 1 colher (6g) em 200ml de água, suco ou sua bebida favorita. Recomendamos tomar pela manhã, em jejum ou no café da manhã, todos os dias."
  },
  {
    question: "Quais são os sabores disponíveis?",
    answer: "Greemy está disponível em dois sabores deliciosos: Limão Siciliano e Laranja. Você também pode fazer mix comprando os dois sabores."
  },
  {
    question: "Quanto tempo até ver resultados?",
    answer: "Os primeiros sinais aparecem em 7 dias com mais disposição. Em 30 dias você sentirá energia constante, e em 90 dias a transformação completa com imunidade fortalecida e bem-estar total."
  },
  {
    question: "Greemy tem contraindicações?",
    answer: "Greemy é natural e seguro para a maioria das pessoas. Gestantes, lactantes e pessoas com condições médicas devem consultar um médico antes de usar."
  },
  {
    question: "Posso tomar com outros suplementos?",
    answer: "Sim, Greemy pode ser combinado com outros suplementos. Recomendamos espaçar a ingestão em pelo menos 2 horas."
  },
  {
    question: "O frete é grátis?",
    answer: "Sim! O frete é grátis para todo o Brasil em todos os pacotes. A entrega é feita em 3 a 9 dias úteis."
  },
  {
    question: "Há garantia de satisfação?",
    answer: "Sim! Oferecemos 30 dias de garantia. Se não ficar satisfeito, devolvemos 100% do seu dinheiro."
  }
];

export default function GreemyFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600 font-medium text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl shadow-md border border-green-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-green-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-green-600 flex-shrink-0 transition-transform ${
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
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600">
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