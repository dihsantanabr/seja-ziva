import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function LinkBioQuiz({ onComplete }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState(1);

  // Mapeamento FIXO: Objetivo → Produto Principal
  const productMapping = {
    'aparencia': 'colageno',
    'firmeza': 'lift',
    'forca': 'creatina',
    'multiplo': 'colageno' // Âncora: Colágeno é o mais abrangente
  };

  const products = {
    colageno: {
      icon: '🧬',
      title: 'Colágeno RenovaBe',
      subtitle: 'Para pele, unhas e cabelo',
      url: 'https://colageno.renovabe.com'
    },
    lift: {
      icon: '✨',
      title: 'Lift RenovaBe',
      subtitle: 'Para firmeza e cuidado corporal',
      url: 'https://lift.renovabe.com'
    },
    creatina: {
      icon: '💪',
      title: 'Creatina RenovaBe',
      subtitle: 'Para força, energia e desempenho',
      url: 'https://creatina.renovabe.com'
    }
  };

  // Produtos complementares (sempre os outros 2)
  const getComplementaryProducts = (productKey) => {
    const allKeys = ['colageno', 'lift', 'creatina'];
    return allKeys
      .filter(key => key !== productKey)
      .map(key => ({
        ...products[key],
        description: products[key].subtitle
      }));
  };

  // Perguntas dinâmicas para Pergunta 3 (apenas contexto, não muda produto)
  const dynamicQuestions = {
    aparencia: [
      { id: 'flacidez', label: 'Flacidez ou perda de firmeza', emoji: '😕' },
      { id: 'pele-opaca', label: 'Pele opaca, linhas ou rugas', emoji: '😔' },
      { id: 'unhas', label: 'Unhas fracas e quebradiças', emoji: '💅' },
      { id: 'cabelo', label: 'Cabelo fino e fraco', emoji: '💇‍♀️' }
    ],
    firmeza: [
      { id: 'flacidez', label: 'Flacidez corporal', emoji: '😕' },
      { id: 'textura', label: 'Textura e aparência da pele', emoji: '🎨' },
      { id: 'postura', label: 'Quero melhorar a autoconfiança', emoji: '✨' },
      { id: 'celulite', label: 'Aparência de celulite', emoji: '🔄' }
    ],
    forca: [
      { id: 'energia', label: 'Falta de energia', emoji: '⚡' },
      { id: 'ganho', label: 'Dificuldade de ganhar força', emoji: '💪' },
      { id: 'treino', label: 'Treinos sem rendimento', emoji: '🏋️' },
      { id: 'cansaco', label: 'Cansaço frequente', emoji: '😴' }
    ],
    multiplo: [
      { id: 'pele-forca', label: 'Pele + Força', emoji: '🌟' },
      { id: 'pele-corpo', label: 'Pele + Firmeza corporal', emoji: '✨' },
      { id: 'todos', label: 'Todos os objetivos acima', emoji: '🚀' },
      { id: 'nao-sei', label: 'Não tenho certeza', emoji: '🤔' }
    ]
  };

  const routineOptions = [
    { id: 'corrida', label: 'Corrida, preciso de algo simples', emoji: '⚡' },
    { id: 'pratica', label: 'Consigo manter rotina se for prática', emoji: '✅' },
    { id: 'organizada', label: 'Sou organizada e sigo bem hábitos', emoji: '📋' },
    { id: 'varia', label: 'Varia muito de semana para semana', emoji: '🔄' }
  ];

  const handleAnswer = (answerId) => {
    if (step === 0) {
      // Nome
      setAnswers({ ...answers, name: answerId });
      setDirection(1);
      setStep(1);
    } else if (step === 1) {
      // Objetivo principal (DEFINE O PRODUTO)
      setAnswers({ ...answers, objective: answerId });
      setDirection(1);
      setStep(2);
    } else if (step === 2) {
      // Contexto/Sintoma (apenas para personalização)
      setAnswers({ ...answers, symptom: answerId });
      setDirection(1);
      setStep(3);
    } else if (step === 3) {
      // Rotina (apenas para personalização)
      setAnswers({ ...answers, routine: answerId });
      setDirection(1);
      setStep(4);
    } else if (step === 4) {
      // Email
      setAnswers({ ...answers, email: answerId });
      setShowResult(true);
    }
  };

  const goBack = () => {
    if (step > 0) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  // Obtém o produto principal BASEADO NA PERGUNTA 2
  const getMainProduct = () => {
    const productKey = productMapping[answers.objective];
    return products[productKey];
  };

  // Obtém os produtos complementares
  const getComplementary = () => {
    const productKey = productMapping[answers.objective];
    return getComplementaryProducts(productKey);
  };

  // Gera texto personalizado baseado no sintoma
  const getPersonalizedText = () => {
    const objective = answers.objective;
    const symptom = answers.symptom;
    const productKey = productMapping[objective];

    const texts = {
      colageno: {
        flacidez: 'atua na firmeza e elasticidade, reduzindo a aparência de flacidez com constância.',
        'pele-opaca': 'reduz rugas e linhas, devolvendo luminosidade e viço natural à sua pele.',
        unhas: 'fortalece unhas de dentro para fora, reduzindo quebra e descamação.',
        cabelo: 'potencializa a saúde dos fios, deixando-os mais fortes e brilhantes.',
        'pele-forca': 'cuida da pele enquanto você trabalha seu desempenho.',
        'pele-corpo': 'melhora a aparência da pele enquanto reforça sua confiança.',
        todos: 'é a solução mais abrangente, cuidando de pele, unhas e cabelo simultaneamente.',
        'nao-sei': 'é a escolha mais versátil, servindo como base para diversos objetivos de beleza.'
      },
      lift: {
        flacidez: 'trabalha especificamente em firmeza corporal e redução de flacidez.',
        textura: 'melhora a textura da pele corporal, deixando-a mais lisa e viçosa.',
        postura: 'aumenta sua confiança ao melhorar a aparência e firmeza da pele.',
        celulite: 'reduz a aparência de celulite e melhora a textura geral da pele.',
        'pele-forca': 'complementa seu cuidado estético com foco em firmeza corporal.',
        'pele-corpo': 'é a solução principal para quem busca firmeza e cuidado corporal.',
        todos: 'trabalha a firmeza enquanto você cuida de outros objetivos também.',
        'nao-sei': 'é ideal se seu foco é melhorar a aparência e firmeza da pele corporal.'
      },
      creatina: {
        energia: 'aumenta energia diária e potencializa seu desempenho nos treinos.',
        ganho: 'melhora sua capacidade de ganhar força e resistência.',
        treino: 'otimiza seu rendimento durante os exercícios, amplificando resultados.',
        cansaco: 'reduz fadiga e aumenta disposição para suas atividades.',
        'pele-forca': 'potencializa sua força enquanto você cuida da saúde da pele.',
        'pele-corpo': 'complementa seu cuidado estético com foco em desempenho.',
        todos: 'é perfeita se você quer força e energia para melhorar também em outros aspectos.',
        'nao-sei': 'é ideal se seu foco é aumentar força, energia e desempenho físico.'
      }
    };

    return texts[productKey]?.[symptom] || 'é o produto mais indicado para seus objetivos neste momento.';
  };

  const progress = ((step + 1) / 5) * 100;

  if (showResult) {
    const mainProduct = getMainProduct();
    const complementary = getComplementary();

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-6 lg:p-8"
        onAnimationComplete={() => onComplete?.()}
      >
        {/* Headline */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            {answers.name}, encontramos a melhor opção para você
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Com base no seu objetivo principal e na sua rotina, este é o produto mais indicado para você neste momento.
          </p>
        </div>

        {/* Produto Principal */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
          <Badge className="bg-pink-600 text-white mb-3">Recomendado para você</Badge>
          
          <div className="mb-4">
            <div className="text-4xl sm:text-5xl mb-3">{mainProduct.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
              {mainProduct.title}
            </h3>
            <p className="text-sm text-pink-600 font-semibold mb-4">
              {mainProduct.subtitle}
            </p>
          </div>

          <p className="text-sm sm:text-base text-gray-700 mb-6">
            <span className="font-semibold">{mainProduct.title}</span> {getPersonalizedText()}
          </p>

          {/* CTA PRINCIPAL - ÚNICO */}
          <Button
            onClick={() => window.open(mainProduct.url, '_blank')}
            className="w-full h-12 sm:h-14 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white text-sm sm:text-base font-bold rounded-lg sm:rounded-xl"
          >
            👉 Acessar o site
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Produtos Complementares (SEM CTA PRINCIPAL) */}
        {complementary.length > 0 && (
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-3 sm:mb-4">
              Dependendo da sua rotina, estes produtos também podem complementar seus resultados:
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {complementary.map((product, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-3 hover:border-pink-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{product.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm font-semibold text-gray-900">{product.title}</h5>
                      <p className="text-xs text-gray-600">{product.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <p className="text-center text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8">
          ✓ Frete Grátis • ✓ 10% Cashback • ✓ Compra 100% segura
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
      {/* Progress Bar */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs sm:text-sm font-medium text-gray-600">
            Pergunta {step + 1} de 5
          </span>
          <span className="text-xs sm:text-sm font-medium text-pink-600">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-400 to-rose-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: direction * 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -50 }}
          transition={{ duration: 0.3 }}
        >
          {/* Step 0: Nome */}
          {step === 0 && (
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Qual é o seu nome?
              </h3>
              <div className="space-y-3">
                <Input
                  type="text"
                  placeholder="Digite seu nome"
                  value={answers.name || ''}
                  onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && answers.name?.trim()) {
                      handleAnswer(answers.name);
                    }
                  }}
                  className="h-12 text-base"
                  autoFocus
                />
                <Button
                  onClick={() => answers.name?.trim() && handleAnswer(answers.name)}
                  disabled={!answers.name?.trim()}
                  className="w-full h-12 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-semibold disabled:opacity-50"
                >
                  Continuar
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 1: Objetivo Principal (DECISIVO) */}
          {step === 1 && (
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                O que você mais quer melhorar neste momento?
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { id: 'aparencia', label: 'Aparência da pele, unhas ou cabelo', emoji: '✨' },
                  { id: 'firmeza', label: 'Firmeza corporal e textura da pele', emoji: '💪' },
                  { id: 'forca', label: 'Força, energia ou desempenho físico', emoji: '🚀' },
                  { id: 'multiplo', label: 'Mais de um desses objetivos', emoji: '🌟' }
                ].map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full min-h-[56px] p-3 sm:p-4 rounded-xl border-2 text-left transition-all active:scale-95 border-gray-200 hover:border-pink-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl">{option.emoji}</span>
                      <span className="text-sm sm:text-base font-medium text-gray-700 flex-1">{option.label}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Contexto/Sintoma (personalização) */}
          {step === 2 && (
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                O que mais te incomoda hoje?
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {dynamicQuestions[answers.objective]?.map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full min-h-[56px] p-3 sm:p-4 rounded-xl border-2 text-left transition-all active:scale-95 border-gray-200 hover:border-pink-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl">{option.emoji}</span>
                      <span className="text-sm sm:text-base font-medium text-gray-700 flex-1">{option.label}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </motion.button>
                ))}
              </div>
              <Button onClick={goBack} variant="outline" className="w-full mt-4 h-11">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </div>
          )}

          {/* Step 3: Rotina (personalização) */}
          {step === 3 && (
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Como é sua rotina hoje?
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {routineOptions.map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full min-h-[56px] p-3 sm:p-4 rounded-xl border-2 text-left transition-all active:scale-95 border-gray-200 hover:border-pink-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl">{option.emoji}</span>
                      <span className="text-sm sm:text-base font-medium text-gray-700 flex-1">{option.label}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </motion.button>
                ))}
              </div>
              <Button onClick={goBack} variant="outline" className="w-full mt-4 h-11">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </div>
          )}

          {/* Step 4: Email */}
          {step === 4 && (
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                Com base nas suas respostas...
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Vamos preparar uma recomendação personalizada para você.
              </p>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Digite seu melhor e-mail"
                  value={answers.email || ''}
                  onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && answers.email?.trim()) {
                      handleAnswer(answers.email);
                    }
                  }}
                  className="h-12 text-base"
                  autoFocus
                />
                <Button
                  onClick={() => answers.email?.trim() && handleAnswer(answers.email)}
                  disabled={!answers.email?.trim()}
                  className="w-full h-12 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-semibold disabled:opacity-50"
                >
                  Ver recomendação
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <Button onClick={goBack} variant="outline" className="w-full mt-3 h-11">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}