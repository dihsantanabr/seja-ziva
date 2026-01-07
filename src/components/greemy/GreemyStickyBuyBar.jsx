import React, { useState, useEffect } from 'react';
import { Star, ShoppingCart, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { useGreemy } from './GreemyContext';

// Mapa de códigos para garantir consistência
const FLAVOR_CODES = {
  'cranberry': '6J3KDTF80E',
  'tropical': 'GAA70WUDT7',
  'limao': 'OY7JZG4UE9',
  'pink-lemonade': 'Q7TJA8P8X6',
  'tangerina': '4JF2A26WUQ',
  'chocolate': 'OY9KOFHD8D'
};

export default function GreemyStickyBuyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { selectedSize, selectedFlavors, prices } = useGreemy();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrolledEnough = currentScrollY > 200;
          const scrollingUp = currentScrollY < lastScrollY;
          
          // Show on scroll up, hide on scroll down (when not dismissed)
          setIsVisible(scrolledEnough && scrollingUp && !isDismissed);
          
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleBuyClick = () => {
    const maxFlavors = selectedSize === '1 Unidade' ? 1 : 3;
    
    // Se não houver sabores selecionados, scroll até o seletor
    if (!selectedFlavors || selectedFlavors.length === 0) {
      const purchaseSection = document.querySelector('#escolha-seu-colageno');
      if (purchaseSection) {
        purchaseSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    if (selectedFlavors.length !== maxFlavors) {
      const purchaseSection = document.querySelector('#escolha-seu-colageno');
      if (purchaseSection) {
        purchaseSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Contar quantas vezes cada sabor foi selecionado
    const flavorCounts = {};
    selectedFlavors.forEach(flavorId => {
      flavorCounts[flavorId] = (flavorCounts[flavorId] || 0) + 1;
    });

    // Gerar a string de produtos no formato CODIGO:QUANTIDADE usando o mapa de códigos
    const productParts = [];
    Object.entries(flavorCounts).forEach(([flavorId, quantity]) => {
      const code = FLAVOR_CODES[flavorId];
      if (code) {
        productParts.push(`${code}:${quantity}`);
      } else {
        console.error('Código não encontrado para sabor:', flavorId);
      }
    });

    if (productParts.length === 0) {
      alert('Erro ao gerar link de checkout. Por favor, tente novamente.');
      console.error('Nenhum código de produto gerado');
      return;
    }

    // Montar a URL final
    const baseUrl = 'https://renovabe5.pay.yampi.com.br/r/';
    const checkoutUrl = baseUrl + productParts.join(',');
    
    console.log('=== DEBUG CHECKOUT STICKY ===');
    console.log('Tamanho selecionado:', selectedSize);
    console.log('Sabores selecionados (array):', selectedFlavors);
    console.log('Contagem de sabores:', flavorCounts);
    console.log('Códigos gerados:', productParts);
    console.log('URL final:', checkoutUrl);
    console.log('============================');
    
    // Redirecionar imediatamente
    window.location.href = checkoutUrl;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t-2 border-pink-200 shadow-2xl safe-area-bottom"
        >
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600 active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="px-4 py-3 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-sm text-gray-900">4.9</span>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs text-gray-600 ml-1">(238.917 avaliações)</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-600 mb-1">
                  {selectedSize} - {selectedSize === '1 Unidade' ? 'Rotina Inicial' : 'Rotina Completa'}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-gray-400 line-through">
                    R$ {prices[selectedSize].original.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
                    R$ {prices[selectedSize].current.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>
              <Button 
                onClick={handleBuyClick}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold px-8 py-6 shadow-lg active:scale-95 touch-manipulation min-h-[52px] min-w-[120px]"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Comprar
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}