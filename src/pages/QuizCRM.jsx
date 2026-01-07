import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Mail, Star, Gift, Sparkles, Clock, Coffee, Moon, Sun, Droplets, Wind, Flame } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const questions = [
  {
    id: 1,
    title: "Qual é o seu horário favorito para cuidar da sua pele?",
    subtitle: "Entender sua rotina nos ajuda a personalizar melhor nossas comunicações",
    type: "single",
    options: [
      { id: "manha", label: "Logo pela manhã, ao acordar", emoji: "☀️", icon: Sun },
      { id: "tarde", label: "Durante a tarde", emoji: "🌤️", icon: Coffee },
      { id: "noite", label: "À noite, antes de dormir", emoji: "🌙", icon: Moon },
      { id: "varia", label: "Varia bastante, depende do dia", emoji: "🔄", icon: Clock }
    ]
  },
  {
    id: 2,
    title: "Como você descreveria sua rotina de cuidados?",
    subtitle: "Queremos entender melhor seus hábitos",
    type: "single",
    options: [
      { id: "completa", label: "Completa e consistente - nunca esqueço", emoji: "✨", icon: Sparkles },
      { id: "simples", label: "Simples e prática - o básico funciona", emoji: "⚡", icon: Flame },
      { id: "irregular", label: "Irregular - faço quando consigo", emoji: "🌊", icon: Wind },
      { id: "iniciante", label: "Estou começando agora", emoji: "🌱", icon: Droplets }
    ]
  },
  {
    id: 3,
    title: "Qual é o seu maior desafio com sua pele atualmente?",
    subtitle: "Isso nos ajuda a enviar conteúdo mais relevante",
    type: "single",
    options: [
      { id: "hidratacao", label: "Manter a hidratação", emoji: "💧" },
      { id: "firmeza", label: "Melhorar firmeza e elasticidade", emoji: "💪" },
      { id: "manchas", label: "Reduzir manchas e uniformizar tom", emoji: "✨" },
      { id: "prevencao", label: "Prevenir o envelhecimento", emoji: "🛡️" },
      { id: "sensibilidade", label: "Controlar sensibilidade", emoji: "🌸" }
    ]
  },
  {
    id: 4,
    title: "Quanto tempo você dedica aos seus cuidados diários?",
    subtitle: "Sua resposta nos ajuda a criar dicas práticas para você",
    type: "single",
    options: [
      { id: "menos-5", label: "Menos de 5 minutos", emoji: "⚡" },
      { id: "5-10", label: "Entre 5 e 10 minutos", emoji: "⏱️" },
      { id: "10-20", label: "Entre 10 e 20 minutos", emoji: "⏳" },
      { id: "mais-20", label: "Mais de 20 minutos - adoro esse momento", emoji: "💆‍♀️" }
    ]
  },
  {
    id: 5,
    title: "O que mais te motiva a cuidar da sua pele?",
    subtitle: "Última pergunta! Vamos preparar sua recompensa",
    type: "single",
    options: [
      { id: "autoestima", label: "Aumentar minha autoestima", emoji: "💝" },
      { id: "saude", label: "Ter uma pele mais saudável", emoji: "🌿" },
      { id: "prevenir", label: "Prevenir sinais de envelhecimento", emoji: "⏰" },
      { id: "bem-estar", label: "Momento de autocuidado e bem-estar", emoji: "🧘‍♀️" },
      { id: "confianca", label: "Me sentir mais confiante", emoji: "✨" }
    ]
  }
];

const prizes = [
  { id: 1, name: "15% OFF na próxima compra", value: "15% OFF", color: "from-purple-500 to-pink-500" },
  { id: 2, name: "Frete Grátis na próxima compra", value: "FRETE GRÁTIS", color: "from-blue-500 to-cyan-500" },
  { id: 3, name: "20% OFF na próxima compra", value: "20% OFF", color: "from-orange-500 to-red-500" },
  { id: 4, name: "Amostra Grátis + 10% OFF", value: "AMOSTRA + 10%", color: "from-green-500 to-emerald-500" },
  { id: 5, name: "25% OFF na próxima compra", value: "25% OFF", color: "from-pink-500 to-rose-500" },
  { id: 6, name: "Cashback Dobrado (20%)", value: "CASHBACK 20%", color: "from-indigo-500 to-purple-500" }
];

