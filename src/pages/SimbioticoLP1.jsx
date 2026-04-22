import React, { useState } from 'react';

const PRODUCT_IMG_1 = 'https://sejaziva.com.br/cdn/shop/files/Design_sem_nome_4_1.png?v=1764950605';
const PRODUCT_IMG_2 = 'https://sejaziva.com.br/cdn/shop/files/PROBIOTICO_-_04.png?v=1764950605';
const PRODUCT_IMG_SACHE = 'https://sejaziva.com.br/cdn/shop/files/Sache_Probiotico_WEBP.webp?v=1764950605';

const reviews = [
  { name: 'Denizze M.', initial: 'D', stars: 5, title: 'Cumpre o que promete', text: 'Antes de tomar, quase todo mês eu tinha problemas com o equilíbrio do pH que me deixavam constrangida. Esse simbiótico fez toda diferença. Agora estou confiante e equilibrada.', time: 'Há 2 meses' },
  { name: 'Camila R.', initial: 'C', stars: 5, title: 'Nunca pensei que faria tanta diferença', text: 'Treino todos os dias e sempre senti desconforto por transpirar muito na região íntima. Esse probiótico mudou tudo. Minha flora vaginal está equilibrada e me sinto muito mais segura.', time: 'Há 3 semanas' },
  { name: 'Adna S.', initial: 'A', stars: 5, title: 'Melhor probiótico vaginal', text: 'Já tinha tentado outros sem resultado. Comecei a notar diferença logo nas primeiras semanas — menos corrimento, sem mau cheiro e intestino regulado. Estou na terceira caixa e recomendo demais.', time: 'Há 1 mês' },
  { name: 'Nayanne L.', initial: 'N', stars: 5, title: 'Gostei muito da praticidade', text: 'O que mais gosto é a praticidade, tomo direto na boca e é muito gostoso, melhor que diluir em água. Já percebi menos corrimento, estou com muita esperança de me livrar da candidíase.', time: 'Há 5 semanas' },
  { name: 'Letícia M.', initial: 'L', stars: 5, title: 'Surpresa boa', text: 'Ainda não terminei a primeira caixa mas já deu pra sentir uma diferença enorme na redução do meu corrimento e o mal cheiro desapareceu. Recomendo sem pensar duas vezes.', time: 'Há 2 semanas' },
  { name: 'Priscila T.', initial: 'P', stars: 4, title: 'Sabor delicioso e resultado gradual', text: 'O sabor é realmente uma delícia. Sobre o resultado, sou honesta: nas primeiras semanas não notei muita coisa. A partir da terceira semana comecei a sentir diferença real. A consistência é chave.', time: 'Há 6 semanas' },
];

const faqs = [
  { q: 'O Simbiótico Íntimo Ziva realmente funciona?', a: 'Sim. A fórmula combina 10 bilhões de Lactobacillus Rhamnosus GG (a cepa mais estudada do mundo para saúde íntima, com mais de 800 estudos clínicos) e Prebiótico FOS, que juntos reequilibram a microbiota vaginal e intestinal. A maioria das usuárias relata melhora já nas primeiras semanas.' },
  { q: 'Em quanto tempo vou sentir resultado?', a: 'As primeiras mudanças — redução de odor, menos corrimento, mais conforto — geralmente surgem entre a 1ª e a 2ª semana de uso contínuo. Resultados mais profundos, como prevenção de recorrências, se consolidam entre a 8ª e a 12ª semana.' },
  { q: 'Posso tomar durante a menstruação?', a: 'Sim. O uso durante o período menstrual é seguro e até recomendado, pois é quando o pH vaginal sofre mais oscilações e o risco de desequilíbrio aumenta.' },
  { q: 'Tem alguma contraindicação?', a: 'É contraindicado para menores de 18 anos e gestantes (sem orientação médica). Mulheres em uso de antibióticos devem consultar médico antes, pois antibióticos podem reduzir a eficácia dos probióticos.' },
  { q: 'Como funciona a garantia de 30 dias?', a: 'Simples: use todos os sachês da primeira caixa. Se ao fim desse período você não notar diferença alguma na sua saúde íntima, envie um e-mail curto para o nosso suporte e devolvemos 100% do valor pago — sem formulários longos, sem burocracia, sem perguntas difíceis.' },
  { q: 'Qual a diferença entre o kit simples e o kit com sérum?', a: 'O Simbiótico cuida por dentro: reequilibra a microbiota vaginal e intestinal. O Sérum Ozonizado cuida por fora: hidrata, protege e regenera a mucosa íntima. Juntos formam um protocolo completo de dentro para fora.' },
];

