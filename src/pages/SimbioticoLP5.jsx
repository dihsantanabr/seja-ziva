import React, { useState } from 'react';

const PRODUCT_IMG_2 = 'https://sejaziva.com.br/cdn/shop/files/PROBIOTICO_-_04.png?v=1764950605';

const reviews = [
  { stars: 5, title: 'Experiência impecável', text: 'Chegou num pacote tão bonito, lacrado com fita. A carta da Beatriz me tocou. O produto é excelente, mas a experiência é o diferencial.', author: 'Mariana S.' },
  { stars: 5, title: 'Investimento vale cada real', text: 'Não é barato, mas entendi quando recebi. Qualidade do sachê, da embalagem, do atendimento — tudo premium. Renovei a compra.', author: 'Isabela R.' },
  { stars: 5, title: 'Tratamento VIP do início ao fim', text: 'Desde a compra até o suporte — tudo é pensado com cuidado. Me senti acolhida. Claro que o produto funciona, mas é o cuidado que diferencia.', author: 'Carolina M.' },
];

export default function SimbioticoLP5() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ fontFamily: "'Instrument Sans', sans-serif", background: '#FFFCF6', color: '#141210' }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400&family=Instrument+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap" rel="stylesheet" />

      {/* TOP META */}
      <div style={{ background: '#F7F1E8', borderBottom: '1px solid #EFE6D6', padding: '12px 20px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '13px', color: '#6E665C', fontWeight: '500' }}>
        <span>Edição numerada · 2026</span>
        <span>·</span>
        <span>Anvisa · Vegano · Cruelty-free</span>
        <span>·</span>
        <span>30 dias de garantia integral</span>
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
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="hero-grid-bp5">

          {/* LEFT */}
          <div>
            <div style={{ fontSize: '13px', color: '#6E665C', fontWeight: '600', letterSpacing: '1px', marginBottom: '16px' }}>Simbiótico Íntimo · Edição 2026</div>

            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '400', lineHeight: '1.1', marginBottom: '24px' }}>
              Um <em style={{ fontStyle: 'italic' }}>ritual íntimo</em>. Uma <em style={{ fontStyle: 'italic' }}>experiência</em> inesquecível.
            </h1>

            <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#3A342E', marginBottom: '32px' }}>
              O Simbiótico Íntimo Ziva é ciência, natureza e sofisticação em um cuidado pensado para mulheres que escolhem o extraordinário.
            </p>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
              <span style={{ color: '#D48A90', fontSize: '18px' }}>★★★★★</span>
              <span style={{ fontSize: '14px', color: '#3A342E' }}><strong>4,8/5</strong> · avaliações verificadas</span>
            </div>

            {/* Benefits list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {[
                '10 bilhões de Lactobacillus rhamnosus GG + Prebiótico FOS por dose',
                'Edição numerada com embalagem signature e carta da fundadora',
                'Atendimento consultivo VIP durante todo o seu ritual',
              ].map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: '#3A342E' }}>
                  <span style={{ color: '#D48A90', fontWeight: '700', flexShrink: 0 }}>✓</span>
                  <span><strong>{b.substring(0, 40)}...</strong> {b.substring(40)}</span>
                </div>
              ))}
            </div>

            {/* Price card */}
            <div style={{ background: '#F7F1E8', borderRadius: '16px', padding: '24px', marginBottom: '32px', border: '1px solid #EFE6D6' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#6E665C', fontWeight: '600', marginBottom: '8px' }}>Edição 2026 · a partir de</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                    <span style={{ textDecoration: 'line-through', color: '#6E665C', fontSize: '14px' }}>R$ 299</span>
                    <span style={{ fontFamily: "'Fraunces', serif", fontSize: '36px', fontWeight: '700', color: '#1A1613' }}>R$ 227</span>
                  </div>
                </div>
                <div style={{ background: '#D48A90', color: '#fff', borderRadius: '8px', padding: '8px 14px', fontSize: '12px', fontWeight: '700' }}>Economize R$ 72</div>
              </div>
              <div style={{ fontSize: '13px', color: '#6E665C' }}>Em até <strong>3x sem juros</strong> · Pix à vista com 5% OFF</div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '28px', flexWrap: 'wrap' }}>
              <a href="#offer" style={{ background: '#D48A90', color: '#fff', borderRadius: '100px', padding: '16px 32px', fontWeight: '700', fontSize: '16px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Adquirir agora →
              </a>
              <a href="#craft" style={{ background: 'transparent', color: '#3A342E', border: '1.5px solid #D4C9BC', borderRadius: '100px', padding: '16px 32px', fontWeight: '600', fontSize: '16px', textDecoration: 'none' }}>
                Ver a ciência
              </a>
            </div>

            {/* Trust badges with icons */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '12px', color: '#6E665C', fontWeight: '500' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Anvisa
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z"></path></svg>
                Vegano
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.8 4.6a5.4 5.4 0 00-8.8 2.5 5.4 5.4 0 00-8.8 6.3l8.8 8 8.8-8a5.4 5.4 0 000-8.8z"></path></svg>
                Cruelty-free
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                30 dias de garantia
              </div>
            </div>
          </div>

          {/* RIGHT: VISUAL */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Floating seal */}
            <div style={{ position: 'absolute', top: '20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: '#D48A90', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 32px rgba(212,138,144,0.3)', zIndex: 10 }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: '700', lineHeight: 1 }}>30</div>
              <div style={{ fontSize: '10px', fontWeight: '700', marginTop: '2px' }}>Dias</div>
              <div style={{ fontSize: '10px', fontWeight: '600', marginTop: '2px', opacity: 0.9 }}>Garantia</div>
            </div>

            {/* Product visual card */}
            <div style={{ background: '#F7F1E8', borderRadius: '20px', padding: '40px 32px', border: '1px solid #EFE6D6', textAlign: 'center', maxWidth: '380px' }}>
              <div style={{ fontSize: '11px', color: '#6E665C', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Éd. 2026</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: '300', color: '#1A1613', marginBottom: '2px' }}>Ziva <em style={{ fontStyle: 'italic', fontWeight: '400' }}>health</em></div>
              <div style={{ height: '2px', background: '#D48A90', width: '30px', margin: '12px auto' }} />
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: '400', color: '#1A1613', marginBottom: '16px' }}>Simbiótico<br />Íntimo</div>
              <div style={{ fontSize: '12px', color: '#6E665C', fontWeight: '600', marginBottom: '6px' }}>Numerada à mão</div>
              <div style={{ fontSize: '13px', color: '#D48A90', fontWeight: '700', fontFamily: "'Instrument Sans', monospace" }}>n.º 0247 / 2026</div>

              <div style={{ marginTop: '24px', padding: '16px', background: '#fff', borderRadius: '12px' }}>
                <img src={PRODUCT_IMG_2} alt="Simbiótico Íntimo Ziva" style={{ height: '160px', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section id="benefits" style={{ background: '#F7F1E8', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', color: '#D48A90', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>I · O que você recebe</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>Mais do que um produto. <em style={{ color: '#D48A90', fontStyle: 'italic' }}>Uma entrega completa.</em></h2>
            <p style={{ color: '#3A342E', fontSize: '15px', lineHeight: '1.7', marginTop: '12px', maxWidth: '600px', margin: '12px auto 0' }}>
              Cada encomenda Ziva é pensada como uma assinatura de qualidade — no conteúdo, na forma e na experiência.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { num: 'i.', icon: '▢', title: '30 sachês numerados', text: 'Um mês de ritual. Cada dose com 10 bilhões de UFC viáveis + FOS, em formato que dispensa diluição.' },
              { num: 'ii.', icon: '◆', title: 'Embalagem signature', text: 'Caixa em papel texturizado com fita de cetim, selada à mão. Um gesto silencioso de cuidado.' },
              { num: 'iii.', icon: '✉', title: 'Carta da fundadora', text: 'Na primeira encomenda, uma nota pessoal assinada por Beatriz. Da nossa casa para a sua.' },
              { num: 'iv.', icon: '💬', title: 'Atendimento consultivo', text: 'Um canal direto no WhatsApp com nossa equipe, disponível ao longo de todo o seu ritual.' },
            ].map((b, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #EFE6D6' }}>
                <div style={{ fontSize: '18px', color: '#D48A90', marginBottom: '12px', opacity: 0.6 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    {i === 0 && <rect x="3" y="3" width="18" height="18" rx="2" />}
                    {i === 0 && <path d="M3 9h18M9 3v18" />}
                    {i === 1 && <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" />}
                    {i === 2 && <path d="M4 4h16v16H4z" />}
                    {i === 2 && <path d="M4 4l8 8 8-8" />}
                    {i === 3 && <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />}
                  </svg>
                </div>
                <div style={{ fontSize: '13px', color: '#D48A90', fontWeight: '700', marginBottom: '6px' }}>{b.num}</div>
                <h4 style={{ fontWeight: '700', fontSize: '15px', marginBottom: '10px', color: '#1A1613' }}>{b.title}</h4>
                <p style={{ color: '#6E665C', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE ELE FAZ */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', color: '#D48A90', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>II · O que ele faz por você</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>Quatro <em style={{ color: '#D48A90', fontStyle: 'italic' }}>gestos</em>, em um sachê por dia.</h2>
            <p style={{ color: '#3A342E', fontSize: '15px', lineHeight: '1.7', marginTop: '12px', maxWidth: '600px' }}>
              Equilíbrio interno, conforto diário, proteção duradoura e bem-estar que se sente no corpo inteiro.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start' }} className="pains-section">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { num: 'i.', title: 'Equilíbrio do pH íntimo', text: 'A cepa L. rhamnosus GG produz ácido lático continuamente, estabilizando o pH vaginal na faixa saudável.' },
                { num: 'ii.', title: 'Prevenção de infecções recorrentes', text: 'Uma microbiota reconstruída forma barreira natural contra candidíase, vaginose e infecções urinárias.' },
                { num: 'iii.', title: 'Intestino regulado e leve', text: 'O Prebiótico FOS alimenta a microbiota intestinal, reduzindo inchaço e melhorando o trânsito.' },
                { num: 'iv.', title: 'Imunidade fortalecida', text: '70% do sistema imunológico vive no intestino. Uma flora equilibrada é uma defesa natural reforçada.' },
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#D48A90', flexShrink: 0 }}>{p.num}</div>
                  <div>
                    <h4 style={{ fontWeight: '700', fontSize: '15px', marginBottom: '6px', color: '#1A1613' }}>{p.title}</h4>
                    <p style={{ color: '#6E665C', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: '#F7F1E8', borderRadius: '16px', padding: '40px', border: '1px solid #EFE6D6', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '320px', textAlign: 'center' }}>
              <div style={{ fontSize: '18px', color: '#D48A90', fontWeight: '700', lineHeight: '1.4' }}>i. + ii.<br />iii. + iv.</div>
            </div>
          </div>
        </div>
      </section>

      {/* A CIÊNCIA */}
      <section id="craft" style={{ background: '#F7F1E8', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', color: '#D48A90', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>III · A Ciência</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>O padrão <em style={{ color: '#D48A90', fontStyle: 'italic' }}>por trás</em> de cada dose.</h2>
            <p style={{ color: '#3A342E', fontSize: '15px', lineHeight: '1.7', marginTop: '12px', maxWidth: '650px' }}>
              Não é sobre prometer — é sobre honrar um padrão. Do ingrediente escolhido ao lote numerado que chega em suas mãos.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { num: 'i.', metric: '+800 estudos científicos', title: 'Lactobacillus Rhamnosus GG', text: 'A cepa probiótica mais estudada do mundo desde 1985. 10 bilhões de UFC viáveis por dose — garantidos até a validade. Não aceitamos menos que o padrão ouro.' },
              { num: 'ii.', metric: '6,1g de fibras funcionais', title: 'Prebiótico FOS', text: 'Frutooligossacarídeos extraídos de raízes selecionadas — a fibra que alimenta seletivamente as bactérias boas. Resultado: probiótico mais ativo.' },
              { num: 'iii.', metric: '100% estável até validade', title: 'Tecnologia de viabilidade', text: 'Sachês protegidos com dessecante e selagem de precisão — garantindo viabilidade integral até o último dia de uso.' },
              { num: 'iv.', metric: 'Testado clinicamente', title: 'Rigor de qualidade', text: 'Cada lote passa por testes de concentração, pureza e viabilidade em laboratório independente certificado.' },
            ].map((c, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #EFE6D6' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ fontSize: '11px', color: '#D48A90', fontWeight: '700', fontFamily: "'IBM Plex Mono', monospace" }}>{c.num}</div>
                    <div style={{ fontSize: '11px', color: '#6E665C', fontWeight: '700', textAlign: 'right', maxWidth: '160px' }}>{c.metric}</div>
                  </div>
                </div>
                <h4 style={{ fontWeight: '600', fontSize: '15px', marginBottom: '8px', color: '#1A1613' }}><em style={{ fontStyle: 'italic' }}>{c.title}</em></h4>
                <p style={{ color: '#6E665C', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', color: '#D48A90', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Quem já escolheu</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>Experiências que <em style={{ color: '#D48A90', fontStyle: 'italic' }}>falam.</em></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ background: '#F7F1E8', borderRadius: '16px', padding: '24px', border: '1px solid #EFE6D6' }}>
                <div style={{ display: 'flex', marginBottom: '10px', color: '#D48A90', fontSize: '14px' }}>{'★'.repeat(r.stars)}</div>
                <h4 style={{ fontWeight: '700', fontSize: '15px', marginBottom: '10px', color: '#1A1613' }}>{r.title}</h4>
                <p style={{ color: '#6E665C', fontSize: '13px', lineHeight: '1.6', marginBottom: '12px' }}>{r.text}</p>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#3A342E' }}>{r.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section style={{ background: '#F7F1E8', padding: '60px 20px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: '#D48A90', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Segurança integral</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '16px' }}>30 dias de <em style={{ fontStyle: 'italic' }}>garantia integral</em></h2>
          <p style={{ color: '#3A342E', lineHeight: '1.7', fontSize: '15px' }}>
            Use por 30 dias. Se não sentir diferença, devolvemos 100% do valor. Sem burocracia. Você merece sentir-se segura com sua escolha.
          </p>
        </div>
      </section>

      {/* OFERTA */}
      <section id="offer" style={{ background: '#1A1613', padding: '80px 20px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#F7F1E8', marginBottom: '24px' }}>Sua edição espera.</h2>

          {/* Product image */}
          <div style={{ marginBottom: '32px' }}>
            <img src={PRODUCT_IMG_2} alt="Simbiótico Íntimo Ziva" style={{ maxHeight: '240px', margin: '0 auto', objectFit: 'contain', filter: 'drop-shadow(0 16px 40px rgba(212,138,144,0.3))' }} />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontSize: '13px', color: '#D48A90', fontWeight: '700', marginBottom: '8px' }}>Edição 2026</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: '700', color: '#D48A90', lineHeight: 1, marginBottom: '8px' }}>R$ 227</div>
            <div style={{ fontSize: '12px', color: '#D48A90' }}>ou 3x sem juros · Pix com 5% OFF</div>
          </div>

          <a
            href="https://sejaziva.com.br/products/simbiotico-intimo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', background: '#D48A90', color: '#fff', borderRadius: '100px', padding: '18px 40px', fontWeight: '700', fontSize: '17px', textDecoration: 'none', marginBottom: '12px' }}
          >
            Adquirir agora →
          </a>
          <div style={{ color: '#6E665C', fontSize: '12px' }}>🔒 Compra 100% Segura · 30 dias de garantia integral · Frete grátis acima de R$ 249</div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid-bp5 { grid-template-columns: 1fr !important; }
          .pains-section { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}