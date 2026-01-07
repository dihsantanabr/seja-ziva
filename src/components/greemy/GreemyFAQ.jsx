import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "O colágeno realmente ajuda com a flacidez da pele?",
    answer: "Sim! O colágeno atua como um suporte estrutural interno, ajudando a pele a manter firmeza quando usado de forma contínua. Estudos com Colágeno Verisol® mostram que ele contribui para melhorar a elasticidade e densidade da pele. É importante entender que não é um tratamento milagroso, mas um complemento que, junto com bons hábitos, ajuda a dar sustentação à pele."
  },
  {
    question: "Já tenho mais de 40 anos, ainda vai ajudar?",
    answer: "Sim! Após os 30 anos, o corpo reduz naturalmente a produção de colágeno, e esse processo se intensifica com o tempo. Por isso, a suplementação pode ser ainda mais relevante para quem tem mais de 40 anos. Muitas pessoas relatam perceber melhora na firmeza e textura da pele quando usam de forma regular."
  },
  {
    question: "Em quanto tempo posso começar a perceber diferença?",
    answer: "Os resultados são progressivos e variam de pessoa para pessoa. Algumas pessoas relatam sentir a pele mais hidratada nas primeiras semanas. Melhorias em firmeza e elasticidade costumam ser mais perceptíveis entre 4 a 12 semanas de uso contínuo. A constância e a escolha correta fazem toda a diferença."
  },
  {
    question: "Por que esse colágeno é mais caro que outros?",
    answer: "Porque você está pagando por qualidade comprovada, não por pó qualquer! Verisol® é a única tecnologia patenteada com estudos científicos que provam que funciona. Colágenos baratos não têm peptídeos específicos, então são pouco absorvidos e eliminados pelo corpo. É como comparar um cosmético de farmácia com um de dermatologista - a diferença está nos resultados."
  },
  {
    question: "Posso tomar com outros suplementos que já uso?",
    answer: "Sim! O Colágeno Verisol® é seguro e complementa perfeitamente vitaminas, ômega 3, biotina, e outros suplementos. Inclusive, muitas pessoas tomam junto com vitamina C para potencializar a absorção do colágeno. Não há interações negativas. Se toma algum medicamento controlado, consulte seu médico por precaução."
  },
  {
    question: "Tem algum gosto ruim? Como eu tomo?",
    answer: "É completamente sem sabor e sem cheiro! Você dissolve 10g (1 medidor) em qualquer líquido: água, suco, café, vitamina, iogurte... Dissolve rapidinho e não altera nada o sabor da bebida. A maioria das nossas clientes toma pela manhã no café ou suco, vira hábito automático na rotina."
  },
  {
    question: "Vou engordar tomando colágeno?",
    answer: "Não! Cada dose tem apenas 36 calorias e zero açúcar. É uma proteína pura que não engorda. Pelo contrário, muitas clientes relatam que o colágeno ajuda na saciedade e até auxilia na perda de peso quando combinado com dieta equilibrada, porque é proteína de alta qualidade."
  },
  {
    question: "Meu cabelo e unha também melhoram?",
    answer: "Sim! Embora o foco seja a pele, o colágeno é a proteína estrutural de todo o corpo. Nossas clientes relatam muito que as unhas ficam mais fortes, crescem mais rápido e param de descamar. O cabelo fica menos quebradiço, com mais brilho e cresce mais saudável. É um bônus maravilhoso!"
  },
  {
    question: "Preciso tomar para sempre ou posso parar depois?",
    answer: "O ideal é incorporar na rotina para manter os resultados, já que nosso corpo continua perdendo colágeno com o tempo. Mas você não é 'dependente' - se parar, sua pele volta ao estado natural dela, não piora do que era antes. Pense como academia: para manter os resultados, você precisa continuar. Mas os benefícios acumulados não desaparecem de uma hora pra outra."
  },
  {
    question: "Grávida ou amamentando pode tomar?",
    answer: "Por segurança e precaução, recomendamos que gestantes e lactantes consultem seu obstetra antes de usar qualquer suplemento, incluindo colágeno. Embora seja um produto natural e seguro, cada gravidez é única e seu médico conhece seu histórico. Depois da amamentação, pode voltar sem problemas!"
  },
  {
    question: "É vegano? Tenho restrições alimentares.",
    answer: "Nosso colágeno é de origem bovina (bovino hidrolisado), portanto não é vegano. É livre de glúten, lactose, açúcar e conservantes artificiais. Para vegetarianos que consomem derivados animais, não há problema. Ainda não existe colágeno vegetal no mercado - o que existe são estimuladores de colágeno, que têm mecanismo diferente."
  },
  {
    question: "Se eu não gostar, posso devolver?",
    answer: "Sim! Oferecemos garantia de 30 dias. Se por qualquer motivo você não ficar satisfeita, devolvemos 100% do seu dinheiro, sem burocracia. Estamos tão confiantes nos resultados que assumimos todo o risco para você. Você só precisa entrar em contato com nossa equipe dentro dos 30 dias."
  },
  {
    question: "Quantos potes devo comprar para ver resultado?",
    answer: "Recomendamos começar com 3 potes (3 meses) para experimentar os resultados completos que os estudos mostram. Cada pote dura 30 dias. Você pode começar com 1 para testar, mas os resultados mais impressionantes acontecem após 8-12 semanas de uso contínuo. Por isso o kit com 3 unidades sai mais em conta e garante o tratamento completo."
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