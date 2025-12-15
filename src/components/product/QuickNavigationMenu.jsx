import React from 'react';
import { motion } from 'framer-motion';
import { Target, Sparkles, FlaskConical, Clock, Heart, Shield } from 'lucide-react';

const menuItems = [
  {
    title: 'Descubra se é para você',
    subtitle: 'Veja se o produto atende seu caso',
    icon: Target,
    sectionId: 'para-quem-e',
    color: 'from-[#2D5A4A] to-[#3d7a64]'
  },
  {
    title: 'O que esse produto faz',
    subtitle: 'Resultados esperados',
    icon: Sparkles,
    sectionId: 'resultados',
    color: 'from-[#2D5A4A] to-[#3d7a64]'
  },
  {
    title: 'A ciência por trás',
    subtitle: 'Conheça a fórmula',
    icon: FlaskConical,
    sectionId: 'formula',
    color: 'from-[#2D5A4A] to-[#3d7a64]'
  },
  {
    title: 'Como e quando usar',
    subtitle: 'Modo de uso e resultados',
    icon: Clock,
    sectionId: 'como-usar',
    color: 'from-[#2D5A4A] to-[#3d7a64]'
  },
  {
    title: 'Depoimentos reais',
    subtitle: 'Veja quem já usou',
    icon: Heart,
    sectionId: 'depoimentos',
    color: 'from-[#2D5A4A] to-[#3d7a64]'
  },
  {
    title: 'Segurança e garantia',
    subtitle: 'Transparência total',
    icon: Shield,
    sectionId: 'contraindicacoes',
    color: 'from-[#2D5A4A] to-[#3d7a64]'
  }
];

export default function QuickNavigationMenu() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white border-t border-gray-100 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4">

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => scrollToSection(item.sectionId)}
                className="group relative bg-gradient-to-br from-[#F9F6F2] to-white active:from-[#2D5A4A] active:to-[#3d7a64] hover:from-[#2D5A4A] hover:to-[#3d7a64] border border-gray-200 hover:border-[#2D5A4A] active:border-[#2D5A4A] rounded-xl p-4 md:p-5 text-left transition-all duration-300 hover:shadow-lg active:shadow-lg hover:scale-105 active:scale-95 touch-manipulation"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-10 md:h-10 bg-[#2D5A4A]/10 group-hover:bg-white/20 group-active:bg-white/20 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6 md:w-5 md:h-5 text-[#2D5A4A] group-hover:text-white group-active:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 group-hover:text-white group-active:text-white text-sm md:text-base mb-1 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 group-hover:text-white/80 group-active:text-white/80 transition-colors">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}