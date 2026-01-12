import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ChevronRight, Shield, Instagram, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import LinkBioQuiz from '../components/linkbio/LinkBioQuiz';

export default function LinkBio() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const quizRef = useRef(null);

  const products = [
    {
      icon: '🧬',
      title: "Colágeno RenovaBe",
      subtitle: "Para pele, unhas e cabelo",
      description: "Ideal para quem busca melhorar a aparência da pele, fortalecer unhas e cabelos.",
      url: "https://colageno.renovabe.com"
    },
    {
      icon: '💪',
      title: "Creatina RenovaBe",
      subtitle: "Para força, energia e desempenho",
      description: "Para quem treina e busca mais força, resistência e performance no dia a dia.",
      url: "https://creatina.renovabe.com"
    },
    {
      icon: '✨',
      title: "Lift RenovaBe",
      subtitle: "Para firmeza e cuidado corporal",
      description: "Cuidado corporal focado em firmeza, textura e aparência da pele.",
      url: "https://lift.renovabe.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-white">
      {/* HERO: Foco Total no Quiz */}
      <section className="px-3 sm:px-4 py-8 sm:py-12 bg-gradient-to-br from-white to-pink-50">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-10"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695d9796d8674f7efcac0aa1/81df3e842_LOGO-RENOVA-PRETO2.png" 
              alt="RenovaBe" 
              className="h-16 sm:h-20 mx-auto mb-4 sm:mb-6 object-contain"
            />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Descubra o produto ideal para o seu objetivo hoje
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
              Responda algumas perguntas rápidas e receba uma recomendação personalizada para sua rotina.
            </p>
          </motion.div>

          {/* CTA Principal */}
          <div className="flex flex-col gap-4 mb-8 sm:mb-10">
            <Button
              onClick={() => quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              className="w-full h-14 sm:h-16 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white text-base sm:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              👉 Quero descobrir o ideal para mim
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
            </Button>
          </div>

          {/* Prova de Valor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100"
          >
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm sm:text-base text-gray-700">Leva menos de 1 minuto</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm sm:text-base text-gray-700">Considera seu objetivo e sua rotina</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm sm:text-base text-gray-700">Recomenda o produto mais indicado para você</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUIZ */}
      <section ref={quizRef} className="px-3 sm:px-4 py-8 sm:py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              Ou deixe o quiz escolher para você
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Responda 4 perguntas rápidas e receba uma recomendação personalizada
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <LinkBioQuiz onComplete={() => setQuizCompleted(true)} />
          </motion.div>
        </div>
      </section>

      {/* PRODUTOS - Acesso Direto */}
      <section className="px-3 sm:px-4 py-8 sm:py-12 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-10">
              Ou acesse direto por objetivo
            </h2>

              <div className="grid gap-4 sm:gap-6">
                {products.map((product, idx) => (
                  <motion.a
                    key={idx}
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block bg-white rounded-xl sm:rounded-2xl shadow-md border border-gray-100 p-4 sm:p-6 hover:shadow-xl hover:border-pink-300 transition-all active:scale-95"
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <span className="text-4xl sm:text-5xl flex-shrink-0">{product.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                          {product.title}
                        </h3>
                        <p className="text-sm text-pink-600 font-medium mb-2">
                          {product.subtitle}
                        </p>
                        <p className="text-sm text-gray-600">
                          {product.description}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

      {/* CTA DE REFORÇO */}
      {quizCompleted && (
        <section className="px-3 sm:px-4 py-8 sm:py-10 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Ainda em dúvida?
              </h3>
              <Button
                onClick={() => {
                  setQuizCompleted(false);
                  quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-semibold px-8 py-3 sm:py-4 rounded-lg"
              >
                👉 Faça o quiz e descubra o ideal para você
              </Button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Rodapé de Confiança */}
      <footer className="py-6 sm:py-8 px-4 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm text-gray-600 mb-3 sm:mb-4">
              <span className="font-semibold text-gray-900">RenovaBe</span> – Site Oficial
            </p>
            <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                Compra segura
              </span>
              <span>•</span>
              <span>Produtos originais</span>
              <span>•</span>
              <span>Entrega em todo o Brasil</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}