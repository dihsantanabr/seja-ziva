export default function GuaranteeSection() {
  return (
    <section style={{ background: '#F7F1E8', padding: '60px 20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: '12px', color: '#D48A90', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Segurança integral</div>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: '400', marginBottom: '16px' }}>30 dias de <em style={{ fontStyle: 'italic', fontWeight: '400' }}>garantia integral</em></h2>
        <p style={{ color: '#3A342E', lineHeight: '1.7', fontSize: '15px' }}>
          Use por 30 dias. Se não sentir diferença, devolvemos 100% do valor. Sem burocracia. Você merece sentir-se segura com sua escolha.
        </p>
      </div>
    </section>
  );
}