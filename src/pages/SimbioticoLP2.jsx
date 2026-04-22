import React, { useState } from 'react';

const PRODUCT_IMG_1 = 'https://sejaziva.com.br/cdn/shop/files/Design_sem_nome_4_1.png?v=1764950605';
const PRODUCT_IMG_2 = 'https://sejaziva.com.br/cdn/shop/files/PROBIOTICO_-_04.png?v=1764950605';
const PRODUCT_IMG_SACHE = 'https://sejaziva.com.br/cdn/shop/files/Sache_Probiotico_WEBP.webp?v=1764950605';

const reviews = [
  { stars: 5, title: 'Chegou rápido e já senti diferença', text: 'Comprei na terça, chegou na quinta. Fácil, sem burocracia. Em duas semanas já notei a diferença no corrimento e no odor.', author: 'Carla M.', time: 'há 3 semanas' },
  { stars: 5, title: 'Paguei no Pix e foi tudo rápido', text: 'Descontão no Pix e aprovou na hora. Recebi antes do prazo. Sabor agradável, prático de tomar. Já pedi a segunda caixa.', author: 'Amanda R.', time: 'há 2 semanas' },
  { stars: 5, title: 'Sem candidíase há 3 meses', text: 'Histórico de candidíase recorrente. Após 3 caixas, nenhum episódio. Intestino regulado como nunca. Produto imprescindível.', author: 'Fernanda K.', time: 'há 1 mês' },
  { stars: 5, title: 'Sabor delicioso, resultado real', text: 'Não esperava gostar tanto do sabor. E o resultado vem. Menos odor, menos corrimento, mais confiança no dia a dia.', author: 'Juliana M.', time: 'há 2 meses' },
  { stars: 5, title: 'Cumpre o que promete', text: 'Antes quase todo mês tinha desequilíbrio de pH. Com o Simbiótico Ziva estou equilibrada e confiante. Recomendo demais.', author: 'Denizze M.', time: 'há 2 meses' },
  { stars: 4, title: 'Resultado gradual, mas real', text: 'Nas primeiras semanas não notei muito. A partir da terceira semana sentiu diferença real. A consistência é chave. Vale o investimento.', author: 'Priscila T.', time: 'há 6 semanas' },
];

const faqs = [
  { q: 'Quanto tempo para sentir resultado?', a: 'As primeiras mudanças — menos odor, mais conforto — surgem entre 1ª e 2ª semana. Resultados mais profundos se consolidam entre a 8ª e 12ª semana de uso contínuo.' },
  { q: 'Como funciona a garantia de 30 dias?', a: 'Use todos os sachês da primeira caixa. Se não notar diferença, envie um e-mail curto e devolvemos 100% do valor. Sem formulários, sem burocracia.' },
  { q: 'Posso tomar durante a menstruação?', a: 'Sim. É até recomendado, pois é quando o pH vaginal sofre mais oscilações.' },
  { q: 'Tem contraindicação?', a: 'Contraindicado para menores de 18 anos e gestantes (sem orientação médica). Mulheres em antibióticos devem consultar médico antes.' },
  { q: 'Qual a diferença do kit com sérum?', a: 'O Simbiótico cuida por dentro (microbiota e pH). O Sérum Ozonizado cuida por fora (hidrata, protege a mucosa). Juntos formam o protocolo completo.' },
];

const KITS = [
  {
    id: 'simples',
    label: 'Simbiótico Íntimo',
    desc: 'Proteção por dentro · 30 dias',
    old: 'R$ 299',
    price: 'R$ 227',
    pix: 'R$ 215,65 no Pix',
    parcela: '12x de R$ 24,34',
    url: 'https://sejaziva.com.br/products/simbiotico-intimo',
  },
  {
    id: 'combo',
    label: 'Simbiótico + Sérum Ozonizado',
    desc: 'Proteção por dentro e fora · Frete grátis',
    old: 'R$ 558',
    price: 'R$ 367',
    pix: 'R$ 348,65 no Pix',
    parcela: '12x de R$ 39,34',
    featured: true,
    url: 'https://sejaziva.com.br/products/simbiotico-intimo',
  },
];

