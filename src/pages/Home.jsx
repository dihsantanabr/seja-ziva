import React, { useState, lazy, Suspense } from 'react';
import GreemyHero from '../components/greemy/GreemyHero';
import GreemyPurchaseSelector from '../components/greemy/GreemyPurchaseSelector';
import GreemyStickyBuyBar from '../components/greemy/GreemyStickyBuyBar';
import { GreemyProvider } from '../components/greemy/GreemyContext';

const GreemyForWho = lazy(() => import('../components/greemy/GreemyForWho'));
const GreemyResults = lazy(() => import('../components/greemy/GreemyResults'));
const GreemyFormula = lazy(() => import('../components/greemy/GreemyFormula'));
const GreemyHowToUse = lazy(() => import('../components/greemy/GreemyHowToUse'));
const GreemyPainMatch = lazy(() => import('../components/greemy/GreemyPainMatch'));
const GreemyTestimonials = lazy(() => import('../components/greemy/GreemyTestimonials'));
const GreemyComparison = lazy(() => import('../components/greemy/GreemyComparison'));
const GreemyGuarantee = lazy(() => import('../components/greemy/GreemyGuarantee'));
const GreemyFAQ = lazy(() => import('../components/greemy/GreemyFAQ'));
const GreemyFinalCTA = lazy(() => import('../components/greemy/GreemyFinalCTA'));
const WhatsAppWidget = lazy(() => import('../components/product/WhatsAppWidget'));
const GreemyQuiz = lazy(() => import('../components/greemy/GreemyQuiz'));

export default function Home() {
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
      <GreemyPurchaseSelector />
      <Suspense fallback={<div className="h-20" />}>
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
        <GreemyComparison />
        <GreemyGuarantee />
        <GreemyFAQ />
        <GreemyFinalCTA />
        <WhatsAppWidget />
      </Suspense>
      <GreemyStickyBuyBar />

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