export default function QuizCRM() {
  const [step, setStep] = useState('email'); // email, quiz, wheel, result
  const [email, setEmail] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState(1);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState(null);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setStep('quiz');
    }
  };

  const handleAnswer = (optionId) => {
    setAnswers({ ...answers, [question.id]: optionId });
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setDirection(1);
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setStep('wheel');
      }
    }, 300);
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setDirection(-1);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const spinWheel = () => {
    if (isSpinning || wonPrize) return;
    
    setIsSpinning(true);
    
    // Random prize
    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const prize = prizes[prizeIndex];
    
    // Calculate rotation (multiple full spins + final position)
    const degreesPerPrize = 360 / prizes.length;
    const finalRotation = 360 * 5 + (360 - (prizeIndex * degreesPerPrize + degreesPerPrize / 2));
    
    setRotation(finalRotation);
    
    setTimeout(() => {
      setWonPrize(prize);
      setIsSpinning(false);
      setStep('result');
    }, 4000);
  };

  // Email Capture Step
  if (step === 'email') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-12 px-4">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-8 text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Ganhe uma Recompensa Exclusiva! 🎁
            </h1>
            <p className="text-gray-600 mb-8">
              Responda 5 perguntas rápidas sobre seus hábitos e gire a roleta para ganhar seu prêmio especial
            </p>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Confirme seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 h-12 text-center"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg font-bold"
              >
                Começar Quiz 
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>2 minutos</span>
              </div>
              <div className="flex items-center gap-1">
                <Gift className="w-4 h-4" />
                <span>Prêmio garantido</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Quiz Step
  if (step === 'quiz') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Pergunta {currentQuestion + 1} de {questions.length}
              </span>
              <span className="text-sm font-medium text-pink-600">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-2 bg-white rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-pink-500 to-purple-600"
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
              className="bg-white rounded-3xl shadow-2xl p-8"
            >
              <div className="mb-8">
                <Badge className="bg-purple-100 text-purple-700 mb-3">
                  Pergunta {currentQuestion + 1}
                </Badge>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {question.title}
                </h2>
                <p className="text-gray-600">
                  {question.subtitle}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {question.options.map((option) => {
                  const Icon = option.icon;
                  const isSelected = answers[question.id] === option.id;
                  
                  return (
                    <motion.button
                      key={option.id}
                      onClick={() => handleAnswer(option.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full p-5 rounded-xl border-2 text-left transition-all ${
                        isSelected
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-gray-200 hover:border-pink-300'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`text-3xl ${isSelected ? 'scale-110' : ''} transition-transform`}>
                          {option.emoji}
                        </div>
                        <div className="flex-1">
                          <span className={`font-medium ${isSelected ? 'text-pink-900' : 'text-gray-700'}`}>
                            {option.label}
                          </span>
                        </div>
                        {Icon && (
                          <Icon className={`w-5 h-5 ${isSelected ? 'text-pink-600' : 'text-gray-400'}`} />
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

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

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {questions.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all ${
                  idx === currentQuestion
                    ? 'w-8 bg-pink-600'
                    : idx < currentQuestion
                    ? 'w-2 bg-pink-400'
                    : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Wheel Step
  if (step === 'wheel') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-12 px-4 flex items-center justify-center">
        <div className="max-w-2xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl p-8 text-center"
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Parabéns! 🎉
              </h2>
              <p className="text-gray-600">
                Você completou o quiz! Agora gire a roleta para descobrir seu prêmio exclusivo
              </p>
            </div>

            {/* Wheel */}
            <div className="relative w-80 h-80 mx-auto mb-8">
              {/* Pointer */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-pink-600" />
              </div>

              {/* Wheel Circle */}
              <motion.div
                className="w-full h-full rounded-full relative overflow-hidden shadow-2xl"
                style={{
                  rotate: rotation,
                  transition: isSpinning ? 'rotate 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none'
                }}
              >
                {prizes.map((prize, index) => {
                  const angle = (360 / prizes.length) * index;
                  return (
                    <div
                      key={prize.id}
                      className={`absolute w-full h-full bg-gradient-to-br ${prize.color}`}
                      style={{
                        clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((angle - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((angle - 90) * Math.PI / 180)}%, ${50 + 50 * Math.cos((angle + 360/prizes.length - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((angle + 360/prizes.length - 90) * Math.PI / 180)}%)`
                      }}
                    >
                      <div
                        className="absolute text-white font-bold text-xs text-center"
                        style={{
                          top: '25%',
                          left: '50%',
                          transform: `translate(-50%, -50%) rotate(${angle + 360/(prizes.length * 2)}deg)`,
                          width: '80px'
                        }}
                      >
                        {prize.value}
                      </div>
                    </div>
                  );
                })}

                {/* Center Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Gift className="w-8 h-8 text-pink-600" />
                </div>
              </motion.div>
            </div>

            <Button
              onClick={spinWheel}
              disabled={isSpinning}
              className="w-full h-14 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xl font-bold disabled:opacity-50"
            >
              {isSpinning ? 'Girando...' : 'Girar Roleta! 🎰'}
            </Button>

            <p className="text-sm text-gray-500 mt-4">
              Você pode girar apenas uma vez
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  // Result Step
  if (step === 'result' && wonPrize) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-12 px-4 flex items-center justify-center">
        <div className="max-w-md mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className={`w-24 h-24 bg-gradient-to-br ${wonPrize.color} rounded-full flex items-center justify-center mx-auto mb-6`}
            >
              <Star className="w-12 h-12 text-white fill-white" />
            </motion.div>

            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              🎉 Você Ganhou!
            </h2>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 mb-6">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-2">
                {wonPrize.value}
              </div>
              <p className="text-gray-700 font-medium">
                {wonPrize.name}
              </p>
            </div>

            <p className="text-gray-600 mb-6">
              Seu cupom foi enviado para <span className="font-semibold text-pink-600">{email}</span>
            </p>

            <div className="bg-pink-100 border-l-4 border-pink-600 rounded-r-xl p-4 mb-6 text-left">
              <p className="text-sm text-pink-900">
                <span className="font-semibold">💝 Aproveite!</span> Seu cupom é válido por 30 dias e pode ser usado na sua próxima compra.
              </p>
            </div>

            <Button
              onClick={() => window.location.href = '/'}
              className="w-full h-12 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold"
            >
              Voltar para a Loja
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return null;
}