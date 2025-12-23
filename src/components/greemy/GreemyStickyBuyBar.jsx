import React, { useState, useEffect } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

export default function GreemyStickyBuyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState('2 Caixas');

  const prices = {
    '1 Caixa': { original: 227.00, current: 167.90 },
    '2 Caixas': { original: 454.00, current: 267.90 },
    '3 Caixas + 1 Grátis': { original: 908.00, current: 437.90 }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                <span className="text-xs text-gray-600 ml-1">(4.284 avaliações)</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1">
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="text-xs bg-transparent border border-gray-300 rounded-lg px-2 py-1 font-medium text-gray-700 focus:outline-none focus:border-green-600"
                >
                  {Object.keys(prices).map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xs text-gray-400 line-through">
                    R$ {prices[selectedSize].original.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600">
                    R$ {prices[selectedSize].current.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white font-semibold px-6 py-5 shadow-lg active:scale-95 touch-manipulation">
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