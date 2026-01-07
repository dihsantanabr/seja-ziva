import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Star, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const questions = [
  {
    id: 1,
    question: "Como você descreveria sua pele hoje?",
    options: [
      { id: "seca", label: "Pele seca ou ressecada", emoji: "🌵" },
      { id: "mista", label: "Pele mista", emoji: "🔄" },
      { id: "oleosa", label: "Pele oleosa", emoji: "💧" },
      { id: "sensivel", label: "Pele sensível", emoji: "🌸" }
    ]
  },
  {
    id: 2,
    question: "O que mais te incomoda na sua pele?",
    options: [
      { id: "flacidez", label: "Flacidez ou perda de firmeza", emoji: "😕" },
      { id: "linhas", label: "Linhas finas e rugas", emoji: "😕" },
      { id: "hidratacao", label: "Falta de hidratação", emoji: "😕" },
      { id: "vico", label: "Falta de viço", emoji: "😕" }
    ]
  },
  {
    id: 3,
    question: "Qual seu objetivo principal?",
    options: [
      { id: "firmeza", label: "Deixar a pele mais firme", emoji: "✨" },
      { id: "hidratacao", label: "Melhorar a hidratação", emoji: "✨" },
      { id: "envelhecimento", label: "Reduzir sinais de envelhecimento", emoji: "✨" },
      { id: "prevencao", label: "Prevenir o envelhecimento", emoji: "✨" }
    ]
  },
  {
    id: 4,
    question: "Como é sua rotina com suplementos?",
    options: [
      { id: "organizada", label: "Tomo todos os dias", emoji: "🕒" },
      { id: "esquece", label: "Às vezes esqueço", emoji: "🕒" },
      { id: "pratico", label: "Precisa ser prático", emoji: "🕒" },
      { id: "primeira", label: "Nunca tomei colágeno", emoji: "🕒" }
    ]
  }
];

export default function LinkBioQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState(1);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (optionId) => {
    setAnswers({ ...answers, [question.id]: optionId });
    
    // Auto-advance
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setDirection(1);
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }, 300);
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setDirection(-1);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleCheckout = () => {
    window.location.href = 'https://seguro.avozon.com.br/r/9LBQYYJH8D';
  };

  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-xl p-6 lg:p-10"
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            🎯 Seu colágeno ideal está aqui
          </h2>
          <p className="text-gray-600">
            Com base no seu tipo de pele, no que mais te incomoda hoje e na sua rotina, este é o colágeno mais indicado para você.
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 mb-6">
          <Badge className="bg-pink-600 text-white mb-3">Recomendado para você</Badge>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Colágeno Verisol® + Ácido Hialurônico
          </h3>
          <p className="text-pink-700 font-semibold mb-4">
            Beleza que começa de dentro para fora
          </p>

          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Reduz rugas e linhas de expressão</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Aumenta firmeza e elasticidade</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Hidrata profundamente sua pele</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-semibold">10g por porção</span>
              <span>•</span>
              <span>Uso diário simples</span>
              <span>•</span>
              <span>Não é medicamento</span>
            </div>
          </div>
        </div>

        <Button 
          onClick={handleCheckout}
          className="w-full h-14 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white text-lg font-bold rounded-xl shadow-lg"
        >
          👉 Começar minha rotina personalizada
        </Button>

        <p className="text-center text-sm text-gray-500 mt-4">
          ✓ Frete Grátis • ✓ 10% Cashback • ✓ Resultados em 4 Semanas
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            Pergunta {currentQuestion + 1} de {questions.length}
          </span>
          <span className="text-sm font-medium text-pink-600">
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
          key={currentQuestion}
          initial={{ opacity: 0, x: direction * 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -50 }}
          transition={{ duration: 0.3 }}
        >
          {/* Question */}
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
            {question.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option) => (
              <motion.button
                key={option.id}
                onClick={() => handleAnswer(option.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                  answers[question.id] === option.id
                    ? 'border-pink-500 bg-pink-50'
                    : 'border-gray-200 hover:border-pink-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{option.emoji}</span>
                  <span className="font-medium text-gray-700 flex-1">
                    {option.label}
                  </span>
                  {answers[question.id] === option.id && (
                    <Check className="w-5 h-5 text-pink-600" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Navigation */}
          {currentQuestion > 0 && (
            <Button
              onClick={prevQuestion}
              variant="outline"
              className="w-full h-12"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Voltar
            </Button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}