export default function SimbioticoLP2() {
  const [selectedKit, setSelectedKit] = useState('simples');
  const [openFaq, setOpenFaq] = useState(null);

  const kit = KITS.find(k => k.id === selectedKit);

  return (
    <div style={{ fontFamily: "'Instrument Sans', sans-serif", background: '#FFFCF6', color: '#1A1613' }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />

      {/* TOP BAR */}
      <div style={{ background: '#1A1613', color: '#F7F1E8', fontSize: '13px', padding: '10px 20px', display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
        <span><strong>⚡ Pix com 5% OFF</strong></span>
        <span>📦 Entrega em até <strong>48h</strong></span>
        <span>✓ Frete grátis acima de R$ 249</span>
      </div>

      {/* NAV */}
      <div style={{ background: '#fff', borderBottom: '1px solid #EFE6D6', padding: '14px 20px', display: 'flex', justifyContent: 'center' }}>
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698f17e9124bfe3a6f9a6198/9eab2108f_Screenshot2026-02-13at165800.png"
          alt="Ziva"
          style={{ height: '32px', objectFit: 'contain' }}
        />
      </div>

      {/* HERO + BOX DE OFERTA */}
      <section id="oferta" style={{ background: 'linear-gradient(135deg, #F7F1E8 0%, #FDF4F5 100%)', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }} className="hero-grid-bp2">

          {/* LEFT */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1A1613', color: '#F7F1E8', borderRadius: '100px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D48A90', display: 'inline-block' }}></span>
              Compra em 3 cliques
            </div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '600', lineHeight: '1.2', marginBottom: '20px' }}>
              Simbiótico Íntimo Ziva. <em style={{ color: '#D48A90', fontStyle: 'italic' }}>Direto no ponto.</em>
            </h1>
            <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#3A342E', marginBottom: '24px' }}>
              <strong>10 bilhões de Lactobacillus + FOS · 30 sachês · 1 dose por dia.</strong> Equilibra sua flora, estabiliza o pH e protege sua saúde íntima — sem complicação.
            </p>

            {/* Logistics */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {[
                { icon: '🚚', text: 'Entrega em até 48h nas capitais' },
                { icon: '⚡', text: 'Pix com 5% OFF · aprovação instantânea' },
                { icon: '📍', text: 'Rastreio em tempo real por WhatsApp' },
              ].map((lb, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#3A342E' }}>
                  <span style={{ fontSize: '18px' }}>{lb.icon}</span>
                  <span>{lb.text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <span style={{ color: '#D48A90', fontSize: '20px' }}>★★★★★</span>
              <span style={{ fontSize: '14px', color: '#3A342E' }}><strong>4,8/5</strong> · avaliações verificadas</span>
            </div>

            {/* Product image */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={PRODUCT_IMG_2}
                alt="Simbiótico Íntimo Ziva"
                style={{ maxHeight: '280px', objectFit: 'contain', filter: 'drop-shadow(0 12px 32px rgba(212,138,144,0.3))' }}
              />
            </div>
          </div>

          {/* RIGHT: OFFER BOX */}
          <div style={{ background: '#fff', borderRadius: '24px', padding: '32px', boxShadow: '0 8px 40px rgba(26,22,19,0.10)', border: '1px solid #EFE6D6', position: 'sticky', top: '20px' }}>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: '700', marginBottom: '6px' }}>Escolha sua opção</h3>
            <p style={{ color: '#6E665C', fontSize: '14px', marginBottom: '24px' }}>30 sachês · 1 dose por dia · 30 dias de uso</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              {KITS.map(k => (
                <button
                  key={k.id}
                  onClick={() => setSelectedKit(k.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '16px 18px', borderRadius: '16px',
                    border: `2px solid ${selectedKit === k.id ? '#D48A90' : '#EFE6D6'}`,
                    background: selectedKit === k.id ? '#FDF4F5' : '#fff',
                    cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', width: '100%'
                  }}
                >
                  {/* Radio */}
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: `2px solid ${selectedKit === k.id ? '#D48A90' : '#D4C9BC'}`, background: selectedKit === k.id ? '#D48A90' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {selectedKit === k.id && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '700', fontSize: '14px', color: '#1A1613' }}>{k.label}</div>
                    <div style={{ fontSize: '12px', color: '#6E665C' }}>{k.desc}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '12px', color: '#6E665C', textDecoration: 'line-through' }}>{k.old}</div>
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: '700', color: '#1A1613' }}>{k.price}</div>
                    <div style={{ fontSize: '11px', color: '#D48A90', fontWeight: '700' }}>{k.pix}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Pix highlight */}
            <div style={{ background: '#1A1613', borderRadius: '12px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ background: '#D48A90', color: '#fff', borderRadius: '8px', padding: '6px 10px', fontWeight: '900', fontSize: '14px', flexShrink: 0 }}>PIX</div>
              <div style={{ color: '#F7F1E8', fontSize: '13px' }}>
                <strong style={{ color: '#fff' }}>5% OFF</strong> à vista · aprovação em segundos · sem cadastro obrigatório
              </div>
            </div>

            <a
              href={kit.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', background: '#D48A90', color: '#fff', borderRadius: '100px', padding: '18px 32px', textAlign: 'center', fontWeight: '800', fontSize: '18px', textDecoration: 'none', marginBottom: '12px', letterSpacing: '0.3px' }}
            >
              Finalizar compra →
            </a>

            <div style={{ textAlign: 'center', color: '#6E665C', fontSize: '12px' }}>🔒 Compra segura</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '8px' }}>
              {['PIX', 'VISA', 'MASTER', 'ELO'].map(b => (
                <span key={b} style={{ background: '#F7F1E8', border: '1px solid #EFE6D6', borderRadius: '6px', padding: '4px 8px', fontSize: '11px', fontWeight: '700', color: '#6E665C' }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA — 3 PASSOS */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Como funciona</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>Do clique ao resultado <em style={{ color: '#D48A90', fontStyle: 'italic' }}>em 3 passos.</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { n: '1', title: 'Escolha', text: 'Simbiótico sozinho ou o kit com Sérum. Sem cadastro obrigatório.', micro: '30 segundos' },
              { n: '2', title: 'Pague', text: 'Pix com 5% OFF e aprovação instantânea, ou cartão em até 12x.', micro: 'Aprovação em segundos' },
              { n: '3', title: 'Receba', text: 'Entrega em até 48h nas capitais, com rastreio em tempo real por WhatsApp.', micro: 'Discreto e ágil' },
            ].map(step => (
              <div key={step.n} style={{ background: '#F7F1E8', borderRadius: '20px', padding: '32px 28px', textAlign: 'center', position: 'relative' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#D48A90', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: '700', margin: '0 auto 16px' }}>{step.n}</div>
                <h4 style={{ fontWeight: '700', fontSize: '18px', marginBottom: '10px' }}>{step.title}</h4>
                <p style={{ color: '#6E665C', fontSize: '14px', lineHeight: '1.6', marginBottom: '12px' }}>{step.text}</p>
                <div style={{ background: '#D48A90', color: '#fff', borderRadius: '100px', padding: '4px 14px', fontSize: '12px', fontWeight: '600', display: 'inline-block' }}>{step.micro}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section style={{ background: '#F7F1E8', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>No seu pedido</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>O que vai chegar <em style={{ color: '#D48A90', fontStyle: 'italic' }}>na sua casa.</em></h2>
          </div>

          {/* Product visual */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <img src={PRODUCT_IMG_SACHE} alt="Sachê Simbiótico Ziva" style={{ maxWidth: '240px', margin: '0 auto', filter: 'drop-shadow(0 12px 30px rgba(212,138,144,0.3))' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { icon: '📦', title: '30 sachês prontos', text: 'Um sachê por dia. Toma direto na boca, sem diluir em água.' },
              { icon: '✅', title: 'Registro Anvisa', text: 'Produto registrado, testado em laboratório e aprovado para comercialização.' },
              { icon: '❤️', title: '30 dias de garantia', text: 'Não gostou? Um e-mail curto e devolvemos 100% do valor pago.' },
              { icon: '🌿', title: 'Vegano, sem glúten', text: 'Livre de alergênicos comuns. Seguro para uso contínuo.' },
            ].map((c, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '24px', textAlign: 'center', border: '1px solid #EFE6D6' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{c.icon}</div>
                <h4 style={{ fontWeight: '700', fontSize: '15px', marginBottom: '8px' }}>{c.title}</h4>
                <p style={{ color: '#6E665C', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>O que ele faz</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}><em style={{ color: '#D48A90', fontStyle: 'italic' }}>4 benefícios</em>, 1 sachê por dia.</h2>
            <p style={{ color: '#3A342E', fontSize: '15px', marginTop: '12px', maxWidth: '500px', margin: '12px auto 0' }}>Sem fórmulas complicadas. Apenas o essencial para sua saúde íntima e intestinal.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { big: 'pH', title: 'Equilibra o pH', text: 'Flora íntima estável no dia a dia.' },
              { big: '✓', title: 'Previne infecções', text: 'Proteção contra recorrências de candidíase e vaginose.' },
              { big: '⊙', title: 'Regula o intestino', text: 'Menos inchaço, mais conforto digestivo.' },
              { big: '+', title: 'Reforça imunidade', text: 'Defesas naturais fortalecidas todos os dias.' },
            ].map((b, i) => (
              <div key={i} style={{ background: '#F7F1E8', borderRadius: '20px', padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '40px', fontWeight: '700', color: '#D48A90', lineHeight: 1, marginBottom: '12px' }}>{b.big}</div>
                <h4 style={{ fontWeight: '700', fontSize: '16px', marginBottom: '8px' }}>{b.title}</h4>
                <p style={{ color: '#6E665C', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: '#F7F1E8', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
            <div>
              <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Aprovado</div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>Quem comprou, <em style={{ color: '#D48A90', fontStyle: 'italic' }}>gostou.</em></h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#D48A90', fontSize: '20px' }}>★★★★★</span>
              <span style={{ fontFamily: "'Fraunces', serif", fontSize: '28px', fontWeight: '700', color: '#1A1613' }}>4,8</span>
              <span style={{ fontSize: '13px', color: '#6E665C' }}>· avaliações verificadas</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #EFE6D6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ color: '#D48A90', fontSize: '15px' }}>{'★'.repeat(r.stars)}</span>
                  <span style={{ fontSize: '11px', color: '#7A8B6F', background: '#F0F5EE', padding: '3px 8px', borderRadius: '100px', fontWeight: '600' }}>✓ VERIFICADA</span>
                </div>
                <h4 style={{ fontWeight: '700', fontSize: '14px', marginBottom: '8px' }}>{r.title}</h4>
                <p style={{ color: '#6E665C', fontSize: '13px', lineHeight: '1.6', marginBottom: '12px' }}>{r.text}</p>
                <div style={{ fontSize: '12px', color: '#6E665C', fontWeight: '500' }}>{r.author} · {r.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA FINAL */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Sem risco</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '12px' }}>Pronta para <em style={{ color: '#D48A90', fontStyle: 'italic' }}>começar?</em></h2>
            <p style={{ color: '#3A342E', fontSize: '15px', lineHeight: '1.7' }}>Garantia de 30 dias. Sem burocracia. Sem risco.</p>
          </div>

          {/* Product image */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <img src={PRODUCT_IMG_2} alt="Simbiótico Íntimo Ziva" style={{ maxHeight: '300px', margin: '0 auto', objectFit: 'contain', filter: 'drop-shadow(0 16px 40px rgba(212,138,144,0.3))' }} />
          </div>

          {/* Kit selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {KITS.map(k => (
              <button
                key={k.id}
                onClick={() => setSelectedKit(k.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '18px 20px', borderRadius: '16px',
                  border: `2px solid ${selectedKit === k.id ? '#D48A90' : '#EFE6D6'}`,
                  background: selectedKit === k.id ? '#FDF4F5' : '#F7F1E8',
                  cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', width: '100%'
                }}
              >
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: `2px solid ${selectedKit === k.id ? '#D48A90' : '#D4C9BC'}`, background: selectedKit === k.id ? '#D48A90' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {selectedKit === k.id && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '700', fontSize: '15px', color: '#1A1613' }}>{k.label}</div>
                  <div style={{ fontSize: '13px', color: '#6E665C' }}>{k.desc}</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: '12px', color: '#6E665C', textDecoration: 'line-through' }}>{k.old}</div>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: '700', color: '#1A1613' }}>{k.price}</div>
                  <div style={{ fontSize: '11px', color: '#D48A90', fontWeight: '700' }}>{k.pix}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Total */}
          <div style={{ background: '#F7F1E8', borderRadius: '12px', padding: '18px 20px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '13px', color: '#6E665C' }}>Total</div>
              <div style={{ fontSize: '12px', color: '#6E665C', marginTop: '4px' }}>ou {kit.parcela} no cartão · Pix com 5% OFF</div>
            </div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: '28px', fontWeight: '700', color: '#1A1613' }}>{kit.price}</div>
          </div>

          <a
            href={kit.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', background: '#D48A90', color: '#fff', borderRadius: '100px', padding: '18px 32px', textAlign: 'center', fontWeight: '800', fontSize: '18px', textDecoration: 'none', marginBottom: '12px' }}
          >
            Finalizar compra →
          </a>
          <div style={{ textAlign: 'center', color: '#6E665C', fontSize: '13px' }}>🔒 Compra 100% Segura · VISA · MASTER · ELO · PIX</div>
        </div>
      </section>

      {/* GARANTIA */}
      <section style={{ background: '#F7F1E8', padding: '60px 20px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: '90px', height: '90px', borderRadius: '50%', border: '3px solid #D48A90', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', background: '#fff' }}>
            <div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: '26px', fontWeight: '700', color: '#D48A90', lineHeight: 1 }}>30</div>
              <div style={{ fontSize: '10px', color: '#6E665C', fontWeight: '600' }}>Dias</div>
            </div>
          </div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '16px' }}>Garantia <em style={{ color: '#D48A90', fontStyle: 'italic' }}>incondicional</em> de 30 dias</h2>
          <p style={{ color: '#3A342E', lineHeight: '1.7', fontSize: '16px', marginBottom: '24px' }}>
            Use todos os sachês da primeira caixa. Se não sentir diferença, envie um e-mail e devolvemos <strong>100% do valor</strong>. Sem formulários, sem perguntas difíceis.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[['1.', 'Use por 30 dias'], ['2.', 'Envie um e-mail'], ['3.', 'Reembolso integral']].map(([n, t], i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '14px 10px' }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: '700', color: '#D48A90', marginBottom: '4px' }}>{n}</div>
                <div style={{ fontSize: '13px', color: '#3A342E', fontWeight: '500' }}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Dúvidas rápidas</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>Respostas <em style={{ color: '#D48A90', fontStyle: 'italic' }}>diretas.</em></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: '#F7F1E8', borderRadius: '14px', overflow: 'hidden', border: '1px solid #EFE6D6' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '18px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontWeight: '600', fontSize: '15px', color: '#1A1613', gap: '12px' }}
                >
                  {faq.q}
                  <span style={{ color: '#D48A90', fontSize: '20px', flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 22px 18px', color: '#3A342E', lineHeight: '1.7', fontSize: '15px', borderTop: '1px solid #EFE6D6', paddingTop: '14px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section style={{ background: '#1A1613', padding: '70px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: '#F7F1E8', marginBottom: '16px' }}>
            Chega de esperar.<br /><em style={{ color: '#D48A90' }}>Comece hoje.</em>
          </h2>
          <p style={{ color: 'rgba(247,241,232,0.7)', fontSize: '15px', lineHeight: '1.7', marginBottom: '32px' }}>
            Pix com 5% OFF · entrega em até 48h · garantia de 30 dias
          </p>
          <a href="#oferta" style={{ background: '#D48A90', color: '#fff', borderRadius: '100px', padding: '18px 40px', fontWeight: '800', fontSize: '17px', textDecoration: 'none', display: 'inline-block' }}>
            Finalizar compra →
          </a>
          <div style={{ color: 'rgba(247,241,232,0.4)', fontSize: '12px', marginTop: '16px' }}>🔒 Pagamento seguro · Garantia de 30 dias · Frete grátis acima de R$ 249</div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid-bp2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}