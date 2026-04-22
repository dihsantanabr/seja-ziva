export default function CraftSection() {
  const craftItems = [
    { num: 'i.', metric: '+800 estudos científicos', title: 'Lactobacillus Rhamnosus GG', text: 'A cepa probiótica mais estudada do mundo desde 1985. 10 bilhões de UFC viáveis por dose — garantidos até a validade. Não aceitamos menos que o padrão ouro.' },
    { num: 'ii.', metric: '6,1g de fibras funcionais', title: 'Prebiótico FOS', text: 'Frutooligossacarídeos extraídos de raízes selecionadas — a fibra que alimenta seletivamente as bactérias boas. Resultado: probiótico mais ativo.' },
    { num: 'iii.', metric: '100% estável até validade', title: 'Tecnologia de viabilidade', text: 'Sachês protegidos com dessecante e selagem de precisão — garantindo viabilidade integral até o último dia de uso.' },
    { num: 'iv.', metric: 'Testado clinicamente', title: 'Rigor de qualidade', text: 'Cada lote passa por testes de concentração, pureza e viabilidade em laboratório independente certificado.' },
  ];

  return (
    <section id="craft" style={{ background: '#F7F1E8', padding: '80px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontSize: '12px', color: '#D48A90', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>III · A Ciência</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '400', marginBottom: '16px' }}>O padrão <em style={{ color: '#D48A90', fontStyle: 'italic', fontWeight: '400' }}>por trás</em> de cada dose.</h2>
          <p style={{ color: '#3A342E', fontSize: '15px', lineHeight: '1.7', marginTop: '12px', maxWidth: '650px' }}>
            Não é sobre prometer — é sobre honrar um padrão. Do ingrediente escolhido ao lote numerado que chega em suas mãos.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {craftItems.map((c, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #EFE6D6' }}>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{ fontSize: '11px', color: '#D48A90', fontWeight: '700', fontFamily: "'IBM Plex Mono', monospace" }}>{c.num}</div>
                  <div style={{ fontSize: '11px', color: '#6E665C', fontWeight: '700', textAlign: 'right', maxWidth: '160px' }}>{c.metric}</div>
                </div>
              </div>
              <h4 style={{ fontWeight: '700', fontSize: '15px', marginBottom: '8px', color: '#1A1613' }}><em style={{ fontStyle: 'italic', fontWeight: '400' }}>{c.title}</em></h4>
              <p style={{ color: '#6E665C', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}