import React, { useState, useEffect, useRef } from 'react';
import { base44 } from '@/api/base44Client';
import { Droplets, Flame, Thermometer, Bug, Circle, Scissors, Heart, Waves, Shield } from 'lucide-react';
import InfoStep from '@/components/quiz/InfoStep';
import InfoStep2 from '@/components/quiz/InfoStep2';

// ── ÍCONES DO QUIZ ───────────────────────────────────────────
const ICON_MAP = {
  corrimento: Droplets,
  coceira: Flame,
  ressecamento: Thermometer,
  infeccoes: Bug,
  manchas: Circle,
  depilacao: Scissors,
  relacao: Heart,
  urinar: Waves,
  prevencao: Shield,
};

// ── PRODUTOS ────────────────────────────────────────────────
const PRODUCTS = {
  serum: {
    id: 'serum',
    image: 'https://sejaziva.com.br/cdn/shop/files/2_ef7a6779-789b-4749-84b2-893761bc28f1.png?v=1764703506',
    name: 'Sérum Íntimo Ozonizado',
    price: 'R$ 187,00',
    tagline: 'Para sintomas externos: coceira, odor, ressecamento e manchas',
    headline: 'Identificamos sintomas que precisam de um tratamento externo eficaz.',
    body: 'O Sérum Íntimo Ozonizado Ziva age diretamente na origem do problema: combate fungos e bactérias, elimina o odor, restaura a hidratação e ajuda a clarear manchas na pele íntima.',
    checks: ['Alívio real da coceira e ardência', 'Eliminação de odores', 'Hidratação profunda e duradoura', 'Clareamento de manchas íntimas'],
    color: '#C4566A', colorLight: '#FAF0F2',
    badge: '🌹 Recomendado para você',
    url: 'https://sejaziva.com.br/products/serum-intimo-ozonizado',
    ctaText: 'Quero o Sérum Íntimo →',
  },
  simbiotico: {
    id: 'simbiotico',
    image: 'https://sejaziva.com.br/cdn/shop/files/Design_sem_nome_4_1.png?v=1764950605',
    name: 'Simbiótico Íntimo',
    price: 'A partir de R$ 187,00/mês',
    tagline: 'Para tratar a flora vaginal por dentro, de forma duradoura',
    headline: 'A raiz do seu problema está na flora vaginal, e a solução precisa vir de dentro.',
    body: 'O Simbiótico Íntimo Ziva combina 10 bilhões de probióticos L. Rhamnosus com prebiótico FOS para repovoar e nutrir sua flora vaginal, regulando o pH de dentro para fora e prevenindo novas infecções.',
    checks: ['Flora vaginal restaurada', 'Proteção contra infecções recorrentes', 'pH equilibrado naturalmente', 'Resultados duradouros, não temporários'],
    color: '#8B6914', colorLight: '#FBF5E6',
    badge: '🌿 Recomendado para você',
    url: 'https://sejaziva.com.br/products/simbiotico-intimo',
    ctaText: 'Quero o Simbiótico Íntimo →',
  },
  box: {
    id: 'box',
    image: 'https://sejaziva.com.br/cdn/shop/files/Box_Equilibrium.png?v=1764628626',
    name: 'Box Equilibrium 360°',
    price: 'R$ 477,00',
    tagline: 'Solução completa: por dentro e por fora',
    headline: 'Seu perfil é complexo e merece a solução mais completa da Ziva.',
    body: 'O Box Equilibrium 360° reúne tudo que você precisa: Sérum para tratar externamente e Simbiótico para restaurar por dentro. Um protocolo completo para quem quer resultados definitivos.',
    checks: ['Tratamento externo + interno', 'Protocolo completo e integrado', 'Resultado definitivo, não temporário', 'Melhor custo-benefício da linha'],
    color: '#A8405A', colorLight: '#FAF0F2',
    badge: '⭐ Mais recomendado para você',
    url: 'https://sejaziva.com.br/products/kit-bem-estar-completo',
    ctaText: 'Quero o Box Equilibrium 360° →',
  },
};

const ALSO_PRODUCTS = { serum: ['simbiotico','box'], simbiotico: ['serum','box'], box: ['serum','simbiotico'] };

