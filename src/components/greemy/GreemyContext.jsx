import React, { createContext, useContext, useState } from 'react';

const GreemyContext = createContext();

export const useGreemy = () => {
  const context = useContext(GreemyContext);
  if (!context) {
    throw new Error('useGreemy must be used within GreemyProvider');
  }
  return context;
};

export const GreemyProvider = ({ children }) => {
  const [selectedSize, setSelectedSize] = useState('2 Caixas');
  const [selectedFlavor, setSelectedFlavor] = useState('Mix (Limão + Laranja)');

  const prices = {
    '1 Caixa': { original: 227.00, current: 167.90, discount: 26 },
    '2 Caixas': { original: 454.00, current: 267.90, discount: 41 },
    '3 Caixas + 1 Grátis': { original: 908.00, current: 437.90, discount: 52 }
  };

  return (
    <GreemyContext.Provider value={{ 
      selectedSize, 
      setSelectedSize, 
      selectedFlavor, 
      setSelectedFlavor,
      prices 
    }}>
      {children}
    </GreemyContext.Provider>
  );
};