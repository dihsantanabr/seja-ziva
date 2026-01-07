import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useGreemy } from './GreemyContext';

const sizes = [
  { 
    id: 1, 
    units: '1 Unidade', 
    subtitle: 'Rotina Inicial',
    gradient: 'from-pink-400 to-pink-500'
  },
  { 
    id: 3, 
    units: '3 Unidades', 
    subtitle: 'Rotina Completa',
    discount: '43% OFF',
    popular: true,
    gradient: 'from-pink-500 to-pink-600'
  }
];

const flavors = [
  { name: 'Cranberry', emoji: '🍒', gradient: 'from-red-400 to-pink-500', special: 'Escolhido' },
  { name: 'Frutas Tropicais', emoji: '🍍', gradient: 'from-yellow-400 to-orange-500' },
  { name: 'Limão', emoji: '🍋', gradient: 'from-yellow-300 to-lime-400' },
  { name: 'Pink Lemonade', emoji: '🍹', gradient: 'from-pink-300 to-rose-400' },
  { name: 'Tangerina', emoji: '🍊', gradient: 'from-orange-400 to-orange-500' },
  { name: 'Chocolate', emoji: '🍫', gradient: 'from-amber-600 to-brown-500', badge: 'Lactose' }
];

export default function GreemyPurchaseSelector() {
  const { selectedSize, setSelectedSize, selectedFlavor, setSelectedFlavor, prices } = useGreemy();
  const currentPrice = prices[selectedSize];

  const handleBuyNow = () => {
    const checkoutLinks = {
      1: 'https://buy.stripe.com/00g3eVehK2LgfbW6oB',
      3: 'https://buy.stripe.com/6oE2b13wY4To3vafZc'
    };
    window.location.href = checkoutLinks[selectedSize];
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Escolha a quantidade */}
        <div className="mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Escolha a quantidade:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sizes.map((size) => (
              <motion.button
                key={size.id}
                onClick={() => setSelectedSize(size.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative p-6 lg:p-8 rounded-3xl border-4 transition-all ${
                  selectedSize === size.id
                    ? 'border-pink-500 bg-gradient-to-br from-pink-50 to-white shadow-xl'
                    : 'border-gray-200 bg-white hover:border-pink-200'
                }`}
              >
                {size.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                    Mais Vendido
                  </Badge>
                )}
                
                <div className="text-center">
                  <div className={`text-3xl lg:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${size.gradient}`}>
                    {size.units}
                  </div>
                  <div className="text-gray-600 text-lg mb-2">{size.subtitle}</div>
                  {size.discount && (
                    <div className="text-pink-600 font-bold text-xl">{size.discount}</div>
                  )}
                </div>

                {selectedSize === size.id && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Escolha seu sabor */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Escolha seu sabor:
            </h3>
            <div className="text-pink-600 font-semibold">
              {selectedFlavor ? '1/1 selecionado' : '0/1 selecionado'}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {flavors.map((flavor) => (
              <motion.button
                key={flavor.name}
                onClick={() => setSelectedFlavor(flavor.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative p-6 rounded-2xl border-3 transition-all ${
                  selectedFlavor === flavor.name
                    ? 'border-pink-500 bg-gradient-to-br from-pink-50 to-white shadow-lg'
                    : 'border-gray-200 bg-white hover:border-pink-200'
                }`}
              >
                {flavor.special && selectedFlavor === flavor.name && (
                  <Badge className="absolute -top-2 -left-2 bg-green-500 text-white">
                    + {flavor.special}
                  </Badge>
                )}
                {flavor.badge && (
                  <Badge className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs">
                    {flavor.badge}
                  </Badge>
                )}
                
                <div className="text-center">
                  <div className="text-5xl mb-3">{flavor.emoji}</div>
                  <div className={`font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r ${flavor.gradient}`}>
                    {flavor.name}
                  </div>
                </div>

                {selectedFlavor === flavor.name && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm">
            Clique no sabor desejado (clique novamente para desselecionar)
          </p>
        </div>

        {/* Price and Buy Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-pink-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-gray-500 text-sm mb-1">Valor total:</div>
              <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
                R$ {currentPrice.toFixed(2).replace('.', ',')}
              </div>
              <div className="text-gray-600 text-sm mt-1">Em até 12x sem juros</div>
            </div>
            
            <Button
              onClick={handleBuyNow}
              disabled={!selectedFlavor}
              className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-xl px-12 py-8 rounded-2xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="w-6 h-6 mr-3" />
              COMPRAR AGORA
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}