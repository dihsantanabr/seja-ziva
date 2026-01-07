import React from 'react';
import { GreemyProvider } from '../components/greemy/GreemyContext';
import LPTextHero from '../components/greemy/LPTextHero';
import GreemyQuickNav from '../components/greemy/GreemyQuickNav';
import GreemyResults from '../components/greemy/GreemyResults';
import GreemyFormula from '../components/greemy/GreemyFormula';
import GreemyPainMatch from '../components/greemy/GreemyPainMatch';
import GreemyHowToUse from '../components/greemy/GreemyHowToUse';
import GreemyForWho from '../components/greemy/GreemyForWho';
import GreemyTestimonials from '../components/greemy/GreemyTestimonials';
import LPPurchaseBoxes from '../components/greemy/LPPurchaseBoxes';
import GreemyComparison from '../components/greemy/GreemyComparison';
import GreemyGuarantee from '../components/greemy/GreemyGuarantee';
import GreemyFAQ from '../components/greemy/GreemyFAQ';
import GreemyContraindications from '../components/greemy/GreemyContraindications';
import GreemyFinalCTA from '../components/greemy/GreemyFinalCTA';
import WhatsAppWidget from '../components/product/WhatsAppWidget';
import GreemyStickyBuyBar from '../components/greemy/GreemyStickyBuyBar';

export default function LPColageno() {
  return (
    <GreemyProvider>
      <div className="min-h-screen bg-white">
        <LPTextHero />
        <GreemyQuickNav />
        <GreemyResults />
        <GreemyFormula />
        <GreemyPainMatch />
        <GreemyHowToUse />
        <GreemyForWho />
        <GreemyTestimonials />
        <LPPurchaseBoxes />
        <GreemyComparison />
        <GreemyGuarantee />
        <GreemyFAQ />
        <GreemyContraindications />
        <GreemyFinalCTA />
        <WhatsAppWidget />
        <GreemyStickyBuyBar />
      </div>
    </GreemyProvider>
  );
}