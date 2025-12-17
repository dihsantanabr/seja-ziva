import React from 'react';
import LPHero from '../components/product/LPHero';
import ForWhoSection from '../components/product/ForWhoSection';
import ResultsSection from '../components/product/ResultsSection';
import FormulaSection from '../components/product/FormulaSection';
import HowToUseSection from '../components/product/HowToUseSection';
import PainMatchSection from '../components/product/PainMatchSection';
import TestimonialsSection from '../components/product/TestimonialsSection';
import ContraindicationsSection from '../components/product/ContraindicationsSection';
import ComparisonSection from '../components/product/ComparisonSection';
import GuaranteeSection from '../components/product/GuaranteeSection';
import PriceSection from '../components/product/PriceSection';
import FAQSection from '../components/product/FAQSection';
import FinalCTASection from '../components/product/FinalCTASection';
import WhatsAppWidget from '../components/product/WhatsAppWidget';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero com mensagem forte */}
      <LPHero />

      {/* 2. Para quem é */}
      <div id="para-quem-e">
        <ForWhoSection />
      </div>

      {/* 3. Resultados esperados */}
      <div id="resultados">
        <ResultsSection />
      </div>

      {/* 4. Ciência da fórmula */}
      <div id="formula">
        <FormulaSection />
      </div>

      {/* 5. Como usar */}
      <div id="como-usar">
        <HowToUseSection />
      </div>

      {/* 6. Match perfeito - cada dor */}
      <PainMatchSection />

      {/* 7. Prova social */}
      <div id="depoimentos">
        <TestimonialsSection />
      </div>

      {/* 8. Contraindicações */}
      <div id="contraindicacoes">
        <ContraindicationsSection />
      </div>

      {/* 9. Comparação */}
      <ComparisonSection />

      {/* 10. Garantia + Suporte */}
      <GuaranteeSection />

      {/* 11. PREÇO - Aparece aqui antes do FAQ */}
      <PriceSection />

      {/* 12. FAQ */}
      <FAQSection />

      {/* 13. CTA Final */}
      <FinalCTASection />

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