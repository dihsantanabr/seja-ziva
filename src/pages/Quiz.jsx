import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Sparkles, Check, Star, Clock, Users, Heart, Zap, Shield, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
import GreemyPurchaseSelector from '../components/greemy/GreemyPurchaseSelector';
import { GreemyProvider } from '../components/greemy/GreemyContext';

const questions = [
  {
    id: 'name',
    title: "Qual é o seu nome?",
    subtitle: "Vamos usar seu nome para personalizar sua recomendação.",
    type: "text"
  },
  {
    id: 'pain',
    title: "O que mais te incomoda hoje quando pensa em cuidado com o corpo, pele ou cabelo?",
    subtitle: "Escolha uma opção",
    type: "single",
    options: [
      { id: "flacidez", label: "Flacidez da pele", emoji: "😕" },
      { id: "aparencia", label: "Aparência da pele (opaca, cansada, linhas ou rugas)", emoji: "😔" },
      { id: "unhas", label: "Unhas fracas e quebradiças", emoji: "💅" },
      { id: "cabelos", label: "Cabelos finos e fracos", emoji: "💇‍♀️" }
    ]
  },
  {
    id: 'frequency',
    title: "Com que frequência você percebe esse incômodo no dia a dia?",
    subtitle: "Escolha uma opção",
    type: "single",
    options: [
      { id: "quase_todos", label: "Quase todos os dias", emoji: "😟" },
      { id: "algumas_vezes", label: "Algumas vezes por semana", emoji: "🤔" },
      { id: "quando_presto", label: "Só quando presto mais atenção", emoji: "👀" },
      { id: "recentemente", label: "Comecei a perceber recentemente", emoji: "🆕" }
    ]
  },
  {
    id: 'history',
    title: "Você já tentou cuidar disso de alguma forma antes?",
    subtitle: "Escolha uma opção",
    type: "single",
    options: [
      { id: "sem_resultado", label: "Sim, já tentei e não tive o resultado que esperava", emoji: "😞" },
      { id: "sem_rotina", label: "Já tentei, mas não consegui manter uma rotina", emoji: "📅" },
      { id: "nunca_cuidei", label: "Já ouvi falar, mas nunca cuidei de verdade", emoji: "💭" },
      { id: "primeira_vez", label: "Não, essa é a primeira vez que busco algo para isso", emoji: "✨" }
    ]
  },
  {
    id: 'routine',
    title: "Como é a sua rotina hoje?",
    subtitle: "Escolha uma opção",
    type: "single",
    options: [
      { id: "corrida", label: "Corrida, preciso de algo simples", emoji: "⚡" },
      { id: "pratica", label: "Consigo manter rotina se for prática", emoji: "✅" },
      { id: "organizada", label: "Sou organizada e sigo bem hábitos diários", emoji: "📋" },
      { id: "varia", label: "Varia muito de semana para semana", emoji: "🔄" }
    ]
  },
  {
    id: 'email',
    title: "Sua recomendação está quase pronta",
    subtitle: "Não enviamos spam. Você pode sair da lista quando quiser.",
    type: "email"
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [textInput, setTextInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState(1);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const navigate = useNavigate();

  // Safety check: ensure question exists before any calculations
  const question = questions[currentQuestion];
  if (!question) {
    return null;
  }
  
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
      setAnswers({ ...answers, [questionId]: optionId });
      // Auto-advance for single choice questions
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setDirection(1);
          setCurrentQuestion(currentQuestion + 1);
          setTextInput(''); // Clear text input for next question
        } else {
          setShowResult(true);
        }
      }, 300);
    }
  };

  const handleTextSubmit = () => {
    if (!textInput.trim()) return;
    
    const questionId = question.id;
    setAnswers({ ...answers, [questionId]: textInput });
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setDirection(1);
        setCurrentQuestion(currentQuestion + 1);
        setTextInput('');
      } else {
        setShowResult(true);
      }
    }, 300);
  };

  const isAnswered = () => {
    if (!question) return false;
    if (question.type === 'text' || question.type === 'email') {
      return textInput.trim().length > 0;
    }
    return !!answers[question.id];
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
      window.location.href = createPageUrl('Home');
    }
  };

  const confirmExit = () => {
    window.location.href = createPageUrl('Home');
  };

  const isSelected = (optionId) => {
    if (!question) return false;
    return answers[question.id] === optionId;
  };

  const getPersonalizedResult = () => {
    const name = answers.name || 'você';
    const pain = answers.pain;
    const frequency = answers.frequency;
    const history = answers.history;
    const routine = answers.routine;

    let painText = "";
    if (pain === "flacidez") painText = "flacidez da pele";
    else if (pain === "aparencia") painText = "aparência da pele";
    else if (pain === "unhas") painText = "unhas fracas";
    else if (pain === "cabelos") painText = "cabelos finos e fracos";
    else painText = "sua preocupação";

    const benefits = [];
    if (pain === "flacidez") {
      benefits.push("Aumenta firmeza e elasticidade da pele");
      benefits.push("Reduz sinais visíveis de flacidez");
    } else if (pain === "aparencia") {
      benefits.push("Reduz rugas e linhas de expressão");
      benefits.push("Devolve luminosidade e viço natural");
    } else if (pain === "unhas") {
      benefits.push("Fortalece unhas e reduz quebra");
      benefits.push("Melhora a aparência e crescimento");
    } else if (pain === "cabelos") {
      benefits.push("Fortalece fios de dentro para fora");
      benefits.push("Melhora volume e brilho");
    }
    
    benefits.push("Estimula produção natural de colágeno");
    
    if (benefits.length < 3) {
      benefits.push("Hidrata profundamente de dentro para fora");
    }

    // Benefícios secundários personalizados
    const secondaryBenefits = [
      { icon: "💪", title: "Unhas mais fortes", desc: "Reduz quebra e descamação" },
      { icon: "💇‍♀️", title: "Cabelos mais saudáveis", desc: "Fios mais fortes e brilhantes" },
      { icon: "🦴", title: "Articulações protegidas", desc: "Melhora mobilidade e conforto" }
    ];

    // Rotina personalizada baseada nas respostas
    let morningRoutine = "";
    let whenToTake = "";
    
    if (routine === "organizada") {
      morningRoutine = "Dissolva 1 sachê em 200-250ml de água ou suco pela manhã";
      whenToTake = "Recomendamos tomar sempre no mesmo horário para criar o hábito";
    } else if (routine === "pratica") {
      morningRoutine = "Dissolve rapidamente - apenas 30 segundos do seu dia";
      whenToTake = "Pode ser tomado com água, vitamina ou sua bebida favorita";
    } else if (routine === "corrida") {
      morningRoutine = "Formato prático em sachês individuais";
      whenToTake = "Perfeito para rotinas agitadas - dissolve em segundos";
    } else if (routine === "varia") {
      morningRoutine = "Deixe os sachês em local visível e tome quando lembrar";
      whenToTake = "Configure um alarme diário no celular para criar consistência";
    } else {
      morningRoutine = "Comece dissolvendo 1 sachê em 200ml de água pela manhã";
      whenToTake = "Os primeiros resultados aparecem em 4 semanas de uso contínuo";
    }

    // Depoimentos relevantes baseados no objetivo
    const testimonials = [];
    
    if (pain === "flacidez") {
      testimonials.push({
        name: "Ana Paula, 42 anos",
        text: "Em 6 semanas minha pele ficou visivelmente mais firme. Até meu marido percebeu!",
        rating: 5
      });
    }
    
    if (pain === "aparencia") {
      testimonials.push({
        name: "Claudia Mendes, 48 anos",
        text: "As rugas ao redor dos olhos diminuíram muito. Estou impressionada!",
        rating: 5
      });
    }
    
    if (pain === "unhas" || pain === "cabelos") {
      testimonials.push({
        name: "Juliana Costa, 38 anos",
        text: "Além da pele, minhas unhas pararam de quebrar e meu cabelo está mais forte!",
        rating: 5
      });
    }
    
    if (testimonials.length < 2) {
      testimonials.push({
        name: "Mariana Silva, 35 anos",
        text: "Minha pele está hidratada e com brilho natural. Melhor investimento!",
        rating: 5
      });
    }

    return {
      name,
      painText,
      benefits,
      routine,
      secondaryBenefits,
      morningRoutine,
      whenToTake,
      testimonials
    };
  };



  if (showResult) {
    const result = getPersonalizedResult();
    
    return (
      <GreemyProvider>
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-8 px-4">
          <div className="max-w-6xl mx-auto space-y-6">
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
                🎯 {result.name}, Seu Colágeno Ideal foi Definido!
              </h1>
              <p className="text-lg text-gray-600">
                Com base na sua preocupação com {result.painText}, encontramos o colágeno perfeito para você
              </p>
            </div>

            {/* Product Hero Section - Replicating first fold */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
              {/* Product Image */}
              <div className="space-y-4 lg:sticky lg:top-8 lg:self-start">
                <div className="relative aspect-[2/3] bg-white rounded-2xl overflow-hidden shadow-lg">
                  <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
                    Mais Vendido
                  </Badge>
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695d9796d8674f7efcac0aa1/7da82ad57_MODELO---COLAGENO1.jpg"
                    alt="Colágeno Verisol® + Ácido Hialurônico"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Info + Purchase Selector */}
              <div className="space-y-4">
                <Badge className="bg-pink-600 text-white mb-2">Recomendado para você</Badge>

                <div>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600 font-medium text-sm uppercase tracking-wider mb-2">
                    Cuidado Natural da Pele
                  </p>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    Colágeno Verisol®
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">+ Ácido Hialurônico</span>
                  </h2>
                  <p className="mt-2 text-base text-gray-600">
                    Beleza que começa de dentro. Reduz rugas, aumenta firmeza e hidrata profundamente sua pele em até 4 semanas.
                  </p>
                </div>

                {/* Reviews */}
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">4.9</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">238.917 avaliações</span>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-pink-500 text-pink-600">
                    <Star className="w-3.5 h-3.5 mr-1.5" />
                    Colágeno Verisol®
                  </Badge>
                  <Badge variant="outline" className="border-pink-500 text-pink-600">
                    <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                    Ácido Hialurônico
                  </Badge>
                  <Badge variant="outline" className="border-pink-500 text-pink-600">
                    <Heart className="w-3.5 h-3.5 mr-1.5" />
                    Reduz Rugas
                  </Badge>
                  <Badge variant="outline" className="border-pink-500 text-pink-600">
                    <Zap className="w-3.5 h-3.5 mr-1.5" />
                    Aumenta Firmeza
                  </Badge>
                  <Badge variant="outline" className="border-pink-500 text-pink-600">
                    <Shield className="w-3.5 h-3.5 mr-1.5" />
                    Hidrata Profundamente
                  </Badge>
                  <Badge variant="outline" className="border-pink-500 text-pink-600">
                    <Check className="w-3.5 h-3.5 mr-1.5" />
                    Resultados em 4 Semanas
                  </Badge>
                </div>

                {/* Benefits for user */}
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 mb-3">Por que ele é ideal para você:</p>
                  <div className="space-y-2">
                    {result.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Purchase Selector - Integrated */}
                <div className="pt-4">
                  <GreemyPurchaseSelector />
                </div>
              </div>
            </div>
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
                <span className="font-semibold">✨ Mais de 238 mil pessoas</span> já transformaram sua pele com nosso colágeno
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
              Escolha seus sabores acima e comece sua jornada hoje!
            </p>

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
      </GreemyProvider>
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
            className="text-gray-500 hover:text-gray-700 min-h-[48px] min-w-[48px] touch-manipulation"
          >
            <X className="w-6 h-6" />
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
            const isAnswered = !!answers[q.id];
            const isCurrent = idx === currentQuestion;
            
            return (
              <button
                key={idx}
                onClick={() => goToQuestion(idx)}
                disabled={idx > currentQuestion}
                className={`min-w-[48px] min-h-[48px] w-12 h-12 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold transition-all touch-manipulation ${
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

            {/* Text/Email Input */}
            {(question.type === "text" || question.type === "email") ? (
              <div className="space-y-4 mb-6 sm:mb-8">
                <Input
                  type={question.type === "email" ? "email" : "text"}
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && isAnswered()) {
                      handleTextSubmit();
                    }
                  }}
                  placeholder={question.type === "email" ? "Digite seu melhor e-mail" : "Digite sua resposta"}
                  className="w-full h-14 text-base px-4"
                  autoFocus
                />
                {question.type === "email" && (
                  <p className="text-sm text-gray-500 text-center">
                    Com base nas suas respostas, preparamos uma recomendação personalizada para você.
                  </p>
                )}
                <Button
                  onClick={handleTextSubmit}
                  disabled={!isAnswered()}
                  className="w-full h-14 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-base font-semibold"
                >
                  Continuar
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            ) : (
              /* Options */
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {question.options?.map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full min-h-[60px] p-4 sm:p-4 rounded-xl border-2 text-left transition-all active:scale-95 touch-manipulation ${
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
            )}

            {/* Navigation */}
            {currentQuestion > 0 && (
              <div className="flex justify-center">
                <Button
                  onClick={prevQuestion}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-gray-600 text-sm"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Voltar
                </Button>
              </div>
            )}
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