import React from 'react';
import { GreemyProvider } from '../components/greemy/GreemyContext';
import LPHero from '../components/greemy/LPHero';
import GreemyForWho from '../components/greemy/GreemyForWho';
import GreemyResults from '../components/greemy/GreemyResults';
import GreemyFormula from '../components/greemy/GreemyFormula';
import GreemyHowToUse from '../components/greemy/GreemyHowToUse';
import GreemyPainMatch from '../components/greemy/GreemyPainMatch';
import GreemyTestimonials from '../components/greemy/GreemyTestimonials';
import LPPurchaseBoxes from '../components/greemy/LPPurchaseBoxes';
import GreemyContraindications from '../components/greemy/GreemyContraindications';
import GreemyComparison from '../components/greemy/GreemyComparison';
import GreemyGuarantee from '../components/greemy/GreemyGuarantee';
import GreemyFAQ from '../components/greemy/GreemyFAQ';
import GreemyFinalCTA from '../components/greemy/GreemyFinalCTA';
import WhatsAppWidget from '../components/product/WhatsAppWidget';

export default function LP() {
  return (
    <GreemyProvider>
      <div className="min-h-screen bg-white">
        <LPHero />
        <GreemyForWho />
        <GreemyResults />
        <GreemyFormula />
        <GreemyHowToUse />
        <GreemyPainMatch />
        <GreemyTestimonials />
        <LPPurchaseBoxes />
        <GreemyContraindications />
        <GreemyComparison />
        <GreemyGuarantee />
        <GreemyFAQ />
        <GreemyFinalCTA />
        <WhatsAppWidget />
      </div>
    </GreemyProvider>
  );
}