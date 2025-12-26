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
  const [selectedSize, setSelectedSize] = useState('1 Óleo');
  const [selectedFlavor, setSelectedFlavor] = useState('30ml');

  const prices = {
    '1 Óleo': { original: 69.00, current: 69.00, discount: 0 },
    '3 Óleos': { original: 207.00, current: 207.00, discount: 0 }
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