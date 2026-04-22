import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: 'Vale a pena investir em uma edição premium?', a: 'A Edição 2026 Premium é para quem entende que cuidado íntimo merece sofisticação — tanto no produto quanto na experiência. A concentração e fórmula são idênticas às outras versões, mas você recebe embalagem premium, atendimento consultivo dedicado e uma experiência pensada como um ritual. Se a qualidade da experiência importa para você, vale absolutamente.' },
    { q: 'Qual é a diferença entre a edição premium e as outras?', a: 'A fórmula é a mesma (10 bi UFC + FOS), mas a edição premium vem em embalagem texturizada com fita de cetim, sachês numerados à mão, e você recebe uma carta pessoal da fundadora na primeira encomenda. Além disso, você terá acesso a um canal VIP de atendimento consultivo dedicado durante todo o seu ritual.' },
    { q: 'Como funciona o atendimento consultivo VIP?', a: 'Você recebe um WhatsApp dedicado com nossa equipe especializada, disponível para responder suas dúvidas ao longo de todo o mês do seu ritual. Desde orientações sobre o uso até acompanhamento dos resultados — é um suporte pessoalizado.' },
    { q: 'Os sachês numerados são apenas decoração?', a: 'Não. A numeração à mão reforça o cuidado manual em cada etapa da produção. É um sinal visual de que você está usando um produto feito com atenção aos detalhes — do ingrediente à embalagem.' },
  ];

  return (
    <section style={{ background: '#fff', padding: '80px 20px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '12px', color: '#D48A90', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Dúvidas sobre a edição premium?</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '400' }}>Respondidas <em style={{ color: '#D48A90', fontStyle: 'italic', fontWeight: '400' }}>aqui.</em></h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: '#F7F1E8', borderRadius: '16px', overflow: 'hidden', border: '1px solid #EFE6D6' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontWeight: '600', fontSize: '15px', color: '#1A1613', gap: '12px' }}
              >
                {faq.q}
                <span style={{ color: '#D48A90', flexShrink: 0 }}>
                  <ChevronDown size={18} style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                </span>
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 24px 20px', color: '#3A342E', lineHeight: '1.7', fontSize: '14px', borderTop: '1px solid #EFE6D6', paddingTop: '16px' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}