import React, { useState } from 'react';
import { Check, Package, Shield, Tag, Truck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';
import { useGreemy } from './GreemyContext';

const flavors = [
  { id: 'cranberry', name: 'Cranberry', emoji: '🍒', color: 'from-red-500 to-pink-500', mostChosen: true },
  { id: 'tropical', name: 'Frutas Tropicais', emoji: '🍍', color: 'from-yellow-500 to-orange-500' },
  { id: 'limao', name: 'Limão', emoji: '🍋', color: 'from-lime-500 to-green-500' },
  { id: 'pink-lemonade', name: 'Pink Lemonade', emoji: '🍹', color: 'from-pink-400 to-rose-400' },
  { id: 'tangerina', name: 'Tangerina', emoji: '🍊', color: 'from-orange-500 to-amber-500' },
  { id: 'chocolate', name: 'Chocolate', emoji: '🍫', color: 'from-amber-700 to-brown-600', hasLactose: true }
];

export default function LPPurchaseBoxes() {
  const { selectedSize, setSelectedSize, prices } = useGreemy();
  const [selectedFlavors, setSelectedFlavors] = useState([]);

  const today = new Date();
  const daysOffset = selectedSize === '3 Unidades' ? 1 : 0;
  const minDeliveryDate = new Date(today);
  minDeliveryDate.setDate(today.getDate() + 4 - daysOffset);
  const maxDeliveryDate = new Date(today);
  maxDeliveryDate.setDate(today.getDate() + 8 - daysOffset);

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  };

  const getCheckoutLink = () => {
    if (selectedSize === '3 Unidades') {
      return 'https://seguro.avozon.com.br/r/9LBQYYJH8D';
    }
    return 'https://seguro.avozon.com.br/r/O0QFN501RQ';
  };

  const handleBuyClick = () => {
    window.location.href = getCheckoutLink();
  };

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

  return (
    <section id="comprar" className="py-16 lg:py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-500 font-medium text-sm uppercase tracking-wider">
            Oferta Especial
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Escolha Seu Kit e Comece Agora
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Frete Grátis + 10% de Cashback em todas as compras
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Size Selection */}
          <div>
            <p className="font-medium text-gray-700 mb-4 text-center text-lg">Escolha a quantidade:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: '1 Unidade', duration: '30 Dias', description: 'Rotina Inicial' },
                { name: '3 Unidades', duration: '90 Dias', description: 'Rotina Completa', showBadge: true, discount: '43% OFF' }
              ].map((size) => (
                <motion.button
                  key={size.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSizeChange(size.name)}
                  className={`relative p-6 rounded-2xl border-2 font-medium transition-all text-center ${
                    selectedSize === size.name
                      ? 'border-pink-500 bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-xl'
                      : 'border-gray-200 text-gray-700 hover:border-pink-300 bg-white'
                  }`}
                >
                  {size.showBadge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-orange-500 text-white">
                        Mais Vendido
                      </Badge>
                    </div>
                  )}
                  <div className="text-2xl font-bold mb-2">{size.name}</div>
                  <div className={`text-sm mb-1 ${selectedSize === size.name ? 'text-white/80' : 'text-gray-500'}`}>
                    {size.duration} • {size.description}
                  </div>
                  <div className="flex items-baseline justify-center gap-2 mt-4">
                    {prices[size.name].discount > 0 && (
                      <span className={`text-sm line-through ${selectedSize === size.name ? 'text-white/60' : 'text-gray-400'}`}>
                        R$ {prices[size.name].original.toFixed(2).replace('.', ',')}
                      </span>
                    )}
                    <span className="text-3xl font-bold">
                      R$ {prices[size.name].current.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  {size.discount && (
                    <Badge className={`mt-3 ${selectedSize === size.name ? 'bg-white text-pink-600' : 'bg-pink-600 text-white'}`}>
                      {size.discount}
                    </Badge>
                  )}
                  {selectedSize === size.name && (
                    <div className="flex items-center justify-center gap-2 mt-4 text-sm">
                      <Check className="w-5 h-5" />
                      Selecionado
                    </div>
                  )}
                </motion.button>
              ))}
            </div>
            
            {selectedSize === '3 Unidades' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-green-100 border border-green-300 rounded-xl p-4 text-center"
              >
                <p className="text-green-800 font-semibold">
                  Cada Unidade sai por R$ {(prices[selectedSize].current / 3).toFixed(2).replace('.', ',')}
                </p>
              </motion.div>
            )}
          </div>

          {/* Flavor Selection */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="font-medium text-gray-700 text-lg">
                {selectedSize === '1 Unidade' ? 'Escolha seu sabor:' : 'Escolha seus sabores:'}
              </p>
              <Badge variant="outline" className="text-pink-600 border-pink-300">
                {selectedFlavors.length}/{maxFlavors} {selectedSize === '1 Unidade' ? 'selecionado' : 'selecionados'}
              </Badge>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {flavors.map((flavor) => {
                const count = getFlavorCount(flavor.id);
                const isDisabled = selectedFlavors.length >= maxFlavors && count === 0;

                return (
                  <motion.button
                    key={flavor.id}
                    whileHover={{ scale: isDisabled ? 1 : 1.02 }}
                    whileTap={{ scale: isDisabled ? 1 : 0.98 }}
                    onClick={() => handleFlavorClick(flavor.id)}
                    disabled={isDisabled}
                    className={`relative p-4 rounded-xl border-2 transition-all text-center ${
                      count > 0
                        ? 'border-pink-500 bg-gradient-to-br ' + flavor.color + ' text-white shadow-lg'
                        : isDisabled
                        ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                        : 'border-gray-200 hover:border-pink-300 text-gray-700 bg-white'
                    }`}
                  >
                    {count > 0 && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {count}
                      </div>
                    )}
                    {flavor.hasLactose && (
                      <div className="absolute -top-2 -left-2">
                        <Badge className="bg-amber-500 text-white text-xs">Lactose</Badge>
                      </div>
                    )}
                    {flavor.mostChosen && (
                      <div className="absolute -top-2 -left-2">
                        <Badge className="bg-green-600 text-white text-xs">+ Escolhido</Badge>
                      </div>
                    )}
                    <div className="text-3xl mb-2">{flavor.emoji}</div>
                    <div className={`text-sm font-semibold ${count > 0 ? 'text-white' : ''}`}>
                      {flavor.name}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <p className="text-xs text-gray-500 mt-3 text-center">
              {selectedSize === '1 Unidade' 
                ? 'Clique no sabor desejado (clique novamente para desselecionar)'
                : 'Clique para adicionar sabores (pode escolher múltiplos do mesmo)'
              }
            </p>
          </div>

          {/* Buy Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button 
              onClick={handleBuyClick}
              disabled={selectedFlavors.length < maxFlavors}
              className="w-full h-14 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-xl font-semibold rounded-xl shadow-lg shadow-pink-500/25 transition-all hover:shadow-xl hover:shadow-pink-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {selectedFlavors.length < maxFlavors
                ? `Selecione ${maxFlavors - selectedFlavors.length} sabor${maxFlavors - selectedFlavors.length > 1 ? 'es' : ''}`
                : 'Comprar Agora com Frete Grátis'
              }
            </Button>
          </motion.div>

          {/* Delivery Info */}
          <div className="bg-green-100 border border-green-300 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Truck className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-semibold text-green-900">
                    Chegará Grátis entre {formatDate(minDeliveryDate)} e {formatDate(maxDeliveryDate)}
                  </p>
                  {selectedSize === '3 Unidades' && (
                    <Badge className="bg-green-600 text-white text-xs">
                      Receba + Rápido
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-green-700 mt-1">
                  + 10% de Cashback • Confirme o prazo final na próxima etapa
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { icon: Shield, text: 'Pagamento Seguro' },
              { icon: Truck, text: 'Frete Grátis' },
              { icon: Tag, text: '10% Cashback' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-2">
                  <item.icon className="w-6 h-6 text-pink-600" />
                </div>
                <p className="text-xs text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}