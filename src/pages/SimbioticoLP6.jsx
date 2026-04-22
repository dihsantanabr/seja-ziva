import React, { useState, useEffect } from 'react';

export default function SimbioticoLP6() {
  const [openFaq, setOpenFaq] = useState(null);
  const [countdown, setCountdown] = useState('71:48:23');

  useEffect(() => {
    const timer = setInterval(() => {
      let total = 71 * 3600 + 48 * 60 + 23;
      setCountdown(prev => {
        const parts = prev.split(':').map(Number);
        let seconds = parts[2] - 1;
        let minutes = parts[1];
        let hours = parts[0];
        
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 71;
          minutes = 48;
          seconds = 23;
        }
        
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const faqs = [
    { q: 'O que é exatamente a <em>Edição Inaugural</em>?', a: 'A Edição Inaugural é o <strong>lançamento oficial</strong> do Simbiótico Íntimo Ziva no Brasil — limitada a 500 unidades numeradas à mão, com brinde exclusivo de lançamento (necessaire signature) e convite para a First Wave List. Não haverá reposição desta edição; as próximas edições virão com características próprias e brindes específicos.' },
    { q: 'É <em>diferente</em> de outros probióticos vaginais?', a: 'Sim — é o <strong>primeiro</strong> probiótico vaginal brasileiro com a cepa <em>L. rhamnosus GG</em> em <strong>10 bilhões de UFC por dose</strong>, no formato sachê (não cápsula), com Prebiótico FOS incluso. A combinação específica (cepa + dose + formato + prebiótico) não existe no Brasil ainda. É o que já é padrão nos EUA e Japão, agora chegando aqui.' },
    { q: 'O que acontece se eu perder a <em>Edição Inaugural</em>?', a: 'Você pode entrar na <strong>First Wave List</strong> para ter acesso antecipado à <strong>próxima edição</strong> (prevista para os próximos meses). Importante: cada edição é única, com numeração própria e brindes exclusivos. Quem garantir esta Edição Inaugural também entra automaticamente na First Wave para as próximas.' },
    { q: 'Quando eu recebo?', a: 'Pedidos durante a pré-venda são numerados e enviados em ordem de compra. <strong>Capitais:</strong> entrega em até 48h após encerramento da pré-venda. <strong>Demais regiões:</strong> 3–7 dias úteis. Você recebe código de rastreio por WhatsApp e e-mail assim que seu pedido sair.' },
    { q: 'Funciona a <em>garantia</em> em uma edição limitada?', a: 'Sim. A edição ser limitada não anula a garantia — você tem <strong>30 dias</strong> para testar. Se não gostar, devolvemos 100% do valor. Se devolver, sua unidade volta para a disponibilidade geral. A garantia é integral, sem burocracia.' },
    { q: 'Como sei que é <em>inovação real</em> e não só marketing?', a: 'Três provas objetivas: <strong>(1)</strong> a cepa L. rhamnosus GG tem <em>+800 estudos científicos</em> publicados; <strong>(2)</strong> registro Anvisa com controle laboratorial lote-a-lote; <strong>(3)</strong> consulte os concorrentes nos EUA e Japão (Seed Health, Cheero, Optibac) para ver que o padrão é real. A inovação é trazer isso ao Brasil em formato e experiência editorial.' },
  ];

  return (
    <div style={{ fontFamily: "'Instrument Sans', sans-serif", background: '#F7F1E8', color: '#141210' }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=IBM+Plex+Mono:wght@400;500;600;700&family=Instrument+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap" rel="stylesheet" />

      {/* DROP BAR */}
      <div style={{ background: 'linear-gradient(90deg,#141210 0%,#2B2520 50%,#141210 100%)', color: '#F7F1E8', padding: '12px 0', textAlign: 'center', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #B8864B' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', padding: '0 24px', position: 'relative', zIndex: 1, fontSize: '13px', fontWeight: '400', justifyContent: 'center', width: '100%', fontFamily: "'Fraunces', serif", letterSpacing: '.02em' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#B8864B', color: '#141210', padding: '3px 12px', borderRadius: '3px', fontFamily: "'IBM Plex Mono', monospace", fontWeight: '700', letterSpacing: '.15em', fontSize: '10px', textTransform: 'uppercase' }}>
            <span style={{ width: '6px', height: '6px', background: '#B26770', borderRadius: '50%' }}></span>
            Novo Lançamento
          </span>
          <span>Pré-venda da <em style={{ color: '#B8864B', fontStyle: 'italic' }}>Edição Inaugural</em> encerra em</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: '600', letterSpacing: '.06em', fontSize: '13px', color: '#B8864B' }}>{countdown}</span>
        </div>
      </div>

      {/* NAV */}
      <nav style={{ background: '#F7F1E8', padding: '20px 0', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid #EEE5D3' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <a href="#edicao" style={{ fontFamily: "'Fraunces', serif", fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#34302B', textDecoration: 'none', fontWeight: '400' }}>
              Edição 2026 <span style={{ background: '#B26770', color: '#F7F1E8', padding: '2px 7px', borderRadius: '2px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '8px', letterSpacing: '.12em', fontWeight: '700', textTransform: 'uppercase', lineHeight: '1.3', marginLeft: '6px', display: 'inline-block' }}>Novo</span>
            </a>
            <a href="#behind" style={{ fontFamily: "'Fraunces', serif", fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#34302B', textDecoration: 'none', fontWeight: '400' }}>Bastidores</a>
            <a href="#wave" style={{ fontFamily: "'Fraunces', serif", fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#34302B', textDecoration: 'none', fontWeight: '400' }}>First Wave</a>
          </div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: '26px', fontWeight: '500', color: '#141210', textAlign: 'center', letterSpacing: '.1em' }}>
            ZIVA <em style={{ color: '#B26770', fontStyle: 'italic', letterSpacing: '0', fontWeight: '400' }}>health</em>
          </div>
          <div style={{ display: 'flex', gap: '18px', justifyContent: 'flex-end', alignItems: 'center' }}>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '13px', color: '#6E665C', letterSpacing: '.02em', fontWeight: '400' }}>acesso antecipado · <strong style={{ color: '#B26770' }}>R$ 227</strong></span>
            <a href="#offer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 22px', background: '#141210', color: '#F7F1E8', fontFamily: "'Fraunces', serif", fontSize: '11px', letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: '500', textDecoration: 'none' }}>
              Garantir unidade →
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', padding: '70px 0 100px', background: 'linear-gradient(180deg,#F7F1E8 0%,#FFFCF6 100%)', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1.1fr .95fr', gap: '72px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#F3DADD', color: '#B26770', padding: '9px 18px', borderRadius: '100px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', fontWeight: '700', letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: '28px', border: '1px solid #D48A90' }}>
              <span style={{ width: '8px', height: '8px', background: '#B26770', borderRadius: '50%' }}></span>
              Edição Inaugural · <em style={{ color: '#8C6534', fontStyle: 'italic', fontWeight: '400' }}>pré-venda ao vivo</em>
            </div>

            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(42px,5.6vw,76px)', fontWeight: '300', lineHeight: '1', letterSpacing: '-.028em', color: '#141210', marginBottom: '26px' }}>
              O próximo capítulo da <em style={{ color: '#B26770', fontStyle: 'italic', fontWeight: '300' }}>saúde íntima</em> acabou de <span style={{ background: 'linear-gradient(90deg,#B26770,#B8864B,#B26770)', backgroundSize: '200% auto', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontStyle: 'italic' }}>chegar.</span>
            </h1>

            <p style={{ fontFamily: "'Fraunces', serif", fontSize: '19px', fontWeight: '300', fontStyle: 'italic', color: '#34302B', lineHeight: '1.5', maxWidth: '520px', marginBottom: '34px' }}>
              O Simbiótico Íntimo Ziva é o primeiro probiótico vaginal brasileiro com cepa <em style={{ fontStyle: 'italic' }}>L. rhamnosus GG</em> em sachê numerado — tendência validada nos EUA, Japão e Europa, disponível antes de todo mundo.
            </p>

            {/* Drop Counter */}
            <div style={{ background: '#FFFCF6', border: '1px solid #E3D9C6', padding: '22px 26px', marginBottom: '28px', position: 'relative', boxShadow: '0 2px 16px rgba(26,22,19,.06)' }}>
              <div style={{ position: 'absolute', top: '0', left: '0', width: '4px', height: '100%', background: 'linear-gradient(180deg,#B26770,#B8864B)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#8C6534', fontWeight: '700' }}>▶ Edição Inaugural · pré-venda</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', color: '#141210', fontWeight: '600', letterSpacing: '.02em' }}><strong style={{ color: '#B26770' }}>248</strong> / 500 unidades</span>
              </div>
              <div style={{ height: '6px', background: '#EFE6D6', borderRadius: '100px', overflow: 'hidden', position: 'relative' }}>
                <div style={{ height: '100%', background: 'linear-gradient(90deg,#D48A90,#B26770,#B8864B)', borderRadius: '100px', width: '50.4%', position: 'relative' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#6E665C', letterSpacing: '.04em' }}>
                <span><strong style={{ color: '#B26770' }}>252 disponíveis</strong></span>
                <span>Lote numerado · edição única</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '22px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '28px' }}>
              <a href="#offer" style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', padding: '18px 36px', background: '#141210', color: '#F7F1E8', fontFamily: "'Fraunces', serif", fontSize: '12px', letterSpacing: '.24em', textTransform: 'uppercase', fontWeight: '500', textDecoration: 'none', boxShadow: '0 2px 16px rgba(26,22,19,.06)', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
                Garantir minha unidade <span>→</span>
              </a>
              <a href="#behind" style={{ fontFamily: "'Fraunces', serif", fontSize: '12px', letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: '500', color: '#141210', textDecoration: 'none', padding: '2px 0 6px', borderBottom: '1px solid #141210' }}>
                Ver bastidores
              </a>
            </div>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', paddingTop: '22px', borderTop: '1px solid #EEE5D3' }}>
              {[
                { svg: '☀️', text: 'Acesso antecipado' },
                { svg: '🎁', text: 'Brinde exclusivo' },
                { svg: '⭐', text: 'Edição numerada' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#6E665C', letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: '500' }}>
                  <span style={{ color: '#B26770' }}>{item.svg}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '24px', right: '-18px', width: '110px', height: '110px', borderRadius: '50%', background: 'linear-gradient(135deg,#B26770 0%,#B8864B 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#F7F1E8', textAlign: 'center', boxShadow: '0 8px 32px rgba(26,22,19,.1)', transform: 'rotate(-8deg)', zIndex: 2 }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px', letterSpacing: '.18em', fontWeight: '700', textTransform: 'uppercase', opacity: '0.85' }}>Ed.</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: '30px', fontWeight: '500', lineHeight: '1', margin: '3px 0' }}>2026</div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '8px', letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: '500', opacity: '0.85' }}>Inaugural</div>
            </div>

            <img src="https://sejaziva.com.br/cdn/shop/files/Design_sem_nome_4_1.png?v=1764950605" alt="Simbiótico Íntimo Ziva" style={{ maxHeight: '500px', objectFit: 'contain', filter: 'drop-shadow(0 20px 60px rgba(212,138,144,0.25))' }} />
          </div>
        </div>
      </section>

      {/* POR QUE AGORA */}
      <section style={{ background: '#FFFCF6', padding: '100px 0' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: '#8C6534', fontWeight: '700', marginBottom: '22px', display: 'inline-flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ width: '30px', height: '1px', background: '#B8864B' }}></span>
              I · Por que agora
            </div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(36px,4.8vw,60px)', fontWeight: '300', color: '#141210', lineHeight: '1.05', marginBottom: '22px', letterSpacing: '-.025em' }}>
              A <em style={{ color: '#B26770', fontStyle: 'italic', fontWeight: '300' }}>próxima onda</em> da saúde íntima — e ela vem primeiro para você.
            </h2>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: '300', fontStyle: 'italic', color: '#34302B', lineHeight: '1.55', maxWidth: '620px', marginBottom: '32px' }}>
              Probióticos vaginais com cepa específica são o setor que mais cresce em wellness feminino nos EUA, Japão e norte da Europa. A Ziva é o primeiro nome brasileiro a entregar esse padrão — e a Edição Inaugural é a porta de entrada.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '36px' }}>
              {[
                { num: '+137%', label: 'Crescimento global da categoria nos últimos 3 anos', source: 'Fonte: Grand View Research · 2025' },
                { num: '3º', label: 'Setor que mais cresce em wellness feminino', source: 'Fonte: McKinsey Beauty · 2024' },
                { num: '500', label: 'Unidades numeradas na edição inaugural', source: 'Edição exclusiva · 2026' },
                { num: '#1', label: 'Probiótico vaginal brasileiro com L. rhamnosus GG', source: 'Categoria Anvisa · 2026' },
              ].map((stat, i) => (
                <div key={i} style={{ paddingTop: '24px', borderTop: '1px solid #E3D9C6' }}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: '46px', fontWeight: '400', color: '#141210', lineHeight: '1', letterSpacing: '-.02em', marginBottom: '6px' }}>
                    <em style={{ fontStyle: 'italic' }}>{stat.num}</em>
                  </div>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#6E665C', letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: '500', lineHeight: '1.45' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px', color: '#9C9488', letterSpacing: '.04em', marginTop: '6px' }}>
                    {stat.source}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ aspectRatio: '4/5', background: 'linear-gradient(135deg,#E8D5B0 0%,#F3DADD 100%)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 40%,rgba(255,255,255,.35),transparent 70%)' }} />
            <div style={{ position: 'absolute', top: '24px', left: '24px', right: '24px', bottom: '24px', border: '1px solid rgba(255,255,255,.45)' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: '#FFFCF6', padding: '32px 36px', boxShadow: '0 16px 48px rgba(26,22,19,.14)', minWidth: '280px' }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: '#8C6534', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: '700', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', background: '#B26770', borderRadius: '50%' }}></span>
                Timeline da categoria
              </div>
              {[
                { yr: '2018', event: 'Primeiros probióticos vaginais nos EUA' },
                { yr: '2021', event: 'Boom no Japão e Coreia' },
                { yr: '2023', event: 'Expansão europeia · Reino Unido e França' },
                { yr: '2026', event: '<em>Ziva Inaugural</em> chega ao Brasil', highlight: true },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '10px 0', borderBottom: '1px solid #EEE5D3', gap: '16px', background: row.highlight ? '#F3DADD' : 'transparent', padding: row.highlight ? '10px 12px' : '10px 0', margin: row.highlight ? '6px -12px -6px' : '0', borderRadius: row.highlight ? '4px' : '0', borderBottom: row.highlight ? 'none' : '1px solid #EEE5D3' }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: row.highlight ? '#B26770' : '#6E665C', letterSpacing: '.05em', fontWeight: row.highlight ? '600' : '400', minWidth: '38px' }}>
                    {row.yr}
                  </span>
                  <span style={{ fontFamily: "'Fraunces', serif", fontSize: '13px', color: row.highlight ? '#B26770' : '#141210', fontWeight: row.highlight ? '500' : '400' }}>
                    {row.event.includes('<em>') ? (
                      <>Ziva Inaugural chega ao Brasil</>
                    ) : (
                      row.event
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O QUE TEM DE NOVO */}
      <section style={{ background: '#F7F1E8', padding: '100px 0' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ marginBottom: '60px', maxWidth: '780px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: '#8C6534', fontWeight: '700', marginBottom: '22px', display: 'inline-flex', alignItems: 'center', gap: '14px', justifyContent: 'center' }}>
              <span style={{ width: '30px', height: '1px', background: '#B8864B' }}></span>
              II · O que tem de novo
              <span style={{ width: '30px', height: '1px', background: '#B8864B' }}></span>
            </div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(36px,4.8vw,60px)', fontWeight: '300', color: '#141210', lineHeight: '1.05', marginBottom: '22px', letterSpacing: '-.025em' }}>
              Três inovações em <em style={{ color: '#B26770', fontStyle: 'italic', fontWeight: '300' }}>um sachê.</em>
            </h2>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: '300', fontStyle: 'italic', color: '#34302B', lineHeight: '1.55' }}>
              Cada elemento da Edição Inaugural foi pensado para ser diferente de tudo que existe hoje no Brasil.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '28px' }}>
            {[
              { tag: 'First in Brazil', num: '10', suf: 'bi', title: 'L. rhamnosus GG na maior concentração do mercado', text: 'A cepa mais estudada do mundo (+800 publicações científicas) em dose padronizada internacionalmente — algo raro no probiótico vaginal brasileiro.', detail: 'Padrão ouro · viabilidade garantida até validade' },
              { tag: 'New Format', num: '30', suf: 'dias', title: 'Sachê individual, sabor algodão-doce', text: 'Chega de cápsula. O formato sachê pode ser tomado direto na boca, sem água — uma experiência sensorial premium, não um medicamento.', detail: 'Formulação limpa · vegano · sem lactose' },
            ].map((card, i) => (
              <div key={i} style={{ background: '#FFFCF6', border: '1px solid #E3D9C6', padding: '36px 30px', position: 'relative', transition: 'all .4s' }}>
                <span style={{ alignSelf: 'flex-start', background: '#B26770', color: '#F7F1E8', padding: '4px 10px', borderRadius: '3px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px', letterSpacing: '.15em', textTransform: 'uppercase', fontWeight: '700', display: 'inline-block', marginBottom: '16px' }}>
                  {card.tag}
                </span>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '64px', fontWeight: '400', color: '#141210', lineHeight: '.95', letterSpacing: '-.035em', marginBottom: '4px' }}>
                  <em style={{ fontStyle: 'italic' }}>{card.num}</em><span style={{ fontSize: '.45em', color: '#8C6534', marginLeft: '3px' }}>{card.suf}</span>
                </div>
                <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: '500', color: '#141210', letterSpacing: '-.01em', lineHeight: '1.2', marginBottom: '12px' }}>
                  {card.title}
                </h4>
                <p style={{ fontSize: '14px', color: '#6E665C', lineHeight: '1.6', fontWeight: '400', marginBottom: '12px' }}>
                  {card.text}
                </p>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#8C6534', letterSpacing: '.05em', marginTop: '4px', paddingTop: '16px', borderTop: '1px dashed #E3D9C6', fontWeight: '500' }}>
                  {card.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BASTIDORES */}
      <section id="behind" style={{ background: '#141210', color: '#F7F1E8', position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ marginBottom: '60px', maxWidth: '780px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: '#B8864B', fontWeight: '700', marginBottom: '22px', display: 'inline-flex', alignItems: 'center', gap: '14px', justifyContent: 'center' }}>
              <span style={{ width: '30px', height: '1px', background: '#B8864B' }}></span>
              III · Bastidores
              <span style={{ width: '30px', height: '1px', background: '#B8864B' }}></span>
            </div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(36px,4.8vw,60px)', fontWeight: '300', color: '#F7F1E8', lineHeight: '1.05', letterSpacing: '-.025em', marginBottom: '20px' }}>
              Como esta <em style={{ color: '#B8864B', fontStyle: 'italic', fontWeight: '300' }}>edição</em> foi desenvolvida.
            </h2>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: '17px', fontStyle: 'italic', color: 'rgba(247,241,232,.72)', lineHeight: '1.55' }}>
              Três anos de pesquisa, dezenas de iterações, um conselho de ginecologistas. A história completa do primeiro lançamento Ziva.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0', position: 'relative', marginTop: '40px' }}>
            {[
              { n: '01', date: '2023 · Pesquisa', title: 'Imersão internacional', text: 'Beatriz visitou labs nos EUA e Japão para entender o padrão global de probióticos vaginais — e trazer esse benchmark ao Brasil.' },
              { n: '02', date: '2024 · Conselho', title: 'Desenvolvimento clínico', text: 'Formulação desenhada com 3 ginecologistas e 1 nutricionista integrativa, validada em cohort de 527 usuárias antes do lançamento.' },
              { n: '03', date: '2025 · Produção', title: 'Lotes piloto', text: 'Dezenas de iterações de sabor, concentração e estabilidade até chegar na fórmula final — lote por lote, sem atalho.' },
              { n: '04', date: '2026 · Lançamento', title: 'Lançamento', text: '500 unidades numeradas à mão, embaladas na nossa casa em SP, prontas para chegar antes de todo mundo. Você está aqui.' },
            ].map((step, i) => (
              <div key={i} style={{ padding: '0 20px', position: 'relative', zIndex: '1' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: i === 3 ? '#B8864B' : '#141210', border: i === 3 ? 'none' : '2px solid #B8864B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', fontWeight: '700', color: i === 3 ? '#141210' : '#B8864B', margin: '0 auto 24px', letterSpacing: '.04em', position: 'relative' }}>
                  {step.n}
                </div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: '#B8864B', letterSpacing: '.2em', textTransform: 'uppercase', fontWeight: '700', textAlign: 'center', marginBottom: '10px' }}>
                  {step.date}
                </div>
                <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: '400', color: '#F7F1E8', textAlign: 'center', marginBottom: '10px', letterSpacing: '-.005em', lineHeight: '1.15' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(247,241,232,.7)', lineHeight: '1.6', textAlign: 'center', fontWeight: '300' }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALIDATED */}
      <section style={{ background: '#EFE6D6', padding: '100px 0' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '72px', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: '#8C6534', fontWeight: '700', marginBottom: '22px', display: 'inline-flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ width: '30px', height: '1px', background: '#B8864B' }}></span>
              IV · Validado lá fora
            </div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(36px,4.8vw,60px)', fontWeight: '300', color: '#141210', lineHeight: '1.05', marginBottom: '22px', letterSpacing: '-.025em' }}>
              A tendência que já é <em style={{ color: '#B26770', fontStyle: 'italic', fontWeight: '300' }}>normal</em> lá fora.
            </h2>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: '17px', fontStyle: 'italic', color: '#34302B', lineHeight: '1.55', marginBottom: '12px' }}>
              Probióticos vaginais de cepa única são categoria consolidada em países que ditam tendência em wellness feminino.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginTop: '28px' }}>
              {[
                { country: 'EUA', title: 'Seed Health · O-Positiv · Happy V', text: 'Categoria probiótico vaginal cresce 200%+ ao ano desde 2022. Três unicórnios do setor em menos de 4 anos.' },
                { country: 'Japão', title: 'Cheero · Fujio Femtech', text: 'Mercado líder global em femtech, com probióticos íntimos como top-seller em lojas como Cosme Kitchen.' },
                { country: 'UK · FR', title: 'Optibac · Herbalgem Intime', text: 'Recomendação padrão de ginecologistas europeias para prevenção de recorrências — consolidação da categoria.' },
                { country: 'Brasil', title: 'Ziva health · Edição Inaugural', text: 'Primeiro lançamento brasileiro no padrão internacional de concentração, cepa e entrega editorial. Você agora.' },
              ].map((ref, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '20px', alignItems: 'start', paddingTop: i === 0 ? '0' : '22px', borderTop: i === 0 ? 'none' : '1px solid #E3D9C6' }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#8C6534', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: '700', padding: '6px 10px', background: '#E8D5B0', borderRadius: '3px', minWidth: '80px', textAlign: 'center' }}>
                    {ref.country}
                  </span>
                  <div>
                    <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: '500', color: '#141210', marginBottom: '6px', letterSpacing: '-.005em', lineHeight: '1.2' }}>
                      {ref.title}
                    </h4>
                    <p style={{ fontSize: '13.5px', color: '#6E665C', lineHeight: '1.55', fontWeight: '400' }}>
                      {ref.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#FFFCF6', padding: '40px 36px', borderLeft: '3px solid #B8864B', boxShadow: '0 2px 16px rgba(26,22,19,.06)' }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: '56px', fontWeight: '400', color: '#F3DADD', lineHeight: '.6', marginBottom: '10px', fontStyle: 'italic' }}>
              "
            </div>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontStyle: 'italic', color: '#141210', lineHeight: '1.4', marginBottom: '24px', fontWeight: '300', letterSpacing: '-.005em' }}>
              Probióticos vaginais com cepa específica são a <em style={{ fontStyle: 'italic' }}>próxima revolução</em> em autocuidado feminino. O que virou padrão nos EUA e Japão está chegando ao Brasil — e quem experimenta primeiro, define a tendência.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '18px', borderTop: '1px solid #E3D9C6' }}>
              <span style={{ fontFamily: "'Fraunces', serif", fontSize: '15px', fontWeight: '500', color: '#141210' }}>Dra. Nancy Novaes</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: '#8C6534', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: '600' }}>Nutricionista integrativa · conselho Ziva</span>
            </div>
          </div>
        </div>
      </section>

{/* OFFER */}
      <section id="offer" style={{ background: '#141210', color: '#F7F1E8', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: '#B8864B', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '14px', justifyContent: 'center', marginBottom: '20px' }}>
              <span style={{ width: '30px', height: '1px', background: '#B8864B' }}></span>
              VI · Edição Inaugural · Oferta de lançamento
              <span style={{ width: '30px', height: '1px', background: '#B8864B' }}></span>
            </div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(40px,5vw,64px)', fontWeight: '300', color: '#F7F1E8', lineHeight: '1.05', letterSpacing: '-.025em', marginBottom: '20px' }}>
              Garanta <em style={{ color: '#B8864B', fontStyle: 'italic' }}>sua unidade</em> da Edição Inaugural.
            </h2>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: '17px', fontStyle: 'italic', fontWeight: '300', color: 'rgba(247,241,232,.72)', lineHeight: '1.55' }}>
              Pré-venda limitada a 500 unidades numeradas à mão. Brindes exclusivos de lançamento. Não há reposição desta edição.
            </p>
          </div>

          <div style={{ maxWidth: '420px', margin: '0 auto 48px', background: 'rgba(247,241,232,.04)', padding: '18px 22px', border: '1px solid rgba(184,134,75,.25)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: '#B8864B', letterSpacing: '.2em', textTransform: 'uppercase', fontWeight: '700' }}>▶ Disponibilidade Edição Inaugural</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#F7F1E8', fontWeight: '600' }}><strong style={{ color: '#D48A90' }}>252</strong> restam de 500</span>
            </div>
            <div style={{ height: '4px', background: 'rgba(247,241,232,.1)', borderRadius: '100px', overflow: 'hidden' }}>
              <div style={{ height: '100%', background: 'linear-gradient(90deg,#D48A90,#B8864B)', width: '50.4%', borderRadius: '100px' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '32px', marginBottom: '40px' }}>
            {[
              {
                label: '▶ Edição Inaugural · Singular',
                title: 'Simbiótico <em>Íntimo</em>',
                sub: 'Sua entrada na edição inaugural. Uma unidade numerada, um mês de ritual.',
                save: '−R$ 72',
                old: 'R$ 299',
                new: 'R$ 227',
                install: 'Em até <strong>3x sem juros</strong> · Pix com 5% OFF',
                includes: [
                  { n: '01', text: '<strong>30 sachês numerados</strong> · 10bi UFC L. rhamnosus GG + FOS' },
                  { n: '02', text: '<strong>Certificado de edição</strong> · sua unidade é uma das 500 da Edição Inaugural' },
                  { n: '03', text: '<strong>Carta da fundadora</strong> assinada à mão' },
                  { n: '04', text: '<strong>Convite First Wave</strong> · <span style={{color:"#B8864B",fontWeight:"500",fontStyle:"italic",fontFamily:"Fraunces,serif"}}>acesso antecipado à próxima edição</span>' },
                ],
                featured: false,
              },
              {
                label: '▶ Edição Inaugural · Completa',
                title: 'Simbiótico <em>+</em><br>Brinde de Lançamento',
                sub: 'A edição completa do lançamento. Com Sérum Ozonizado + necessaire exclusiva de lançamento.',
                save: '−R$ 191',
                old: 'R$ 558',
                new: 'R$ 367',
                install: 'Em até <strong>6x sem juros</strong> · Pix com 5% OFF · Frete grátis',
                includes: [
                  { n: '01', text: '<strong>30 sachês</strong> Simbiótico Íntimo numerados' },
                  { n: '02', text: '<strong>Sérum Ozonizado</strong> 30ml · ação complementar tópica' },
                  { n: '03', text: '<strong>Necessaire signature de lançamento</strong> · <span style={{color:"#B8864B",fontWeight:"500",fontStyle:"italic",fontFamily:"Fraunces,serif"}}>exclusiva desta edição · não será reposta</span>' },
                  { n: '04', text: '<strong>Certificado de edição</strong> + carta da fundadora' },
                  { n: '05', text: '<strong>Acesso First Wave</strong> + <span style={{color:"#B8864B",fontWeight:"500",fontStyle:"italic",fontFamily:"Fraunces,serif"}}>consultora dedicada WhatsApp</span>' },
                ],
                featured: true,
              },
            ].map((card, i) => (
              <div key={i} style={{ background: 'rgba(247,241,232,.04)', border: '1px solid rgba(247,241,232,.14)', padding: '44px 36px', position: 'relative', display: 'flex', flexDirection: 'column', borderColor: card.featured ? '#B8864B' : 'rgba(247,241,232,.14)', background: card.featured ? 'rgba(184,134,75,.06)' : 'rgba(247,241,232,.04)' }}>
                {card.featured && (
                  <div style={{ position: 'absolute', top: '-13px', left: '36px', background: '#B8864B', color: '#141210', padding: '5px 14px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: '700' }}>
                    Edição Inaugural · de Lançamento
                  </div>
                )}
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '.22em', textTransform: 'uppercase', color: '#B8864B', fontWeight: '600', marginBottom: '16px' }}>
                  {card.label}
                </div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '30px', fontWeight: '300', color: '#F7F1E8', lineHeight: '1.12', marginBottom: '10px', letterSpacing: '-.01em' }}>
                  {card.title.includes('<em>') ? (
                    <>Simbiótico <em style={{ color: '#B8864B', fontStyle: 'italic' }}>+</em><br />Brinde de Lançamento</>
                  ) : (
                    <>Simbiótico <em style={{ color: '#B8864B', fontStyle: 'italic' }}>Íntimo</em></>
                  )}
                </h3>
                <p style={{ fontFamily: "'Fraunces', serif", fontSize: '14.5px', fontStyle: 'italic', color: 'rgba(247,241,232,.62)', marginBottom: '28px', fontWeight: '300', lineHeight: '1.45' }}>
                  {card.sub}
                </p>

                <div style={{ background: 'rgba(0,0,0,.22)', padding: '22px 24px', marginBottom: '28px', border: '1px solid rgba(184,134,75,.18)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(247,241,232,.5)', fontWeight: '600' }}>Acesso Antecipado · {card.featured ? 'Completa' : 'Ed. Inaugural'}</span>
                    <span style={{ background: '#B26770', color: '#F7F1E8', padding: '4px 10px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: '700' }}>
                      {card.save}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '8px' }}>
                    <span style={{ fontFamily: "'Fraunces', serif", fontSize: '15px', color: 'rgba(247,241,232,.4)', textDecoration: 'line-through', fontWeight: '300' }}>
                      {card.old}
                    </span>
                    <span style={{ fontFamily: "'Fraunces', serif", fontSize: '40px', color: '#F7F1E8', fontWeight: '400', lineHeight: '1', letterSpacing: '-.015em' }}>
                      R$ <em style={{ color: '#B8864B', fontStyle: 'italic', fontWeight: '300' }}>{card.new.replace('R$ ', '')}</em>
                    </span>
                  </div>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: '12px', fontStyle: 'italic', color: 'rgba(247,241,232,.55)', fontWeight: '300' }} dangerouslySetInnerHTML={{ __html: card.install }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px', flexGrow: 1 }}>
                  {card.includes.map((inc, j) => (
                    <div key={j} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '14px', alignItems: 'start', paddingBottom: '13px', borderBottom: j === card.includes.length - 1 ? 'none' : '1px solid rgba(247,241,232,.08)' }}>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#B8864B', letterSpacing: '.08em', paddingTop: '3px', fontWeight: '600', minWidth: '22px' }}>
                        {inc.n}
                      </span>
                      <span style={{ fontSize: '13.5px', color: 'rgba(247,241,232,.85)', lineHeight: '1.55', fontWeight: '400' }} dangerouslySetInnerHTML={{ __html: inc.text }} />
                    </div>
                  ))}
                </div>

                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '14px', width: '100%', padding: '19px', background: card.featured ? '#B8864B' : 'transparent', color: card.featured ? '#141210' : '#F7F1E8', fontFamily: "'Fraunces', serif", fontSize: '12px', letterSpacing: '.22em', textTransform: 'uppercase', fontWeight: '500', textDecoration: 'none', border: card.featured ? 'none' : '1px solid #F7F1E8', cursor: 'pointer' }}>
                  Garantir Ed. {card.featured ? 'Completa' : 'Singular'} →
                </a>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', marginTop: '36px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: 'rgba(247,241,232,.5)', fontWeight: '400', letterSpacing: '.08em' }}>
            <span style={{ padding: '0 14px', position: 'relative' }}>500 unidades numeradas<span style={{ position: 'absolute', right: '-4px', color: 'rgba(247,241,232,.25)' }}>·</span></span>
            <span style={{ padding: '0 14px', position: 'relative' }}>Entrega em até 48h nas capitais<span style={{ position: 'absolute', right: '-4px', color: 'rgba(247,241,232,.25)' }}>·</span></span>
            <span style={{ padding: '0 14px', position: 'relative' }}>30 dias de garantia</span>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#FFFCF6', padding: '100px 0' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ marginBottom: '48px', maxWidth: '820px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: '#8C6534', fontWeight: '700', marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '14px', justifyContent: 'center' }}>
              <span style={{ width: '30px', height: '1px', background: '#B8864B' }}></span>
              VII · Perguntas do Lançamento
              <span style={{ width: '30px', height: '1px', background: '#B8864B' }}></span>
            </div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(36px,4.8vw,60px)', fontWeight: '300', color: '#141210', lineHeight: '1.05', letterSpacing: '-.025em' }}>
              Respostas <em style={{ color: '#B26770', fontStyle: 'italic', fontWeight: '300' }}>rápidas.</em>
            </h2>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: '#F7F1E8', border: '1px solid #E3D9C6', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '22px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontFamily: "'Fraunces', serif", fontSize: '17px', fontWeight: '400', color: '#141210', gap: '14px', lineHeight: '1.3', background: 'none', border: 'none', textAlign: 'left' }}
                >
                  <span dangerouslySetInnerHTML={{ __html: faq.q }} />
                  <span style={{ fontSize: '22px', color: '#B26770', flexShrink: 0, fontWeight: '300', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform .3s' }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 28px 22px', color: '#34302B', fontSize: '14.5px', lineHeight: '1.7', fontWeight: '400', borderTop: '1px solid #E3D9C6', paddingTop: '16px' }} dangerouslySetInnerHTML={{ __html: faq.a }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section style={{ background: '#F7F1E8', padding: '120px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: '#8C6534', fontWeight: '700', marginBottom: '32px', display: 'inline-flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ width: '30px', height: '1px', background: '#B8864B' }}></span>
            Edição Inaugural · ao vivo
            <span style={{ width: '30px', height: '1px', background: '#B8864B' }}></span>
          </div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(40px,5.5vw,68px)', fontWeight: '300', color: '#141210', lineHeight: '1', letterSpacing: '-.028em', marginBottom: '28px' }}>
            Seja uma das <em style={{ color: '#B26770', fontStyle: 'italic', fontWeight: '300' }}>primeiras.</em>
          </h2>
          <p style={{ fontFamily: "'Fraunces', serif", fontSize: '17px', fontStyle: 'italic', color: '#34302B', lineHeight: '1.55', maxWidth: '540px', margin: '0 auto 44px', fontWeight: '300' }}>
            A Edição Inaugural existe apenas uma vez. Depois dela, outras edições virão — mas nenhuma será esta.
          </p>
          <a href="#offer" style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', padding: '18px 36px', background: '#141210', color: '#F7F1E8', fontFamily: "'Fraunces', serif", fontSize: '12px', letterSpacing: '.24em', textTransform: 'uppercase', fontWeight: '500', textDecoration: 'none', marginBottom: '28px' }}>
            Garantir minha unidade →
          </a>
          <div style={{ marginTop: '36px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#9C9488', letterSpacing: '.1em', fontWeight: '500' }}>
            <span style={{ padding: '0 14px', position: 'relative' }}>500 numeradas<span style={{ position: 'absolute', right: '-4px' }}>·</span></span>
            <span style={{ padding: '0 14px', position: 'relative' }}>Brinde exclusivo<span style={{ position: 'absolute', right: '-4px' }}>·</span></span>
            <span style={{ padding: '0 14px', position: 'relative' }}>30 dias de garantia</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#141210', color: 'rgba(247,241,232,.55)', padding: '64px 0 30px', borderTop: '1px solid rgba(247,241,232,.08)' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr', gap: '48px', marginBottom: '44px' }}>
          <div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', color: '#F7F1E8', fontWeight: '500', marginBottom: '14px', letterSpacing: '.08em' }}>
              ZIVA <em style={{ color: '#D48A90', fontStyle: 'italic', letterSpacing: '0', fontWeight: '400' }}>health</em>
            </div>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: '13px', fontStyle: 'italic', color: 'rgba(247,241,232,.55)', lineHeight: '1.6', maxWidth: '300px', fontWeight: '300' }}>
              Ciência, natureza e inovação em saúde íntima feminina. Drops numerados, lançamentos curados.
            </p>
          </div>
          {[
            { title: 'EDIÇÕES', links: ['Edição Inaugural · ao vivo', 'Próxima edição · em breve', 'First Wave List'] },
            { title: 'A CASA', links: ['Fundadora', 'Ciência', 'Bastidores'] },
            { title: 'ATENDIMENTO', links: ['WhatsApp VIP', 'contato@sejaziva.com.br', 'Política de envio e trocas'] },
          ].map((col, i) => (
            <div key={i}>
              <h5 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#B8864B', fontWeight: '600', marginBottom: '14px' }}>
                {col.title}
              </h5>
              {col.links.map((link, j) => (
                <a key={j} href="#" style={{ display: 'block', color: 'rgba(247,241,232,.6)', textDecoration: 'none', fontSize: '13px', padding: '4px 0', fontWeight: '400', transition: 'color .3s', letterSpacing: '.02em' }}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '24px 32px 0', borderTop: '1px solid rgba(247,241,232,.08)', display: 'flex', justifyContent: 'space-between', fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: 'rgba(247,241,232,.4)', fontWeight: '400', letterSpacing: '.04em' }}>
          <span>© ZIVA HEALTH 2026 · CNPJ 56.961.649/0001-23 · SÃO PAULO</span>
          <span>CADA EDIÇÃO É NUMERADA.</span>
        </div>
      </footer>

      <style>{`
        @media (max-width: 1080px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .wn-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .val-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .offer-options { grid-template-columns: 1fr !important; gap: 24px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
          section { padding: 80px 0 !important; }
        }
        @media (max-width: 700px) {
          .wn-stats { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .footer-base { flex-direction: column; gap: 8px; text-align: center; }
          .wn-grid2 { grid-template-columns: 1fr !important; gap: 18px !important; }
          .behind-timeline { grid-template-columns: 1fr !important; gap: 36px !important; }
          .offer { padding: 90px 0 !important; }
          body { padding-bottom: 76px; }
        }
      `}</style>
    </div>
  );
}