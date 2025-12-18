import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Loader2, X } from 'lucide-react';

const quizSteps = [
  {
    type: 'question',
    question: 'Qual desses alimentos costuma te deixar inchada?',
    options: [
      { text: '🥖 Pão, massas ou pizza', emoji: '🥖' },
      { text: '🍫 Doces ou chocolate', emoji: '🍫' },
      { text: '🍔 Frituras ou fast food', emoji: '🍔' },
      { text: '😩 Quase tudo que como', emoji: '😩' }
    ],
    stat: '+7.792 mulheres responderam "Quase tudo que como"'
  },
  {
    type: 'question',
    question: 'O que você costuma fazer quando quer desinchar?',
    options: [
      { text: '🥤 Suco verde caseiro', emoji: '🥤' },
      { text: '💊 Compro suplementos', emoji: '💊' },
      { text: '🍎 Tento comer melhor', emoji: '🍎' },
      { text: '❌ Nada específico', emoji: '❌' }
    ],
    stat: '+5.213 mulheres responderam "Nada Específico"'
  },
  {
    type: 'question',
    question: 'Se você pudesse escolher um desses para 2026?',
    options: [
      { text: '🤰 Barriga Desinchada', emoji: '🤰' },
      { text: '💩 Intestino Regulado', emoji: '💩' },
      { text: '⚡ Ter mais energia', emoji: '⚡' },
      { text: '✨ Eu queria todos!', emoji: '✨' }
    ],
    stat: '+9.227 mulheres responderam "Eu queria todos!"'
  },
  {
    type: 'awareness',
    title: '🛑 Pare um segundo 🛑',
    subtitle: '🤔 Você já se perguntou…',
    mainText: 'O que REALMENTE está por trás de todos esses problemas?',
    problems: [
      { emoji: '🤰', text: 'Barriga inchada…' },
      { emoji: '💩', text: 'Intestino Preso…' },
      { emoji: '💨', text: 'Estufamento/Gases…' },
      { emoji: '😩', text: 'E cansaço diário…' }
    ],
    bottomText: 'Mas calma!'
  },
  {
    type: 'solution',
    title: 'Nada disso é culpa sua.',
    highlight: 'O problema é a falta do consumo diário de fibras',
    subtitle: 'Mas nós temos a solução',
    buttonText: 'CONTINUAR'
  },
  {
    type: 'question',
    question: 'Você trocaria o inchaço e o intestino preso por uma forma saborosa de consumir fibras?',
    subtitle: '(ou melhor 😉)',
    options: [
      { text: '✅ SIM!', emoji: '✅' },
      { text: '⛔ Prefiro continuar inchada', emoji: '⛔' },
      { text: '🤔 Talvez, se for bom', emoji: '🤔' }
    ],
    stat: '+8.227 mulheres responderam "SIM!"'
  },
  {
    type: 'question',
    question: 'Você entende que o problema não é o que você come…',
    subtitle: '…mas sim o seu corpo não consegue digerir por falta de fibras?',
    options: [
      { text: '🤯 AGORA FAZ SENTIDO!', emoji: '🤯' },
      { text: '⛔ Eu acho que não…', emoji: '⛔' },
      { text: '🤔 Parece verdade', emoji: '🤔' }
    ],
    stat: '+9.256 mulheres responderam "AGORA FAZ SENTIDO!"'
  },
  {
    type: 'final-question',
    subtitle: 'Mas tentar resolver isso comprando suplementos separados pode custar R$15 ou mais por dia',
    question: 'Você gostaria de conhecer uma solução completa e saborosa 3x mais barata?',
    options: [
      { text: '✅ SIM!', emoji: '✅' }
    ],
    stat: '+10.427 mulheres responderam "SIM!"'
  },
  {
    type: 'loading',
    text: '⏳ Analisando suas respostas'
  },
  {
    type: 'recommendation'
  }
];

