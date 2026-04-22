import React, { useState, useEffect } from 'react';

const PRODUCT_IMG_2 = 'https://sejaziva.com.br/cdn/shop/files/PROBIOTICO_-_04.png?v=1764950605';

const faqs = [
  { q: 'O cupom ZIVA15 funciona com outras promoções?', a: 'O cupom ZIVA15 (R$ 15 OFF) pode ser combinado com a opção Pix 5% OFF. Somadas, sua economia na primeira compra chega a R$ 97,60. Não acumula com outros cupons.' },
  { q: 'Qual a diferença real entre Ziva e Maxfem?', a: 'Ziva tem 10 bi UFC (vs. 5-8 bi), inclui FOS (Maxfem não), sachê agradável (Maxfem é cápsula), 30 dias de garantia (Maxfem tem 7), e custa R$ 7,07/dose vs. R$ 8,30/dose da Maxfem.' },
  { q: 'Os genéricos são tão ruins assim?', a: 'Genéricos muitas vezes têm concentração inferior (1-5 bi UFC), cepa não documentada, sem garantia e sem suporte. Economizam no preço, não na eficácia. O Ziva compensa.' },
  { q: 'E se eu comprar 2 caixas, muda a economia?', a: 'Sim. Com 2 caixas, você ativa frete grátis e o custo por unidade cai ainda mais. O cupom ZIVA15 aplica em cada compra durante sua validade.' },
];