// ── PERGUNTAS ────────────────────────────────────────────────
const STEPS_CONFIG = [
  {
    step: 1, label: 'Pergunta 1 de 10', multi: true, key: 'sintomas',
    title: 'Quais incômodos íntimos você sente com mais frequência?',
    sub: 'Selecione todos que se aplicam',
    options: [
      { value: 'corrimento', text: 'Corrimento com odor desagradável', score: { serum:3,simbiotico:1,box:2 }, icon: '💧' },
      { value: 'coceira',    text: 'Coceira e ardência',               score: { serum:3,simbiotico:1,box:2 }, icon: '🔥' },
      { value: 'ressecamento', text: 'Ressecamento e sensação de atrito', score: { serum:3,simbiotico:0,box:2 }, icon: '🌵' },
      { value: 'infeccoes',  text: 'Infecções de repetição (candidíase, vaginose ou infecção urinária)', score: { serum:1,simbiotico:3,box:3 }, icon: '🦠' },
      { value: 'manchas',    text: 'Manchas ou escurecimento na região íntima', score: { serum:3,simbiotico:0,box:1 }, icon: '🔵' },
      { value: 'depilacao',  text: 'Irritação após depilação',         score: { serum:3,simbiotico:0,box:1 }, icon: '✂️' },
      { value: 'relacao',    text: 'Desconforto durante ou após a relação sexual', score: { serum:2,simbiotico:1,box:2 }, icon: '💗' },
      { value: 'urinar',     text: 'Vontade frequente de urinar',      score: { serum:0,simbiotico:2,box:2 }, icon: '💦' },
      { value: 'prevencao',  text: 'Não tenho sintomas, quero prevenção e cuidado diário', score: { serum:0,simbiotico:0,box:0 }, icon: '🛡️' },
    ],
  },
  {
    step: 2, label: 'Pergunta 2 de 10', multi: false, key: 'antibioticos',
    title: 'Você usou antibióticos ou pomadas antifúngicas nos últimos 6 meses?',
    sub: 'Selecione uma opção',
    options: [
      { value: 'nao',            text: 'Não',                                           score: { serum:0,simbiotico:0,box:0 } },
      { value: 'antibiotico_1',  text: 'Sim, antibióticos, uma vez',                  score: { serum:0,simbiotico:2,box:1 } },
      { value: 'antibiotico_mais', text: 'Sim, antibióticos, mais de uma vez',        score: { serum:0,simbiotico:3,box:2 } },
      { value: 'antifungico',    text: 'Sim, pomadas ou cremes antifúngicos',           score: { serum:1,simbiotico:3,box:2 } },
      { value: 'ambos',          text: 'Sim, os dois (antibióticos e antifúngicos)',    score: { serum:1,simbiotico:3,box:3 } },
    ],
  },
  {
    step: 3, label: 'Pergunta 3 de 10', multi: true, key: 'gatilhos',
    title: 'O que costuma desencadear ou piorar seus desconfortos?',
    sub: 'Selecione todos que se aplicam',
    options: [
      { value: 'menstrual',    text: 'Período menstrual',                            score: { serum:1,simbiotico:2,box:2 } },
      { value: 'sexo',         text: 'Relações sexuais',                             score: { serum:2,simbiotico:1,box:2 } },
      { value: 'medicamento',  text: 'Uso de antibióticos ou outros medicamentos',   score: { serum:0,simbiotico:3,box:2 } },
      { value: 'estresse',     text: 'Estresse ou alimentação com muito açúcar',     score: { serum:0,simbiotico:2,box:1 } },
      { value: 'roupa',        text: 'Roupas apertadas ou de tecido sintético',      score: { serum:1,simbiotico:0,box:1 } },
      { value: 'calor',        text: 'Calor e umidade excessivos',                   score: { serum:1,simbiotico:0,box:1 } },
      { value: 'depilacao_gat', text: 'Depilação frequente',                        score: { serum:2,simbiotico:0,box:1 } },
      { value: 'nao_sei',      text: 'Não consigo identificar nenhum fator específico', score: { serum:0,simbiotico:0,box:0 } },
    ],
  },
  {
    step: 4, label: 'Pergunta 4 de 10', multi: false, key: 'higiene',
    title: 'Como você realiza sua higiene íntima atualmente?',
    sub: 'Selecione uma opção',
    options: [
      { value: 'comum',        text: 'Uso sabonete comum (não específico para área íntima)',    score: { serum:1,simbiotico:0,box:1 } },
      { value: 'convencional', text: 'Uso sabonete íntimo convencional com fragrância',          score: { serum:1,simbiotico:0,box:0 } },
      { value: 'natural',      text: 'Uso sabonete íntimo natural ou ozonizado',                 score: { serum:0,simbiotico:0,box:0 } },
      { value: 'agua',         text: 'Não uso produto específico, apenas água',                  score: { serum:0,simbiotico:0,box:0 } },
      { value: 'lencos',       text: 'Uso lenços umedecidos ou ducha íntima',                    score: { serum:1,simbiotico:0,box:1 } },
    ],
  },
  {
    step: 5, label: 'Pergunta 5 de 10', multi: false, key: 'hidratacao',
    title: 'Como você descreveria a hidratação da sua região íntima?',
    sub: 'Selecione uma opção',
    options: [
      { value: 'boa',        text: 'Bem hidratada, sem queixas',                              score: { serum:0,simbiotico:0,box:0 } },
      { value: 'leve',       text: 'Levemente ressecada em alguns momentos',                   score: { serum:1,simbiotico:0,box:0 } },
      { value: 'frequente_r', text: 'Frequentemente ressecada, com desconforto no dia a dia', score: { serum:2,simbiotico:0,box:1 } },
      { value: 'muito_r',    text: 'Muito ressecada, sinto dor, atrito ou pequenas fissuras', score: { serum:3,simbiotico:0,box:2 } },
    ],
  },
  {
    step: 6, label: 'Pergunta 6 de 10', multi: false, key: 'sexual',
    title: 'Você tem vida sexual ativa?',
    sub: 'Selecione uma opção',
    options: [
      { value: 'sim',    text: 'Sim',                    score: { serum:0,simbiotico:0,box:0 } },
      { value: 'nao',    text: 'Não',                    score: { serum:0,simbiotico:0,box:0 } },
      { value: 'prefiro', text: 'Prefiro não responder', score: { serum:0,simbiotico:0,box:0 } },
    ],
  },
  {
    step: 7, label: 'Pergunta 7 de 10', multi: true, key: 'fatores',
    title: 'Quais outros fatores de risco da Saúde Íntima você possui?',
    sub: 'Selecione todos que se aplicam',
    options: [
      { value: 'menopausa',       text: 'Estou na menopausa ou pré-menopausa',          score: { serum:2,simbiotico:2,box:3 } },
      { value: 'anticoncepcional', text: 'Uso anticoncepcional hormonal',               score: { serum:0,simbiotico:1,box:1 } },
      { value: 'acucar',          text: 'Consumo alimentos processados e açucarados',   score: { serum:0,simbiotico:2,box:1 } },
      { value: 'estresse_f',      text: 'Lido com muito estresse no dia a dia',          score: { serum:0,simbiotico:2,box:1 } },
      { value: 'perfumado',       text: 'Uso produtos de higiene íntima perfumados',    score: { serum:1,simbiotico:0,box:1 } },
      { value: 'clima',           text: 'Moro em região de clima quente e úmido',       score: { serum:0,simbiotico:0,box:0 } },
      { value: 'depilacao_f',     text: 'Faço depilação com frequência',                score: { serum:1,simbiotico:0,box:0 } },
      { value: 'sem_protecao',    text: 'Tive relações sexuais sem proteção',           score: { serum:0,simbiotico:2,box:2 } },
      { value: 'nenhum_f',        text: 'Nenhum desses fatores se aplica',              score: { serum:0,simbiotico:0,box:0 } },
    ],
  },
  // step 8 = persuasivo (sem resposta)
  {
    step: 9, label: 'Pergunta 8 de 10', multi: false, key: 'idade',
    title: 'Qual é a sua faixa etária?',
    sub: 'Selecione uma opção',
    options: [
      { value: '18_24', text: '18 a 24 anos', score: { serum:0,simbiotico:0,box:0 } },
      { value: '25_34', text: '25 a 34 anos', score: { serum:0,simbiotico:0,box:0 } },
      { value: '35_44', text: '35 a 44 anos', score: { serum:0,simbiotico:0,box:0 } },
      { value: '45_54', text: '45 a 54 anos', score: { serum:1,simbiotico:1,box:1 } },
      { value: '55_64', text: '55 a 64 anos', score: { serum:1,simbiotico:2,box:2 } },
      { value: '65_mais', text: '65 anos ou mais', score: { serum:2,simbiotico:2,box:3 } },
    ],
  },
  {
    step: 10, label: 'Pergunta 9 de 10', multi: true, key: 'tratamentos',
    title: 'Quais tratamentos você já tentou para esses desconfortos?',
    sub: 'Selecione todos que se aplicam',
    options: [
      { value: 'prescrito',  text: 'Antifúngicos ou antibióticos receitados por médico',          score: { serum:0,simbiotico:1,box:2 } },
      { value: 'creme',      text: 'Cremes e géis vaginais (tópicos)',                            score: { serum:1,simbiotico:0,box:1 } },
      { value: 'probiotico', text: 'Probióticos ou suplementos orais',                            score: { serum:0,simbiotico:2,box:1 } },
      { value: 'natural',    text: 'Produtos naturais e fitoterápicos',                           score: { serum:0,simbiotico:1,box:0 } },
      { value: 'farmacia',   text: 'Remédios sem receita comprados em farmácia',                  score: { serum:1,simbiotico:0,box:1 } },
      { value: 'nenhum_t',   text: 'Nenhum tratamento ainda, estou buscando a primeira solução', score: { serum:0,simbiotico:0,box:0 } },
    ],
  },
  {
    step: 11, label: 'Pergunta 10 de 10', multi: false, key: 'eficacia',
    title: 'Esses tratamentos ajudaram a resolver o problema?',
    sub: 'Selecione uma opção',
    options: [
      { value: 'resolveu',       text: 'Sim, resolvi de vez',                     score: { serum:0,simbiotico:0,box:0 } },
      { value: 'voltou',         text: 'Sim, mas o problema voltou depois',        score: { serum:1,simbiotico:3,box:3 } },
      { value: 'nao_ajudou',     text: 'Não, não ajudaram nada',                  score: { serum:1,simbiotico:2,box:3 } },
      { value: 'piorou',         text: 'Pioraram a minha situação',                score: { serum:0,simbiotico:2,box:3 } },
      { value: 'sem_tratamento', text: 'Ainda não tentei nenhum tratamento',       score: { serum:0,simbiotico:0,box:0 } },
    ],
  },
];

const ANSWER_STEPS = [1,2,3,4,5,6,7,9,10,11];
const TOTAL_STEPS  = 13;

