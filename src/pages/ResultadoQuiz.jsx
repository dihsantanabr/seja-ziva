import React, { useState, useEffect } from 'react';

// ── DADOS ────────────────────────────────────────────────────
const SIMBIOTICO_IMAGE = 'https://sejaziva.com.br/cdn/shop/files/Design_sem_nome_4_1.png?v=1764950605';
const SIMBIOTICO_URL = 'https://sejaziva.com.br/products/simbiotico-intimo';
const BOX_IMAGE = 'https://sejaziva.com.br/cdn/shop/files/Box_Equilibrium.png?v=1764628626';
const BOX_URL = 'https://sejaziva.com.br/products/kit-bem-estar-completo';
const LOGO = 'https://sejaziva.com.br/cdn/shop/files/Logotipo_ZIVA_small_e1528dc7-4a49-4df5-91e2-20ed765fa393.webp?v=1753190480&width=167';

const PLANS = [
  {
    id: '1m', image: SIMBIOTICO_IMAGE, url: SIMBIOTICO_URL, alt: 'Simbiótico Íntimo Ziva',
    title: 'Simbiótico Íntimo', duration: '1 mês de tratamento', subtitle: 'Ideal para experimentar',
    was: 'R$ 249,00', now: 'R$ 227,00', perBottle: 'por caixa',
    servings: '30 sachês', perDay: 'R$ 7,57 por dia', bottles: '1 caixa enviada', total: null,
    save: null, tag: null, popular: false,
  },
  {
    id: '3m', image: 'https://media.base44.com/images/public/698f17e9124bfe3a6f9a6198/205c85e6e_image.png', url: SIMBIOTICO_URL, alt: 'Kit 2 (3 meses) Ziva',
    title: 'Kit com 3 Simbiótico Íntimo', duration: '3 meses de tratamento', subtitle: 'Ótimo para criar novos hábitos',
    was: 'R$ 249,00', now: 'R$ 189,00', perBottle: 'por caixa',
    servings: '90 sachês', perDay: 'R$ 6,30 por dia', bottles: '3 caixas enviadas', total: 'Total: R$ 567,00',
    save: 'ECONOMIZE 24%', tag: 'Mais popular', popular: true,
  },
  {
    id: 'box', image: BOX_IMAGE, url: BOX_URL, alt: 'Box Equilibrium 360° Ziva',
    title: 'Box Equilibrium 360°', duration: 'Kit completo', subtitle: 'Solução completa: por dentro e por fora',
    was: 'R$ 664,00', now: 'R$ 477,00', perBottle: 'kit completo',
    servings: 'Sérum + Simbiótico', perDay: 'Tratamento externo e interno', bottles: 'Protocolo completo enviado', total: null,
    save: null, tag: 'Rotina Completa', popular: false,
  },
];

