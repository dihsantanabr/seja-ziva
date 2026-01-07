import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "O que é o Colágeno Verisol® + Ácido Hialurônico e para que serve?",
    answer: "É um suplemento de beleza que combina Colágeno Verisol® (peptídeos bioativos patenteados) com Ácido Hialurônico. Essa fórmula atua de dentro para fora na redução de rugas, aumento da firmeza e hidratação profunda da pele. É ideal para quem busca prevenir e reverter sinais de envelhecimento, melhorando a aparência geral da pele em 4 semanas."
  },
  {
    question: "Como o Colágeno Verisol® age na pele?",
    answer: "O Verisol® contém peptídeos bioativos específicos que estimulam a produção natural de colágeno, elastina e ácido hialurônico nas camadas profundas da pele. Isso melhora a estrutura cutânea, aumenta a firmeza, reduz rugas e linhas de expressão, além de hidratar profundamente. Estudos clínicos comprovam redução visível de rugas em até 4 semanas."
  },
  {
    question: "Para quem o Colágeno Verisol® é indicado?",
    answer: "Indicado para mulheres e homens a partir dos 25 anos que desejam prevenir ou tratar sinais de envelhecimento como rugas, perda de firmeza e hidratação. É especialmente eficaz para peles maduras, ressecadas ou que perderam elasticidade. Também beneficia cabelos e unhas, tornando-os mais fortes e saudáveis."
  },
  {
    question: "Quais são os principais benefícios do Colágeno Verisol®?",
    answer: "Reduz rugas e linhas de expressão em até 20% após 4 semanas; aumenta a firmeza e elasticidade da pele; promove hidratação profunda e duradoura; estimula a produção natural de colágeno; melhora a textura e o brilho da pele; fortalece cabelos e unhas; possui absorção otimizada de peptídeos bioativos; resultados cientificamente comprovados."
  },
  {
    question: "Como devo tomar o Colágeno Verisol®?",
    answer: "Recomenda-se tomar 1 dose (10g) por dia, diluída em 200ml de água, suco ou bebida de sua preferência. Pode ser consumido em qualquer horário, preferencialmente pela manhã ou antes de dormir. Para melhores resultados, mantenha o uso contínuo por pelo menos 3 meses. Não precisa refrigeração após aberto."
  },
  {
    question: "Em quanto tempo posso ver resultados?",
    answer: "Estudos clínicos mostram que os primeiros resultados aparecem em 4 semanas de uso contínuo, com redução visível de rugas e aumento da hidratação. A firmeza e elasticidade melhoram progressivamente, com resultados mais expressivos entre 8 e 12 semanas. A constância é fundamental para maximizar os benefícios."
  },
  {
    question: "O colágeno tem sabor ou deixa gosto ruim?",
    answer: "Nosso Colágeno Verisol® é neutro e inodoro, dissolve-se facilmente em qualquer líquido sem alterar o sabor. Não deixa gosto residual desagradável e pode ser misturado a água, sucos, vitaminas, café ou chás sem interferir no paladar da bebida."
  },
  {
    question: "É um produto natural e seguro?",
    answer: "Sim, nosso colágeno é de origem bovina, hidrolisado (alta absorção), sem conservantes artificiais, glúten, lactose ou açúcar. O Verisol® é uma tecnologia patenteada e clinicamente testada, aprovada por dermatologistas e segura para consumo diário. Seguimos rigorosos padrões de qualidade e pureza."
  },
  {
    question: "Existem contraindicações?",
    answer: "O produto é seguro para adultos saudáveis. Gestantes, lactantes, crianças e pessoas com condições médicas específicas ou alergias a proteínas bovinas devem consultar um médico antes de usar. Não exceda a dose diária recomendada. Não é um medicamento e não substitui alimentação equilibrada."
  },
  {
    question: "Posso tomar colágeno todos os dias?",
    answer: "Sim, o Colágeno Verisol® foi desenvolvido para uso diário contínuo. A ingestão regular é essencial para manter os níveis adequados de colágeno no organismo e sustentar os benefícios para pele, cabelos e unhas. É recomendado incorporá-lo à sua rotina de autocuidado."
  },
  {
    question: "O produto é aprovado por dermatologistas?",
    answer: "Sim, o Colágeno Verisol® é amplamente recomendado por dermatologistas e profissionais de saúde. É sustentado por mais de 15 estudos clínicos que comprovam sua eficácia na redução de rugas, aumento de firmeza e melhora da hidratação da pele."
  },
  {
    question: "Qual o tamanho da embalagem e quanto tempo dura?",
    answer: "Cada pote contém 300g de colágeno puro, equivalente a 30 doses de 10g. Com o uso diário recomendado, um pote dura exatamente 1 mês, proporcionando um tratamento completo e eficaz para sua beleza de dentro para fora."
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