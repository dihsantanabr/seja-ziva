import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "O colágeno realmente funciona? Vou ver resultados?",
    answer: "Sim! Mais de 50.000 clientes já comprovaram os resultados. Em 7 dias você sentirá a pele mais hidratada, em 30 dias as rugas começam a diminuir e em 90 dias o rejuvenescimento é visível. Nosso colágeno tem 3 tipos (I, II e III) + Ácido Hialurônico para máxima eficácia."
  },
  {
    question: "Por que o Multicolágeno é melhor que outros colágenos?",
    answer: "A maioria dos colágenos tem apenas 1 tipo. O Multicolágeno tem 3 tipos diferentes (I, II e III) que agem em conjunto na pele, cabelos, unhas e articulações. Além disso, adicionamos Ácido Hialurônico que potencializa a hidratação e os resultados."
  },
  {
    question: "Tem gosto ruim? Como eu tomo?",
    answer: "Não! Nosso colágeno tem sabor neutro e dissolve completamente. Você pode misturar em água, café, suco, vitamina ou qualquer bebida. É apenas 1 dosador por dia e não altera o sabor da sua bebida."
  },
  {
    question: "Quanto tempo preciso tomar para ver resultados?",
    answer: "Os primeiros resultados aparecem em 7 dias (hidratação). Em 30 dias você verá redução de linhas finas e cabelos mais fortes. Para resultados completos e duradouros, recomendamos usar por pelo menos 90 dias consecutivos."
  },
  {
    question: "É seguro? Tem efeitos colaterais?",
    answer: "Totalmente seguro! Nosso colágeno é hidrolisado, natural e não tem contraindicações para a maioria das pessoas. É um suplemento alimentar aprovado pela ANVISA. Grávidas, lactantes e pessoas com condições médicas devem consultar um médico antes."
  },
  {
    question: "Por que o preço varia tanto? Qual kit devo escolher?",
    answer: "Quanto mais você compra, maior o desconto. O kit de 3 pacotes + 1 grátis (120 dias) tem 53% OFF e é o mais escolhido porque garante resultados completos com melhor custo-benefício. Além disso, você não fica sem o produto e mantém a constância."
  },
  {
    question: "Vou emagrecer ou engordar tomando colágeno?",
    answer: "Não! O colágeno não engorda nem emagrece. É uma proteína que age na estrutura da pele, cabelos e unhas. Tem apenas 40 calorias por dose e ajuda a manter a firmeza da pele durante processos de emagrecimento."
  },
  {
    question: "Posso tomar junto com outros suplementos ou remédios?",
    answer: "Sim! O Multicolágeno pode ser tomado junto com vitaminas, outros suplementos e medicamentos. Não há interações conhecidas. Porém, se você toma medicação contínua, consulte seu médico antes de iniciar qualquer suplementação."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium text-sm uppercase tracking-wider">
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
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-purple-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-50 transition"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
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