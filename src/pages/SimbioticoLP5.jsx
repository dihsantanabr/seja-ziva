import TopMeta from '../components/SimbioticoLP5/TopMeta';
import HeroSection from '../components/SimbioticoLP5/HeroSection';
import BenefitsSection from '../components/SimbioticoLP5/BenefitsSection';
import PainsSection from '../components/SimbioticoLP5/PainsSection';
import CraftSection from '../components/SimbioticoLP5/CraftSection';
import ReviewsSection from '../components/SimbioticoLP5/ReviewsSection';
import GuaranteeSection from '../components/SimbioticoLP5/GuaranteeSection';
import OfferSection from '../components/SimbioticoLP5/OfferSection';
import FAQSection from '../components/SimbioticoLP5/FAQSection';

export default function SimbioticoLP5() {
  return (
    <div style={{ fontFamily: "'Instrument Sans', sans-serif", background: '#FFFCF6', color: '#141210' }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400&family=Instrument+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap" rel="stylesheet" />

      <TopMeta />
      
      <div style={{ background: '#fff', borderBottom: '1px solid #EFE6D6', padding: '14px 20px', display: 'flex', justifyContent: 'center' }}>
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698f17e9124bfe3a6f9a6198/9eab2108f_Screenshot2026-02-13at165800.png"
          alt="Ziva"
          style={{ height: '32px', objectFit: 'contain' }}
        />
      </div>

      <HeroSection />
      <BenefitsSection />
      <PainsSection />
      <CraftSection />
      <ReviewsSection />
      <GuaranteeSection />
      <OfferSection />
      <FAQSection />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid-bp5 { grid-template-columns: 1fr !important; }
          .pains-section { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}