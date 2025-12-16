import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function StickyBuyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 800);
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
          className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 lg:hidden"
        >
          <div className="px-4 py-3 flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs text-gray-500 ml-1">4.9</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-gray-900">R$ 59,90</span>
                <span className="text-sm text-gray-400 line-through">R$ 69,90</span>
              </div>
            </div>
            <Button className="bg-[#C9A875] hover:bg-[#b8976a] text-white px-6 py-5 rounded-xl font-semibold shadow-lg">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Comprar
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}