// ── COUNTDOWN ────────────────────────────────────────────────
function useCountdown(initialSeconds = 24 * 3600) {
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const t = setInterval(() => setSeconds(s => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

// ── PLAN CARD ────────────────────────────────────────────────
function PlanCard({ plan, mode }) {
  return (
    <div className={`plan-card ${plan.popular ? 'popular' : ''}`}>
      {plan.tag && (
        <div className={`plan-tag ${plan.popular ? 'tag-popular' : 'tag-value'}`}>
          {plan.tag} {plan.save && <strong>{plan.save}</strong>}
        </div>
      )}
      <div className="plan-body">
        <h3 className="plan-title">{plan.title}</h3>
        <span className="plan-duration">{plan.duration}</span>
        <p className="plan-subtitle">{plan.subtitle}</p>
        <div className="plan-img-wrap">
          <img src={plan.image} alt={plan.alt} />
        </div>
        <div className="plan-price">
          <span className="plan-was">{plan.was}</span>
          <span className="plan-now">{plan.now}</span>
          <span className="plan-per">{plan.perBottle}</span>
          {plan.total && <span className="plan-total">{plan.total}</span>}
        </div>
        <ul className="plan-specs">
          <li>{plan.servings}</li>
          <li><strong>{plan.perDay}</strong></li>
          <li>{plan.bottles}</li>
        </ul>
        <a href={plan.url} target="_blank" rel="noopener noreferrer" className="plan-cta">
          Pedir agora
        </a>
        <p className="plan-note">
          {mode === 'sub' ? 'Cancele quando quiser. Frete grátis.' : 'Pagamento único. Frete grátis.'}
        </p>
      </div>
    </div>
  );
}

// ── MAIN ─────────────────────────────────────────────────────
export default function ResultadoQuiz() {
  const timer = useCountdown(24 * 3600);
  const [mode, setMode] = useState('once'); // sub | once
  const [copied, setCopied] = useState(false);
  const copyCode = () => {
    navigator.clipboard?.writeText('ZIVA-QUIZ52').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .rq {
          --rose:#C4566A; --rose-dk:#A8405A; --rose-lt:#FAF0F2; --rose-mid:#F0C8D0;
          --dark:#1A1A1A; --grey:#555; --lgrey:#888; --border:#E8E8E8; --green:#27AE60;
          --font:'Inter','Segoe UI',sans-serif;
          font-family:var(--font); background:#F1EDEE; color:var(--dark); min-height:100vh;
        }
        .rq-banner { background:linear-gradient(90deg,var(--rose-dk),var(--rose)); color:#fff; padding:12px 16px; display:flex; align-items:center; justify-content:center; gap:16px; flex-wrap:wrap; text-align:center; }
        .rq-banner-title { font-size:clamp(15px,3vw,20px); font-weight:800; letter-spacing:1px; }
        .rq-banner-save { background:#fff; color:var(--rose-dk); border-radius:50px; padding:4px 14px; font-weight:900; font-size:13px; }
        .rq-banner-time { font-variant-numeric:tabular-nums; font-weight:700; font-size:15px; }
        .rq-logo-bar { background:#fff; display:flex; justify-content:center; padding:14px; border-bottom:1px solid var(--border); }
        .rq-logo-bar img { height:38px; width:auto; }
        .rq-wrap { max-width:1080px; margin:0 auto; padding:28px 16px 60px; }
        .promo-card { background:#fff; border:2px solid var(--rose-mid); border-radius:16px; padding:22px 24px; margin-bottom:32px; position:relative; overflow:hidden; }
        .promo-top { display:flex; align-items:center; gap:14px; flex-wrap:wrap; }
        .promo-off { font-size:clamp(24px,5vw,34px); font-weight:900; color:var(--dark); }
        .promo-sub { font-size:14px; color:var(--grey); }
        .promo-divider { border:none; border-top:2px dashed var(--rose-mid); margin:16px 0; }
        .promo-code-row { display:flex; align-items:center; justify-content:space-between; gap:12px; }
        .promo-code { display:flex; align-items:center; gap:10px; font-weight:800; font-size:16px; color:var(--dark); }
        .promo-code-label { font-size:11px; color:var(--lgrey); text-transform:uppercase; letter-spacing:1px; display:block; margin-bottom:4px; }
        .promo-check { width:26px; height:26px; border-radius:50%; background:var(--green); color:#fff; display:flex; align-items:center; justify-content:center; font-size:14px; flex-shrink:0; }
        .promo-time { font-weight:800; color:var(--rose); font-variant-numeric:tabular-nums; }
        .rq-title { text-align:center; font-size:clamp(26px,5vw,42px); font-weight:800; line-height:1.2; margin-bottom:28px; }
        .mode-toggle { display:flex; background:#fff; border-radius:50px; padding:5px; max-width:420px; margin:0 auto 28px; box-shadow:0 2px 10px rgba(0,0,0,.06); }
        .mode-btn { flex:1; border:none; background:transparent; padding:12px; border-radius:50px; font-weight:700; font-size:14px; color:var(--lgrey); cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px; transition:all .2s; font-family:var(--font); }
        .mode-btn.active { background:var(--rose); color:#fff; box-shadow:0 4px 12px rgba(196,86,106,.3); }
        .mode-badge { background:var(--rose-mid); color:var(--rose-dk); font-size:10px; font-weight:800; padding:2px 7px; border-radius:20px; }
        .mode-btn.active .mode-badge { background:#fff; color:var(--rose); }
        .trust-bar { background:var(--rose-lt); border-radius:14px; padding:16px 20px; display:flex; gap:20px; justify-content:center; flex-wrap:wrap; margin-bottom:32px; }
        .trust-item { display:flex; align-items:center; gap:10px; font-size:13px; color:var(--dark); max-width:280px; }
        .trust-ic { width:34px; height:34px; border-radius:50%; background:var(--rose); color:#fff; display:flex; align-items:center; justify-content:center; font-size:16px; flex-shrink:0; }
        .plans-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin-bottom:14px; align-items:start; }
        .plan-card { background:#fff; border-radius:16px; overflow:hidden; border:2px solid var(--border); position:relative; }
        .plan-card.popular { border-color:var(--rose); box-shadow:0 8px 30px rgba(196,86,106,.18); }
        .plan-tag { text-align:center; padding:8px; font-size:12px; font-weight:700; }
        .tag-popular { background:var(--rose); color:#fff; }
        .tag-value { background:var(--rose-mid); color:var(--rose-dk); }
        .plan-tag strong { font-weight:900; }
        .plan-body { padding:20px 20px 24px; text-align:center; }
        .plan-title { font-size:17px; font-weight:800; margin-bottom:8px; }
        .plan-duration { display:inline-block; background:var(--rose-lt); color:var(--rose-dk); border:1px solid var(--rose-mid); font-size:12px; font-weight:800; padding:5px 14px; border-radius:50px; margin-bottom:10px; letter-spacing:.3px; }
        .plan-subtitle { font-size:12.5px; color:var(--lgrey); margin-bottom:16px; min-height:34px; }
        .plan-img-wrap { border-radius:12px; margin-bottom:16px; aspect-ratio:1; overflow:hidden; box-shadow:0 4px 16px rgba(0,0,0,.1); }
        .plan-img-wrap img { width:100%; height:100%; object-fit:cover; display:block; }
        .plan-price { margin-bottom:14px; }
        .plan-was { display:block; font-size:14px; color:var(--lgrey); text-decoration:line-through; }
        .plan-now { display:block; font-size:30px; font-weight:900; color:var(--dark); line-height:1.1; }
        .plan-per { font-size:12px; color:var(--lgrey); }
        .plan-total { display:block; font-size:13px; font-weight:700; color:var(--rose); margin-top:4px; }
        .plan-specs { list-style:none; border-top:1px solid var(--border); border-bottom:1px solid var(--border); padding:12px 0; margin-bottom:16px; display:flex; flex-direction:column; gap:5px; }
        .plan-specs li { font-size:12.5px; color:var(--grey); }
        .plan-specs strong { color:var(--rose); font-weight:800; }
        .plan-cta { display:block; background:linear-gradient(135deg,var(--rose),var(--rose-dk)); color:#fff; text-decoration:none; padding:14px; border-radius:50px; font-weight:800; font-size:15px; box-shadow:0 4px 14px rgba(196,86,106,.3); transition:transform .2s; }
        .plan-cta:hover { transform:translateY(-2px); }
        .plan-note { font-size:11.5px; color:var(--lgrey); margin-top:10px; }
        .plan-renew { text-align:center; font-size:12px; color:var(--lgrey); margin-bottom:36px; }
        .checkout-safe { text-align:center; margin-bottom:36px; }
        .checkout-safe-title { font-size:12px; font-weight:700; letter-spacing:1.5px; color:var(--lgrey); text-transform:uppercase; margin-bottom:14px; }
        .pay-badges { display:flex; gap:10px; justify-content:center; flex-wrap:wrap; }
        .pay-badge { background:#fff; border:1px solid var(--border); border-radius:8px; padding:8px 14px; font-size:12px; font-weight:800; color:var(--grey); box-shadow:0 1px 4px rgba(0,0,0,.04); }
        .guarantees { display:flex; gap:16px; justify-content:center; flex-wrap:wrap; margin-bottom:44px; }
        .guar { display:flex; flex-direction:column; align-items:center; gap:8px; text-align:center; max-width:150px; }
        .guar-ic { font-size:30px; }
        .guar-txt { font-size:12.5px; font-weight:600; color:var(--dark); line-height:1.4; }
        .graph-card { background:#fff; border-radius:20px; padding:32px 24px; box-shadow:0 4px 24px rgba(0,0,0,.06); margin-bottom:40px; }
        .graph-title { text-align:center; font-size:clamp(18px,3.5vw,24px); font-weight:800; margin-bottom:24px; line-height:1.3; }
        .graph-legend { display:flex; justify-content:center; gap:24px; margin-top:16px; }
        .graph-legend .li { display:flex; align-items:center; gap:8px; font-size:13px; color:var(--grey); }
        .graph-legend .ln { width:22px; height:4px; border-radius:2px; }
        .rec-section { text-align:center; margin-bottom:36px; }
        .rec-title { font-size:clamp(20px,4vw,28px); font-weight:800; margin-bottom:24px; }
        .rec-cards { display:flex; gap:16px; justify-content:center; flex-wrap:wrap; margin-bottom:32px; }
        .rec-card { background:#fff; border:2px solid var(--rose-mid); border-radius:16px; padding:24px; max-width:260px; flex:1; min-width:220px; }
        .rec-plan { font-size:20px; font-weight:900; color:var(--rose); margin-bottom:8px; }
        .rec-desc { font-size:14px; color:var(--grey); line-height:1.5; }
        .rq-final-cta { display:block; max-width:420px; margin:0 auto; background:linear-gradient(135deg,var(--rose),var(--rose-dk)); color:#fff; text-decoration:none; text-align:center; padding:18px; border-radius:50px; font-weight:800; font-size:18px; box-shadow:0 6px 24px rgba(196,86,106,.35); transition:transform .2s; }
        .rq-final-cta:hover { transform:translateY(-2px); }
        @media(max-width:820px) {
          .plans-grid { grid-template-columns:1fr; }
          .plan-card.popular { order:-1; }
        }
        @media(max-width:480px) {
          .promo-code-row { flex-direction:column; align-items:flex-start; }
          .trust-bar { flex-direction:column; align-items:center; }
        }
      `}</style>

      <div className="rq">
        {/* Banner */}
        <div className="rq-banner">
          <span className="rq-banner-title">OFERTA ESPECIAL ZIVA</span>
          <span className="rq-banner-save">ATÉ 52% OFF</span>
          <span className="rq-banner-time">{timer}</span>
        </div>

        {/* Logo */}
        <div className="rq-logo-bar">
          <a href="https://sejaziva.com.br" target="_blank" rel="noopener noreferrer">
            <img src={LOGO} alt="ZIVA Health" />
          </a>
        </div>

        <div className="rq-wrap">
          {/* Promo code card */}
          <div className="promo-card">
            <div className="promo-top">
              <span className="promo-off">Até 52% off</span>
              <span className="promo-sub">Seu código promocional especial foi aplicado!</span>
            </div>
            <hr className="promo-divider" />
            <div className="promo-code-row">
              <div>
                <span className="promo-code-label">Código</span>
                <div className="promo-code" onClick={copyCode} style={{ cursor: 'pointer', userSelect: 'none' }} title="Clique para copiar">
                  <span>🏷️</span> ZIVA-QUIZ52 {copied && <span style={{ color: 'var(--green)', fontSize: 13 }}>✓ Copiado!</span>}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span className="promo-time">{timer}</span>
                <span className="promo-check">✓</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="rq-title">Deixe a sua flora íntima<br />trabalhar por você</h1>

          {/* Mode toggle */}
          <div className="mode-toggle">
            <button className={`mode-btn ${mode === 'once' ? 'active' : ''}`} onClick={() => setMode('once')}>
              Compra única
            </button>
            <button className={`mode-btn ${mode === 'sub' ? 'active' : ''}`} onClick={() => setMode('sub')}>
              Assinar <span className="mode-badge">OFF%</span>
            </button>
          </div>

          {/* Trust bar */}
          <div className="trust-bar">
            <div className="trust-item">
              <span className="trust-ic">👩‍⚕️</span>
              <span><strong>Ginecologistas</strong> recomendam para equilibrar a flora vaginal</span>
            </div>
            <div className="trust-item">
              <span className="trust-ic">🌸</span>
              <span><strong>Especialistas</strong> recomendam para manter o pH íntimo saudável</span>
            </div>
          </div>

          {/* Plans */}
          <div className="plans-grid">
            {PLANS.filter(p => mode === 'sub' ? p.id === '1m' : true).map(p => {
              const plan = mode === 'sub' && p.id === '1m'
                ? { ...p, was: 'R$ 249,00', now: 'R$ 187,00', perBottle: '/ Mês', servings: '30 sachês por mês', perDay: 'R$ 6,23 por dia', bottles: '1 caixa por mês', total: null, save: null, tag: null }
                : p;
              return <PlanCard key={p.id} plan={plan} mode={mode} />;
            })}
          </div>
          <p className="plan-renew">
            {mode === 'sub' ? 'A assinatura é renovada automaticamente até o cancelamento.' : 'Pagamento único, sem renovação automática.'}
          </p>

          {/* Safe checkout */}
          <div className="checkout-safe">
            <div className="checkout-safe-title">Compra 100% segura e protegida</div>
            <div className="pay-badges">
              {['VISA', 'Mastercard', 'Pix', 'Boleto', 'Elo', 'American Express'].map(b => (
                <span key={b} className="pay-badge">{b}</span>
              ))}
            </div>
          </div>

          {/* Guarantees */}
          <div className="guarantees">
            <div className="guar"><span className="guar-ic">🛡️</span><span className="guar-txt">Garantia de 30 dias ou seu dinheiro de volta</span></div>
            <div className="guar"><span className="guar-ic">🚚</span><span className="guar-txt">Frete grátis para todo o Brasil</span></div>
            <div className="guar"><span className="guar-ic">🇧🇷</span><span className="guar-txt">Fabricado no Brasil com registro Anvisa</span></div>
            <div className="guar"><span className="guar-ic">🔬</span><span className="guar-txt">Fórmula com respaldo científico</span></div>
          </div>

          {/* Improvement graph */}
          <div className="graph-card">
            <h2 className="graph-title">Veja como sua saúde íntima evolui com a Ziva em 4 semanas</h2>
            <svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" width="100%">
              <defs>
                <linearGradient id="zgArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#27AE60" stopOpacity=".3"/>
                  <stop offset="100%" stopColor="#27AE60" stopOpacity=".01"/>
                </linearGradient>
              </defs>
              <line x1="40" y1="15" x2="40" y2="140" stroke="#EEE" strokeWidth="1"/>
              <line x1="40" y1="140" x2="292" y2="140" stroke="#EEE" strokeWidth="1"/>
              <line x1="40" y1="105" x2="292" y2="105" stroke="#EEE" strokeWidth=".5" strokeDasharray="4,3"/>
              <line x1="40" y1="70" x2="292" y2="70" stroke="#EEE" strokeWidth=".5" strokeDasharray="4,3"/>
              <line x1="40" y1="30" x2="292" y2="30" stroke="#EEE" strokeWidth=".5" strokeDasharray="4,3"/>
              <text x="30" y="143" fontSize="8" fill="#CCC" textAnchor="end">Baixo</text>
              <text x="30" y="33" fontSize="8" fill="#CCC" textAnchor="end">Alto</text>
              <text x="96" y="157" fontSize="9" fill="#AAA" textAnchor="middle">1ª sem.</text>
              <text x="160" y="157" fontSize="9" fill="#AAA" textAnchor="middle">2ª sem.</text>
              <text x="224" y="157" fontSize="9" fill="#AAA" textAnchor="middle">3ª sem.</text>
              <text x="288" y="157" fontSize="9" fill="#AAA" textAnchor="middle">4ª sem.</text>
              <polygon points="40,138 96,108 160,72 224,42 288,27 288,140 40,140" fill="url(#zgArea)"/>
              <polyline points="40,138 96,132 160,136 224,130 288,133" stroke="#E74C3C" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="40,138 96,108 160,72 224,42 288,27" stroke="#27AE60" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              {[[96,108],[160,72],[224,42],[288,27]].map(([cx,cy],i) => (
                <circle key={i} cx={cx} cy={cy} r="4.5" fill="#fff" stroke="#27AE60" strokeWidth="2.5"/>
              ))}
            </svg>
            <div className="graph-legend">
              <div className="li"><span className="ln" style={{ background: '#27AE60' }} /><span>Ziva</span></div>
              <div className="li"><span className="ln" style={{ background: '#E74C3C' }} /><span>Soluções comuns</span></div>
            </div>
          </div>

          {/* Recommendation */}
          <div className="rec-section">
            <h2 className="rec-title">Com base nas suas respostas, recomendamos</h2>
            <div className="rec-cards">
              <div className="rec-card">
                <div className="rec-plan">Plano de 3 meses</div>
                <div className="rec-desc">Para alcançar resultados efetivos e criar uma nova rotina de cuidado íntimo.</div>
              </div>
              <div className="rec-card">
                <div className="rec-plan">Plano de 6 meses</div>
                <div className="rec-desc">Para consolidar uma flora vaginal equilibrada e resultados duradouros.</div>
              </div>
            </div>
            <a href={SIMBIOTICO_URL} target="_blank" rel="noopener noreferrer" className="rq-final-cta">
              Quero a minha Ziva agora →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}