export default function GreemyQuiz({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleAnswer = (optionIndex) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (currentStep < quizSteps.length - 1) {
        setCurrentStep(currentStep + 1);
        setIsTransitioning(false);
        
        // Auto-advance on loading screen
        if (quizSteps[currentStep + 1].type === 'loading') {
          setTimeout(() => {
            setCurrentStep(currentStep + 2);
          }, 2000);
        }
        
        // Complete quiz on recommendation
        if (quizSteps[currentStep + 1].type === 'recommendation') {
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 1000);
        }
      }
    }, 300);
  };

  const step = quizSteps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-3xl relative">
        {/* Close Button */}
        <button
          onClick={() => onComplete && onComplete()}
          className="absolute -top-4 right-0 z-10 w-10 h-10 bg-white hover:bg-gray-100 rounded-full shadow-lg flex items-center justify-center transition-all"
          aria-label="Fechar quiz"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>



        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            {/* Question Type */}
            {step.type === 'question' && (
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
                  {step.question}
                </h2>
                {step.subtitle && (
                  <p className="text-lg text-gray-600 text-center -mt-4 mb-6">{step.subtitle}</p>
                )}
                <div className="grid gap-4">
                  {step.options.map((option, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(idx)}
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg font-semibold py-5 px-6 rounded-2xl shadow-lg transition-all"
                    >
                      {option.text}
                    </motion.button>
                  ))}
                </div>
                {step.stat && (
                  <p className="text-center text-gray-600 text-sm mt-6">
                    {step.stat}
                  </p>
                )}
              </div>
            )}

            {/* Final Question Type */}
            {step.type === 'final-question' && (
              <div className="space-y-6">
                {step.subtitle && (
                  <p className="text-lg text-gray-700 text-center mb-4">{step.subtitle}</p>
                )}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
                  {step.question}
                </h2>
                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(0)}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-2xl font-bold py-6 px-16 rounded-2xl shadow-lg transition-all"
                  >
                    ✅ SIM!
                  </motion.button>
                </div>
                {step.stat && (
                  <p className="text-center text-gray-600 text-sm mt-6">
                    {step.stat}
                  </p>
                )}
              </div>
            )}

            {/* Awareness Type */}
            {step.type === 'awareness' && (
              <div className="space-y-6 text-center">
                <div className="bg-red-500 text-white text-2xl font-bold py-3 px-6 rounded-xl inline-block">
                  {step.title}
                </div>
                <p className="text-xl text-gray-700">{step.subtitle}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {step.mainText}
                </h2>
                <p className="text-lg text-gray-700 mt-8">Muitas mulheres sofrem com:</p>
                <div className="space-y-4 mt-6">
                  {step.problems.map((problem, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-3 text-2xl">
                      <span className="text-4xl">{problem.emoji}</span>
                      <span className="font-bold text-red-600">{problem.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-2xl font-bold text-gray-900 mt-8">{step.bottomText}</p>
                <Button 
                  onClick={() => handleAnswer(0)}
                  className="mt-8 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg font-semibold py-6 px-12 rounded-2xl"
                >
                  Continuar
                </Button>
              </div>
            )}

            {/* Solution Type */}
            {step.type === 'solution' && (
              <div className="space-y-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 underline">
                  {step.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-900 leading-relaxed">
                  O problema é a <span className="font-bold text-red-600">{step.highlight}</span>
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-8">{step.subtitle}</p>
                <p className="text-gray-600">Toque em "Continuar" para descobrir...</p>
                <Button 
                  onClick={() => handleAnswer(0)}
                  className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl font-bold py-6 px-16 rounded-2xl shadow-lg"
                  size="lg"
                >
                  {step.buttonText}
                </Button>
              </div>
            )}

            {/* Loading Type */}
            {step.type === 'loading' && (
              <div className="space-y-6 text-center py-12">
                <Loader2 className="w-16 h-16 mx-auto text-green-600 animate-spin" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {step.text}
                </h2>
              </div>
            )}

            {/* Recommendation Type */}
            {step.type === 'recommendation' && (
              <div className="space-y-8 text-center">
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xl font-bold py-4 px-6 rounded-2xl inline-block">
                  SUA RECOMENDAÇÃO PERSONALIZADA
                </div>
                
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                  O Suco Verde Anti Inchaço <span className="text-green-600">Greemy</span><br />
                  vai mudar seu corpo em 2026!
                </h2>
                
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Esse suco verde repleto de fibras foi criado para mulheres que querem 
                  <strong> acabar com o inchaço</strong> e <strong>destravar o intestino</strong> de forma rápida e saborosa.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {[
                    { emoji: '🌾', text: 'RICO EM FIBRAS' },
                    { emoji: '💩', text: 'DESTRAVA INTESTINO' },
                    { emoji: '🤰', text: 'ELIMINA INCHAÇO' },
                    { emoji: '👩', text: 'FEITO PARA MULHERES' }
                  ].map((benefit, idx) => (
                    <div key={idx} className="bg-green-50 rounded-2xl p-4">
                      <div className="text-4xl mb-2">{benefit.emoji}</div>
                      <p className="text-sm font-bold text-gray-900">{benefit.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <p className="text-lg italic text-gray-700">Oferta especial para você</p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    <span className="text-red-600">SOMENTE HOJE!</span> Entre em 2026 com<br />
                    um corpo <strong>sem inchaço</strong> e <strong>sem prisão de ventre</strong> - pagando pouco!
                  </h3>
                  
                  <div className="bg-gradient-to-r from-green-50 to-lime-50 rounded-2xl p-8 mt-6">
                    <p className="text-xl font-bold text-gray-900 mb-2">
                      VOCÊ GANHOU A <span className="text-green-600">OFERTA DE VERÃO</span> COM
                    </p>
                    <p className="text-3xl font-bold text-green-600 mb-4">
                      55% DE DESCONTO + FRETE GRÁTIS
                    </p>
                    
                    <Button 
                      onClick={() => onComplete && onComplete()}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl font-bold py-6 px-16 rounded-2xl shadow-lg mt-4"
                      size="lg"
                    >
                      QUERO MEU DESCONTO
                    </Button>
                    
                    <p className="text-sm text-green-700 mt-4 flex items-center justify-center gap-2">
                      <span className="text-lg">✅</span>
                      <span className="font-semibold">PREÇO MAIS BAIXO GARANTIDO</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicator */}
        {step.type !== 'recommendation' && (
          <div className="mt-6 flex justify-center gap-2">
            {quizSteps.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all ${
                  idx === currentStep 
                    ? 'w-8 bg-green-600' 
                    : idx < currentStep 
                    ? 'w-2 bg-green-400' 
                    : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}