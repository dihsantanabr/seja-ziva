import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "O simbiótico realmente previne candidíase?",
    answer: "Sim! O Simbiótico Íntimo contém cepas probióticas específicas (L. Rhamnosus e L. Reuteri) que restauram o equilíbrio da flora vaginal, criando um ambiente desfavorável para o crescimento de fungos como a Candida. Estudos mostram que o uso regular ajuda a prevenir infecções recorrentes quando usado de forma contínua junto com bons hábitos de higiene."
  },
  {
    question: "Em quanto tempo posso perceber melhora nos sintomas?",
    answer: "Os resultados variam de pessoa para pessoa. Muitas mulheres relatam alívio de sintomas como coceira e odor já na primeira semana. Para equilíbrio completo do pH e prevenção de infecções, recomenda-se uso contínuo por 30 dias. A constância é fundamental para resultados duradouros."
  },
  {
    question: "Posso tomar durante tratamento com antibióticos?",
    answer: "É recomendado aguardar o término do tratamento antibiótico, pois eles podem eliminar também as bactérias benéficas do probiótico. O ideal é começar o uso do Simbiótico Íntimo após finalizar os antibióticos, para repovoar a flora vaginal que foi afetada. Consulte seu médico para orientação específica."
  },
  {
    question: "Tem algum gosto ou cheiro desagradável?",
    answer: "Não! O Simbiótico Íntimo vem em sachês com sabores agradáveis de frutas (cranberry, limão, tangerina, etc.). Você dissolve 1 sachê em 200ml de água fria, mexe bem e bebe. É refrescante e fácil de incorporar na rotina matinal, tomando em jejum para melhor absorção."
  },
  {
    question: "Posso usar junto com outros suplementos?",
    answer: "Sim! O Simbiótico Íntimo é seguro e pode ser usado com outros suplementos como vitaminas, colágeno, ômega 3, etc. Não há interações negativas. Se você usa medicamentos controlados ou tem alguma condição de saúde específica, consulte seu médico por precaução."
  },
  {
    question: "Grávida ou amamentando pode usar?",
    answer: "Por precaução, recomendamos que gestantes e lactantes consultem seu obstetra ou ginecologista antes de usar qualquer suplemento, incluindo probióticos. Cada gestação é única e seu médico conhece seu histórico. Após a amamentação, pode usar normalmente para restaurar a saúde íntima."
  },
  {
    question: "É vegano? Tem glúten ou lactose?",
    answer: "O Simbiótico Íntimo é livre de glúten e lactose, atendendo quem tem essas restrições. Quanto ao veganismo, as cepas probióticas são cultivadas em meio de cultura, e o produto final não contém ingredientes de origem animal direta. Consulte a lista completa de ingredientes na embalagem se tiver restrições específicas."
  },
  {
    question: "Preciso guardar na geladeira?",
    answer: "Não é necessário! Nossos sachês são estáveis em temperatura ambiente. Guarde em local fresco e seco, longe da luz solar direta. A embalagem individual protege os probióticos e mantém sua viabilidade até a data de validade. Isso torna o produto prático para levar na bolsa ou viajar."
  },
  {
    question: "Por que tomar em jejum?",
    answer: "O uso em jejum permite que os probióticos atravessem o estômago com menos ácido gástrico, aumentando a quantidade de bactérias vivas que chegam ao intestino e, posteriormente, à região vaginal. Recomendamos tomar pela manhã, 20-30 minutos antes do café da manhã, para melhor eficácia."
  },
  {
    question: "Resolve o problema do odor vaginal?",
    answer: "Sim! O odor vaginal desagradável geralmente é causado por desequilíbrio na flora, com crescimento excessivo de bactérias ruins. O Simbiótico Íntimo repovoação as bactérias benéficas, restaura o pH e elimina o odor na origem. Muitas clientes relatam melhora significativa já nos primeiros 7-14 dias."
  },
  {
    question: "Quantas caixas devo comprar?",
    answer: "Recomendamos iniciar com 3 caixas (90 sachês total) para um tratamento completo de 3 meses. Cada caixa contém 30 sachês. Esse período permite que sua flora vaginal se restabeleça completamente e você experimente todos os benefícios. O kit com 3 unidades oferece melhor custo-benefício."
  },
  {
    question: "Posso usar durante a menstruação?",
    answer: "Sim! Você pode e deve continuar usando durante a menstruação. Na verdade, o período menstrual pode alterar o pH vaginal, então manter o uso do probiótico ajuda a proteger sua flora nessa fase. Não há contraindicação."
  }
];

export default function GreemyFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-500 font-medium text-sm uppercase tracking-wider">
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
              className="bg-white rounded-2xl shadow-md border border-pink-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-pink-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-pink-600 flex-shrink-0 transition-transform ${
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