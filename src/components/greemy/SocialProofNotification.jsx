import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X } from 'lucide-react';

const purchases = [
  { name: "Ana Silva", city: "São Paulo" },
  { name: "Maria Santos", city: "Rio de Janeiro" },
  { name: "Juliana Costa", city: "Belo Horizonte" },
  { name: "Patricia Lima", city: "Brasília" },
  { name: "Carla Oliveira", city: "Curitiba" },
  { name: "Fernanda Souza", city: "Porto Alegre" },
  { name: "Camila Rodrigues", city: "Salvador" },
  { name: "Beatriz Alves", city: "Fortaleza" },
  { name: "Larissa Pereira", city: "Recife" },
  { name: "Gabriela Martins", city: "Goiânia" },
  { name: "Amanda Ferreira", city: "Manaus" },
  { name: "Jessica Barbosa", city: "Belém" },
  { name: "Rafaela Gomes", city: "Florianópolis" },
  { name: "Leticia Ribeiro", city: "Vitória" },
  { name: "Mariana Cardoso", city: "Campinas" },
  { name: "Aline Dias", city: "Santos" },
  { name: "Vanessa Castro", city: "São Bernardo" },
  { name: "Priscila Moreira", city: "Guarulhos" },
  { name: "Daniela Araujo", city: "Niterói" },
  { name: "Tatiana Monteiro", city: "Uberlândia" }
];

export default function SocialProofNotification() {
  const [show, setShow] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState(null);

  useEffect(() => {
    const showNotification = () => {
      const randomPurchase = purchases[Math.floor(Math.random() * purchases.length)];
      setCurrentPurchase(randomPurchase);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 5000); // Show for 5 seconds
    };

    // Show first notification after 5 seconds
    const initialTimeout = setTimeout(showNotification, 5000);

    // Then show every 25 seconds
    const interval = setInterval(showNotification, 25000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && currentPurchase && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100, y: 20 }}
          className="fixed bottom-6 left-6 z-50 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 max-w-sm"
        >
          <button
            onClick={() => setShow(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            
            <div className="flex-1">
              <p className="font-semibold text-gray-900 text-sm">
                {currentPurchase.name}
              </p>
              <p className="text-xs text-gray-600 mt-0.5">
                {currentPurchase.city}
              </p>
              <p className="text-xs text-pink-600 font-medium mt-1">
                Comprou Agora
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}