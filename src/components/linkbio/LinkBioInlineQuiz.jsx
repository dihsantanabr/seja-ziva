import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowLeft, Sparkles } from 'lucide-react';

const PRODUCTS = {
  simbiotico: {
    name: 'Simbiótico Íntimo',
    tag: 'Para equilíbrio interno',
    tagline: 'pH saudável, microbiota em equilíbrio, sem odor recorrente.',
    image: 'https://sejaziva.com.br/cdn/shop/files/Design_sem_nome_4_1.png',
    url: 'https://sejaziva.com.br/products/simbiotico-intimo',
    color: 'bg-pink-50 border-pink-200',
    btn: 'bg-pink-500 hover:bg-pink-600',
  },
  serum: {
    name: 'Sérum Íntimo Ozonizado',
    tag: 'Para cuidado da pele íntima',
    tagline: 'Regeneração, hidratação e proteção da região íntima.',
    image: 'https://sejaziva.com.br/cdn/shop/files/2_ef7a6779-789b-4749-84b2-893761bc28f1.png',
    url: 'https://sejaziva.com.br/products/serum-intimo-ozonizado',
    color: 'bg-yellow-50 border-yellow-200',
    btn: 'bg-yellow-500 hover:bg-yellow-600',
  },
  espuma: {
    name: 'Espuma Íntima Ozonizada',
    tag: 'Para higiene diária',
    tagline: 'Frescor, limpeza suave e proteção todo dia.',
    image: 'https://sejaziva.com.br/cdn/shop/files/3_f86c8057-32aa-4f7f-ab7b-a402d1f2c134.png',
    url: 'https://sejaziva.com.br/products/espuma-intima-ozonizada',
    color: 'bg-emerald-50 border-emerald-200',
    btn: 'bg-emerald-500 hover:bg-emerald-600',
  },
  box: {
    name: 'Box Equilibrium 360º',
    tag: 'Protocolo completo',
    tagline: 'Tudo que você precisa para cuidar da sua saúde íntima de forma completa.',
    image: 'https://sejaziva.com.br/cdn/shop/files/Design_sem_nome_4_1.png',
    url: 'https://sejaziva.com.br/products/kit-bem-estar-completo',
    color: 'bg-pink-50 border-pink-300',
    btn: 'bg-pink-600 hover:bg-pink-700',
    badge: '⭐ Mais completo',
  },
};

const QUESTIONS = [
  {
    text: 'Qual dessas situações mais combina com o que você está sentindo hoje?',
    options: [
      { label: 'Quero melhorar minha rotina de higiene íntima no dia a dia', points: 'espuma' },
      { label: 'Sinto ressecamento, sensibilidade ou desconforto na pele íntima', points: 'serum' },
      { label: 'Percebo sinais de desequilíbrio íntimo mais recorrentes', points: 'simbiotico' },
      { label: 'Tenho mais de uma dessas questões e quero um cuidado mais completo', points: 'box' },
    ],
  },
  {
    text: 'Hoje, o que mais te incomoda ou chama sua atenção?',
    options: [
      { label: 'Sensação de odor, pH desregulado ou desequilíbrio recorrente', points: 'simbiotico' },
      { label: 'Ressecamento, irritação ou desconforto após depilação', points: 'serum' },
      { label: 'Falta de frescor e vontade de uma higiene mais suave e inteligente', points: 'espuma' },
      { label: 'Sinto que preciso cuidar de tudo isso de forma mais completa', points: 'box' },
    ],
  },
  {
    text: 'O que você procura neste momento?',
    options: [
      { label: 'Um produto para começar de forma simples', points: 'single' },
      { label: 'Um cuidado mais focado no meu desconforto principal', points: 'single' },
      { label: 'Uma rotina que una mais de um tipo de cuidado', points: 'combo' },
      { label: 'Um protocolo mais completo para manter constância', points: 'box' },
    ],
  },
  {
    text: 'Qual dessas frases mais faz sentido para você agora?',
    options: [
      { label: 'Quero cuidar da microbiota e do equilíbrio íntimo', points: 'simbiotico' },
      { label: 'Quero cuidar melhor da pele íntima e do ressecamento', points: 'serum' },
      { label: 'Quero melhorar minha higiene íntima no dia a dia', points: 'espuma' },
      { label: 'Quero uma solução mais completa porque me identifiquei com mais de uma opção', points: 'box' },
    ],
  },
];

function getResult(answers) {
  const scores = { simbiotico: 0, serum: 0, espuma: 0, box: 0 };

  answers.forEach((ans, qi) => {
    const pts = QUESTIONS[qi].options[ans].points;
    if (pts === 'box') scores.box += 2;
    else if (pts === 'combo') { /* upgrade to top-2 combo */ }
    else if (pts === 'single') { /* no extra scoring */ }
    else scores[pts] += 1;
  });

  const q3pts = QUESTIONS[2].options[answers[2]].points;
  if (q3pts === 'box') return { primary: 'box', secondary: null };

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const primary = sorted[0][0];

  if (q3pts === 'combo') {
    const secondary = sorted[1][0] !== primary ? sorted[1][0] : sorted[2]?.[0];
    return { primary, secondary: secondary || null };
  }

  return { primary, secondary: null };
}

