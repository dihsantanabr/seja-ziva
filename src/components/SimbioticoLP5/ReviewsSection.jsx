export default function ReviewsSection() {
  const reviews = [
    { stars: 5, title: 'Experiência impecável', text: 'Chegou num pacote tão bonito, lacrado com fita. A carta da Beatriz me tocou. O produto é excelente, mas a experiência é o diferencial.', author: 'Mariana S.' },
    { stars: 5, title: 'Investimento vale cada real', text: 'Não é barato, mas entendi quando recebi. Qualidade do sachê, da embalagem, do atendimento — tudo premium. Renovei a compra.', author: 'Isabela R.' },
    { stars: 5, title: 'Tratamento VIP do início ao fim', text: 'Desde a compra até o suporte — tudo é pensado com cuidado. Me senti acolhida. Claro que o produto funciona, mas é o cuidado que diferencia.', author: 'Carolina M.' },
  ];

  return (
    <section style={{ background: '#fff', padding: '80px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '12px', color: '#D48A90', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Quem já escolheu</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '400' }}>Experiências que <em style={{ color: '#D48A90', fontStyle: 'italic', fontWeight: '400' }}>falam.</em></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ background: '#F7F1E8', borderRadius: '16px', padding: '24px', border: '1px solid #EFE6D6' }}>
              <div style={{ display: 'flex', marginBottom: '10px', color: '#D48A90', fontSize: '14px', letterSpacing: '2px' }}>{'★'.repeat(r.stars)}</div>
              <h4 style={{ fontWeight: '700', fontSize: '15px', marginBottom: '10px', color: '#1A1613' }}>{r.title}</h4>
              <p style={{ color: '#6E665C', fontSize: '13px', lineHeight: '1.6', marginBottom: '12px' }}>{r.text}</p>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#3A342E' }}>{r.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}