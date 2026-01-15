import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingCart, Package, Clock } from 'lucide-react';
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

// Mapa de códigos para garantir consistência
const FLAVOR_CODES = {
  'cranberry': '6J3KDTF80E',
  'tropical': 'GAA70WUDT7',
  'limao': 'OY7JZG4UE9',
  'pink-lemonade': 'Q7TJA8P8X6',
  'tangerina': '4JF2A26WUQ',
  'chocolate': 'OY9KOFHD8D'
};

export default function GreemyPurchaseSelector() {
  const { selectedSize, setSelectedSize, selectedFlavors, setSelectedFlavors, prices } = useGreemy();
  
  const currentPrice = prices[selectedSize]?.current || 0;
  const maxFlavors = selectedSize === '1 Unidade' ? 1 : 3;

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 4);
    targetDate.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate delivery dates
  const today = new Date();
  const daysOffset = selectedSize === '3 Unidades' ? 1 : 0;
  const minDeliveryDate = new Date(today);
  minDeliveryDate.setDate(today.getDate() + 4 - daysOffset);
  const maxDeliveryDate = new Date(today);
  maxDeliveryDate.setDate(today.getDate() + 8 - daysOffset);

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  };

  const getFlavorCount = (flavorId) => {
    return selectedFlavors?.filter(f => f === flavorId).length || 0;
  };

  const handleFlavorClick = (flavorId) => {
    const count = getFlavorCount(flavorId);
    const totalSelected = selectedFlavors?.length || 0;
    
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

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setSelectedFlavors([]);
  };

  const handleBuyNow = () => {
    if (!selectedFlavors || selectedFlavors.length === 0) {
      alert('Por favor, selecione os sabores antes de comprar.');
      return;
    }

    if (selectedFlavors.length !== maxFlavors) {
      alert(`Por favor, selecione ${maxFlavors} sabor${maxFlavors > 1 ? 'es' : ''}.`);
      return;
    }

    // Contar quantas vezes cada sabor foi selecionado
    const flavorCounts = {};
    selectedFlavors.forEach(flavorId => {
      flavorCounts[flavorId] = (flavorCounts[flavorId] || 0) + 1;
    });

    // Gerar a string de produtos no formato CODIGO:QUANTIDADE usando o mapa de códigos
    const productParts = [];
    Object.entries(flavorCounts).forEach(([flavorId, quantity]) => {
      const code = FLAVOR_CODES[flavorId];
      if (code) {
        productParts.push(`${code}:${quantity}`);
      } else {
        console.error('Código não encontrado para sabor:', flavorId);
      }
    });

    if (productParts.length === 0) {
      alert('Erro ao gerar link de checkout. Por favor, tente novamente.');
      console.error('Nenhum código de produto gerado');
      return;
    }

    // Montar a URL final
    const baseUrl = 'https://seguro.renovabe.com/r/';
    const checkoutUrl = baseUrl + productParts.join(',');
    
    console.log('=== DEBUG CHECKOUT SELECTOR ===');
    console.log('Tamanho selecionado:', selectedSize);
    console.log('Sabores selecionados (array):', selectedFlavors);
    console.log('Contagem de sabores:', flavorCounts);
    console.log('Códigos gerados:', productParts);
    console.log('URL final:', checkoutUrl);
    console.log('==============================');
    
    // Redirecionar imediatamente
    window.location.href = checkoutUrl;
  };

  return (
    <section id="escolha-seu-colageno" className="py-4 lg:py-6 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Price Box */}
        <div className="bg-white rounded-2xl shadow-xl p-4 lg:p-6 border border-pink-100 mb-6">
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

              {/* Countdown Timer */}
              <div className="mb-3 bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-3 border border-orange-200">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-orange-600" />
                  <span className="text-xs font-semibold text-orange-900">
                    Faltam {timeLeft.days} dias para essa oferta acabar
                  </span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-pink-500"
                    initial={{ width: '100%' }}
                    animate={{ width: `${(timeLeft.days / 7) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="flex items-center justify-center gap-2 mt-2 text-xs text-gray-600">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-orange-600">{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className="text-[10px]">dias</span>
                  </div>
                  <span className="text-orange-600">:</span>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-orange-600">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-[10px]">horas</span>
                  </div>
                  <span className="text-orange-600">:</span>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-orange-600">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-[10px]">min</span>
                  </div>
                  <span className="text-orange-600">:</span>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-orange-600">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="text-[10px]">seg</span>
                  </div>
                </div>
              </div>

              <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
                R$ {currentPrice.toFixed(2).replace('.', ',')}
              </div>
              <div className="text-gray-600 text-xs mt-1">Em até 6x sem juros</div>
            </div>
          </div>
        </div>

        {/* Escolha a quantidade */}
        <div className="mb-8">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
            Escolha a quantidade:
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {sizes.map((size) => (
              <button
                key={size.id}
                onClick={() => handleSizeChange(size.id)}
                className={`relative px-3 py-5 lg:px-4 lg:py-5 rounded-xl border-2 font-medium transition-all text-center min-h-[88px] active:scale-95 ${
                  selectedSize === size.id
                    ? 'border-pink-500 bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
                    : 'border-gray-200 text-gray-700 hover:border-pink-500 hover:shadow-md'
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
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(maxFlavors)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i < (selectedFlavors?.length || 0)
                        ? 'bg-pink-600 scale-110'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-pink-600 font-medium">
                {selectedFlavors?.length || 0}/{maxFlavors}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {flavors.map((flavor) => {
              const count = getFlavorCount(flavor.id);
              const isDisabled = (selectedFlavors?.length || 0) >= maxFlavors && count === 0;

              return (
                <button
                  key={flavor.id}
                  onClick={() => handleFlavorClick(flavor.id)}
                  disabled={isDisabled}
                  className={`relative p-4 lg:p-4 rounded-xl border-2 transition-all text-center min-h-[100px] active:scale-95 ${
                    count > 0
                      ? 'border-pink-500 bg-pink-50 text-gray-900 shadow-md'
                      : isDisabled
                      ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                      : 'border-gray-200 hover:border-pink-300 text-gray-700 hover:shadow-sm'
                  }`}
                >
                  {count > 0 && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 lg:w-7 lg:h-7 bg-pink-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg ring-2 ring-white">
                      {count}
                    </div>
                  )}
                  {flavor.hasLactose && (
                    <div className="absolute -top-2 -left-2">
                      <Badge className="bg-amber-600 text-white text-[9px] lg:text-xs whitespace-nowrap px-1">Contém Lactose</Badge>
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

          <p className="text-center text-gray-500 text-sm py-2">
            {selectedSize === '1 Unidade' 
              ? 'Clique no sabor desejado (clique novamente para desselecionar)'
              : 'Clique para adicionar sabores (pode escolher múltiplos do mesmo)'
            }
          </p>
        </div>

        {/* Buy Button */}
        <Button
          onClick={handleBuyNow}
          disabled={(selectedFlavors?.length || 0) < maxFlavors}
          className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-base lg:text-lg px-8 py-7 lg:px-10 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 min-h-[56px]"
        >
          {(selectedFlavors?.length || 0) < maxFlavors
            ? `Selecione ${maxFlavors - (selectedFlavors?.length || 0)} sabor${maxFlavors - (selectedFlavors?.length || 0) > 1 ? 'es' : ''}`
            : 'COMPRAR AGORA'
          }
        </Button>

        {/* Delivery Estimate */}
        <div className="bg-green-100 border border-green-300 rounded-xl p-3 lg:p-4 mt-4">
          <div className="flex items-start gap-2 lg:gap-3">
            <Package className="w-4 h-4 lg:w-5 lg:h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 lg:gap-2 flex-wrap">
                <p className="font-semibold text-green-900 text-xs lg:text-base">
                  Chegará Grátis entre {formatDate(minDeliveryDate)} e {formatDate(maxDeliveryDate)}
                </p>
                {selectedSize === '3 Unidades' && (
                  <Badge className="bg-green-600 hover:bg-green-700 text-white text-[10px] lg:text-xs whitespace-nowrap">
                    Receba + Rápido
                  </Badge>
                )}
              </div>
              <p className="text-xs lg:text-sm text-green-700 mt-1">
                Confirme o prazo final na próxima etapa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}