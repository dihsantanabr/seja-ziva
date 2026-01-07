import React, { useState, useEffect } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { useGreemy } from './GreemyContext';

const flavors = [
  { id: 'cranberry', code: '6J3KDTF80E' },
  { id: 'tropical', code: 'GAA70WUDT7' },
  { id: 'limao', code: 'OY7JZG4UE9' },
  { id: 'pink-lemonade', code: 'Q7TJA8P8X6' },
  { id: 'tangerina', code: '4JF2A26WUQ' },
  { id: 'chocolate', code: 'OY9KOFHD8D' }
];

export default function GreemyStickyBuyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const { selectedSize, selectedFlavors, prices } = useGreemy();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBuyClick = () => {
    // Se não houver sabores selecionados, scroll até o seletor
    if (selectedFlavors.length === 0) {
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

    // Gerar a string de produtos no formato CODIGO:QUANTIDADE
    const productParts = [];
    Object.entries(flavorCounts).forEach(([flavorId, quantity]) => {
      const flavor = flavors.find(f => f.id === flavorId);
      if (flavor && flavor.code) {
        productParts.push(`${flavor.code}:${quantity}`);
      }
    });

    // Montar a URL final
    const baseUrl = 'https://renovabe5.pay.yampi.com.br/r/';
    const checkoutUrl = baseUrl + productParts.join(',');
    
    window.location.href = checkoutUrl;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-2xl safe-area-bottom"
        >
          <div className="px-4 py-2 flex flex-col gap-2">
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
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold px-6 py-5 shadow-lg active:scale-95 touch-manipulation"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Comprar
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}