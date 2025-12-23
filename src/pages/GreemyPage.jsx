import React, { useState } from 'react';
import { GreemyProvider } from '../components/greemy/GreemyContext';
import GreemyHero from '../components/greemy/GreemyHero';
import GreemyForWho from '../components/greemy/GreemyForWho';
import GreemyResults from '../components/greemy/GreemyResults';
import GreemyFormula from '../components/greemy/GreemyFormula';
import GreemyHowToUse from '../components/greemy/GreemyHowToUse';
import GreemyPainMatch from '../components/greemy/GreemyPainMatch';
import GreemyTestimonials from '../components/greemy/GreemyTestimonials';
import GreemyContraindications from '../components/greemy/GreemyContraindications';
import GreemyComparison from '../components/greemy/GreemyComparison';
import GreemyKits from '../components/greemy/GreemyKits';
import GreemyGuarantee from '../components/greemy/GreemyGuarantee';
import GreemyFAQ from '../components/greemy/GreemyFAQ';
import GreemyFinalCTA from '../components/greemy/GreemyFinalCTA';
import GreemyStickyBuyBar from '../components/greemy/GreemyStickyBuyBar';
import WhatsAppWidget from '../components/product/WhatsAppWidget';
import GreemyQuiz from '../components/greemy/GreemyQuiz';

export default function GreemyPage() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <GreemyProvider>
    <div className="min-h-screen bg-white">
      {/* Quiz Popup */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <GreemyQuiz onComplete={() => setShowQuiz(false)} />
          </div>
        </div>
      )}

      <GreemyHero />
      <div id="para-quem-e">
        <GreemyForWho onOpenQuiz={() => setShowQuiz(true)} />
      </div>
      <div id="resultados">
        <GreemyResults />
      </div>
      <div id="formula">
        <GreemyFormula />
      </div>
      <div id="como-usar">
        <GreemyHowToUse />
      </div>
      <GreemyPainMatch />
      <div id="depoimentos">
        <GreemyTestimonials />
      </div>
      <div id="contraindicacoes">
        <GreemyContraindications />
      </div>
      <GreemyComparison />
      <GreemyKits />
      <GreemyGuarantee />
      <GreemyFAQ />
      <GreemyFinalCTA />
      <GreemyStickyBuyBar />
      <WhatsAppWidget />

      {/* Marquee animation styles */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
    </GreemyProvider>
  );
}