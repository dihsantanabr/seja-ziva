import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Sparkles, Check, Star, Clock, Users, Heart, Zap, Shield, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const questions = [
  {
    id: 1,
    title: "Como você descreveria sua pele hoje?",
    subtitle: "Entender seu tipo de pele nos ajuda a personalizar a recomendação",
    type: "single",
    options: [
      { id: "seca", label: "Pele seca ou ressecada", emoji: "🌵" },
      { id: "mista", label: "Pele mista (seca em algumas áreas, oleosa em outras)", emoji: "🔄" },
      { id: "oleosa", label: "Pele oleosa", emoji: "💧" },
      { id: "sensivel", label: "Pele sensível ou com tendência à irritação", emoji: "🌸" },
      { id: "nao_sei", label: "Não sei dizer exatamente", emoji: "🤔" }
    ]
  },
  {
    id: 2,
    title: "O que mais te incomoda quando olha para sua pele hoje?",
    subtitle: "Escolha até 2 opções",
    type: "multiple",
    maxChoices: 2,
    options: [
      { id: "flacidez", label: "Flacidez ou perda de firmeza", emoji: "😕" },
      { id: "linhas", label: "Linhas finas e sinais de envelhecimento", emoji: "😕" },
      { id: "vico", label: "Falta de viço e aparência cansada", emoji: "😕" },
      { id: "elasticidade", label: "Pele sem elasticidade", emoji: "😕" },
      { id: "ressecamento", label: "Ressecamento constante", emoji: "😕" },
      { id: "manchas", label: "Manchas ou textura irregular", emoji: "😕" }
    ]
  },
  {
    id: 3,
    title: "Se você pudesse melhorar UMA coisa na sua pele nos próximos 60 dias, o que seria?",
    subtitle: "Seu objetivo principal",
    type: "single",
    options: [
      { id: "firmeza", label: "Deixar a pele mais firme e uniforme", emoji: "✨" },
      { id: "hidratacao", label: "Melhorar a hidratação de dentro para fora", emoji: "✨" },
      { id: "envelhecimento", label: "Reduzir sinais do envelhecimento", emoji: "✨" },
      { id: "brilho", label: "Devolver o brilho e aparência saudável", emoji: "✨" },
      { id: "prevencao", label: "Prevenir o envelhecimento precoce", emoji: "✨" }
    ]
  },
  {
    id: 4,
    title: "Como costuma ser sua rotina com suplementos?",
    subtitle: "Seja sincera, isso ajuda na escolha ideal",
    type: "single",
    options: [
      { id: "organizada", label: "Sou organizada e tomo todos os dias", emoji: "🕒" },
      { id: "esquece", label: "Tento manter, mas às vezes esqueço", emoji: "🕒" },
      { id: "pratico", label: "Só consigo se for prático e rápido", emoji: "🕒" },
      { id: "primeira", label: "Nunca tomei colágeno antes", emoji: "🕒" }
    ]
  },
  {
    id: 5,
    title: "Qual tipo de sabor você prefere no dia a dia?",
    subtitle: "Última pergunta! Vamos encontrar o colágeno perfeito para você",
    type: "single",
    options: [
      { id: "adocicado", label: "Sabores suaves e adocicados", emoji: "🍓" },
      { id: "citrico", label: "Sabores cítricos e refrescantes", emoji: "🍋" },
      { id: "neutro", label: "Algo neutro, que combine com qualquer bebida", emoji: "☕" },
      { id: "resultado", label: "Não me importo com sabor, foco no resultado", emoji: "🤍" }
    ]
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState(1);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const navigate = useNavigate();

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Prevent accidental exit
  useEffect(() => {
    if (showResult) return;

    const handleBeforeUnload = (e) => {
      if (Object.keys(answers).length > 0) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [answers, showResult]);

  const handleAnswer = (optionId) => {
    const questionId = question.id;
    
    if (question.type === "single") {
      setAnswers({ ...answers, [questionId]: [optionId] });
      // Auto-advance for single choice questions
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setDirection(1);
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowResult(true);
        }
      }, 300);
    } else {
      const currentAnswers = answers[questionId] || [];
      
      if (currentAnswers.includes(optionId)) {
        setAnswers({
          ...answers,
          [questionId]: currentAnswers.filter(id => id !== optionId)
        });
      } else {
        if (currentAnswers.length < question.maxChoices) {
          setAnswers({
            ...answers,
            [questionId]: [...currentAnswers, optionId]
          });
        }
      }
    }
  };

  const isAnswered = () => {
    const questionAnswers = answers[question.id];
    return questionAnswers && questionAnswers.length > 0;
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setDirection(1);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setDirection(-1);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToQuestion = (index) => {
    if (index < currentQuestion) {
      setDirection(-1);
    } else {
      setDirection(1);
    }
    setCurrentQuestion(index);
  };

  const handleExit = () => {
    if (Object.keys(answers).length > 0 && !showResult) {
      setShowExitDialog(true);
    } else {
      window.location.href = createPageUrl('Colageno');
    }
  };

  const confirmExit = () => {
    window.location.href = createPageUrl('Colageno');
  };

  const isSelected = (optionId) => {
    const questionAnswers = answers[question.id] || [];
    return questionAnswers.includes(optionId);
  };

  const getPersonalizedResult = () => {
    const skinType = answers[1]?.[0];
    const goal = answers[3]?.[0];
    const routine = answers[4]?.[0];
    const flavor = answers[5]?.[0];

    let skinTypeText = "";
    if (skinType === "seca") skinTypeText = "pele seca";
    else if (skinType === "mista") skinTypeText = "pele mista";
    else if (skinType === "oleosa") skinTypeText = "pele oleosa";
    else if (skinType === "sensivel") skinTypeText = "pele sensível";
    else skinTypeText = "seu tipo de pele";

    let goalText = "";
    if (goal === "firmeza") goalText = "aumentar firmeza e uniformidade";
    else if (goal === "hidratacao") goalText = "melhorar a hidratação profunda";
    else if (goal === "envelhecimento") goalText = "reduzir sinais de envelhecimento";
    else if (goal === "brilho") goalText = "devolver viço e brilho natural";
    else goalText = "prevenir o envelhecimento precoce";

    let flavorText = "";
    if (flavor === "adocicado") flavorText = "morango";
    else if (flavor === "citrico") flavorText = "limão";
    else if (flavor === "neutro") flavorText = "neutro";
    else flavorText = "neutro";

    const benefits = [];
    if (goal === "firmeza" || answers[2]?.includes("flacidez")) {
      benefits.push("Aumenta firmeza e elasticidade da pele");
    }
    if (goal === "hidratacao" || answers[2]?.includes("ressecamento")) {
      benefits.push("Hidrata profundamente de dentro para fora");
    }
    if (goal === "envelhecimento" || answers[2]?.includes("linhas")) {
      benefits.push("Reduz rugas e linhas de expressão");
    }
    if (benefits.length === 0) {
      benefits.push("Estimula produção natural de colágeno");
      benefits.push("Melhora textura e viço da pele");
      benefits.push("Fortalece cabelos e unhas");
    }

    // Benefícios secundários personalizados
    const secondaryBenefits = [
      { icon: "💪", title: "Fortalece unhas quebradiças", desc: "Unhas mais fortes e resistentes" },
      { icon: "💇‍♀️", title: "Reduz queda de cabelo", desc: "Fios mais saudáveis e volumosos" },
      { icon: "🦴", title: "Fortalece ossos e articulações", desc: "Mais mobilidade e conforto" }
    ];

    // Rotina personalizada baseada nas respostas
    let morningRoutine = "";
    let whenToTake = "";
    
    if (routine === "organizada") {
      morningRoutine = "Misture 1 dose (10g) em 200ml de água ou suco pela manhã";
      whenToTake = "Recomendamos tomar sempre no mesmo horário para criar o hábito";
    } else if (routine === "esquece") {
      morningRoutine = "Deixe o pote em local visível e tome ao acordar";
      whenToTake = "Configure um alarme diário no celular para não esquecer";
    } else if (routine === "pratico") {
      morningRoutine = "Dissolve rapidamente - apenas 30 segundos do seu dia";
      whenToTake = "Pode ser tomado com café, vitamina ou água, como preferir";
    } else {
      morningRoutine = "Comece misturando 1 dose em 200ml de água pela manhã";
      whenToTake = "Os primeiros resultados aparecem em 4 semanas de uso contínuo";
    }

    // Depoimentos relevantes baseados no objetivo
    const testimonials = [];
    
    if (goal === "firmeza" || answers[2]?.includes("flacidez")) {
      testimonials.push({
        name: "Ana Paula, 42 anos",
        text: "Em 6 semanas minha pele ficou visivelmente mais firme. Até meu marido percebeu!",
        rating: 5
      });
    }
    
    if (goal === "hidratacao" || skinType === "seca") {
      testimonials.push({
        name: "Mariana Silva, 35 anos",
        text: "Minha pele era super ressecada. Hoje está hidratada e com brilho natural!",
        rating: 5
      });
    }
    
    if (goal === "envelhecimento" || answers[2]?.includes("linhas")) {
      testimonials.push({
        name: "Claudia Mendes, 48 anos",
        text: "As linhas ao redor dos olhos diminuíram muito. Estou impressionada com o resultado!",
        rating: 5
      });
    }
    
    if (testimonials.length < 2) {
      testimonials.push({
        name: "Juliana Costa, 38 anos",
        text: "Além da pele, minhas unhas pararam de quebrar e meu cabelo está mais forte!",
        rating: 5
      });
    }

    return {
      skinTypeText,
      goalText,
      flavorText,
      benefits,
      routine,
      secondaryBenefits,
      morningRoutine,
      whenToTake,
      testimonials
    };
  };

  const handleCheckout = () => {
    window.location.href = 'https://seguro.avozon.com.br/r/9LBQYYJH8D';
  };

  if (showResult) {
    const result = getPersonalizedResult();
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-6 lg:p-10"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                🎯 Seu Colágeno Ideal foi Definido
              </h1>
              <p className="text-lg text-gray-600">
                Com base em sua {result.skinTypeText} e seu objetivo de {result.goalText}, encontramos o colágeno perfeito para você
              </p>
            </div>

            {/* Product Recommendation */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 mb-6">
              <Badge className="bg-pink-600 text-white mb-3">Recomendado para você</Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Colágeno Verisol® + Ácido Hialurônico
              </h2>
              <p className="text-pink-700 font-semibold mb-4">
                Beleza que começa de dentro para fora
              </p>

              <div className="space-y-3 mb-6">
                {result.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-4 mb-4">
                <p className="font-semibold text-gray-900 mb-2">Por que ele é ideal para você:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Fórmula com Verisol®, o colágeno mais estudado do mundo</li>
                  <li>✓ Resultados visíveis em 4 semanas de uso contínuo</li>
                  <li>✓ {result.routine === "pratico" ? "Formato prático e rápido de usar" : "Fácil de incluir na sua rotina diária"}</li>
                  <li>✓ Sabor {result.flavorText} que torna o uso ainda mais agradável</li>
                </ul>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-semibold">10g por porção</span>
                <span>•</span>
                <span>Uso diário simples</span>
                <span>•</span>
                <span>Não é medicamento</span>
              </div>
            </div>

            <Button 
              onClick={handleCheckout}
              className="w-full h-14 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-lg font-bold rounded-xl shadow-lg"
            >
              Quero Começar Minha Rotina Personalizada
            </Button>

            <p className="text-center text-sm text-gray-500 mt-4">
              ✓ Frete Grátis • ✓ 10% Cashback • ✓ Resultados em 4 Semanas
            </p>
          </motion.div>

          {/* Secondary Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl p-6 lg:p-8"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                💎 Benefícios que vão além da pele
              </h3>
              <p className="text-gray-600">
                O colágeno age em todo seu corpo, não apenas na pele
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {result.secondaryBenefits.map((benefit, idx) => (
                <div key={idx} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-5 text-center">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Personalized Routine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-6 lg:p-8"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                🗓️ Sua rotina personalizada
              </h3>
              <p className="text-gray-600">
                Baseado no seu perfil, veja como usar para obter os melhores resultados
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Como tomar</h4>
                    <p className="text-gray-700">{result.morningRoutine}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Dica para sua rotina</h4>
                    <p className="text-gray-700">{result.whenToTake}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expectativa de resultados</h4>
                    <p className="text-gray-700">
                      <span className="font-semibold text-pink-700">4 semanas:</span> Pele mais hidratada e luminosa<br/>
                      <span className="font-semibold text-pink-700">8 semanas:</span> Redução visível de linhas finas<br/>
                      <span className="font-semibold text-pink-700">12 semanas:</span> Firmeza e elasticidade melhoradas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-xl p-6 lg:p-8"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                ⭐ Pessoas com objetivos como o seu amaram
              </h3>
              <p className="text-gray-600">
                Veja o que quem já está usando tem a dizer
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {result.testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-5">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 italic">"{testimonial.text}"</p>
                  <p className="text-sm font-semibold text-pink-700">{testimonial.name}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-pink-100 border-l-4 border-pink-600 rounded-r-xl p-4">
              <p className="text-sm text-pink-900">
                <span className="font-semibold">✨ Mais de 117 mil pessoas</span> já transformaram sua pele com nosso colágeno
              </p>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl shadow-xl p-6 lg:p-8 text-center text-white"
          >
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-3">
              Pronta para transformar sua pele?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Comece sua jornada hoje e veja resultados em 4 semanas
            </p>
            
            <Button 
              onClick={handleCheckout}
              className="w-full lg:w-auto lg:px-12 h-14 bg-white text-pink-600 hover:bg-gray-100 text-lg font-bold rounded-xl shadow-lg"
            >
              Garantir Meu Colágeno Agora
            </Button>

            <div className="flex items-center justify-center gap-6 mt-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Frete Grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>10% Cashback</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span>Resultados Comprovados</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-4 sm:py-8 px-3 sm:px-4">
      <div className="max-w-2xl mx-auto">
        {/* Exit Button */}
        <div className="flex justify-end mb-3 sm:mb-4">
          <Button
            onClick={handleExit}
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-700 min-h-[44px] min-w-[44px]"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-medium text-gray-600">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-xs sm:text-sm font-medium text-pink-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-400 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question History Navigation */}
        <div className="mb-4 sm:mb-6 flex flex-wrap gap-2 justify-center">
          {questions.map((q, idx) => {
            const isAnswered = answers[q.id] && answers[q.id].length > 0;
            const isCurrent = idx === currentQuestion;
            
            return (
              <button
                key={idx}
                onClick={() => goToQuestion(idx)}
                disabled={idx > currentQuestion}
                className={`min-w-[44px] min-h-[44px] w-11 h-11 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  isCurrent
                    ? 'bg-pink-600 text-white scale-110 ring-4 ring-pink-200'
                    : isAnswered
                    ? 'bg-pink-100 text-pink-600 hover:bg-pink-200 active:bg-pink-300'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isAnswered && !isCurrent ? (
                  <Check className="w-5 h-5" />
                ) : (
                  idx + 1
                )}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-10"
            >
            {/* Question */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                {question.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                {question.subtitle}
              </p>
              {question.type === "multiple" && (
                <p className="text-sm text-pink-600 font-medium mt-2">
                  {(answers[question.id] || []).length} / {question.maxChoices} selecionadas
                </p>
              )}
            </div>

            {/* Options */}
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {question.options.map((option) => (
                <motion.button
                  key={option.id}
                  onClick={() => handleAnswer(option.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full min-h-[56px] p-3 sm:p-4 rounded-xl border-2 text-left transition-all active:scale-95 ${
                    isSelected(option.id)
                      ? 'border-pink-500 bg-pink-50'
                      : 'border-gray-200 hover:border-pink-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl flex-shrink-0">{option.emoji}</span>
                    <span className={`text-sm sm:text-base font-medium flex-1 ${
                      isSelected(option.id) ? 'text-pink-900' : 'text-gray-700'
                    }`}>
                      {option.label}
                    </span>
                    {isSelected(option.id) && (
                      <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-2 sm:gap-3">
              {currentQuestion > 0 && (
                <Button
                  onClick={prevQuestion}
                  variant="outline"
                  className="flex-1 h-12 min-h-[48px] text-sm sm:text-base"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  Voltar
                </Button>
              )}
              <Button
                onClick={nextQuestion}
                disabled={!isAnswered()}
                className={`h-12 min-h-[48px] text-sm sm:text-base bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white ${
                  currentQuestion === 0 ? 'w-full' : 'flex-1'
                }`}
              >
                {currentQuestion === questions.length - 1 ? 'Ver Resultado' : 'Próxima'}
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Exit Confirmation Dialog */}
        <AlertDialog open={showExitDialog} onOpenChange={setShowExitDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Deseja sair do quiz?</AlertDialogTitle>
              <AlertDialogDescription>
                Você perderá todas as suas respostas se sair agora. Tem certeza que deseja continuar?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Continuar Quiz</AlertDialogCancel>
              <AlertDialogAction
                onClick={confirmExit}
                className="bg-red-600 hover:bg-red-700"
              >
                Sair e Perder Respostas
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}