export default function LinkBioInlineQuiz() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(-1); // -1 = name step
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleStart = () => {
    setOpen(true);
    setStep(-1);
    setName('');
    setAnswers([]);
    setResult(null);
  };

  const handleAnswer = (optIdx) => {
    const newAnswers = [...answers, optIdx];
    if (newAnswers.length === QUESTIONS.length) {
      setAnswers(newAnswers);
      setResult(getResult(newAnswers));
      setStep(QUESTIONS.length);
    } else {
      setAnswers(newAnswers);
      setStep(newAnswers.length);
    }
  };

  const handleBack = () => {
    if (step === -1) {
      setOpen(false);
    } else if (step === 0) {
      setStep(-1);
    } else {
      setAnswers(answers.slice(0, -1));
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(-1);
    setName('');
    setAnswers([]);
    setResult(null);
  };

  const primaryProduct = result ? PRODUCTS[result.primary] : null;
  const secondaryProduct = result?.secondary ? PRODUCTS[result.secondary] : null;

  return (
    <div className="w-full">
      {/* Botão de entrada */}
      <motion.button
        onClick={handleStart}
        whileTap={{ scale: 0.97 }}
        className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold text-base rounded-2xl py-4 shadow-md hover:shadow-lg transition-all"
      >
        <Sparkles className="w-4 h-4" />
        Descubra o Cuidado Íntimo Ideal
        <ChevronRight className="w-5 h-5" />
      </motion.button>

      {/* Quiz expande abaixo */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-3 bg-white rounded-2xl border border-pink-100 shadow-sm p-5">

              {/* Resultado */}
              {result ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <p className="text-xs font-semibold text-pink-500 uppercase tracking-wide mb-1">
                    ✨ Sua recomendação
                  </p>
                  <h3 className="text-base font-bold text-gray-900 mb-4">
                    {name ? `${name}, o ideal para você é:` : 'Com base nas suas respostas, o ideal para você é:'}
                  </h3>

                  {/* Produto principal */}
                  <div className={`rounded-xl border-2 p-4 mb-3 ${primaryProduct.color}`}>
                    {primaryProduct.badge && (
                      <span className="text-xs font-bold text-pink-600 mb-2 block">{primaryProduct.badge}</span>
                    )}
                    <div className="flex items-center gap-4">
                      <img src={primaryProduct.image} alt={primaryProduct.name} className="w-20 h-20 object-contain rounded-lg flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 font-medium">{primaryProduct.tag}</p>
                        <h4 className="text-base font-bold text-gray-900 mt-0.5">{primaryProduct.name}</h4>
                        <p className="text-xs text-gray-600 mt-1">{primaryProduct.tagline}</p>
                      </div>
                    </div>
                    <a
                      href={primaryProduct.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-3 flex items-center justify-center gap-1 w-full text-white text-sm font-bold py-2.5 rounded-xl transition-all ${primaryProduct.btn}`}
                    >
                      Quero esse produto <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Produto complementar */}
                  {secondaryProduct && (
                    <div className={`rounded-xl border p-4 mb-3 ${secondaryProduct.color} opacity-90`}>
                      <p className="text-xs text-gray-500 mb-2 font-medium">Combina muito bem com:</p>
                      <div className="flex items-center gap-3">
                        <img src={secondaryProduct.image} alt={secondaryProduct.name} className="w-12 h-12 object-contain rounded-lg flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-bold text-gray-900">{secondaryProduct.name}</h4>
                          <a
                            href={secondaryProduct.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-pink-500 font-semibold underline"
                          >
                            Ver produto →
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleReset}
                    className="w-full text-xs text-gray-400 hover:text-pink-500 mt-1 py-2 transition-colors"
                  >
                    Refazer quiz
                  </button>
                </motion.div>
              ) : step === -1 ? (
                /* Nome */
                <motion.div
                  key="name"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <button onClick={handleBack} className="text-gray-400 hover:text-pink-500 p-1 -ml-1 transition-colors">
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-pink-400 rounded-full" style={{ width: '0%' }} />
                    </div>
                    <span className="text-xs text-gray-400">1/{QUESTIONS.length + 1}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 mb-4 leading-snug">
                    Antes de começar, qual é o seu nome? 😊
                  </p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && name.trim() && setStep(0)}
                    placeholder="Digite seu nome..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-pink-400 mb-3"
                    autoFocus
                  />
                  <button
                    onClick={() => name.trim() && setStep(0)}
                    disabled={!name.trim()}
                    className="w-full bg-pink-500 hover:bg-pink-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl py-3 transition-all"
                  >
                    Continuar →
                  </button>
                </motion.div>
              ) : (
                /* Perguntas */
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Progress */}
                  <div className="flex items-center gap-2 mb-4">
                    <button onClick={handleBack} className="text-gray-400 hover:text-pink-500 p-1 -ml-1 transition-colors">
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-pink-400 rounded-full transition-all duration-300"
                        style={{ width: `${((step + 2) / (QUESTIONS.length + 1)) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400">{step + 2}/{QUESTIONS.length + 1}</span>
                  </div>

                  <p className="text-sm font-semibold text-gray-900 mb-4 leading-snug">
                    {QUESTIONS[step].text}
                  </p>

                  <div className="space-y-2">
                    {QUESTIONS[step].options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        className="w-full text-left text-sm text-gray-700 bg-gray-50 hover:bg-pink-50 hover:text-pink-700 hover:border-pink-300 border border-gray-200 rounded-xl px-4 py-3 transition-all active:scale-98"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}