function getResult(scores) {
  return 'simbiotico';
}

// ── COMPONENT: Option ────────────────────────────────────────
function Option({ option, selected, onSelect, multi, hasIcon }) {
  const IconComponent = hasIcon ? ICON_MAP[option.value] : null;
  
  return (
    <div
      onClick={onSelect}
      className={`option ${selected ? 'selected' : ''} ${hasIcon ? 'has-icon' : 'no-icon'}`}
    >
      {!hasIcon && (
        <span className={`option-check ${multi ? 'square' : ''}`}>
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      )}
      {hasIcon && IconComponent && (
        <div className="opt-icon">
          <IconComponent size={24} color="#C4566A" strokeWidth={2} />
        </div>
      )}
      <span className="option-text">{option.text}</span>
      {hasIcon && (
        <span className={`option-check ${multi ? 'square' : ''}`}>
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      )}
    </div>
  );
}

// ── COMPONENT: QuestionStep ──────────────────────────────────
function QuestionStep({ stepConfig, answers, onAnswer, onNext, onBack, isFirst }) {
  const selected = answers[stepConfig.key] || (stepConfig.multi ? [] : null);
  const isSelected = (val) => stepConfig.multi ? (selected || []).includes(val) : selected === val;
  const hasAny = stepConfig.multi ? (selected || []).length > 0 : !!selected;
  const [shake, setShake] = useState(false);

  const handleSelect = (val) => {
    if (stepConfig.multi) {
      const cur = selected || [];
      const next = cur.includes(val) ? cur.filter(v => v !== val) : [...cur, val];
      onAnswer(stepConfig.key, next, stepConfig.options.filter(o => next.includes(o.value)));
    } else {
      onAnswer(stepConfig.key, val, stepConfig.options.filter(o => o.value === val));
      setTimeout(() => onNext(), 350);
    }
  };

  const handleNext = () => {
    if (!hasAny) { setShake(true); setTimeout(() => setShake(false), 400); return; }
    onNext();
  };

  const isFirstStep = stepConfig.step === 1;

  return (
    <div className="step active" style={{ animation: 'fadeUp 0.35s ease' }}>
      {!isFirst && (
        <button className="back-btn" onClick={onBack}>← Voltar</button>
      )}
      <div className="step-label">{stepConfig.label}</div>
      <h2 className="question-title">{stepConfig.title}</h2>
      <p className="question-sub">{stepConfig.sub}</p>
      <div className="options">
        {stepConfig.options.map(opt => (
          <Option
            key={opt.value}
            option={opt}
            selected={isSelected(opt.value)}
            onSelect={() => handleSelect(opt.value)}
            multi={stepConfig.multi}
            hasIcon={isFirstStep && !!opt.icon}
          />
        ))}
      </div>
      {stepConfig.multi && (
        <button
          className={`btn btn-primary ${shake ? 'shake' : ''}`}
          onClick={handleNext}
        >
          Próxima →
        </button>
      )}
    </div>
  );
}

// ── COMPONENT: PersuasiveStep ────────────────────────────────
function PersuasiveStep({ scores, onNext }) {
  const result = getResult(scores);
  const product = PRODUCTS[result];
  const icons = { serum: '🌹', simbiotico: '🌿', box: '⭐' };

  return (
    <div className="step active" style={{ animation: 'fadeUp 0.35s ease' }}>
      <div className="persuasive-card">
        <div className="persuasive-icon">🌸</div>
        <h2 className="persuasive-title">Nós te entendemos!</h2>
        <p className="persuasive-body">
          Com base nas suas respostas, já identificamos o produto ideal para o seu perfil.
          Conheça a solução que pode transformar sua saúde íntima, formulada com ingredientes
          clinicamente pesquisados para o seu caso específico.
        </p>
        <div className="persuasive-product" style={{ borderColor: product.color }}>
          {product.image
            ? <img src={product.image} alt={product.name} style={{ width: '100%', maxHeight: 360, objectFit: 'contain', background: 'linear-gradient(135deg,#FAF0F2 0%,#F5EDEF 100%)' }} />
            : <div className="pp-image-placeholder">{icons[result]}</div>
          }
          <div className="pp-body">
            <span className="pp-badge">{product.badge}</span>
            <div className="pp-name">{product.name}</div>
            <div className="pp-tagline">{product.tagline}</div>
            <ul className="pp-checks">
              {product.checks.map((c, i) => <li key={i}>✓ {c}</li>)}
            </ul>
          </div>
        </div>
        <button className="btn btn-primary" onClick={onNext}>
          Continuar minha análise →
        </button>
      </div>
    </div>
  );
}

// ── COMPONENT: MidLoading ────────────────────────────────────
function MidLoading({ onDone }) {
  const [percent, setPercent] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const steps = ['Analisando suas respostas', 'Identificando seu perfil íntimo', 'Personalizando sua recomendação', 'Finalizando análise completa'];
  const percents = [20, 45, 72, 98];

  useEffect(() => {
    let i = 0;
    const tick = setInterval(() => {
      if (i < steps.length) {
        setVisibleSteps(prev => [...prev, i]);
        setPercent(percents[i]);
        i++;
      } else {
        clearInterval(tick);
        setPercent(100);
        setTimeout(() => onDone(), 500);
      }
    }, 750);
    return () => clearInterval(tick);
  }, []);

  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#fff', zIndex: 9999,
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', padding: '40px 28px', textAlign: 'center',
      animation: 'fadeInOverlay 0.35s ease'
    }}>
      <img
        src="https://sejaziva.com.br/cdn/shop/files/Logotipo_ZIVA_small_e1528dc7-4a49-4df5-91e2-20ed765fa393.webp?v=1753190480&width=167"
        alt="ZIVA Health"
        style={{ height: 40, width: 'auto', marginBottom: 40, opacity: 0.9 }}
      />
      <div style={{ position: 'relative', marginBottom: 36 }}>
        <div style={{
          width: 72, height: 72, border: '5px solid #F5EDEF',
          borderTopColor: '#C4566A', borderRadius: '50%', animation: 'spin 0.85s linear infinite'
        }} />
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 13, fontWeight: 800, color: '#C4566A'
        }}>{percent}%</div>
      </div>
      <div style={{ fontSize: 22, fontWeight: 800, color: '#1A1A1A', marginBottom: 8, lineHeight: 1.3 }}>
        Estamos criando sua<br />recomendação completa...
      </div>
      <div style={{ fontSize: 14, color: '#555', marginBottom: 36 }}>Só mais um momento ✨</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 300 }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 10, fontSize: 14,
            opacity: visibleSteps.includes(i) ? 1 : 0,
            transform: visibleSteps.includes(i) ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 0.4s ease',
            color: visibleSteps.includes(i) ? '#1A1A1A' : '#bbb'
          }}>
            <div style={{
              width: 20, height: 20, borderRadius: '50%', display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              fontSize: 10, transition: 'all 0.4s ease',
              background: visibleSteps.includes(i) ? '#C4566A' : 'transparent',
              border: visibleSteps.includes(i) ? '2px solid #C4566A' : '2px solid #eee',
              color: 'white'
            }}>
              {visibleSteps.includes(i) && i < visibleSteps.length - 1 ? '✓' : ''}
            </div>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── COMPONENT: LeadStep ──────────────────────────────────────
