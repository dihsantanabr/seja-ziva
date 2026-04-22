const PRODUCT_IMG = 'https://sejaziva.com.br/cdn/shop/files/PROBIOTICO_-_04.png?v=1764950605';

export default function HeroSection() {
  return (
    <section style={{ background: '#fff', padding: '80px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="hero-grid-bp5">
        {/* LEFT */}
        <div>
          <div style={{ fontSize: '13px', color: '#6E665C', fontWeight: '600', letterSpacing: '1px', marginBottom: '16px' }}>Simbiótico Íntimo · Edição 2026</div>

          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '400', lineHeight: '1.1', marginBottom: '24px' }}>
            Um <em style={{ fontStyle: 'italic' }}>ritual íntimo</em>. Uma <em style={{ fontStyle: 'italic' }}>experiência</em> inesquecível.
          </h1>

          <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#3A342E', marginBottom: '28px' }}>
            O Simbiótico Íntimo Ziva é ciência, natureza e sofisticação em um cuidado pensado para mulheres que escolhem o extraordinário.
          </p>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
            <span style={{ color: '#D48A90', fontSize: '16px', letterSpacing: '2px' }}>★★★★★</span>
            <span style={{ fontSize: '14px', color: '#3A342E' }}><strong>4,8/5</strong> · avaliações verificadas</span>
          </div>

          {/* Benefits */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
            {[
              '10 bilhões de Lactobacillus rhamnosus GG + Prebiótico FOS por dose',
              'Edição numerada com embalagem signature e carta da fundadora',
              'Atendimento consultivo VIP durante todo o seu ritual',
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: '#3A342E' }}>
                <span style={{ color: '#D48A90', fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>✓</span>
                <span>{b}</span>
              </div>
            ))}
          </div>

          {/* Price card */}
          <div style={{ background: '#F7F1E8', borderRadius: '16px', padding: '24px', marginBottom: '28px', border: '1px solid #EFE6D6' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '12px', color: '#6E665C', fontWeight: '600', marginBottom: '8px' }}>Edição 2026 · a partir de</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <span style={{ textDecoration: 'line-through', color: '#6E665C', fontSize: '14px' }}>R$ 299</span>
                  <span style={{ fontFamily: "'Fraunces', serif", fontSize: '40px', fontWeight: '400', color: '#1A1613' }}>R$ <em style={{ fontStyle: 'italic' }}>227</em></span>
                </div>
              </div>
              <div style={{ background: '#D48A90', color: '#fff', borderRadius: '8px', padding: '8px 14px', fontSize: '12px', fontWeight: '700' }}>Economize R$ 72</div>
            </div>
            <div style={{ fontSize: '13px', color: '#6E665C' }}>Em até <strong>3x sem juros</strong> · Pix à vista com 5% OFF</div>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '28px', flexWrap: 'wrap' }}>
            <a href="#offer" style={{ background: '#D48A90', color: '#fff', borderRadius: '100px', padding: '16px 32px', fontWeight: '700', fontSize: '16px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Adquirir agora <span>→</span>
            </a>
            <a href="#craft" style={{ background: 'transparent', color: '#3A342E', border: '1.5px solid #D4C9BC', borderRadius: '100px', padding: '16px 32px', fontWeight: '600', fontSize: '16px', textDecoration: 'none' }}>
              Ver a ciência
            </a>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '12px', color: '#6E665C', fontWeight: '500' }}>
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
          <div style={{ position: 'absolute', top: '20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: '#D48A90', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 32px rgba(212,138,144,0.3)', zIndex: 10 }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: '700', lineHeight: 1 }}>30</div>
            <div style={{ fontSize: '10px', fontWeight: '700', marginTop: '2px' }}>Dias</div>
            <div style={{ fontSize: '10px', fontWeight: '600', marginTop: '2px', opacity: 0.9 }}>Garantia</div>
          </div>

          <div style={{ background: '#F7F1E8', borderRadius: '20px', padding: '40px 32px', border: '1px solid #EFE6D6', textAlign: 'center', maxWidth: '380px' }}>
            <div style={{ fontSize: '11px', color: '#6E665C', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Éd. 2026</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: '300', color: '#1A1613', marginBottom: '2px' }}>Ziva <em style={{ fontStyle: 'italic', fontWeight: '400' }}>health</em></div>
            <div style={{ height: '2px', background: '#D48A90', width: '30px', margin: '12px auto' }} />
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: '400', color: '#1A1613', marginBottom: '16px', lineHeight: '1.3' }}>Simbiótico<br />Íntimo</div>
            <div style={{ fontSize: '12px', color: '#6E665C', fontWeight: '600', marginBottom: '6px' }}>Numerada à mão</div>
            <div style={{ fontSize: '13px', color: '#D48A90', fontWeight: '700', fontFamily: "'Instrument Sans', monospace", marginBottom: '24px' }}>n.º 0247 / 2026</div>
            <div style={{ padding: '16px', background: '#fff', borderRadius: '12px' }}>
              <img src={PRODUCT_IMG} alt="Simbiótico Íntimo Ziva" style={{ height: '160px', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}