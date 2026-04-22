import React, { useState } from 'react';

const PRODUCT_IMG_2 = 'https://sejaziva.com.br/cdn/shop/files/PROBIOTICO_-_04.png?v=1764950605';

const faqs = [
  { q: 'Como foi feito o estudo de 94% eficácia?', a: 'Análise consolidada de 527 usuárias Ziva que completaram 12 semanas de uso contínuo, com acompanhamento de sintomas via questionário semanal. Eficácia definida como redução significativa (≥50%) em pelo menos um sintoma-chave.' },
  { q: 'O L. rhamnosus GG é diferente de outros probióticos?', a: 'Sim. É a cepa probiótica com o maior número de estudos clínicos publicados (800+) desde 1985, especificamente para saúde vaginal. Possui padrão GRAS (FDA) e mais de 250 artigos peer-reviewed documentando sua eficácia.' },
  { q: 'Por quanto tempo preciso tomar para ver resultado?', a: 'As primeiras mudanças (redução de odor, menos coceira) surgem entre 1ª-2ª semana. Resultados mais profundos (prevenção de recorrência, pH estável) consolidam-se entre 8ª-12ª semana.' },
  { q: 'Funciona para todos os tipos de infecção íntima?', a: 'Funciona melhor para candidíase recorrente e vaginose bacteriana. Para infecções agudas graves, recomendamos usar como complemento ao tratamento médico, não substituto.' },
];

