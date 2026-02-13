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
  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const [selectedFlavors, setSelectedFlavors] = useState([]);

  const prices = {
    '1 Unidade': { original: 299.00, current: 227.00, discount: 24 },
    '3 Unidades': { original: 897.00, current: 547.00, discount: 39 }
  };

  return (
    <GreemyContext.Provider value={{ 
      selectedSize, 
      setSelectedSize, 
      selectedFlavor, 
      setSelectedFlavor,
      selectedFlavors,
      setSelectedFlavors,
      prices 
    }}>
      {children}
    </GreemyContext.Provider>
  );
};