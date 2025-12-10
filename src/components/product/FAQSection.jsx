import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "É seguro para o bebê?",
    answer: "Sim! O extrato é feito com ervas tradicionalmente usadas durante a amamentação e é seguro para mães lactantes. As ervas são selecionadas com base em literatura científica e bancos de dados como LactMed."
  },
  {
    question: "É seguro para mães de cesárea?",
    answer: "Sim, é seguro e inclusive muito recomendado para mães que fizeram cesárea, pois pode ajudar na descida do leite que às vezes demora mais nesses casos."
  },
  {
    question: "Funciona em relactação?",
    answer: "Sim! O extrato foi formulado pensando também em casos de relactação. As ervas galactagogas ajudam a estimular novamente a produção de leite."
  },
  {
    question: "Posso usar se estou dando fórmula?",
    answer: "Claro! Muitas mães usam o extrato enquanto complementam com fórmula, com o objetivo de aumentar a produção de leite materno e reduzir gradualmente a fórmula."
  },
  {
    question: "Quanto tempo demora para fazer efeito?",
    answer: "Os primeiros sinais podem aparecer entre 3-7 dias de uso contínuo. Resultados mais expressivos costumam aparecer após 10-14 dias. Cada corpo responde de forma única."
  },
  {
    question: "O álcool na composição faz mal?",
    answer: "Não! São apenas 1ml de solução hidroalcoólica diluída em 50ml de água. Se preferir, pode diluir em água quente para o álcool evaporar completamente."
  },
  {
    question: "Posso usar junto com outros produtos Mamamais?",
    answer: "Sim! Você pode associar mais de um produto ao mesmo tempo. O importante é seguir a sugestão de uso de cada um deles e manter a consistência."
  },
  {
    question: "Tem contraindicações?",
    answer: "Atenção em casos de úlceras estomacais, sensibilidade gástrica, diabetes, hipoglicemia ou hipo/hipertireoidismo. Não deve ser usado durante a gravidez. Consulte seu médico em caso de dúvidas."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 lg:py-24 bg-[#F9F6F2]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#2D5A4A] font-medium text-sm uppercase tracking-wider">
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
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#2D5A4A] flex-shrink-0" />
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