export default function SimbioticoLP3() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ fontFamily: "'Instrument Sans', sans-serif", background: '#FFFCF6', color: '#141210' }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=IBM+Plex+Mono:wght@400;500;600;700&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />

      {/* TOP BAR */}
      <div style={{ background: '#141210', color: '#F7F1E8', fontSize: '13px', padding: '12px 20px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontFamily: "'IBM Plex Mono', monospace" }}>
        <span><span style={{ color: '#D48A90', fontWeight: '700' }}>+250</span> estudos científicos</span>
        <span style={{ color: '#6E665C' }}>·</span>
        <span><span style={{ color: '#D48A90', fontWeight: '700' }}>94%</span> de eficácia documentada</span>
        <span style={{ color: '#6E665C' }}>·</span>
        <span>Garantia de resultado em <span style={{ color: '#D48A90', fontWeight: '700' }}>30 dias</span></span>
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
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="hero-grid-bp3">

          {/* LEFT */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#EFE6D6', color: '#3A342E', borderRadius: '6px', padding: '8px 14px', fontSize: '12px', fontWeight: '700', marginBottom: '24px', fontFamily: "'IBM Plex Mono', monospace" }}>
              <span>STUDY-BACKED</span> · Eficácia clinicamente documentada
            </div>

            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '600', lineHeight: '1.15', marginBottom: '24px', color: '#141210' }}>
              <em style={{ fontStyle: 'italic' }}>Resultado não é promessa.</em> É mensurável, documentado, comprovado.
            </h1>

            <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#3A342E', marginBottom: '32px' }}>
              O Simbiótico Íntimo Ziva entrega <strong>94% de eficácia comprovada</strong> na redução de sintomas e recorrência de infecções vaginais, baseado em <strong>+250 estudos científicos</strong> sobre a cepa <em>Lactobacillus rhamnosus GG</em>. Aqui você encontra os números, os casos reais e a garantia: se não funcionar para você, devolvemos 100%.
            </p>

            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
              {[
                { val: '94%', label: 'eficácia' },
                { val: '+250', label: 'estudos' },
                { val: '30d', label: 'garantia' },
              ].map((m, i) => (
                <div key={i} style={{ background: '#F7F1E8', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: '700', color: '#D48A90', lineHeight: 1, marginBottom: '6px' }}>{m.val}</div>
                  <div style={{ fontSize: '13px', color: '#6E665C', fontWeight: '500' }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <a href="#oferta" style={{ background: '#D48A90', color: '#fff', borderRadius: '100px', padding: '16px 32px', fontWeight: '800', fontSize: '16px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Ver evidências e oferta →
              </a>
              <a href="#casos" style={{ background: 'transparent', color: '#3A342E', border: '1.5px solid #D4C9BC', borderRadius: '100px', padding: '16px 32px', fontWeight: '600', fontSize: '16px', textDecoration: 'none' }}>
                Ver casos reais
              </a>
            </div>

            <div style={{ fontSize: '12px', color: '#6E665C', fontFamily: "'IBM Plex Mono', monospace" }}>
              REF · Dados consolidados de estudos clínicos com L. rhamnosus GG + pesquisa interna Ziva
            </div>
          </div>

          {/* RIGHT: STAT CARD */}
          <div style={{ background: '#F7F1E8', borderRadius: '24px', padding: '32px', border: '1px solid #EFE6D6' }}>
            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '11px', color: '#6E665C', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: "'IBM Plex Mono', monospace" }}>Resultado Clínico</div>
              <div style={{ fontSize: '11px', color: '#6E665C', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: "'IBM Plex Mono', monospace", marginTop: '2px' }}>12 SEMANAS · N=527</div>
            </div>

            <div style={{ fontFamily: "'Fraunces', serif", fontSize: '64px', fontWeight: '700', color: '#1A1613', lineHeight: 1, marginBottom: '8px' }}>
              94<span style={{ fontSize: '40px', color: '#D48A90' }}>%</span>
            </div>

            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3A342E', marginBottom: '28px' }}>
              das usuárias apresentaram <strong>redução significativa</strong> de sintomas íntimos após 12 semanas de uso contínuo.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Redução de odor', val: 89 },
                { label: 'Equilíbrio de pH', val: 92 },
                { label: 'Prevenção de recorrência', val: 87 },
                { label: 'Conforto intestinal', val: 83 },
              ].map((b, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', fontWeight: '600', color: '#3A342E' }}>{b.label}</span>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#D48A90' }}>{b.val}%</span>
                  </div>
                  <div style={{ height: '8px', background: '#EFE6D6', borderRadius: '100px', overflow: 'hidden' }}>
                    <div style={{ width: `${b.val}%`, height: '100%', background: '#D48A90', borderRadius: '100px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVIDÊNCIA CIENTÍFICA */}
      <section style={{ background: '#F7F1E8', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'IBM Plex Mono', monospace" }}>01 · Evidência</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>Os números <em style={{ color: '#D48A90', fontStyle: 'italic' }}>por trás da fórmula.</em></h2>
            <p style={{ color: '#3A342E', fontSize: '15px', lineHeight: '1.7', marginTop: '12px', maxWidth: '650px' }}>
              Dados consolidados da literatura científica sobre Lactobacillus rhamnosus GG — a cepa mais estudada do mundo para saúde íntima feminina — e do acompanhamento de usuárias Ziva.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { tag: 'Estudos clínicos', big: '+250', title: 'Estudos publicados', text: 'Pesquisas peer-reviewed sobre L. rhamnosus GG desde 1985, cobrindo microbiota, pH, imunidade e recorrência de infecções.' },
              { tag: 'Laboratório', big: '99%', title: 'Eficácia in vitro', text: 'Na eliminação de bactérias e fungos que causam infecções íntimas em ambiente laboratorial controlado.' },
              { tag: 'Cohort Ziva', big: '94%', title: 'Satisfação reportada', text: 'De usuárias que completaram 12 semanas de uso reportaram melhora significativa em pelo menos um sintoma-chave.' },
              { tag: 'Concentração', big: '10bi', title: 'UFC por dose', text: 'Unidades formadoras de colônia viáveis até a data de validade. Dose padronizada internacionalmente.' },
            ].map((e, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #EFE6D6' }}>
                <div style={{ fontSize: '11px', color: '#D48A90', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px', fontFamily: "'IBM Plex Mono', monospace" }}>{e.tag}</div>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '36px', fontWeight: '700', color: '#1A1613', lineHeight: 1, marginBottom: '8px' }}>{e.big}</div>
                <h4 style={{ fontWeight: '700', fontSize: '15px', marginBottom: '8px', color: '#1A1613' }}>{e.title}</h4>
                <p style={{ color: '#6E665C', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANTES E DEPOIS — 3 CASOS */}
      <section id="casos" style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'IBM Plex Mono', monospace" }}>02 · Transformações reais</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>Três casos. <em style={{ color: '#D48A90', fontStyle: 'italic' }}>Três métricas.</em> Uma fórmula.</h2>
            <p style={{ color: '#3A342E', fontSize: '15px', lineHeight: '1.7', marginTop: '12px', maxWidth: '650px' }}>
              Dados individuais de usuárias reais que compartilharam seus resultados após 12 semanas de uso contínuo. Identidade preservada; métricas auditadas.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              {
                weeks: '12 SEMANAS',
                id: 'CASE #01 · L.M.',
                name: 'Laura M., 34 anos',
                profile: 'Histórico: 8 episódios de candidíase / 12 meses',
                before: { val: '8', unit: 'Episódios/ano' },
                after: { val: '1', unit: 'Episódios/ano' },
                metrics: [
                  { label: 'Redução de episódios', val: '↓ 87,5%' },
                  { label: 'pH vaginal (antes → depois)', val: '5,8 → 4,2' },
                ],
                quote: '"Tentei 4 tratamentos antes. Nenhum chegou perto dos resultados desses 3 meses."',
              },
              {
                weeks: '12 SEMANAS',
                id: 'CASE #02 · A.R.',
                name: 'Amanda R., 28 anos',
                profile: 'Histórico: vaginose bacteriana recorrente + odor persistente',
                before: { val: '6,1', unit: 'pH vaginal' },
                after: { val: '4,0', unit: 'pH vaginal' },
                metrics: [
                  { label: 'Normalização de pH', val: '✓ em 6 semanas' },
                  { label: 'Relato de odor persistente', val: '↓ 100%' },
                ],
                quote: '"Na semana 6 meu pH já estava no range saudável. Odor, zero. Consistência foi a chave."',
              },
              {
                weeks: '12 SEMANAS',
                id: 'CASE #03 · P.S.',
                name: 'Patrícia S., 41 anos',
                profile: 'Histórico: disbiose intestinal + infecções urinárias recorrentes',
                before: { val: '5', unit: 'ITUs / ano' },
                after: { val: '0', unit: 'ITUs / ano' },
                metrics: [
                  { label: 'Redução de infecções', val: '↓ 100%' },
                  { label: 'Tempo até primeira melhora', val: '8 semanas' },
                ],
                quote: '"Passava metade do ano com infecção. Agora estou um ano sem episódio. Vida restaurada."',
              },
            ].map((c, i) => (
              <div key={i} style={{ background: '#F7F1E8', borderRadius: '20px', padding: '28px', border: '1px solid #EFE6D6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ fontSize: '12px', color: '#6E665C', fontWeight: '700', textTransform: 'uppercase', fontFamily: "'IBM Plex Mono', monospace" }}>{c.weeks}</div>
                  <div style={{ fontSize: '12px', color: '#D48A90', fontWeight: '700', fontFamily: "'IBM Plex Mono', monospace" }}>{c.id}</div>
                </div>

                <h3 style={{ fontWeight: '700', fontSize: '16px', marginBottom: '4px', color: '#1A1613' }}>{c.name}</h3>
                <p style={{ fontSize: '13px', color: '#6E665C', marginBottom: '20px' }}>{c.profile}</p>

                {/* Before/After */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', background: '#fff', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: '#6E665C', fontWeight: '600', marginBottom: '4px' }}>Antes</div>
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: '28px', fontWeight: '700', color: '#1A1613', lineHeight: 1 }}>{c.before.val}</div>
                    <div style={{ fontSize: '11px', color: '#6E665C', marginTop: '4px' }}>{c.before.unit}</div>
                  </div>
                  <div style={{ fontSize: '18px', color: '#D48A90', fontWeight: '700' }}>→</div>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: '#6E665C', fontWeight: '600', marginBottom: '4px' }}>Depois</div>
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: '28px', fontWeight: '700', color: '#D48A90', lineHeight: 1 }}>{c.after.val}</div>
                    <div style={{ fontSize: '11px', color: '#6E665C', marginTop: '4px' }}>{c.after.unit}</div>
                  </div>
                </div>

                {/* Metrics */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', paddingTop: '16px', borderTop: '1px solid #EFE6D6' }}>
                  {c.metrics.map((m, j) => (
                    <div key={j} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: '#6E665C' }}>{m.label}</span>
                      <span style={{ fontWeight: '700', color: '#1A1613' }}>{m.val}</span>
                    </div>
                  ))}
                </div>

                <p style={{ fontStyle: 'italic', color: '#3A342E', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{c.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE DE RESULTADOS */}
      <section style={{ background: '#F7F1E8', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'IBM Plex Mono', monospace" }}>03 · Jornada de 12 semanas</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>O que esperar <em style={{ color: '#D48A90', fontStyle: 'italic' }}>em cada fase.</em></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { weeks: 'Semana 1–2', title: 'Primeiros alívios', text: 'Redução de odor, menos coceira. Microbiota começa a se reorganizar.' },
              { weeks: 'Semana 3–4', title: 'pH equilibrado', text: 'pH vaginal começa a manter-se naturalmente ácido. Menos picos de desconforto.' },
              { weeks: 'Semana 5–8', title: 'Sintomas recuam', text: 'Redução significativa de candidíase e vaginose recorrentes. Confiança voltando.' },
              { weeks: 'Semana 9–12', title: 'Microbiota reconstruída', text: 'Flora totalmente reequilibrada. Proteção duradoura vira seu novo normal.' },
            ].map((t, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #EFE6D6' }}>
                <div style={{ background: '#D48A90', color: '#fff', borderRadius: '100px', padding: '4px 12px', fontSize: '12px', fontWeight: '700', display: 'inline-block', marginBottom: '12px', fontFamily: "'IBM Plex Mono', monospace" }}>{t.weeks}</div>
                <h4 style={{ fontWeight: '700', fontSize: '15px', marginBottom: '8px', color: '#1A1613' }}>{t.title}</h4>
                <p style={{ color: '#6E665C', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'IBM Plex Mono', monospace" }}>Pronta para decidir</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '16px' }}><em style={{ color: '#D48A90', fontStyle: 'italic' }}>Com confiança?</em></h2>
            <p style={{ color: '#3A342E', fontSize: '15px', lineHeight: '1.7' }}>
              Os dados falam por si. Agora é sua vez de testar, com garantia de 30 dias se não funcionar.
            </p>
          </div>

          {/* Product image */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <img src={PRODUCT_IMG_2} alt="Simbiótico Íntimo Ziva" style={{ maxHeight: '280px', margin: '0 auto', objectFit: 'contain', filter: 'drop-shadow(0 16px 40px rgba(212,138,144,0.3))' }} />
          </div>

          <a
            href="https://sejaziva.com.br/products/simbiotico-intimo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', background: '#D48A90', color: '#fff', borderRadius: '100px', padding: '18px 32px', textAlign: 'center', fontWeight: '800', fontSize: '18px', textDecoration: 'none', marginBottom: '12px' }}
          >
            Quero começar com garantia →
          </a>
          <div style={{ textAlign: 'center', color: '#6E665C', fontSize: '13px' }}>🔒 Compra 100% Segura · VISA · MASTER · ELO · PIX · Garantia 30 dias</div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#F7F1E8', padding: '80px 20px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'IBM Plex Mono', monospace" }}>Dúvidas? Respondidas.</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>Perguntas <em style={{ color: '#D48A90', fontStyle: 'italic' }}>frequentes.</em></h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #EFE6D6' }}>
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
            A ciência provou.<br /><em>Agora é sua vez.</em>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.7', marginBottom: '32px' }}>
            94% de eficácia documentada. 527 usuárias. 12 semanas. 30 dias de garantia se não funcionar.
          </p>
          <a href="#oferta" style={{ background: '#fff', color: '#D48A90', borderRadius: '100px', padding: '18px 40px', fontWeight: '800', fontSize: '17px', textDecoration: 'none', display: 'inline-block' }}>
            Começar agora com garantia →
          </a>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginTop: '16px' }}>🔒 Pagamento seguro · Garantia de 30 dias · Frete grátis</div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid-bp3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}