export default function SimbioticoLP1() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedKit, setSelectedKit] = useState('simples');

  return (
    <div style={{ fontFamily: "'Instrument Sans', sans-serif", background: '#FFFCF6', color: '#1A1613' }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />

      {/* TOP BAR */}
      <div style={{ background: '#D48A90', color: '#fff', fontSize: '13px', padding: '10px 20px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
        <span>● Registrado na ANVISA</span>
        <span>● Frete grátis acima de R$ 249</span>
        <span>● Garantia de 30 dias ou seu dinheiro de volta</span>
      </div>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #F7F1E8 0%, #FDF4F5 100%)', padding: '80px 20px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="hero-grid">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#F3DADD', color: '#B26770', borderRadius: '100px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D48A90', display: 'inline-block' }}></span>
              Ciência + Natureza para sua saúde íntima
            </div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '600', lineHeight: '1.2', marginBottom: '20px', color: '#1A1613' }}>
              Conheça o Simbiótico Íntimo Ziva.<br />
              <em style={{ color: '#D48A90', fontStyle: 'italic' }}>Tudo que sua flora precisa</em>, em um sachê por dia.
            </h1>
            <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#3A342E', marginBottom: '24px' }}>
              <strong>10 bilhões de Lactobacillus Rhamnosus + Prebiótico FOS</strong> trabalhando juntos para reequilibrar sua microbiota vaginal e intestinal, manter o pH estável, fortalecer sua imunidade natural e trazer mais conforto e bem-estar ao seu dia a dia. Registrado na Anvisa. Aprovado por ginecologistas. <strong>Com 30 dias de garantia</strong> para você conhecer sem risco.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
              <span style={{ color: '#D48A90', fontSize: '20px' }}>★★★★★</span>
              <span style={{ fontSize: '14px', color: '#3A342E' }}><strong>4,8/5</strong> · <strong>avaliações verificadas</strong> de compradoras reais</span>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <a href="#oferta" style={{ background: '#D48A90', color: '#fff', borderRadius: '100px', padding: '14px 28px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Quero conhecer a oferta <span>→</span>
              </a>
              <a href="#avaliacoes" style={{ background: 'transparent', color: '#3A342E', border: '1.5px solid #D4C9BC', borderRadius: '100px', padding: '14px 28px', fontWeight: '600', fontSize: '15px', textDecoration: 'none' }}>
                Ver como funciona
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {['Anvisa', 'Vegano', 'Testado em laboratório', 'Sem glúten e lactose'].map(t => (
                <span key={t} style={{ background: '#F7F1E8', border: '1px solid #E0D5C8', borderRadius: '100px', padding: '6px 14px', fontSize: '13px', color: '#6E665C', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  ✓ {t}
                </span>
              ))}
            </div>
          </div>

          {/* HERO VISUAL */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(212,138,144,0.25)', background: '#F3DADD', width: '100%', maxWidth: '420px' }}>
              <img src={PRODUCT_IMG_1} alt="Simbiótico Íntimo Ziva" style={{ width: '100%', objectFit: 'contain', display: 'block' }} />
            </div>
            <div style={{ position: 'absolute', top: '20px', right: '-10px', background: '#fff', borderRadius: '16px', padding: '12px 16px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
              <div style={{ background: '#F3DADD', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D48A90' }}>✓</div>
              <div><div style={{ color: '#6E665C', fontSize: '11px' }}>Aprovação</div><div style={{ fontWeight: '700', color: '#1A1613' }}>94% satisfeitas</div></div>
            </div>
            <div style={{ position: 'absolute', bottom: '20px', left: '-10px', background: '#fff', borderRadius: '16px', padding: '12px 16px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
              <div style={{ background: '#F3DADD', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D48A90' }}>★</div>
              <div><div style={{ color: '#6E665C', fontSize: '11px' }}>Eficácia</div><div style={{ fontWeight: '700', color: '#1A1613' }}>+99% comprovada</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ACOLHIMENTO */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#D48A90', fontWeight: '600', fontSize: '14px', marginBottom: '12px' }}>Antes de você decidir,</p>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '20px', color: '#1A1613' }}>
            entendemos que você <em style={{ color: '#D48A90', fontStyle: 'italic' }}>precisa ter certeza</em>.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#3A342E', maxWidth: '680px', margin: '0 auto 48px' }}>
            Você já passou por promessas que não se cumpriram. Já comprou produtos que prometiam muito e entregaram pouco. Por isso, ao invés de gritar em caixa alta que somos "os melhores", preferimos te dar <strong>todas as informações</strong> para você decidir com tranquilidade.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', textAlign: 'left' }}>
            {[
              { n: '01', title: 'Avaliações reais', text: 'Centenas de reviews verificadas por plataforma independente, com fotos e nome de compradoras reais — positivas e negativas, sem filtro.' },
              { n: '02', title: 'Garantia incondicional', text: '30 dias para testar. Se não sentir diferença, devolvemos 100% do valor pago. Sem formulários complicados, sem burocracia.' },
              { n: '03', title: 'Composição revelada', text: 'Cada ingrediente com sua função, concentração e referência científica. Nada de "blend proprietário" escondido. Transparência total.' },
              { n: '04', title: 'Aprovação científica', text: 'Registrado na Anvisa, validado por ginecologistas com CRM ativo e desenvolvido com a cepa probiótica mais estudada do mundo.' },
            ].map(c => (
              <div key={c.n} style={{ background: '#F7F1E8', borderRadius: '16px', padding: '28px' }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', color: '#D4C9BC', marginBottom: '12px', fontWeight: '700' }}>{c.n}</div>
                <h4 style={{ fontWeight: '700', marginBottom: '10px', fontSize: '16px' }}>{c.title}</h4>
                <p style={{ color: '#6E665C', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF / REVIEWS */}
      <section id="avaliacoes" style={{ background: '#F7F1E8', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Avaliações verificadas</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '16px' }}>Não é a gente que diz. <em style={{ color: '#D48A90', fontStyle: 'italic' }}>São elas.</em></h2>
            <p style={{ color: '#3A342E', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7', fontSize: '15px' }}>Todas as avaliações abaixo são de compradoras verificadas pela plataforma Judge.me.</p>
          </div>

          {/* STATS */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '48px', textAlign: 'center' }}>
            {[['4,8', 'Nota média'], ['+250', 'Estudos científicos'], ['94%', 'Clientes satisfeitas'], ['100%', 'Testadas em lab']].map(([n, l]) => (
              <div key={l} style={{ background: '#fff', borderRadius: '16px', padding: '24px 12px' }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: '700', color: '#D48A90' }}>{n}</div>
                <div style={{ fontSize: '13px', color: '#6E665C', marginTop: '4px' }}>{l}</div>
              </div>
            ))}
          </div>

          {/* RATING BARS */}
          <div style={{ background: '#fff', borderRadius: '20px', padding: '32px', marginBottom: '40px', display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', minWidth: '120px' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: '56px', fontWeight: '700', color: '#1A1613', lineHeight: 1 }}>4,8</div>
              <div style={{ color: '#D48A90', fontSize: '24px', margin: '8px 0 4px' }}>★★★★★</div>
              <div style={{ fontSize: '13px', color: '#6E665C' }}>Baseado em avaliações reais</div>
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              {[['★★★★★', 70], ['★★★★', 24], ['★★★', 1], ['★★', 5], ['★', 0]].map(([stars, pct]) => (
                <div key={stars} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', color: '#D48A90', width: '60px' }}>{stars}</span>
                  <div style={{ flex: 1, background: '#EFE6D6', borderRadius: '100px', height: '8px' }}>
                    <div style={{ width: `${pct}%`, background: '#D48A90', borderRadius: '100px', height: '100%' }} />
                  </div>
                  <span style={{ fontSize: '12px', color: '#6E665C', width: '30px' }}>{pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* REVIEWS GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #EFE6D6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ color: '#D48A90', fontSize: '16px' }}>{'★'.repeat(r.stars)}</span>
                  <span style={{ fontSize: '11px', color: '#7A8B6F', background: '#F0F5EE', padding: '3px 8px', borderRadius: '100px', fontWeight: '600' }}>✓ VERIFICADA</span>
                </div>
                <h4 style={{ fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>{r.title}</h4>
                <p style={{ color: '#6E665C', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>{r.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#F3DADD', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: '#B26770', fontSize: '16px' }}>{r.initial}</div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '14px' }}>{r.name}</div>
                    <div style={{ fontSize: '12px', color: '#6E665C' }}>{r.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPOSIÇÃO */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Composição revelada</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '16px' }}>Cada ingrediente, com nome, função e <em style={{ color: '#D48A90', fontStyle: 'italic' }}>dose exata</em>.</h2>
            <p style={{ color: '#3A342E', maxWidth: '600px', margin: '0 auto 48px', lineHeight: '1.7', fontSize: '15px' }}>Nada de "blend proprietário" escondido. Nada de fórmula misteriosa. Aqui você sabe exatamente o que está colocando no seu corpo e por quê.</p>
          </div>

          {/* Product image in composition */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <img src={PRODUCT_IMG_SACHE} alt="Sachê Simbiótico Ziva" style={{ maxWidth: '280px', margin: '0 auto', filter: 'drop-shadow(0 12px 30px rgba(212,138,144,0.3))' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            {[
              {
                letter: 'L', title: 'Lactobacillus Rhamnosus GG', sub: 'Lactobacillus rhamnosus GG (LGG)', dose: '10 bilhões de UFC por dose',
                desc: 'A cepa probiótica mais estudada do mundo para saúde íntima feminina, com mais de 800 estudos clínicos publicados desde 1985. Adere à mucosa vaginal formando uma barreira protetora, produz ácido lático para manter o pH ácido e dificulta a proliferação de fungos e bactérias oportunistas.',
                attrs: [['Origem', 'Cultura láctea isolada'], ['Estudos', '+800 publicações'], ['Segurança', 'Status GRAS / FDA'], ['Viabilidade', 'Até validade']]
              },
              {
                letter: 'F', title: 'Prebiótico FOS', sub: 'Frutooligossacarídeos', dose: '6,1g de fibras alimentares',
                desc: 'Fibra solúvel extraída de frutas e raízes que chega intacta ao intestino e serve de alimento seletivo para os Lactobacillus — apenas bactérias boas se beneficiam dela. Resultado: probiótico mais ativo, microbiota mais equilibrada, intestino regulado e menos inchaço abdominal.',
                attrs: [['Tipo', 'Fibra solúvel prebiótica'], ['Função', 'Nutre Lactobacillus'], ['Origem', 'Vegetal (frutas/raízes)'], ['Seguro', 'Desde a gestação']]
              }
            ].map(ing => (
              <div key={ing.letter} style={{ background: '#F7F1E8', borderRadius: '20px', padding: '32px', border: '1px solid #EFE6D6' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#D48A90', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: '700', flexShrink: 0 }}>{ing.letter}</div>
                  <div>
                    <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: '600', margin: 0 }}>{ing.title}</h3>
                    <div style={{ fontSize: '13px', color: '#6E665C', marginTop: '2px' }}>{ing.sub}</div>
                  </div>
                </div>
                <div style={{ background: '#F3DADD', borderRadius: '100px', padding: '6px 14px', display: 'inline-block', fontSize: '13px', fontWeight: '700', color: '#B26770', marginBottom: '16px' }}>{ing.dose}</div>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#3A342E', marginBottom: '20px' }}>{ing.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {ing.attrs.map(([k, v]) => (
                    <div key={k} style={{ background: '#fff', borderRadius: '10px', padding: '10px 12px' }}>
                      <div style={{ fontSize: '11px', color: '#6E665C', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{k}</div>
                      <div style={{ fontSize: '13px', fontWeight: '600', color: '#1A1613', marginTop: '2px' }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '32px' }}>
            {['Registro Anvisa', '100% Vegano', 'Cruelty-Free', 'Sem Glúten & Lactose', 'Testado clinicamente'].map(t => (
              <span key={t} style={{ background: '#F7F1E8', border: '1px solid #D4C9BC', borderRadius: '100px', padding: '8px 18px', fontSize: '13px', fontWeight: '600', color: '#3A342E' }}>✓ {t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARAÇÃO */}
      <section style={{ background: '#F7F1E8', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Compare com transparência</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>Ziva vs. <em style={{ color: '#D48A90', fontStyle: 'italic' }}>as alternativas que você já testou</em></h2>
          </div>
          <div style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', border: '1px solid #EFE6D6' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: '#F7F1E8' }}>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: '700', color: '#1A1613', borderBottom: '1px solid #EFE6D6' }}>Critério</th>
                  <th style={{ padding: '16px 12px', textAlign: 'center', color: '#6E665C', fontWeight: '600', borderBottom: '1px solid #EFE6D6' }}>Pomadas tradicionais</th>
                  <th style={{ padding: '16px 12px', textAlign: 'center', color: '#6E665C', fontWeight: '600', borderBottom: '1px solid #EFE6D6' }}>Suplementos genéricos</th>
                  <th style={{ padding: '16px 12px', textAlign: 'center', color: '#D48A90', fontWeight: '800', borderBottom: '1px solid #EFE6D6', background: '#FDF4F5' }}>Simbiótico Ziva</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cepa específica para saúde vaginal', false, false, true],
                  ['Prebiótico FOS para potencializar efeito', false, false, true],
                  ['10 bilhões de UFC vivos por dose', false, false, true],
                  ['Seguro para uso contínuo', false, true, true],
                  ['Equilibra flora e pH íntimo', false, false, true],
                  ['Alívio de coceira, odor e corrimento', true, false, true],
                  ['Previne recorrência de infecções', false, false, true],
                  ['Garantia de 30 dias', false, false, true],
                ].map(([crit, p, s, z], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #F7F1E8', background: i % 2 === 0 ? '#fff' : '#FDFAF7' }}>
                    <td style={{ padding: '14px 20px', fontWeight: '500', color: '#1A1613' }}>{crit}</td>
                    <td style={{ padding: '14px 12px', textAlign: 'center', color: p ? '#7A8B6F' : '#D4C9BC', fontSize: '18px' }}>{p ? '✓' : '—'}</td>
                    <td style={{ padding: '14px 12px', textAlign: 'center', color: s ? '#7A8B6F' : '#D4C9BC', fontSize: '18px' }}>{s ? '✓' : '—'}</td>
                    <td style={{ padding: '14px 12px', textAlign: 'center', color: '#D48A90', fontSize: '18px', fontWeight: '700', background: '#FDF4F5' }}>{z ? '✓' : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* JORNADA */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>O que esperar</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>Sua <em style={{ color: '#D48A90', fontStyle: 'italic' }}>jornada de 12 semanas</em>, sem surpresas.</h2>
            <p style={{ color: '#3A342E', maxWidth: '550px', margin: '0 auto', lineHeight: '1.7', fontSize: '15px' }}>Preferimos ser honestas: resultados duradouros exigem consistência. Veja o que acontece em cada fase.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { n: '1', week: 'Semana 1 – 2', title: 'Primeiros alívios', text: 'Você começa a notar redução de odor, menos coceira e um corrimento mais estável. A microbiota começa a se reorganizar.' },
              { n: '2', week: 'Semana 3 – 4', title: 'pH equilibrado', text: 'O pH vaginal começa a se manter naturalmente ácido. Menos picos de desconforto. Intestino mais regulado, menos inchaço.' },
              { n: '3', week: 'Semana 5 – 8', title: 'Sintomas recorrentes recuam', text: 'Redução significativa de candidíase e vaginose recorrentes. Aumento da imunidade local. Confiança de volta no próprio corpo.' },
              { n: '4', week: 'Semana 9 – 12', title: 'Microbiota reconstruída', text: 'Flora íntima totalmente reequilibrada. Proteção duradoura. O "estado saudável" vira seu novo normal — não um esforço diário.' },
            ].map(step => (
              <div key={step.n} style={{ background: '#F7F1E8', borderRadius: '20px', padding: '28px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '48px', fontWeight: '700', color: '#EFE6D6', position: 'absolute', top: '10px', right: '16px', lineHeight: 1 }}>{step.n}</div>
                <div style={{ background: '#D48A90', color: '#fff', borderRadius: '100px', padding: '4px 12px', fontSize: '12px', fontWeight: '600', display: 'inline-block', marginBottom: '12px' }}>{step.week}</div>
                <h4 style={{ fontWeight: '700', fontSize: '16px', marginBottom: '10px', position: 'relative' }}>{step.title}</h4>
                <p style={{ color: '#6E665C', fontSize: '14px', lineHeight: '1.6', margin: 0, position: 'relative' }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉDICAS */}
      <section style={{ background: '#F7F1E8', padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Nosso conselho consultivo</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>Validado por quem <em style={{ color: '#D48A90', fontStyle: 'italic' }}>entende do assunto</em>.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { initials: 'EL', name: 'Dra. Érika Leal', role: 'Médica Ginecologista', crm: 'CRM/SP 123.456', quote: '"No consultório, vejo mulheres sofrendo com desconfortos que afetam não só a região íntima, mas autoestima e vida sexual. O que me encanta na Ziva é a base científica real e a tecnologia ozonizada, que entregam alívio verdadeiro."' },
              { initials: 'NN', name: 'Dra. Nancy Novaes', role: 'Nutricionista Integrativa', crm: 'CRN 12.345', quote: '"A saúde vaginal começa pelo intestino, pela comida, pelo estilo de vida. E a Ziva entende isso profundamente. É ciência com alma — exatamente o que o corpo da mulher precisa."' },
              { initials: 'LC', name: 'Dra. Letícia Carneiro', role: 'Enfermeira Ginecológica', crm: 'COREN 123.456', quote: '"Muitas das minhas pacientes enfrentam desconfortos íntimos recorrentes sem respostas eficazes. A Ziva combina ciência e ingredientes naturais para oferecer soluções reais e seguras."' },
            ].map(d => (
              <div key={d.initials} style={{ background: '#fff', borderRadius: '20px', padding: '28px', border: '1px solid #EFE6D6' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#D48A90', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: '700', flexShrink: 0 }}>{d.initials}</div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '15px' }}>{d.name}</div>
                    <div style={{ fontSize: '13px', color: '#6E665C' }}>{d.role}</div>
                    <div style={{ fontSize: '12px', color: '#D48A90', fontWeight: '600', marginTop: '2px' }}>{d.crm}</div>
                  </div>
                </div>
                <p style={{ color: '#3A342E', fontSize: '14px', lineHeight: '1.7', fontStyle: 'italic', margin: 0 }}>{d.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Sua escolha, sem risco</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '16px' }}>Pronta para <em style={{ color: '#D48A90', fontStyle: 'italic' }}>decidir com confiança?</em></h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', maxWidth: '500px', margin: '0 auto 40px' }}>
              {[
                'Garantia de 30 dias para testar. Se não gostar, devolvemos 100% do valor.',
                'Frete grátis para todo o Brasil acima de R$ 249 (ou em 2+ caixas).',
                'Parcelamento em até 12x no cartão, ou 3x sem juros.',
                'Suporte por WhatsApp com atendimento humano e empático.',
                'Pagamento 100% seguro via Shopify, Pagar.me e B4You.',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#3A342E' }}>
                  <span style={{ color: '#D48A90', fontWeight: '700', flexShrink: 0 }}>✓</span> {t}
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE before offer box */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <img src={PRODUCT_IMG_2} alt="Simbiótico Íntimo Ziva" style={{ maxHeight: '360px', margin: '0 auto', objectFit: 'contain', filter: 'drop-shadow(0 16px 40px rgba(212,138,144,0.3))' }} />
          </div>

          {/* KIT SELECTOR */}
          <div style={{ background: '#F7F1E8', borderRadius: '24px', padding: '8px', marginBottom: '24px', display: 'flex', gap: '8px' }}>
            {[
              { id: 'simples', label: 'Simbiótico Íntimo', tag: '30 dias · proteção por dentro', eco: 'Economize R$ 72', de: 'R$ 299', por: 'R$ 227', dose: 'R$ 7,57/dose', parcela: '12x de R$ 24,34' },
              { id: 'combo', label: 'Simbiótico + Sérum Ozonizado', tag: 'Ritual completo · proteção por dentro e por fora', eco: 'Economize R$ 191 + Frete Grátis', de: 'R$ 558', por: 'R$ 367', dose: 'R$ 12,23/dia', parcela: '12x de R$ 39,34' },
            ].map(kit => (
              <button
                key={kit.id}
                onClick={() => setSelectedKit(kit.id)}
                style={{
                  flex: 1, padding: '20px', borderRadius: '16px', border: selectedKit === kit.id ? '2px solid #D48A90' : '2px solid transparent',
                  background: selectedKit === kit.id ? '#fff' : 'transparent', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: `2px solid ${selectedKit === kit.id ? '#D48A90' : '#D4C9BC'}`, background: selectedKit === kit.id ? '#D48A90' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {selectedKit === kit.id && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />}
                  </div>
                  <span style={{ fontWeight: '700', fontSize: '15px', color: '#1A1613' }}>{kit.label}</span>
                </div>
                <div style={{ fontSize: '13px', color: '#6E665C', marginLeft: '30px', marginBottom: '10px' }}>{kit.tag}</div>
                <div style={{ marginLeft: '30px' }}>
                  <span style={{ background: '#F3DADD', color: '#B26770', borderRadius: '100px', padding: '4px 10px', fontSize: '12px', fontWeight: '700' }}>{kit.eco}</span>
                  <div style={{ marginTop: '10px', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <span style={{ textDecoration: 'line-through', color: '#6E665C', fontSize: '13px' }}>{kit.de}</span>
                    <span style={{ fontFamily: "'Fraunces', serif", fontSize: '28px', fontWeight: '700', color: '#1A1613' }}>{kit.por}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#6E665C', marginTop: '4px' }}>{kit.dose}</div>
                </div>
              </button>
            ))}
          </div>

          <div style={{ background: '#F7F1E8', borderRadius: '16px', padding: '20px 24px', marginBottom: '24px', fontSize: '14px', color: '#3A342E' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Total</span>
              <span style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: '700' }}>{selectedKit === 'simples' ? 'R$ 227' : 'R$ 367'}</span>
            </div>
            <div style={{ color: '#6E665C', fontSize: '13px', marginTop: '6px' }}>
              Ou <strong>{selectedKit === 'simples' ? '12x de R$ 24,34' : '12x de R$ 39,34'}</strong> no cartão · 3x sem juros · Pix à vista com 5% OFF
            </div>
          </div>

          <a href="https://sejaziva.com.br/products/simbiotico-intimo" target="_blank" rel="noopener noreferrer"
            style={{ display: 'block', background: '#D48A90', color: '#fff', borderRadius: '100px', padding: '18px 32px', textAlign: 'center', fontWeight: '800', fontSize: '18px', textDecoration: 'none', marginBottom: '12px', letterSpacing: '0.3px' }}>
            Quero começar com garantia →
          </a>
          <div style={{ textAlign: 'center', color: '#6E665C', fontSize: '13px' }}>🔒 Compra 100% Segura · VISA · MASTER · ELO · PIX</div>
        </div>
      </section>

      {/* GARANTIA */}
      <section style={{ background: '#F7F1E8', padding: '80px 20px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', border: '3px solid #D48A90', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', background: '#fff' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: '28px', fontWeight: '700', color: '#D48A90', lineHeight: 1 }}>30</div>
              <div style={{ fontSize: '11px', color: '#6E665C', fontWeight: '600' }}>Dias</div>
            </div>
          </div>
          <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Satisfação · Garantia</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', marginBottom: '20px' }}>A garantia que <em style={{ color: '#D48A90', fontStyle: 'italic' }}>elimina seu risco</em>.</h2>
          <p style={{ color: '#3A342E', lineHeight: '1.7', fontSize: '16px', marginBottom: '32px' }}>
            Use por 30 dias. Tome todos os sachês da primeira caixa. Se, ao fim desse período, você não sentir nenhuma diferença na sua saúde íntima, nos envie um e-mail curto: <strong>devolvemos 100% do valor pago</strong>. Sem formulários longos, sem perguntas difíceis, sem burocracia.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', textAlign: 'center' }}>
            {[['1.', 'Use por 30 dias'], ['2.', 'Não gostou? Nos envie um e-mail'], ['3.', 'Reembolso na forma de pagamento original']].map(([n, t], i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '16px 12px' }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: '700', color: '#D48A90', marginBottom: '6px' }}>{n}</div>
                <div style={{ fontSize: '13px', color: '#3A342E', fontWeight: '500' }}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: '#D48A90', fontWeight: '600', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Ainda com dúvida?</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>Respondemos <em style={{ color: '#D48A90', fontStyle: 'italic' }}>todas</em> as perguntas.</h2>
            <p style={{ color: '#3A342E', fontSize: '15px', marginTop: '12px' }}>Se sua dúvida não estiver aqui, chame nossa equipe no WhatsApp. Respondemos em até 30 minutos em horário comercial.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: '#F7F1E8', borderRadius: '16px', overflow: 'hidden', border: '1px solid #EFE6D6' }}>
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
      <section style={{ background: 'linear-gradient(135deg, #D48A90 0%, #B26770 100%)', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#fff', marginBottom: '16px' }}>
            Sua saúde íntima<br /><em>merece o melhor cuidado.</em>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
            Junte-se às milhares de mulheres que já transformaram sua saúde íntima com o Simbiótico Íntimo Ziva. Sem risco, sem burocracia.
          </p>
          <a href="#oferta" style={{ background: '#fff', color: '#D48A90', borderRadius: '100px', padding: '18px 40px', fontWeight: '800', fontSize: '17px', textDecoration: 'none', display: 'inline-block' }}>
            Começar agora com garantia →
          </a>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginTop: '16px' }}>🔒 Pagamento seguro · Garantia de 30 dias · Frete grátis acima de R$ 249</div>
        </div>
      </section>

      {/* RESPONSIVE STYLES */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          table { font-size: 12px !important; }
          table th, table td { padding: 10px 8px !important; }
        }
      `}</style>
    </div>
  );
}