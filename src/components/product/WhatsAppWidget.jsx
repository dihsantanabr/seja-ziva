import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);

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
          className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-50"
        >
          {/* WhatsApp Button */}
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 lg:w-16 lg:h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all group relative"
          >
            <MessageCircle className="w-7 h-7 lg:w-8 lg:h-8 text-white fill-white" />
            
            {/* Ping animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}