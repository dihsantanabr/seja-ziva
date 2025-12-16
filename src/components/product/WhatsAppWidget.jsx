import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrolled / pageHeight) * 100;
      
      setIsVisible(scrollPercentage >= 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999'; // Substituir pelo número real
    const message = 'Olá! Gostaria de tirar algumas dúvidas sobre o Extrato Mamamais.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip/Message */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 max-w-xs mb-2"
              >
                <button
                  onClick={() => setIsOpen(true)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#C9AE7A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">MM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Equipe Mamamais</p>
                    <p className="text-sm text-gray-600">
                      Olá! 👋 Tem alguma dúvida sobre nossos produtos? Estamos aqui para ajudar!
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all group relative"
          >
            <MessageCircle className="w-8 h-8 text-white fill-white" />
            
            {/* Ping animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}