export default function SimbioticoLP4() {
  const [openFaq, setOpenFaq] = useState(null);
  const [countdown, setCountdown] = useState('23:59:47');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 0);
      const diff = Math.max(0, endOfDay - now);
      
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;
      const seconds = Math.floor(diff / 1000) % 60;
      
      setCountdown(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontFamily: "'Instrument Sans', sans-serif", background: '#FFFCF6', color: '#141210' }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=IBM+Plex+Mono:wght@400;500;600;700&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />

      {/* COUPON BAR */}
      <div style={{ background: '#1A1613', color: '#F7F1E8', padding: '14px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', flexWrap: 'wrap', fontSize: '14px', fontFamily: "'IBM Plex Mono', monospace" }}>
        <span>💰 Use o cupom</span>
        <span style={{ background: '#D48A90', color: '#fff', padding: '4px 12px', borderRadius: '6px', fontWeight: '700', fontSize: '15px' }}>ZIVA15</span>
        <span>e ganhe <strong>R$ 15 OFF</strong> + 5% no Pix · Expira em</span>
        <span style={{ background: '#D48A90', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>{countdown}</span>
      </div>

      {/* NAV */}
      <div style={{ background: '#fff', borderBottom: '1px solid #EFE6D6', padding: '14px 20px', display: 'flex', justifyContent: 'center' }}>
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698f17e9124bfe3a6f9a6198/9eab2108f_Screenshot2026-02-13at165800.png"
          alt="Ziva"
          style={{ height: '32px', objectFit: 'contain' }}
        />
      </div>

      {/* HERO */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="hero-grid-bp4">

          {/* LEFT */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#EFE6D6', color: '#3A342E', borderRadius: '6px', padding: '8px 14px', fontSize: '12px', fontWeight: '700', marginBottom: '24px', fontFamily: "'IBM Plex Mono', monospace" }}>
              ✓ Compare antes de comprar
            </div>

            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '600', lineHeight: '1.15', marginBottom: '24px' }}>
              Compare, calcule, economize. <em style={{ color: '#D48A90', fontStyle: 'italic' }}>A escolha com melhor custo-benefício.</em>
            </h1>

            <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#3A342E', marginBottom: '32px' }}>
              O Simbiótico Íntimo Ziva é <strong>R$ 0,31 mais barato por dose</strong> que a alternativa mais próxima do mercado — e entrega <strong>10 bilhões de UFC + Prebiótico FOS + garantia de 30 dias</strong>. Aqui você encontra a comparação completa, o cupom exclusivo e a calculadora de economia. Sem enrolação.
            </p>

            {/* Price calc card */}
            <div style={{ background: '#F7F1E8', borderRadius: '16px', padding: '24px', marginBottom: '32px', border: '1px solid #EFE6D6' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#3A342E' }}>Sua economia agora</div>
                <div style={{ background: '#D48A90', color: '#fff', borderRadius: '6px', padding: '4px 12px', fontSize: '12px', fontWeight: '700' }}>OFERTA ATIVA</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ color: '#6E665C' }}>Preço cheio</span>
                  <span style={{ textDecoration: 'line-through', color: '#6E665C' }}>R$ 299,00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#D48A90', fontWeight: '700' }}>
                  <span>Desconto base</span>
                  <span>− R$ 72,00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#D48A90', fontWeight: '700' }}>
                  <span>Cupom ZIVA15</span>
                  <span>− R$ 15,00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: '700', paddingTop: '10px', borderTop: '1px solid #EFE6D6' }}>
                  <span>Você paga</span>
                  <span>R$ 212,00</span>
                </div>
                <div style={{ fontSize: '12px', color: '#D48A90', fontWeight: '600' }}>ou R$ 201,40 no Pix (5% OFF)</div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <a href="#oferta" style={{ background: '#D48A90', color: '#fff', borderRadius: '100px', padding: '16px 32px', fontWeight: '800', fontSize: '16px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Aplicar cupom e comprar →
              </a>
              <a href="#comparativo" style={{ background: 'transparent', color: '#3A342E', border: '1.5px solid #D4C9BC', borderRadius: '100px', padding: '16px 32px', fontWeight: '600', fontSize: '16px', textDecoration: 'none' }}>
                Ver comparativo
              </a>
            </div>
          </div>

          {/* RIGHT: ECONOMY CARD */}
          <div style={{ background: '#1A1613', color: '#F7F1E8', borderRadius: '24px', padding: '32px', border: '1px solid #3A342E' }}>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '11px', color: '#6E665C', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', fontFamily: "'IBM Plex Mono', monospace" }}>Economia Total</div>
              <div style={{ background: '#D48A90', color: '#fff', borderRadius: '6px', padding: '6px 12px', fontSize: '12px', fontWeight: '700', display: 'inline-block', fontFamily: "'IBM Plex Mono', monospace" }}>MELHOR OFERTA</div>
            </div>

            <div style={{ fontFamily: "'Fraunces', serif", fontSize: '64px', fontWeight: '700', color: '#D48A90', lineHeight: 1, marginBottom: '8px' }}>R$ 87</div>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#D48A90', marginBottom: '28px' }}>
              É <strong>quanto você economiza</strong> na primeira compra somando desconto de lançamento + cupom ZIVA15 + Pix.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { k: 'PREÇO CHEIO', v: 'R$ 299,00' },
                { k: 'DESCONTO BASE', v: '− R$ 72,00', highlight: true },
                { k: 'CUPOM ZIVA15', v: '− R$ 15,00', highlight: true },
                { k: 'PIX 5% OFF', v: '− R$ 10,60', highlight: true },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontFamily: "'IBM Plex Mono', monospace" }}>
                  <span style={{ color: row.highlight ? '#D48A90' : '#6E665C', fontWeight: row.highlight ? '700' : '400' }}>{row.k}</span>
                  <span style={{ color: row.highlight ? '#D48A90' : '#6E665C', fontWeight: row.highlight ? '700' : '400' }}>{row.v}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: '700', paddingTop: '12px', borderTop: '1px solid #3A342E' }}>
                <span>TOTAL ECONOMIZADO</span>
                <span>R$ 97,60</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section id="comparativo" style={{ background: '#F7F1E8', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'IBM Plex Mono', monospace" }}>01 · Comparativo direto</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>Ziva vs. <em style={{ color: '#D48A90', fontStyle: 'italic' }}>outras marcas do mercado.</em></h2>
            <p style={{ color: '#3A342E', fontSize: '14px', marginTop: '12px', maxWidth: '650px' }}>Comparação factual entre simbióticos vaginais disponíveis no Brasil. Preços confirmados em sites oficiais.</p>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #EFE6D6' }}>
              <thead>
                <tr style={{ background: '#F7F1E8' }}>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: '700', color: '#1A1613', fontSize: '14px', borderBottom: '1px solid #EFE6D6' }}>Critério</th>
                  <th style={{ padding: '16px 12px', textAlign: 'center', fontWeight: '700', color: '#D48A90', fontSize: '14px', borderBottom: '1px solid #EFE6D6', background: '#FDF4F5' }}>Ziva</th>
                  <th style={{ padding: '16px 12px', textAlign: 'center', fontWeight: '700', color: '#1A1613', fontSize: '14px', borderBottom: '1px solid #EFE6D6' }}>Maxfem</th>
                  <th style={{ padding: '16px 12px', textAlign: 'center', fontWeight: '700', color: '#1A1613', fontSize: '14px', borderBottom: '1px solid #EFE6D6' }}>Genéricos</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { crit: 'Concentração de UFC', ziva: '10 bi', other: '5-8 bi', gen: '1-5 bi' },
                  { crit: 'Cepa L. Rhamnosus GG', ziva: '✓', other: 'parcial', gen: '—' },
                  { crit: 'Prebiótico FOS', ziva: '✓', other: '—', gen: '—' },
                  { crit: 'Formato (sachê/cápsula)', ziva: 'sachê', other: 'cápsula', gen: 'cápsula' },
                  { crit: 'Registro Anvisa', ziva: '✓', other: '✓', gen: 'parcial' },
                  { crit: 'Garantia', ziva: '30 dias', other: '7 dias', gen: '—' },
                  { crit: 'Frete grátis a partir de', ziva: 'R$ 249', other: 'R$ 350', gen: 'varia' },
                  { crit: 'Parcelamento sem juros', ziva: '3x', other: '2x', gen: '1x' },
                  { crit: 'Cupom 1ª compra', ziva: 'R$ 15', other: '—', gen: '—' },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#FDFAF7', borderBottom: '1px solid #EFE6D6' }}>
                    <td style={{ padding: '14px 20px', fontWeight: '500', color: '#1A1613', fontSize: '13px' }}>{row.crit}</td>
                    <td style={{ padding: '14px 12px', textAlign: 'center', color: '#D48A90', fontWeight: '700', background: i % 2 === 0 ? '#FDF4F5' : '#FEF0F2', fontSize: '13px' }}>{row.ziva}</td>
                    <td style={{ padding: '14px 12px', textAlign: 'center', color: '#1A1613', fontSize: '13px' }}>{row.other}</td>
                    <td style={{ padding: '14px 12px', textAlign: 'center', color: '#1A1613', fontSize: '13px' }}>{row.gen}</td>
                  </tr>
                ))}
                <tr style={{ background: '#F7F1E8', fontWeight: '700' }}>
                  <td style={{ padding: '16px 20px', color: '#1A1613', fontSize: '14px' }}>Preço final (30 doses)</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#D48A90', fontFamily: "'Fraunces', serif", fontSize: '16px', background: '#FDF4F5' }}>R$ 212</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#1A1613', fontSize: '14px' }}>R$ 249</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#1A1613', fontSize: '14px' }}>R$ 180</td>
                </tr>
                <tr style={{ background: '#F7F1E8', fontWeight: '700' }}>
                  <td style={{ padding: '12px 20px', color: '#6E665C', fontSize: '13px' }}>Custo por dose</td>
                  <td style={{ padding: '12px 12px', textAlign: 'center', color: '#D48A90', fontFamily: "'Fraunces', serif", fontSize: '14px', background: '#FDF4F5' }}>R$ 7,07</td>
                  <td style={{ padding: '12px 12px', textAlign: 'center', color: '#1A1613', fontSize: '13px' }}>R$ 8,30</td>
                  <td style={{ padding: '12px 12px', textAlign: 'center', color: '#1A1613', fontSize: '13px' }}>inferior</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: '12px', color: '#6E665C', marginTop: '16px' }}>*Preços de referência coletados em sites oficiais. Dose-a-dose, Ziva oferece melhor relação custo-benefício.</p>
        </div>
      </section>

      {/* ANÁLISE DE CUSTO-BENEFÍCIO */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'IBM Plex Mono', monospace" }}>02 · Por que compensa</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>Três métricas que <em style={{ color: '#D48A90', fontStyle: 'italic' }}>decidem sua escolha.</em></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              {
                cat: 'MÉTRICA 01',
                big: 'R$ 7,07',
                sub: 'PREÇO POR DOSE · com cupom',
                title: 'Menor custo-por-dose do mercado',
                text: 'Considerando a concentração real de 10 bilhões de UFC + FOS, o Ziva custa menos por miligrama de probiótico ativo que qualquer concorrente direto analisado.',
              },
              {
                cat: 'MÉTRICA 02',
                big: '30 dias',
                sub: 'GARANTIA · vs. 7 dias da concorrência',
                title: '4x mais tempo para testar',
                text: 'A Ziva dá 30 dias de garantia vs. os 7 dias do concorrente mais próximo. Você tem 4x mais tempo para avaliar antes de decidir.',
              },
              {
                cat: 'MÉTRICA 03',
                big: 'R$ 249',
                sub: 'FRETE GRÁTIS · threshold mais baixo',
                title: 'Frete grátis mais acessível',
                text: 'Na Ziva, frete grátis começa em R$ 249. No concorrente mais próximo, só acima de R$ 350. Economia real que pesa no total.',
              },
            ].map((card, i) => (
              <div key={i} style={{ background: '#F7F1E8', borderRadius: '20px', padding: '28px', border: '1px solid #EFE6D6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ fontSize: '11px', color: '#D48A90', fontWeight: '700', textTransform: 'uppercase', fontFamily: "'IBM Plex Mono', monospace" }}>{card.cat}</div>
                  <div style={{ background: '#D48A90', color: '#fff', borderRadius: '6px', padding: '4px 10px', fontSize: '11px', fontWeight: '700', fontFamily: "'IBM Plex Mono', monospace" }}>VANTAGEM ZIVA</div>
                </div>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '40px', fontWeight: '700', color: '#1A1613', lineHeight: 1, marginBottom: '6px' }}>{card.big}</div>
                <div style={{ fontSize: '12px', color: '#6E665C', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px', fontFamily: "'IBM Plex Mono', monospace" }}>{card.sub}</div>
                <h4 style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px', color: '#1A1613' }}>{card.title}</h4>
                <p style={{ color: '#6E665C', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" style={{ background: '#1A1613', padding: '80px 20px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'IBM Plex Mono', monospace" }}>Cupom exclusivo</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#F7F1E8', marginBottom: '16px' }}>
            Economize <em style={{ color: '#D48A90' }}>R$ 87 agora.</em>
          </h2>
          <p style={{ color: '#D48A90', fontSize: '18px', fontWeight: '700', marginBottom: '32px', fontFamily: "'IBM Plex Mono', monospace" }}>Use: ZIVA15</p>

          {/* Product image */}
          <div style={{ marginBottom: '32px' }}>
            <img src={PRODUCT_IMG_2} alt="Simbiótico Íntimo Ziva" style={{ maxHeight: '280px', margin: '0 auto', objectFit: 'contain', filter: 'drop-shadow(0 16px 40px rgba(212,138,144,0.3))' }} />
          </div>

          <a
            href="https://sejaziva.com.br/products/simbiotico-intimo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', background: '#D48A90', color: '#fff', borderRadius: '100px', padding: '18px 32px', textAlign: 'center', fontWeight: '800', fontSize: '18px', textDecoration: 'none', marginBottom: '12px' }}
          >
            Aplicar cupom e comprar →
          </a>
          <div style={{ color: '#6E665C', fontSize: '13px' }}>🔒 Compra 100% Segura · VISA · MASTER · ELO · PIX · Cupom válido até hoje</div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'IBM Plex Mono', monospace" }}>Dúvidas sobre cupom e preço?</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>Respondidas <em style={{ color: '#D48A90', fontStyle: 'italic' }}>aqui.</em></h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: '#F7F1E8', borderRadius: '16px', overflow: 'hidden', border: '1px solid #EFE6D6' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontWeight: '600', fontSize: '15px', color: '#1A1613', gap: '12px' }}
                >
                  {faq.q}
                  <span style={{ color: '#D48A90', fontSize: '20px', flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 20px', color: '#3A342E', lineHeight: '1.7', fontSize: '15px', borderTop: '1px solid #EFE6D6', paddingTop: '16px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section style={{ background: 'linear-gradient(135deg, #D48A90 0%, #B26770 100%)', padding: '70px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: '#fff', marginBottom: '16px' }}>
            Melhor preço.<br /><em>Pior espera.</em>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.7', marginBottom: '32px' }}>
            R$ 212 com cupom ZIVA15 · frete grátis acima de R$ 249 · 30 dias de garantia
          </p>
          <a href="#oferta" style={{ background: '#fff', color: '#D48A90', borderRadius: '100px', padding: '18px 40px', fontWeight: '800', fontSize: '17px', textDecoration: 'none', display: 'inline-block' }}>
            Comprar com cupom →
          </a>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginTop: '16px' }}>🔒 Cupom válido até hoje · Não perde mais</div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid-bp4 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}