import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useGreemy } from './GreemyContext';

const sizes = [
  { 
    id: '1 Unidade', 
    units: '1 Unidade', 
    subtitle: 'Rotina Inicial',
    gradient: 'from-pink-400 to-pink-500'
  },
  { 
    id: '3 Unidades', 
    units: '3 Unidades', 
    subtitle: 'Rotina Completa',
    discount: '43% OFF',
    popular: true,
    gradient: 'from-pink-500 to-pink-600'
  }
];

const flavors = [
  { id: 'cranberry', name: 'Cranberry', emoji: '🍒', mostChosen: true, code: '6J3KDTF80E' },
  { id: 'tropical', name: 'Frutas Tropicais', emoji: '🍍', code: 'GAA70WUDT7' },
  { id: 'limao', name: 'Limão', emoji: '🍋', code: 'OY7JZG4UE9' },
  { id: 'pink-lemonade', name: 'Pink Lemonade', emoji: '🍹', code: 'Q7TJA8P8X6' },
  { id: 'tangerina', name: 'Tangerina', emoji: '🍊', code: '4JF2A26WUQ' },
  { id: 'chocolate', name: 'Chocolate', emoji: '🍫', hasLactose: true, code: 'OY9KOFHD8D' }
];

export default function GreemyPurchaseSelector() {
  const { selectedSize, setSelectedSize, selectedFlavors, setSelectedFlavors, prices } = useGreemy();
  
  const currentPrice = prices[selectedSize]?.current || 0;
  const maxFlavors = selectedSize === '1 Unidade' ? 1 : 3;

  const handleFlavorClick = (flavorId) => {
    const count = getFlavorCount(flavorId);
    const totalSelected = selectedFlavors.length;
    
    if (selectedSize === '1 Unidade') {
      if (count > 0) {
        setSelectedFlavors([]);
      } else {
        setSelectedFlavors([flavorId]);
      }
    } else {
      if (totalSelected < maxFlavors) {
        setSelectedFlavors([...selectedFlavors, flavorId]);
      } else if (count > 0) {
        const newFlavors = selectedFlavors.filter(f => f !== flavorId);
        setSelectedFlavors(newFlavors);
      }
    }
  };

  const getFlavorCount = (flavorId) => {
    return selectedFlavors.filter(f => f === flavorId).length;
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setSelectedFlavors([]);
  };

  const handleBuyNow = () => {
    if (!selectedFlavors || selectedFlavors.length === 0) {
      alert('Por favor, selecione os sabores antes de comprar.');
      return;
    }

    // Contar quantas vezes cada sabor foi selecionado
    const flavorCounts = {};
    selectedFlavors.forEach(flavorId => {
      flavorCounts[flavorId] = (flavorCounts[flavorId] || 0) + 1;
    });

    // Gerar a string de produtos no formato CODIGO:QUANTIDADE
    const productParts = [];
    Object.entries(flavorCounts).forEach(([flavorId, quantity]) => {
      const flavor = flavors.find(f => f.id === flavorId);
      if (flavor && flavor.code) {
        productParts.push(`${flavor.code}:${quantity}`);
      }
    });

    if (productParts.length === 0) {
      alert('Erro ao gerar link de checkout. Por favor, tente novamente.');
      return;
    }

    // Montar a URL final
    const baseUrl = 'https://renovabe5.pay.yampi.com.br/r/';
    const checkoutUrl = baseUrl + productParts.join(',');
    
    console.log('Redirecionando para:', checkoutUrl);
    console.log('Sabores selecionados:', selectedFlavors);
    console.log('Contagem:', flavorCounts);
    
    window.location.href = checkoutUrl;
  };

  return (
    <section id="escolha-seu-colageno" className="py-12 lg:py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Título Principal */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Escolha seu Colágeno
          </h2>
        </div>

        {/* Escolha a quantidade */}
        <div className="mb-8">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
            Escolha a quantidade:
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {sizes.map((size) => (
              <button
                key={size.id}
                onClick={() => handleSizeChange(size.id)}
                className={`relative px-3 py-4 lg:px-4 lg:py-5 rounded-xl border-2 font-medium transition-all text-center ${
                  selectedSize === size.id
                    ? 'border-pink-500 bg-gradient-to-r from-pink-500 to-pink-600 text-white'
                    : 'border-gray-200 text-gray-700 hover:border-pink-500'
                }`}
              >
                {size.popular && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                    <span className="bg-orange-200 text-orange-800 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                      Mais Vendido
                    </span>
                  </div>
                )}
                
                <div className="text-sm lg:text-base font-bold mb-1">{size.units}</div>
                <div className={`text-xs lg:text-sm ${selectedSize === size.id ? 'text-white/80' : 'text-gray-500'}`}>
                  {size.subtitle}
                </div>
                {size.discount && (
                  <div className={`text-xs font-bold mt-1 ${selectedSize === size.id ? 'text-white' : 'text-pink-500'}`}>
                    {size.discount}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Escolha seus sabores */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
              {selectedSize === '1 Unidade' ? 'Escolha seu sabor:' : 'Escolha seus sabores:'}
            </h3>
            <span className="text-sm text-pink-600 font-medium">
              {selectedFlavors.length}/{maxFlavors} selecionado{maxFlavors > 1 ? 's' : ''}
            </span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
            {flavors.map((flavor) => {
              const count = getFlavorCount(flavor.id);
              const isDisabled = selectedFlavors.length >= maxFlavors && count === 0;

              return (
                <button
                  key={flavor.id}
                  onClick={() => handleFlavorClick(flavor.id)}
                  disabled={isDisabled}
                  className={`relative p-3 lg:p-4 rounded-xl border-2 transition-all text-center ${
                    count > 0
                      ? 'border-pink-500 bg-pink-50 text-gray-900'
                      : isDisabled
                      ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                      : 'border-gray-200 hover:border-pink-300 text-gray-700'
                  }`}
                >
                  {count > 0 && (
                    <div className="absolute -top-2 -right-2 w-5 h-5 lg:w-6 lg:h-6 bg-pink-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {count}
                    </div>
                  )}
                  {flavor.hasLactose && (
                    <div className="absolute -top-2 -left-2">
                      <Badge className="bg-amber-600 text-white text-[9px] lg:text-xs whitespace-nowrap px-1">Lactose</Badge>
                    </div>
                  )}
                  {flavor.mostChosen && count === 0 && (
                    <div className="absolute -top-2 -left-2">
                      <Badge className="bg-green-600 text-white text-[9px] lg:text-xs whitespace-nowrap px-1">+ Escolhido</Badge>
                    </div>
                  )}
                  <div className="text-3xl lg:text-4xl mb-2">{flavor.emoji}</div>
                  <div className="text-xs lg:text-sm font-semibold">
                    {flavor.name}
                  </div>
                </button>
              );
            })}
          </div>

          <p className="text-center text-gray-500 text-xs">
            {selectedSize === '1 Unidade' 
              ? 'Clique no sabor desejado (clique novamente para desselecionar)'
              : 'Clique para adicionar sabores (pode escolher múltiplos do mesmo)'
            }
          </p>
        </div>

        {/* Price and Buy Button */}
        <div className="bg-white rounded-2xl shadow-xl p-4 lg:p-6 border border-pink-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              {prices[selectedSize]?.discount > 0 && (
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-sm text-gray-400 line-through">
                    R$ {prices[selectedSize].original.toFixed(2).replace('.', ',')}
                  </span>
                  <Badge className="bg-pink-600 text-white text-xs">
                    {prices[selectedSize].discount}% OFF
                  </Badge>
                  <Badge className="bg-pink-600 text-white text-xs">
                    Frete Grátis
                  </Badge>
                </div>
              )}
              <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
                R$ {currentPrice.toFixed(2).replace('.', ',')}
              </div>
              <div className="text-gray-600 text-xs mt-1">Em até 6x sem juros</div>
            </div>
            
            <Button
              onClick={handleBuyNow}
              disabled={selectedFlavors.length < maxFlavors}
              className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-base lg:text-lg px-8 py-6 lg:px-10 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {selectedFlavors.length < maxFlavors
                ? `Selecione ${maxFlavors - selectedFlavors.length} sabor${maxFlavors - selectedFlavors.length > 1 ? 'es' : ''}`
                : 'COMPRAR AGORA'
              }
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}