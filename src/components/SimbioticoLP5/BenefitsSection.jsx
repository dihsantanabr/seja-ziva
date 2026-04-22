export default function BenefitsSection() {
  const benefits = [
    { num: 'i.', title: 'Fórmula potente', text: '10 bilhões de Lactobacillus rhamnosus GG + Prebiótico FOS por dose, em formato que dispensa diluição.' },
    { num: 'ii.', title: 'Atendimento consultivo VIP', text: 'Um canal direto no WhatsApp com nossa equipe, disponível ao longo de todo o seu ritual.' },
  ];

  const svgIcons = [
    [<rect key="1" x="3" y="3" width="18" height="18" rx="2" />, <path key="2" d="M3 9h18M9 3v18" />],
    [<path key="1" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />],
  ];

  return (
    <section id="benefits" style={{ background: '#F7F1E8', padding: '80px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '12px', color: '#D48A90', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>I · O que você recebe</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '400', marginBottom: '16px' }}>Mais do que um produto. <em style={{ color: '#D48A90', fontStyle: 'italic', fontWeight: '400' }}>Uma entrega completa.</em></h2>
          <p style={{ color: '#3A342E', fontSize: '15px', lineHeight: '1.7', maxWidth: '600px', margin: '12px auto 0' }}>
            Cada encomenda Ziva é pensada como uma assinatura de qualidade — no conteúdo, na forma e na experiência.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {benefits.map((b, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #EFE6D6' }}>
              <div style={{ fontSize: '18px', color: '#D48A90', marginBottom: '12px', opacity: 0.6 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  {svgIcons[i]}
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
  );
}