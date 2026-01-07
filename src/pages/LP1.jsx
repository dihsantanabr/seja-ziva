import React, { useState } from 'react';
import LPTextHero from '../components/greemy/LPTextHero';
import GreemyForWho from '../components/greemy/GreemyForWho';
import GreemyResults from '../components/greemy/GreemyResults';
import LPPersonalizationCTA from '../components/greemy/LPPersonalizationCTA';
import GreemyFormula from '../components/greemy/GreemyFormula';
import GreemyHowToUse from '../components/greemy/GreemyHowToUse';
import GreemyPainMatch from '../components/greemy/GreemyPainMatch';
import GreemyTestimonials from '../components/greemy/GreemyTestimonials';
import GreemyPurchaseSelector from '../components/greemy/GreemyPurchaseSelector';
import GreemyComparison from '../components/greemy/GreemyComparison';

import GreemyGuarantee from '../components/greemy/GreemyGuarantee';
import GreemyFAQ from '../components/greemy/GreemyFAQ';
import GreemyFinalCTA from '../components/greemy/GreemyFinalCTA';
import GreemyStickyBuyBar from '../components/greemy/GreemyStickyBuyBar';
import WhatsAppWidget from '../components/product/WhatsAppWidget';
import Quiz from './Quiz';
import { GreemyProvider } from '../components/greemy/GreemyContext';

export default function LP1() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <GreemyProvider>
      <div className="min-h-screen bg-white">
      {/* Quiz Popup */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-0">
            <div className="relative w-full max-w-3xl m-auto">
              <button
                onClick={() => setShowQuiz(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              >
                <span className="text-gray-600 text-xl">×</span>
              </button>
              <Quiz />
            </div>
          </div>
        </div>
      )}

      <LPTextHero />
      <div id="para-quem-e">
        <GreemyForWho onOpenQuiz={() => setShowQuiz(true)} />
      </div>
      <div id="resultados">
        <GreemyResults />
      </div>
      <LPPersonalizationCTA onOpenQuiz={() => setShowQuiz(true)} />
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
      <LPPersonalizationCTA onOpenQuiz={() => setShowQuiz(true)} />
      <GreemyPurchaseSelector />
      <GreemyComparison />
      <GreemyGuarantee />
      <GreemyFAQ />
      <GreemyFinalCTA onOpenQuiz={() => setShowQuiz(true)} />
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