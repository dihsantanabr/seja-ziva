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
          <div className="px-4 py-3 flex items-center justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs text-gray-600 ml-1">(5.000+)</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-gray-400 line-through">R$ 454,00</span>
                <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600">
                  R$ 267,90
                </span>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white font-semibold px-6 py-5 shadow-lg active:scale-95 touch-manipulation">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Comprar
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}