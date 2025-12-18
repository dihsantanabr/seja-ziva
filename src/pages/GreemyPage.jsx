import React, { useState } from 'react';
import GreemyQuiz from '../components/greemy/GreemyQuiz';
import GreemyHero from '../components/greemy/GreemyHero';
import GreemyForWho from '../components/greemy/GreemyForWho';
import GreemyResults from '../components/greemy/GreemyResults';
import GreemyFormula from '../components/greemy/GreemyFormula';
import GreemyHowToUse from '../components/greemy/GreemyHowToUse';
import GreemyPainMatch from '../components/greemy/GreemyPainMatch';
import GreemyTestimonials from '../components/greemy/GreemyTestimonials';
import GreemyFAQ from '../components/greemy/GreemyFAQ';
import GreemyContraindications from '../components/greemy/GreemyContraindications';
import GreemyComparison from '../components/greemy/GreemyComparison';
import GreemyKits from '../components/greemy/GreemyKits';
import GreemyGuarantee from '../components/greemy/GreemyGuarantee';
import GreemyFinalCTA from '../components/greemy/GreemyFinalCTA';
import GreemyStickyBuyBar from '../components/greemy/GreemyStickyBuyBar';
import WhatsAppWidget from '../components/product/WhatsAppWidget';

export default function GreemyPage() {
  const [showQuiz, setShowQuiz] = useState(true);

  const handleQuizComplete = () => {
    setShowQuiz(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Quiz Popup */}
      {showQuiz && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm overflow-y-auto">
          <GreemyQuiz onComplete={handleQuizComplete} />
        </div>
      )}

      {/* 1. Hero */}
      <GreemyHero />

      {/* 2. Para quem é */}
      <div id="para-quem-e">
        <GreemyForWho />
      </div>

      {/* 3. Resultados esperados */}
      <div id="resultados">
        <GreemyResults />
      </div>

      {/* 4. Ciência da fórmula */}
      <div id="formula">
        <GreemyFormula />
      </div>

      {/* 5. Como usar */}
      <div id="como-usar">
        <GreemyHowToUse />
      </div>

      {/* 6. Match perfeito - cada dor */}
      <GreemyPainMatch />

      {/* 7. Prova social */}
      <div id="depoimentos">
        <GreemyTestimonials />
      </div>

      {/* 8. Contraindicações */}
      <div id="contraindicacoes">
        <GreemyContraindications />
      </div>

      {/* 9. Comparação */}
      <GreemyComparison />

      {/* 10. Kits recomendados */}
      <GreemyKits />

      {/* 11. Garantia + Suporte */}
      <GreemyGuarantee />

      {/* 12. CTA Final */}
      <GreemyFinalCTA />

      {/* 13. FAQ */}
      <GreemyFAQ />
      
      {/* Sticky Buy Bar (Mobile) */}
      <GreemyStickyBuyBar />

      {/* WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Global styles for animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}