function LeadStep({ onSubmit, onBack }) {
  const [mode, setMode] = useState('whatsapp');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [error, setError] = useState(false);

  const formatPhone = (v) => {
    const digits = v.replace(/\D/g, '').slice(0, 11);
    if (!digits) return '';
    if (digits.length <= 2) return '(' + digits;
    if (digits.length <= 6) return `(${digits.slice(0,2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0,2)}) ${digits.slice(2,6)}-${digits.slice(6)}`;
    return `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`;
  };

  const handleSubmit = () => {
    const val = mode === 'email' ? email : whatsapp;
    if (!val || (mode === 'whatsapp' && val.replace(/\D/g,'').length < 10)) {
      setError(true); setTimeout(() => setError(false), 1500); return;
    }
    onSubmit({ [mode]: val });
  };

  return (
    <div className="step active" style={{ animation: 'fadeUp 0.35s ease' }}>
      <button className="back-btn" onClick={onBack}>← Voltar</button>
      <div className="lead-card">
        <div className="lead-icon">🎉</div>
        <h2 className="lead-title">Seus resultados estão prontos!</h2>
        <p className="lead-body">
          Avisaremos quando as amostras grátis do Simbiótico Íntimo Ziva estiverem disponíveis.
        </p>
        <div className="lead-tabs">
          <button className={`lead-tab ${mode==='email' ? 'active' : ''}`} onClick={() => setMode('email')}>📧 E-mail</button>
          <button className={`lead-tab ${mode==='whatsapp' ? 'active' : ''}`} onClick={() => setMode('whatsapp')}>💬 WhatsApp</button>
        </div>
        {mode === 'email' ? (
          <div className="lead-input-wrap">
            <span className="lead-input-icon">📧</span>
            <input
              type="email" className="lead-input"
              placeholder="seu@email.com"
              value={email} onChange={e => setEmail(e.target.value)}
              style={{ borderColor: error ? '#C4566A' : '' }}
            />
          </div>
        ) : (
          <div className="lead-input-wrap">
            <span className="lead-input-icon">📱</span>
            <input
              type="tel" className="lead-input"
              placeholder="(11) 98888-8888"
              value={whatsapp}
              onChange={e => setWhatsapp(formatPhone(e.target.value))}
              style={{ borderColor: error ? '#C4566A' : '' }}
            />
          </div>
        )}
        <p className="lead-privacy">
          Ao inserir seus dados, você concorda e aceita nossas{' '}
          <a href="https://sejaziva.com.br/policies/privacy-policy" target="_blank" rel="noopener noreferrer">
            Políticas de Privacidade
          </a>.
        </p>
        <button className="btn-unlock" onClick={handleSubmit}>
          🔓 Desbloquear meus resultados
        </button>
      </div>
    </div>
  );
}

