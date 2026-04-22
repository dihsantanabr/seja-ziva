const PRODUCT_IMG = 'https://sejaziva.com.br/cdn/shop/files/PROBIOTICO_-_04.png?v=1764950605';

export default function PainsSection() {
  const pains = [
    { num: 'i.', title: 'Equilíbrio do pH íntimo', text: 'A cepa L. rhamnosus GG produz ácido lático continuamente, estabilizando o pH vaginal na faixa saudável.' },
    { num: 'ii.', title: 'Prevenção de infecções recorrentes', text: 'Uma microbiota reconstruída forma barreira natural contra candidíase, vaginose e infecções urinárias.' },
    { num: 'iii.', title: 'Intestino regulado e leve', text: 'O Prebiótico FOS alimenta a microbiota intestinal, reduzindo inchaço e melhorando o trânsito.' },
    { num: 'iv.', title: 'Imunidade fortalecida', text: '70% do sistema imunológico vive no intestino. Uma flora equilibrada é uma defesa natural reforçada.' },
  ];

  return (
    <section style={{ background: '#fff', padding: '80px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontSize: '12px', color: '#D48A90', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>II · O que ele faz por você</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '400', marginBottom: '16px' }}>Quatro <em style={{ color: '#D48A90', fontStyle: 'italic', fontWeight: '400' }}>gestos</em>, em um sachê por dia.</h2>
          <p style={{ color: '#3A342E', fontSize: '15px', lineHeight: '1.7', marginTop: '12px', maxWidth: '650px' }}>
            Equilíbrio interno, conforto diário, proteção duradoura e bem-estar que se sente no corpo inteiro.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start' }} className="pains-section">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {pains.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#D48A90', flexShrink: 0 }}>{p.num}</div>
                <div>
                  <h4 style={{ fontWeight: '700', fontSize: '15px', marginBottom: '6px', color: '#1A1613' }}>{p.title}</h4>
                  <p style={{ color: '#6E665C', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '320px' }}>
            <img src={PRODUCT_IMG} alt="Simbiótico Íntimo Ziva" style={{ maxHeight: '300px', objectFit: 'contain', filter: 'drop-shadow(0 16px 40px rgba(212,138,144,0.2))' }} />
          </div>
        </div>
      </div>
    </section>
  );
}