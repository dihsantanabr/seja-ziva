import React, { useEffect } from 'react';

export default function Layout({ children, currentPageName }) {
  useEffect(() => {
    // Update favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://bariessential.com.br/wp-content/uploads/2024/09/cropped-Prancheta-3-1-32x32.png';
    document.getElementsByTagName('head')[0].appendChild(link);



    // Add FAQ Schema for SEO
    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "O que é esse suco verde em pó e para que ele serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Esse tipo de suco verde em pó é um suplemento alimentar funcional pensado para melhorar o conforto intestinal e o bem-estar diário. Ele reúne nutrientes, fibras e verdes selecionados para ajudar a reduzir o inchaço abdominal, melhorar a digestão, auxiliar no trânsito intestinal e trazer uma sensação de leveza ao longo do dia. O Greemy é exatamente esse suco verde em pó funcional da Dreams Nutrition, desenvolvido para cuidar da saúde digestiva de forma prática, em sachês individuais fáceis de usar na rotina."
          }
        },
        {
          "@type": "Question",
          "name": "Como esse suco verde age no intestino e no inchaço abdominal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Um suco verde funcional age principalmente combinando fibras e ingredientes com ação digestiva que ajudam a equilibrar o intestino, reduzir gases e facilitar o trânsito intestinal. Isso tende a diminuir a sensação de barriga estufada e o desconforto após as refeições. O Greemy foi formulado para atuar justamente nesse ponto: ele apoia o microbioma intestinal, contribui para um trânsito mais regular e ajuda a reduzir o inchaço abdominal de forma gradual, quando utilizado com constância e aliado a bons hábitos de alimentação e hidratação."
          }
        },
        {
          "@type": "Question",
          "name": "Para quem esse tipo de suco verde é indicado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Esse tipo de suco verde é indicado para pessoas que sentem incômodo com inchaço, digestão lenta, gases em excesso ou irregularidade intestinal, e que querem uma forma prática de consumir fibras, verdes e nutrientes no dia a dia. O Greemy foi pensado especialmente para o público feminino que convive com esses desconfortos com frequência, mas pode ser utilizado por adultos em geral, desde que não haja contraindicação individual e sempre respeitando as orientações de uso presentes na embalagem."
          }
        },
        {
          "@type": "Question",
          "name": "Quais são os principais ingredientes e nutrientes presentes nesse suco verde?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Suco verde funcional geralmente combina fibras, superfoods e nutrientes que apoiam o intestino e o metabolismo. No caso do Greemy, a fórmula inclui ingredientes como superfoods verdes e frutas em pó, fibras como o psyllium e outros compostos funcionais selecionados para auxiliar a digestão, o equilíbrio intestinal e o bem-estar diário. A lista detalhada de ingredientes e a tabela nutricional podem ser consultadas no rótulo e na página oficial do produto Greemy, garantindo transparência sobre tudo o que você está consumindo em cada sachê."
          }
        },
        {
          "@type": "Question",
          "name": "Como devo tomar esse suco verde no dia a dia para ter resultado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A forma mais comum de uso é dissolver o conteúdo de 1 sachê em cerca de 200 a 250 ml de água, podendo ser em temperatura ambiente, gelada ou morna, e consumir logo em seguida. Muitas pessoas preferem tomar pela manhã ou em um momento fixo do dia para criar rotina. O Greemy foi pensado para ser usado exatamente assim: 1 sachê misturado em água, uma vez ao dia, de forma constante. A regularidade no consumo, aliada a alimentação equilibrada, é o que favorece a percepção de menos inchaço e melhor digestão ao longo do tempo."
          }
        },
        {
          "@type": "Question",
          "name": "Em quanto tempo é possível sentir menos inchaço e melhora na digestão?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A resposta pode variar de pessoa para pessoa, mas é comum que algumas pessoas percebam uma sensação de leveza e melhora no trânsito intestinal já nos primeiros dias de uso, especialmente quando o intestino estava muito preso ou a digestão muito lenta. Para resultados mais consistentes, é recomendável usar diariamente por algumas semanas. A proposta do Greemy é justamente entregar benefícios que vão se acumulando com o uso regular, ajudando você a notar menos inchaço e digestão mais confortável na rotina."
          }
        },
        {
          "@type": "Question",
          "name": "Esse suco verde contém açúcar, glúten, lactose ou cafeína?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Muitos sucos verdes funcionais modernos são formulados sem adição de açúcar e sem ingredientes que contenham glúten ou lactose. O Greemy segue essa proposta: ele é um suco verde em pó sem adição de açúcar, sem glúten e sem lactose, e também é livre de cafeína, o que permite o uso em diferentes horários do dia, inclusive por pessoas que evitam estimulantes. Mesmo assim, a recomendação é sempre conferir o rótulo e a descrição oficial do produto para confirmar as informações de composição e alergênicos."
          }
        },
        {
          "@type": "Question",
          "name": "Esse suco verde é vegano?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alguns sucos verdes em pó são formulados sem ingredientes de origem animal, o que os torna adequados para quem segue uma alimentação vegana. O Greemy se encaixa nessa categoria: é um suco verde funcional sem ingredientes de origem animal, além de ser livre de glúten, lactose e açúcar, atendendo bem a diferentes estilos alimentares. Em caso de dúvida, você pode conferir a lista completa de ingredientes no rótulo ou na página oficial do produto antes de consumir."
          }
        },
        {
          "@type": "Question",
          "name": "Existem contraindicações ou cuidados para consumir esse suco verde?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mesmo sendo um produto de perfil natural e com foco em fibras e superfoods, é importante respeitar as orientações de uso. De forma geral, sucos verdes funcionais são indicados para adultos e não devem ser consumidos em excesso além da porção recomendada. O Greemy, seguindo as advertências padrão de suplementos, não é indicado para gestantes, lactantes e crianças, e pessoas com condições de saúde específicas ou que usem medicação contínua devem consultar um profissional de saúde antes de incluir o produto na rotina."
          }
        },
        {
          "@type": "Question",
          "name": "Posso tomar esse suco verde todos os dias? Posso usar junto com outros suplementos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A ideia desse tipo de suco verde funcional é justamente entrar na rotina diária como um aliado constante da digestão e do bem-estar intestinal. Consumir 1 sachê por dia, dentro da dose indicada, costuma ser a forma mais usada e segura para adultos saudáveis. O Greemy foi pensado para uso diário, mas sempre respeitando a recomendação de consumo da embalagem. Ele pode ser associado a outros suplementos de rotina, como multivitamínicos ou colágenos, desde que você não ultrapasse as doses máximas recomendadas de cada produto e, em caso de dúvida, converse com seu médico ou nutricionista."
          }
        },
        {
          "@type": "Question",
          "name": "Por que a caixa vem com 21 sachês e não 30?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A quantidade de sachês por caixa é definida de acordo com a proposta de uso e com a estratégia da marca. No caso do Greemy, a caixa com 21 sachês foi pensada para encaixar em dois modos de uso: você pode fazer um ciclo completo de 21 dias consecutivos para regular a digestão e o intestino, ou usar os sachês de forma estratégica ao longo do mês, nos dias em que sente mais inchaço ou desconforto. Assim, o produto se adapta melhor ao seu ritmo de vida sem obrigar um padrão único de consumo."
          }
        },
        {
          "@type": "Question",
          "name": "Esse suco verde substitui uma refeição ou precisa ser usado junto com alimentação saudável?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Suco verde funcional não deve ser tratado como substituto de refeição completa. Ele foi feito para complementar sua rotina, trazendo fibras e ingredientes funcionais, mas não substitui o conjunto de nutrientes que você obtém de um prato equilibrado com proteínas, carboidratos de boa qualidade e gorduras saudáveis. O Greemy foi desenvolvido para ser um aliado da sua alimentação: ele ajuda a melhorar a digestão e o conforto intestinal, mas os melhores resultados aparecem quando você também mantém refeições equilibradas, boa hidratação e um estilo de vida saudável."
          }
        }
      ]
    });
    document.head.appendChild(faqSchema);
    }, []);

  return (
    <>{children}</>
  );
}