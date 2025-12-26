import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "O que é o Óleo de Avocado Ozonizado e para que serve?",
    answer: "O Óleo de Avocado Ozonizado é um produto natural derivado do abacate enriquecido com ozônio, que potencializa suas propriedades regeneradoras. Ele é rico em ácidos graxos essenciais, vitamina E e ômega-9, atuando na hidratação profunda, cicatrização, regeneração celular e proteção da pele contra o envelhecimento precoce. É ideal para tratar peles secas, sensíveis, cicatrizes, manchas e promover um aspecto saudável e radiante."
  },
  {
    question: "Como o óleo ozonizado age na pele?",
    answer: "O ozônio presente no óleo aumenta a oxigenação celular, estimula a produção de colágeno e elastina, e possui ação anti-inflamatória e antimicrobiana. Combinado com as propriedades nutritivas do óleo de avocado, ele penetra profundamente na pele, promovendo regeneração, cicatrização acelerada, redução de manchas e linhas finas, além de fortalecer a barreira cutânea natural."
  },
  {
    question: "Para quem o Óleo de Avocado Ozonizado é indicado?",
    answer: "O produto é indicado para pessoas que buscam hidratação intensa, tratamento de cicatrizes (incluindo acne), manchas, rugas, pele seca ou sensível, e aquelas que desejam prevenir o envelhecimento precoce. É adequado para todos os tipos de pele, inclusive as mais sensíveis, e pode ser usado tanto no rosto quanto no corpo."
  },
  {
    question: "Quais são os principais benefícios do Óleo de Avocado Ozonizado?",
    answer: "Os principais benefícios incluem: hidratação profunda e duradoura, regeneração celular acelerada, ação cicatrizante e anti-inflamatória, redução de manchas e marcas, atenuação de rugas e linhas de expressão, proteção antioxidante contra radicais livres, melhora da elasticidade e firmeza da pele, absorção rápida sem deixar oleosidade excessiva, e adequação para peles sensíveis."
  },
  {
    question: "Como devo usar o Óleo de Avocado Ozonizado?",
    answer: "Aplique de 2 a 3 gotas do óleo na pele limpa e seca, massageando suavemente até completa absorção. Pode ser usado pela manhã e/ou à noite, no rosto e corpo. Para cicatrizes e manchas, aplique diretamente na área afetada com massagens circulares. O produto pode ser usado sozinho ou misturado ao seu hidratante habitual para potencializar os resultados."
  },
  {
    question: "Em quanto tempo posso ver resultados?",
    answer: "Muitas pessoas percebem a pele mais hidratada e macia já nas primeiras aplicações. Para resultados mais profundos como redução de manchas, cicatrizes e rugas, recomenda-se uso contínuo por pelo menos 4 a 6 semanas. A constância é fundamental para obter os melhores benefícios regeneradores do óleo ozonizado."
  },
  {
    question: "O óleo deixa a pele oleosa?",
    answer: "Não. Apesar de ser um óleo, o produto possui textura leve e absorção rápida, não deixando a pele com aspecto oleoso ou pesado. A fórmula é desenvolvida para penetrar profundamente nas camadas da pele, proporcionando hidratação intensa sem obstruir os poros."
  },
  {
    question: "O Óleo de Avocado Ozonizado é 100% natural?",
    answer: "Sim, nosso óleo é 100% natural, extraído do abacate e enriquecido com ozônio através de processo tecnológico controlado. Não contém parabenos, sulfatos, fragrâncias artificiais ou ingredientes sintéticos nocivos. É uma opção segura e eficaz para quem busca cuidados naturais com a pele."
  },
  {
    question: "Existem contraindicações?",
    answer: "O produto é seguro para uso tópico e adequado para todos os tipos de pele. No entanto, gestantes, lactantes e pessoas com condições dermatológicas específicas devem consultar um médico antes de usar. Recomenda-se fazer um teste de sensibilidade aplicando uma pequena quantidade no antebraço antes do primeiro uso."
  },
  {
    question: "Posso usar o óleo todos os dias?",
    answer: "Sim, o Óleo de Avocado Ozonizado foi desenvolvido para uso diário. A aplicação regular é recomendada para obter os melhores resultados de hidratação, regeneração e proteção da pele. Pode ser incorporado à sua rotina de skincare matinal e noturna sem problemas."
  },
  {
    question: "O produto é aprovado por dermatologistas?",
    answer: "Sim, nosso Óleo de Avocado Ozonizado é recomendado por dermatologistas e profissionais de saúde da pele. A fórmula combina ciência e natureza, oferecendo benefícios comprovados para diversos tipos de pele e necessidades dermatológicas."
  },
  {
    question: "Qual o tamanho do frasco e quanto tempo dura?",
    answer: "O frasco contém 30ml de produto puro e concentrado. Com o uso diário recomendado de 2 a 3 gotas por aplicação, um frasco dura aproximadamente 30 dias, proporcionando um tratamento completo e eficaz para sua pele."
  }
];

export default function GreemyFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 font-medium text-sm uppercase tracking-wider">
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
              className="bg-white rounded-2xl shadow-md border border-teal-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-teal-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform ${
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