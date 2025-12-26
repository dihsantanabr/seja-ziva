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
  const [selectedSize, setSelectedSize] = useState('1 Unidade');
  const [selectedFlavor, setSelectedFlavor] = useState('30ml');

  const prices = {
    '1 Unidade': { original: 89.00, current: 89.00, discount: 0 },
    '3 Unidades': { original: 267.00, current: 237.00, discount: 11 }
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