// ── COMPONENT: LoadingResult ─────────────────────────────────
function LoadingResult({ onDone }) {
  const [visible, setVisible] = useState([]);
  const steps = [
    'Avaliando suas respostas...',
    'Analisando seus sintomas...',
    'Verificando o equilíbrio da sua flora...',
    'Montando sua recomendação personalizada...',
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) { setVisible(v => [...v, i]); i++; }
      else { clearInterval(interval); setTimeout(onDone, 600); }
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 20px', textAlign: 'center' }}>
      <div style={{
        width: 64, height: 64, border: '4px solid #FAF0F2', borderTopColor: '#C4566A',
        borderRadius: '50%', animation: 'spin 0.9s linear infinite', marginBottom: 32
      }} />
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#C4566A', marginBottom: 24 }}>
        Determinando seu perfil de saúde íntima...
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 320 }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: '#888',
            opacity: visible.includes(i) ? 1 : 0,
            transform: visible.includes(i) ? 'translateX(0)' : 'translateX(-10px)',
            transition: 'all 0.4s ease'
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: visible.includes(i) ? '#C4566A' : '#E8E8E8',
              flexShrink: 0, transition: 'background 0.4s'
            }} />
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── COMPONENT: ResultScreen ──────────────────────────────────
function ResultScreen({ scores, answers }) {
  const [rsStep, setRsStep] = useState(1);
  const chartAnimated = useRef(false);

  const result = getResult(scores);
  const product = PRODUCTS[result];
  const alsoIds = ALSO_PRODUCTS[result] || [];

  const META = {
    serum:      { rating: 'MÉDIO',       needleAngle: -18, riskLabel: 'Moderado',      riskPct: 40, riskColor: '#E67E22', riskBg: '#FFF8EC' },
    simbiotico: { rating: 'BAIXO-MÉDIO', needleAngle: -45, riskLabel: 'Moderado-Alto', riskPct: 64, riskColor: '#D05820', riskBg: '#FFF3EB' },
    box:        { rating: 'BAIXO',       needleAngle: -65, riskLabel: 'Alto',           riskPct: 82, riskColor: '#C0392B', riskBg: '#FEF2F2' },
  };
  const meta = META[result];
  const ratingColors = { 'MÉDIO': '#E67E22', 'BAIXO-MÉDIO': '#C4566A', 'BAIXO': '#C0392B' };
  const ratingColor = ratingColors[meta.rating];

  const riskDescs = {
    serum:      'Com os cuidados certos, é possível controlar seus sintomas externos e reduzir significativamente o desconforto.',
    simbiotico: 'Você pode precisar reequilibrar sua flora vaginal para reduzir o risco de recorrência e prevenir novas infecções.',
    box:        'Seus fatores de risco indicam que, sem tratamento adequado, seus sintomas tendem a se agravar e se repetir com frequência.',
  };

  const sintomas = answers.sintomas || [];
  const symMap = { coceira: 'coceira e ardência', corrimento: 'corrimento com odor', ressecamento: 'ressecamento íntimo', infeccoes: 'infecções recorrentes', manchas: 'manchas íntimas', depilacao: 'irritação pós-depilação', relacao: 'desconforto nas relações', prevencao: 'prevenção e bem-estar' };
  const mainSym = sintomas.length > 0 ? (symMap[sintomas[0]] || sintomas[0]) : 'seus sintomas';

  const [thumbLeft, setThumbLeft] = useState('5%');
  const [chartAnim, setChartAnim] = useState(false);

  const goNext = (current) => {
    if (current === 3) {
      setRsStep(3.5);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (current === 3.5) {
      setRsStep(3.6);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const next = current === 3.6 ? 4 : current + 1;
    setRsStep(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (next === 2) setTimeout(() => setThumbLeft(meta.riskPct + '%'), 350);
    if (next === 3) setTimeout(() => setChartAnim(true), 350);
  };

  const compareRows = [
    ['Infecções recorrentes', 'Infecções raras ou zero'],
    ['Odor forte e corrimento', 'Odor neutro e normal'],
    ['Coceira e ardência', 'Bem-estar e conforto'],
    ['Ressecamento íntimo', 'Hidratação adequada'],
    ['Flora desequilibrada', 'Flora vaginal saudável'],
  ];

  const TOTAL_RS = 5;

  return (
    <div style={{ animation: 'fadeUp 0.5s ease' }}>
      {/* Progress dots */}
      {rsStep !== 3.5 && rsStep !== 3.6 && (
        <div className="rs-progress">
          <div className="rs-progress-label">Etapa {rsStep} de {TOTAL_RS}</div>
          <div className="rs-dots">
            {[1,2,3,4,5].map(i => (
              <div key={i} className={`rs-dot ${i < rsStep ? 'done' : i === rsStep ? 'current' : ''}`} />
            ))}
          </div>
        </div>
      )}

      {/* S1: Rating */}
      {rsStep === 1 && (
        <div style={{ animation: 'rsReveal 0.5s ease forwards' }}>
          <div className="rating-card">
            <p className="rating-title">Com base nas suas respostas,</p>
            <p className="rating-value" style={{ color: ratingColor }}>
              sua saúde íntima está em nível <strong>{meta.rating}</strong>
            </p>
            <p className="rating-sub">Flora vaginal equilibrada, pH ideal e defesas ativas são a chave para resolver seus incômodos.</p>
            <div className="gauge-svg-wrap">
              <svg viewBox="0 0 300 165" xmlns="http://www.w3.org/2000/svg" width="100%">
                <path d="M 30 152 A 122 122 0 0 1 150 30" stroke="#FBCECE" strokeWidth="30" fill="none"/>
                <path d="M 150 30 A 122 122 0 0 1 270 152" stroke="#C8F0D8" strokeWidth="30" fill="none"/>
                <rect x="148" y="28" width="4" height="24" fill="white"/>
                <g transform={`rotate(${meta.needleAngle}, 150, 152)`}>
                  <line x1="150" y1="152" x2="150" y2="48" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="150" cy="152" r="8" fill="#1A1A1A"/>
                  <circle cx="150" cy="152" r="4" fill="white"/>
                </g>
                <text x="46"  y="162" fontSize="11" fontWeight="700" fill="#E05050" textAnchor="middle">BAIXO</text>
                <text x="254" y="162" fontSize="11" fontWeight="700" fill="#3B9E6E" textAnchor="middle">ALTO</text>
                <text x="70"  y="88"  fontSize="9" fill="#C0392B" textAnchor="middle" fontWeight="600">VOCÊ</text>
                <text x="70"  y="100" fontSize="9" fill="#C0392B" textAnchor="middle">está aqui</text>
                <circle cx="232" cy="72" r="5" fill="#27AE60"/>
                <text x="232" y="58" fontSize="9" fill="#27AE60" textAnchor="middle" fontWeight="600">Com ZIVA</text>
              </svg>
            </div>
            <div className="compare-grid">
              <div className="cg-head-bad">Nível {meta.rating}</div>
              <div className="cg-head-icon">⚖️</div>
              <div className="cg-head-good">Nível ALTO</div>
              {compareRows.map(([bad, good], i) => (
                <React.Fragment key={i}>
                  <div className="cg-bad">{bad}</div>
                  <div className="cg-icon">→</div>
                  <div className="cg-good">{good}</div>
                </React.Fragment>
              ))}
            </div>
            <button className="btn-continuar" onClick={() => goNext(1)}>Continuar →</button>
          </div>
        </div>
      )}

      {/* S2: Risk */}
      {rsStep === 2 && (
        <div style={{ animation: 'rsReveal 0.5s ease forwards' }}>
          <div className="risk-card">
            <h3 className="risk-title">O que suas respostas revelam sobre seu risco de recorrência?</h3>
            <div className="risk-box" style={{ background: meta.riskBg }}>
              <div className="risk-box-label">Risco de recorrência</div>
              <div className="risk-box-val" style={{ color: meta.riskColor }}>{meta.riskLabel}</div>
              <div className="risk-box-desc">{riskDescs[result]}</div>
            </div>
            <div className="risk-slider-wrap">
              <div style={{ position: 'relative', height: 10, borderRadius: 10, background: 'linear-gradient(to right, #27AE60, #F39C12, #E74C3C)' }}>
                <div style={{
                  position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)',
                  width: 22, height: 22, borderRadius: '50%', background: 'white',
                  border: '3px solid #333', boxShadow: '0 2px 8px rgba(0,0,0,.25)',
                  left: thumbLeft, transition: 'left 1.4s cubic-bezier(.34,1.56,.64,1)'
                }} />
              </div>
              <div className="risk-sl-labels"><span>Baixo</span><span>Moderado</span><span>Alto</span></div>
            </div>
            <p className="risk-body-text">
              Os fatores que você selecionou sugerem que seus incômodos —{' '}
              <strong style={{ color: meta.riskColor }}>{mainSym}</strong>{' '}
             , podem continuar se agravando sem o cuidado adequado.
            </p>
            <button className="btn-continuar" onClick={() => goNext(2)}>Continuar →</button>
          </div>
        </div>
      )}

      {/* S3: Chart */}
      {rsStep === 3 && (
        <div style={{ animation: 'rsReveal 0.5s ease forwards' }}>
          <div className="chart-card">
            <h3 className="chart-title">Veja como sua saúde íntima pode melhorar com Ziva em 30 dias</h3>
            <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" width="100%">
              <defs>
                <linearGradient id="zg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#27AE60" stopOpacity=".30"/>
                  <stop offset="100%" stopColor="#27AE60" stopOpacity=".01"/>
                </linearGradient>
              </defs>
              <line x1="40" y1="15" x2="40" y2="140" stroke="#EEE" strokeWidth="1"/>
              <line x1="40" y1="140" x2="292" y2="140" stroke="#EEE" strokeWidth="1"/>
              <line x1="40" y1="105" x2="292" y2="105" stroke="#EEE" strokeWidth=".5" strokeDasharray="4,3"/>
              <line x1="40" y1="70"  x2="292" y2="70"  stroke="#EEE" strokeWidth=".5" strokeDasharray="4,3"/>
              <line x1="40" y1="30"  x2="292" y2="30"  stroke="#EEE" strokeWidth=".5" strokeDasharray="4,3"/>
              <text x="30" y="143" fontSize="8" fill="#CCC" textAnchor="end">Baixo</text>
              <text x="30" y="33"  fontSize="8" fill="#CCC" textAnchor="end">Alto</text>
              <text x="96"  y="157" fontSize="9" fill="#AAA" textAnchor="middle">1ª sem.</text>
              <text x="160" y="157" fontSize="9" fill="#AAA" textAnchor="middle">2ª sem.</text>
              <text x="224" y="157" fontSize="9" fill="#AAA" textAnchor="middle">3ª sem.</text>
              <text x="288" y="157" fontSize="9" fill="#AAA" textAnchor="middle">4ª sem.</text>
              <polygon
                points="40,138 96,108 160,72 224,42 288,27 288,140 40,140"
                fill="url(#zg)" opacity={chartAnim ? 1 : 0}
                style={{ transition: 'opacity .8s ease 1.1s' }}
              />
              <polyline
                points="40,138 96,132 160,136 224,130 288,133"
                stroke="#E74C3C" strokeWidth="2.5" fill="none"
                strokeLinecap="round" strokeLinejoin="round"
                strokeDasharray="500" strokeDashoffset={chartAnim ? 0 : 500}
                style={{ transition: 'stroke-dashoffset 1.4s ease .4s' }}
              />
              <polyline
                points="40,138 96,108 160,72 224,42 288,27"
                stroke="#27AE60" strokeWidth="3" fill="none"
                strokeLinecap="round" strokeLinejoin="round"
                strokeDasharray="500" strokeDashoffset={chartAnim ? 0 : 500}
                style={{ transition: 'stroke-dashoffset 1.4s ease' }}
              />
              {[[96,108],[160,72],[224,42],[288,27]].map(([cx,cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="4.5" fill="white" stroke="#27AE60" strokeWidth="2.5"
                  opacity={chartAnim ? 1 : 0}
                  style={{ transition: `opacity .3s ease ${.55 + i*.3}s` }}
                />
              ))}
            </svg>
            <div className="chart-legend">
              <div className="legend-item"><div className="legend-line" style={{ background: '#27AE60' }} /><span>Ziva</span></div>
              <div className="legend-item"><div className="legend-line" style={{ background: '#E74C3C' }} /><span>Soluções comuns</span></div>
            </div>
            <button className="btn-continuar" onClick={() => goNext(3)}>Ver minha recomendação →</button>
          </div>
        </div>
      )}

      {/* Info step after chart (Etapa 3) */}
      {rsStep === 3.5 && (
        <InfoStep
          onBack={() => { setRsStep(3); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          onNext={() => goNext(3.5)}
        />
      )}

      {/* Info step 2 (nutritional info & benefits) */}
      {rsStep === 3.6 && (
        <InfoStep2
          onBack={() => { setRsStep(3.5); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          onNext={() => goNext(3.6)}
        />
      )}

      {/* S4: Product */}
      {rsStep === 4 && (
        <div style={{ animation: 'rsReveal 0.5s ease forwards' }}>
          <div className="result-badge" style={{ background: product.colorLight, color: product.color }}>{product.badge}</div>
          <h1 className="result-headline" style={{ color: product.color }}>{product.headline}</h1>
          <p className="result-body">{product.body}</p>
          <div className="result-product-card">
            {product.image && (
              <img src={product.image} alt={product.name} style={{ width: '100%', maxHeight: 380, objectFit: 'contain', display: 'block', background: product.colorLight }} />
            )}
            <div className="result-product-header" style={{ background: product.colorLight }}>
              <div className="result-product-name" style={{ color: product.color }}>{product.name}</div>
              <div className="result-product-tagline" style={{ color: product.color }}>{product.tagline}</div>
            </div>
            <div className="result-product-body">
              <div className="result-checkmarks">
                {product.checks.map((c, i) => (
                  <div key={i} className="result-check">
                    <span className="ck" style={{ color: product.color }}>✓</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
          <button className="btn-continuar-sec" onClick={() => goNext(4)}>Ver o que outras mulheres dizem →</button>
        </div>
      )}

      {/* S5: Social proof */}
      {rsStep === 5 && (
        <div style={{ animation: 'rsReveal 0.5s ease forwards' }}>
          <div className="social-card">
            <h3 className="social-title">Não acredite só em nós.<br />Veja o que outras mulheres dizem sobre a Ziva:</h3>
            <div className="stars-row">
              <span className="stars">★★★★★</span>
              <strong style={{ fontSize: 15 }}>4,8</strong>
              <span style={{ fontSize: 13, color: '#888' }}>· +2.300 mulheres atendidas</span>
            </div>
            <div className="testimonials-list">
              {[
                { name: 'Amanda R.', color: '#C4566A', text: '"Estava no segundo frasco e minha vida mudou. Sem coceira, sem odor, sem infecções. Finalmente sinto meu corpo em equilíbrio de verdade."' },
                { name: 'Carla M.', color: '#3B7A7A', text: '"Tinha candidíase todo mês há 3 anos. Com a Ziva, completei 4 meses sem nenhuma ocorrência. Não sabia mais como era me sentir normal."' },
                { name: 'Patrícia S.', color: '#8B6914', text: '"O ressecamento era tão intenso que dificultava minha vida íntima. Depois de 2 semanas já senti diferença. Agora sinto prazer de novo."' },
              ].map((t, i) => (
                <div key={i} className="testi">
                  <div className="testi-av" style={{ background: t.color }}>{t.name[0]}</div>
                  <div className="testi-body">
                    <div className="testi-top">
                      <span className="testi-name">{t.name}</span>
                      <span className="testi-check">✓ Verificado</span>
                    </div>
                    <p className="testi-text">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a
            href={product.url}
            className="btn-continuar"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, textDecoration: 'none', marginTop: 24 }}
            target="_blank" rel="noopener noreferrer"
          >
            🛒 {product.ctaText}
          </a>
        </div>
      )}
    </div>
  );
}

// ── MAIN COMPONENT ───────────────────────────────────────────
export default function QuizZiva() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [scores, setScores] = useState({ serum: 0, simbiotico: 0, box: 0 });

  const [phase, setPhase] = useState('quiz'); // quiz | lead | loading | result

  const getProgressPct = () => {
    const s = currentStep;
    const displayStep = s <= 7 ? s : s === 9 ? 8 : s <= 11 ? s - 1 : 11;
    return Math.round((displayStep / 11) * 100);
  };

  const computeScores = (newAnswers) => {
    const s = { serum: 0, simbiotico: 0, box: 0 };
    STEPS_CONFIG.forEach(sc => {
      const ans = newAnswers[sc.key];
      if (!ans) return;
      const vals = Array.isArray(ans) ? ans : [ans];
      vals.forEach(v => {
        const opt = sc.options.find(o => o.value === v);
        if (opt) { s.serum += opt.score.serum; s.simbiotico += opt.score.simbiotico; s.box += opt.score.box; }
      });
    });
    return s;
  };

  const handleAnswer = (key, value, _selectedOpts) => {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);
    setScores(computeScores(newAnswers));
  };

  const goToStep = (n) => {
    setCurrentStep(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (currentStep === 7) {
      goToStep(9);
    } else {
      goToStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep === 9) {
      goToStep(7);
    } else if (currentStep > 1) {
      goToStep(currentStep - 1);
    }
  };

  const handleLeadSubmit = async (leadData) => {
    const result = getResult(scores);
    base44.entities.QuizLead.create({
      email: leadData.email || null,
      whatsapp: leadData.whatsapp || null,
      recommended_product: result,
      score_serum: scores.serum,
      score_simbiotico: scores.simbiotico,
      score_box: scores.box,
      answers: JSON.stringify(answers),
    }).catch(() => {}); // salva em background, não bloqueia o fluxo
    setPhase('loading');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadingDone = () => {
    setPhase('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentConfig = STEPS_CONFIG.find(s => s.step === currentStep);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --rose: #C4566A; --rose-dk: #A8405A; --rose-lt: #FAF0F2; --rose-mid: #F0C8D0;
          --teal: #3B7A7A; --teal-lt: #EAF4F4; --gold: #8B6914; --gold-lt: #FBF5E6;
          --purple: #7B5EA7; --purple-lt: #F5F0FB; --dark: #1A1A1A; --grey: #555555;
          --lgrey: #888888; --border: #E8E8E8; --white: #FFFFFF; --font: 'Inter','Segoe UI',sans-serif;
          --radius: 12px; --shadow: 0 4px 24px rgba(0,0,0,0.08);
        }
        .quiz-page { font-family: var(--font); background: #F8F4F5; color: var(--dark); min-height: 100vh; display: flex; flex-direction: column; align-items: center; }
        .quiz-header { width: 100%; background: white; border-bottom: 2px solid var(--rose-lt); padding: 16px 24px; display: flex; justify-content: center; align-items: center; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 12px rgba(196,86,106,0.08); }
        .progress-wrap { width: 100%; background: var(--border); height: 4px; }
        .progress-bar { height: 4px; background: linear-gradient(90deg, var(--rose), var(--rose-dk)); transition: width 0.4s ease; border-radius: 0 4px 4px 0; }
        .quiz-wrap { width: 100%; max-width: 680px; padding: 32px 20px 60px; }
        .step { animation: fadeUp 0.35s ease; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes rsReveal { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeInOverlay { from { opacity:0; } to { opacity:1; } }
        @keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-6px)} 40%{transform:translateX(6px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }
        .step-label { font-size: 12px; font-weight: 600; letter-spacing: 1.5px; color: var(--rose); text-transform: uppercase; margin-bottom: 6px; }
        .question-title { font-size: clamp(20px,4vw,26px); font-weight: 700; color: var(--dark); line-height: 1.35; margin-bottom: 8px; }
        .question-sub { font-size: 13px; color: var(--lgrey); margin-bottom: 24px; font-style: italic; }
        .options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px; }
        .option { display: flex; align-items: center; gap: 14px; padding: 16px 18px; border: 2px solid var(--border); border-radius: var(--radius); background: white; cursor: pointer; transition: all 0.2s ease; user-select: none; }
        .option:hover { border-color: var(--rose-mid); background: var(--rose-lt); }
        .option.selected { border-color: var(--rose); background: var(--rose-lt); }
        .option.has-icon { padding: 11px 16px 11px 14px; gap: 14px; align-items: center; }
        .option.has-icon .option-text { flex: 1; font-size: 14px; }
        .option.has-icon .option-check { margin-left: auto; flex-shrink: 0; }
        .opt-icon { width:48px; height:48px; border-radius:50%; background:#F5EDEF; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:background 0.25s; }
        .option.has-icon.selected .opt-icon { background: var(--rose-mid); }
        .option-check { width:22px; height:22px; border-radius:50%; border:2px solid var(--border); display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:all 0.2s; background:white; }
        .option-check.square { border-radius:5px; }
        .option.selected .option-check { background:var(--rose); border-color:var(--rose); }
        .option-check svg { display:none; }
        .option.selected .option-check svg { display:block; }
        .option-text { font-size:15px; color:var(--dark); line-height:1.4; }
        .btn { display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:16px 32px; border-radius:50px; font-size:16px; font-weight:700; cursor:pointer; border:none; transition:all 0.2s ease; width:100%; letter-spacing:0.3px; }
        .btn-primary { background:linear-gradient(135deg,var(--rose),var(--rose-dk)); color:white; box-shadow:0 4px 16px rgba(196,86,106,0.3); }
        .btn-primary:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(196,86,106,0.4); }
        .back-btn { display:inline-flex; align-items:center; gap:6px; font-size:13px; color:var(--lgrey); background:none; border:none; cursor:pointer; padding:0; margin-bottom:20px; transition:color 0.2s; font-family:var(--font); }
        .back-btn:hover { color:var(--rose); }
        .persuasive-card { background:white; border-radius:20px; padding:40px 32px; text-align:center; box-shadow:var(--shadow); border-top:4px solid var(--rose); margin-bottom:28px; }
        .persuasive-icon { font-size:52px; margin-bottom:16px; }
        .persuasive-title { font-size:clamp(22px,4vw,28px); font-weight:800; color:var(--rose); margin-bottom:16px; }
        .persuasive-body { font-size:15px; color:var(--grey); line-height:1.7; margin-bottom:28px; }
        .persuasive-product { background:white; border-radius:16px; box-shadow:var(--shadow); overflow:hidden; margin-bottom:24px; text-align:left; border:1px solid #F0E0E4; }
        .pp-image-placeholder { width:100%; height:200px; background:linear-gradient(135deg,#FAF0F2 0%,#F5EDEF 100%); display:flex; align-items:center; justify-content:center; font-size:52px; }
        .pp-body { padding:18px 20px; }
        .pp-badge { display:inline-block; font-size:11px; font-weight:700; color:var(--rose); background:var(--rose-lt); border-radius:20px; padding:4px 12px; margin-bottom:10px; text-transform:uppercase; letter-spacing:0.5px; }
        .pp-name { font-size:18px; font-weight:800; color:var(--dark); margin-bottom:4px; }
        .pp-tagline { font-size:13px; color:var(--grey); margin-bottom:14px; line-height:1.5; }
        .pp-checks { list-style:none; padding:0; margin:0 0 14px 0; display:flex; flex-direction:column; gap:6px; }
        .pp-checks li { font-size:13px; color:var(--dark); font-weight:600; }
        .pp-price { font-size:16px; font-weight:800; color:var(--rose); }
        .lead-card { background:white; border-radius:20px; padding:40px 32px; text-align:center; box-shadow:var(--shadow); border-top:4px solid var(--teal); margin-bottom:28px; }
        .lead-icon { font-size:52px; margin-bottom:16px; }
        .lead-title { font-size:clamp(20px,4vw,26px); font-weight:800; color:var(--teal); margin-bottom:12px; }
        .lead-body { font-size:15px; color:var(--grey); margin-bottom:28px; line-height:1.6; }
        .lead-tabs { display:flex; gap:8px; margin-bottom:20px; background:var(--teal-lt); border-radius:10px; padding:4px; }
        .lead-tab { flex:1; padding:10px; border-radius:8px; border:none; background:transparent; font-size:14px; font-weight:600; color:var(--lgrey); cursor:pointer; transition:all 0.2s; font-family:var(--font); }
        .lead-tab.active { background:white; color:var(--teal); box-shadow:0 2px 8px rgba(0,0,0,0.08); }
        .lead-input-wrap { position:relative; margin-bottom:12px; }
        .lead-input { width:100%; padding:16px 18px 16px 48px; border:2px solid var(--border); border-radius:var(--radius); font-size:15px; color:var(--dark); background:white; transition:border-color 0.2s; outline:none; font-family:var(--font); }
        .lead-input:focus { border-color:var(--teal); }
        .lead-input-icon { position:absolute; left:16px; top:50%; transform:translateY(-50%); font-size:18px; }
        .lead-privacy { font-size:12px; color:var(--lgrey); margin-bottom:24px; line-height:1.6; }
        .lead-privacy a { color:var(--teal); text-decoration:underline; }
        .btn-unlock { background:linear-gradient(135deg,var(--rose),var(--rose-dk)); color:white; padding:18px 32px; border-radius:50px; font-size:17px; font-weight:800; border:none; cursor:pointer; width:100%; display:flex; align-items:center; justify-content:center; gap:10px; box-shadow:0 4px 20px rgba(196,86,106,0.3); transition:all 0.2s; letter-spacing:0.3px; font-family:var(--font); }
        .btn-unlock:hover { transform:translateY(-2px); }
        .rs-progress { text-align:center; margin-bottom:20px; }
        .rs-progress-label { font-size:12px; color:var(--lgrey); margin-bottom:8px; }
        .rs-dots { display:flex; gap:7px; justify-content:center; }
        .rs-dot { width:8px; height:8px; border-radius:50%; background:var(--border); transition:background 0.35s, transform 0.35s; }
        .rs-dot.done { background:var(--rose-mid); }
        .rs-dot.current { background:var(--rose); transform:scale(1.35); }
        .btn-continuar { width:100%; margin-top:22px; padding:17px 24px; background:var(--rose); color:white; border:none; border-radius:50px; font-size:16px; font-weight:700; cursor:pointer; letter-spacing:0.3px; box-shadow:0 4px 20px rgba(196,86,106,0.3); transition:all 0.2s; font-family:var(--font); }
        .btn-continuar:hover { transform:translateY(-2px); }
        .btn-continuar-sec { width:100%; margin-top:14px; padding:14px 24px; background:transparent; color:var(--rose); border:2px solid var(--rose); border-radius:50px; font-size:15px; font-weight:700; cursor:pointer; transition:all 0.2s; font-family:var(--font); }
        .btn-continuar-sec:hover { background:var(--rose-lt); }
        .rating-card { background:white; border-radius:20px; padding:28px 20px; box-shadow:var(--shadow); text-align:center; }
        .rating-title { font-size:15px; color:var(--grey); margin-bottom:4px; }
        .rating-value { font-size:clamp(22px,5vw,30px); font-weight:900; line-height:1.3; margin-bottom:6px; }
        .rating-sub { font-size:14px; color:var(--grey); line-height:1.6; margin-bottom:20px; }
        .gauge-svg-wrap { max-width:290px; margin:0 auto 20px; }
        .compare-grid { display:grid; grid-template-columns:1fr 30px 1fr; border-radius:12px; overflow:hidden; gap:1px; background:#e5e5e5; font-size:12px; }
        .cg-head-bad  { background:#FCDEDE; padding:10px 12px; text-align:right; font-weight:700; color:#C0392B; }
        .cg-head-icon { background:#F5F5F5; display:flex; align-items:center; justify-content:center; font-size:14px; }
        .cg-head-good { background:#D4F5E3; padding:10px 12px; text-align:left; font-weight:700; color:#27AE60; }
        .cg-bad  { background:#FEF5F5; padding:8px 12px; text-align:right; color:#C0392B; }
        .cg-icon { background:white; display:flex; align-items:center; justify-content:center; font-size:13px; }
        .cg-good { background:#F0FFF7; padding:8px 12px; text-align:left; color:#27AE60; }
        .risk-card  { background:white; border-radius:20px; padding:28px 20px; box-shadow:var(--shadow); }
        .risk-title { font-size:17px; font-weight:700; color:var(--dark); margin-bottom:18px; text-align:center; line-height:1.4; }
        .risk-box   { border-radius:12px; padding:16px 18px; margin-bottom:18px; }
        .risk-box-label { font-size:13px; color:var(--grey); margin-bottom:2px; }
        .risk-box-val   { font-size:24px; font-weight:900; }
        .risk-box-desc  { font-size:13px; color:var(--grey); margin-top:4px; line-height:1.5; }
        .risk-slider-wrap { margin:16px 0; }
        .risk-sl-labels { display:flex; justify-content:space-between; font-size:11px; color:var(--lgrey); margin-top:6px; }
        .risk-body-text { font-size:14px; color:var(--grey); line-height:1.6; text-align:center; }
        .chart-card  { background:white; border-radius:20px; padding:28px 20px; box-shadow:var(--shadow); }
        .chart-title { font-size:17px; font-weight:700; color:var(--dark); margin-bottom:20px; text-align:center; line-height:1.4; }
        .chart-legend { display:flex; justify-content:center; gap:20px; margin-top:12px; }
        .legend-item  { display:flex; align-items:center; gap:7px; font-size:13px; color:var(--grey); }
        .legend-line  { width:20px; height:3px; border-radius:2px; }
        .social-card  { background:white; border-radius:20px; padding:28px 20px; box-shadow:var(--shadow); }
        .social-title { font-size:17px; font-weight:700; color:var(--dark); margin-bottom:12px; text-align:center; line-height:1.4; }
        .stars-row    { display:flex; align-items:center; justify-content:center; gap:8px; margin-bottom:20px; flex-wrap:wrap; }
        .stars        { color:#F5A623; font-size:18px; letter-spacing:2px; }
        .testimonials-list { display:flex; flex-direction:column; gap:14px; }
        .testi        { display:flex; gap:12px; background:#F9F9F9; border-radius:12px; padding:14px; }
        .testi-av     { width:42px; height:42px; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:17px; font-weight:700; color:white; }
        .testi-body   { flex:1; min-width:0; }
        .testi-top    { display:flex; align-items:center; gap:8px; margin-bottom:5px; flex-wrap:wrap; }
        .testi-name   { font-size:14px; font-weight:700; color:var(--dark); }
        .testi-check  { font-size:11px; color:#27AE60; font-weight:600; }
        .testi-text   { font-size:13px; color:var(--grey); line-height:1.6; font-style:italic; }
        .result-badge { display:inline-flex; align-items:center; gap:8px; padding:8px 18px; border-radius:50px; font-size:12px; font-weight:700; letter-spacing:1px; text-transform:uppercase; margin-bottom:20px; }
        .result-headline { font-size:clamp(22px,4.5vw,30px); font-weight:800; line-height:1.3; margin-bottom:16px; }
        .result-body { font-size:15px; color:var(--grey); line-height:1.7; margin-bottom:28px; }
        .result-product-card { border-radius:20px; overflow:hidden; box-shadow:var(--shadow); margin-bottom:28px; }
        .result-product-header { padding:28px 28px 20px; }
        .result-product-name { font-size:22px; font-weight:800; margin-bottom:4px; }
        .result-product-tagline { font-size:14px; opacity:0.75; }
        .result-product-body { background:white; padding:24px 28px; }
        .result-checkmarks { display:flex; flex-direction:column; gap:10px; margin-bottom:28px; }
        .result-check { display:flex; align-items:center; gap:10px; font-size:14px; color:var(--dark); }
        .result-cta { padding:18px 32px; border-radius:50px; font-size:17px; font-weight:800; border:none; cursor:pointer; width:100%; display:flex; align-items:center; justify-content:center; gap:10px; transition:all 0.2s; text-decoration:none; text-align:center; }
        .also-section { margin-top:32px; }
        .also-title { font-size:14px; font-weight:600; color:var(--lgrey); text-transform:uppercase; letter-spacing:1px; margin-bottom:16px; text-align:center; }
        .also-products { display:flex; flex-direction:column; gap:12px; }
        .also-product { display:flex; align-items:center; gap:14px; padding:16px 18px; background:white; border-radius:var(--radius); border:1px solid var(--border); text-decoration:none; color:var(--dark); transition:all 0.2s; }
        .also-product:hover { border-color:var(--rose); transform:translateX(4px); }
        .also-product-name { font-size:14px; font-weight:700; }
        .also-product-desc { font-size:13px; color:var(--lgrey); }
        .also-product-arrow { margin-left:auto; color:var(--rose); font-size:18px; }
        @media(max-width:480px) { .quiz-wrap{padding:20px 14px 48px;} .persuasive-card,.lead-card{padding:28px 20px;} .result-product-header,.result-product-body{padding:20px;} }
      `}</style>

      <div className="quiz-page">
        {/* Header */}
        <header className="quiz-header">
          <a href="https://sejaziva.com.br" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="https://sejaziva.com.br/cdn/shop/files/Logotipo_ZIVA_small_e1528dc7-4a49-4df5-91e2-20ed765fa393.webp?v=1753190480&width=167"
              alt="ZIVA Health" style={{ height: 44, width: 'auto', display: 'block' }}
            />
          </a>
        </header>

        {/* Progress bar */}
        <div className="progress-wrap">
          <div className="progress-bar" style={{ width: getProgressPct() + '%' }} />
        </div>

        <main className="quiz-wrap">
          {phase === 'quiz' && (
            <>
              {/* Question steps 1–7 */}
              {currentStep <= 7 && currentConfig && (
                <QuestionStep
                  stepConfig={currentConfig}
                  answers={answers}
                  onAnswer={handleAnswer}
                  onNext={handleNext}
                  onBack={handleBack}
                  isFirst={currentStep === 1}
                />
              )}

              {/* Question steps 9–11 */}
              {currentStep >= 9 && currentStep <= 11 && currentConfig && (
                <QuestionStep
                  stepConfig={currentConfig}
                  answers={answers}
                  onAnswer={handleAnswer}
                  onNext={handleNext}
                  onBack={handleBack}
                  isFirst={false}
                />
              )}

              {/* Lead step 12 */}
              {currentStep === 12 && (
                <LeadStep onSubmit={handleLeadSubmit} onBack={handleBack} />
              )}
            </>
          )}

          {phase === 'loading' && <LoadingResult onDone={handleLoadingDone} />}
          {phase === 'result' && <ResultScreen scores={scores} answers={answers} />}
        </main>
      </div>
    </>
  );
}