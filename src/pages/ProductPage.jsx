import React from 'react';
import ProductHero from '../components/product/ProductHero';
import ForWhoSection from '../components/product/ForWhoSection';
import ResultsSection from '../components/product/ResultsSection';
import FormulaSection from '../components/product/FormulaSection';
import HowToUseSection from '../components/product/HowToUseSection';
import PainMatchSection from '../components/product/PainMatchSection';
import TestimonialsSection from '../components/product/TestimonialsSection';
import FAQSection from '../components/product/FAQSection';
import ContraindicationsSection from '../components/product/ContraindicationsSection';
import ComparisonSection from '../components/product/ComparisonSection';
import KitsSection from '../components/product/KitsSection';
import GuaranteeSection from '../components/product/GuaranteeSection';
import FinalCTASection from '../components/product/FinalCTASection';
import StickyBuyBar from '../components/product/StickyBuyBar';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero */}
      <ProductHero />
      
      {/* 2. Para quem é */}
      <ForWhoSection />
      
      {/* 3. Resultados esperados */}
      <ResultsSection />
      
      {/* 4. Ciência da fórmula */}
      <FormulaSection />
      
      {/* 5. Como usar */}
      <HowToUseSection />
      
      {/* 6. Match perfeito - cada dor */}
      <PainMatchSection />
      
      {/* 7. Prova social */}
      <TestimonialsSection />
      
      {/* 8. FAQ */}
      <FAQSection />
      
      {/* 9. Contraindicações */}
      <ContraindicationsSection />
      
      {/* 10. Comparação */}
      <ComparisonSection />
      
      {/* 11. Kits recomendados */}
      <KitsSection />
      
      {/* 12. Garantia + Suporte */}
      <GuaranteeSection />
      
      {/* 13. CTA Final */}
      <FinalCTASection />
      
      {/* Sticky Buy Bar (Mobile) */}
      <StickyBuyBar />

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