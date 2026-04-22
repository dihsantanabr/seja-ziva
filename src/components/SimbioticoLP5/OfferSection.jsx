const PRODUCT_IMG = 'https://sejaziva.com.br/cdn/shop/files/PROBIOTICO_-_04.png?v=1764950605';

export default function OfferSection() {
  return (
    <section id="offer" style={{ background: '#1A1613', padding: '80px 20px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '400', color: '#F7F1E8', marginBottom: '24px' }}>Sua edição espera.</h2>

        <div style={{ marginBottom: '32px' }}>
          <img src={PRODUCT_IMG} alt="Simbiótico Íntimo Ziva" style={{ maxHeight: '240px', margin: '0 auto', objectFit: 'contain', filter: 'drop-shadow(0 16px 40px rgba(212,138,144,0.3))' }} />
        </div>

        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '13px', color: '#D48A90', fontWeight: '700', marginBottom: '8px' }}>Edição 2026</div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: '40px', fontWeight: '400', color: '#D48A90', lineHeight: 1, marginBottom: '8px' }}>R$ 227</div>
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
  );
}