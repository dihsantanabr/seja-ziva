import React, { useState } from 'react';
import { Star, Shield, Leaf, Heart, Check, Truck, ChevronLeft, ChevronRight, Package, Tag, Zap, Sparkles, Activity, Flower2, Wind, ClipboardList } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import GreemyStories from './GreemyStories';
import GreemyQuickNav from './GreemyQuickNav';
import { useGreemy } from './GreemyContext';

const productImages = [
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695d9796d8674f7efcac0aa1/66b1713a7_br-11134207-7qukw-lfsqn9uymlmma5.jpeg"
];

const flavors = [
  { id: 'cranberry', name: 'Cranberry', emoji: '🍒', color: 'from-red-500 to-pink-500' },
  { id: 'tropical', name: 'Frutas Tropicais', emoji: '🍍', color: 'from-yellow-500 to-orange-500' },
  { id: 'limao', name: 'Limão', emoji: '🍋', color: 'from-lime-500 to-green-500' },
  { id: 'pink-lemonade', name: 'Pink Lemonade', emoji: '🍹', color: 'from-pink-400 to-rose-400' },
  { id: 'tangerina', name: 'Tangerina', emoji: '🍊', color: 'from-orange-500 to-amber-500' }
];

export default function GreemyHero() {
  const [selectedImage, setSelectedImage] = useState(0);
  const { selectedSize, setSelectedSize, selectedFlavor, setSelectedFlavor, prices } = useGreemy();
  const [selectedFlavors, setSelectedFlavors] = useState([]);

  // Calculate dynamic reviews based on date (98 reviews per day)
  const baseDate = new Date('2025-12-26');
  const baseReviews = 1473;
  const reviewsPerDay = 98;
  const today = new Date();
  const daysDiff = Math.floor((today - baseDate) / (1000 * 60 * 60 * 24));
  const currentReviews = baseReviews + (daysDiff * reviewsPerDay);
  const formattedReviews = currentReviews.toLocaleString('pt-BR');



  const pricesWithExtras = {
    '1 Unidade': { ...prices['1 Unidade'], badge: '30ml', duration: '1 frasco' },
    '3 Unidades': { ...prices['3 Unidades'], badge: '90ml total', duration: '3 frascos' }
  };

  // Calculate delivery dates (faster for 3 units)
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
      // Para 1 unidade: toggle simples
      if (count > 0) {
        setSelectedFlavors([]);
      } else {
        setSelectedFlavors([flavorId]);
      }
    } else {
      // Para 3 unidades: permite adicionar múltiplos do mesmo sabor
      if (totalSelected < maxFlavors) {
        // Se tem espaço, adiciona mais um deste sabor
        setSelectedFlavors([...selectedFlavors, flavorId]);
      } else if (count > 0) {
        // Se já está no limite total e este sabor está selecionado, zera todos deste sabor
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
    <section className="bg-white">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-pink-500 to-pink-700 text-white py-2.5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="flex items-center gap-2 text-sm">
                <Truck className="w-4 h-4" />
                10% Cashback em todas as compras
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Leaf className="w-4 h-4" />
                Colágeno Verisol® + Ácido Hialurônico
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Heart className="w-4 h-4" />
                Reduz rugas em até 4 semanas
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stories Section */}
      <GreemyStories />

      <div className="max-w-7xl mx-auto px-4 py-6 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4 lg:sticky lg:top-8 lg:self-start">
            {/* Mobile Stats Bar */}
            <div className="lg:hidden flex items-center justify-between px-2 py-2">
              <span className="text-xs font-medium text-gray-500">+117 MIL VENDAS</span>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-gray-900 text-sm">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-gray-500">({formattedReviews})</span>
              </div>
            </div>

            {/* Mobile Title */}
            <h1 className="lg:hidden text-lg font-bold text-gray-900 text-center">
              Colágeno Verisol® <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">+ Ácido Hialurônico</span>
            </h1>

            <div className="relative aspect-[2/3] bg-white rounded-2xl overflow-hidden shadow-lg">
              <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
                Mais Vendido
              </Badge>
              <img
                src={productImages[0]}
                alt="Colágeno Verisol® + Ácido Hialurônico"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 lg:space-y-6">
            <div>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600 font-medium text-sm uppercase tracking-wider mb-2">
                Cuidado Natural da Pele
              </p>
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Colágeno Verisol®
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">+ Ácido Hialurônico</span>
              </h1>
              <p className="mt-2 text-base lg:text-lg text-gray-600">
                Beleza que começa de dentro. Reduz rugas, aumenta firmeza e hidrata profundamente sua pele em até 4 semanas.
              </p>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-gray-900 text-sm lg:text-base">4.9</span>
              <span className="text-gray-500 hidden lg:inline">•</span>
              <span className="text-gray-600 text-sm lg:text-base">{formattedReviews} avaliações</span>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-pink-500 text-pink-600 px-3 py-1.5">
                <Star className="w-3.5 h-3.5 mr-1.5" />
                Colágeno Verisol®
              </Badge>
              <Badge variant="outline" className="border-pink-500 text-pink-600 px-3 py-1.5">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Ácido Hialurônico
              </Badge>
              <Badge variant="outline" className="border-pink-500 text-pink-600 px-3 py-1.5">
                <Heart className="w-3.5 h-3.5 mr-1.5" />
                Reduz Rugas
              </Badge>
              <Badge variant="outline" className="border-pink-500 text-pink-600 px-3 py-1.5">
                <Zap className="w-3.5 h-3.5 mr-1.5" />
                Aumenta Firmeza
              </Badge>
              <Badge variant="outline" className="border-pink-500 text-pink-600 px-3 py-1.5">
                <Shield className="w-3.5 h-3.5 mr-1.5" />
                Hidrata Profundamente
              </Badge>
              <Badge variant="outline" className="border-pink-500 text-pink-600 px-3 py-1.5">
                <Leaf className="w-3.5 h-3.5 mr-1.5" />
                Resultados em 4 Semanas
              </Badge>
            </div>

            {/* Price Box */}
            <div className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-100">
              {pricesWithExtras[selectedSize].discount > 0 && (
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg text-gray-400 line-through">
                    R$ {pricesWithExtras[selectedSize].original.toFixed(2).replace('.', ',')}
                  </span>
                  <Badge className="bg-pink-600 text-white">
                    {pricesWithExtras[selectedSize].discount}% OFF
                  </Badge>
                </div>
              )}
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-gray-900">
                  R$ {pricesWithExtras[selectedSize].current.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                ou 4x de R$ {(pricesWithExtras[selectedSize].current / 4).toFixed(2).replace('.', ',')} sem juros
              </p>
              <div className="flex items-center gap-2 mt-3 text-green-800 bg-green-100 px-3 py-2 rounded-lg">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 bg-green-600 rounded-full animate-ping opacity-75" />
                </div>
                <span className="text-sm font-medium">
                  {selectedSize === '1 Unidade' 
                    ? 'Receba de Volta 10% em Cashback'
                    : `Receba de Volta R$ ${(pricesWithExtras[selectedSize].current * 0.1).toFixed(2).replace('.', ',')} em Cashback`
                  }
                </span>
              </div>
              </div>

              {/* Unit Price Info - Only for 3 Units */}
              {selectedSize === '3 Unidades' && (
                <div className="bg-green-100 border border-green-300 rounded-xl p-3 text-center">
                  <p className="text-green-800 font-semibold text-sm">
                    Cada Colágeno sai por R$ {(pricesWithExtras[selectedSize].current / 3).toFixed(2).replace('.', ',')}
                  </p>
                </div>
              )}

              {/* Size Selection */}
            <div>
              <p className="font-medium text-gray-700 mb-3">Escolha a quantidade:</p>
              <div className="grid grid-cols-2 gap-4">
                {Object.keys(pricesWithExtras).map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeChange(size)}
                    className={`relative px-6 py-5 rounded-xl border-2 font-medium transition-all text-center ${
                      selectedSize === size
                        ? 'border-pink-500 bg-gradient-to-r from-pink-500 to-pink-600 text-white'
                        : 'border-gray-200 text-gray-700 hover:border-pink-500'
                    }`}
                  >
                    {size === '3 Unidades' && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                        <span className="bg-orange-200 text-orange-800 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                          Mais Vendido
                        </span>
                      </div>
                    )}
                    <div className="text-base font-bold mb-1">{size}</div>
                    <div className={`text-sm ${selectedSize === size ? 'text-white/80' : 'text-gray-500'}`}>
                      {size === '1 Unidade' ? 'Rotina: 30 Dias' : 'Rotina: 90 Dias'}
                    </div>
                    {size === '3 Unidades' && (
                      <div className={`text-xs font-bold mt-1 ${selectedSize === size ? 'text-white' : 'text-pink-500'}`}>
                        11% OFF
                      </div>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Unit Price Box - Only for 3 Units */}
              {selectedSize === '3 Unidades' && (
                <div className="mt-3 bg-pink-100 border border-pink-300 rounded-xl p-3 text-center">
                  <p className="text-pink-800 font-semibold text-sm">
                    Cada Unidade sai por R$ {(pricesWithExtras[selectedSize].current / 3).toFixed(2).replace('.', ',')}
                  </p>
                </div>
              )}
            </div>

            {/* Flavor Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-gray-700">
                  {selectedSize === '1 Unidade' ? 'Escolha seu sabor:' : 'Escolha seus sabores:'}
                </p>
                <span className="text-sm text-pink-600 font-medium">
                  {selectedFlavors.length}/{maxFlavors} {selectedSize === '1 Unidade' ? 'selecionado' : 'selecionados'}
                </span>
              </div>

              {/* Flavor Options */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {flavors.map((flavor) => {
                  const count = getFlavorCount(flavor.id);
                  const isDisabled = selectedFlavors.length >= maxFlavors && count === 0;
                  
                  return (
                    <button
                      key={flavor.id}
                      onClick={() => handleFlavorClick(flavor.id)}
                      disabled={isDisabled}
                      className={`relative p-4 rounded-xl border-2 transition-all text-center active:scale-95 ${
                        count > 0
                          ? 'border-pink-500 bg-gradient-to-br ' + flavor.color + ' text-white'
                          : isDisabled
                          ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                          : 'border-gray-200 hover:border-pink-300 text-gray-700'
                      }`}
                    >
                      {count > 0 && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {count}
                        </div>
                      )}
                      <div className="text-3xl mb-2">{flavor.emoji}</div>
                      <div className={`text-sm font-semibold ${count > 0 ? 'text-white' : ''}`}>
                        {flavor.name}
                      </div>
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-gray-500 mt-2 text-center">
                {selectedSize === '1 Unidade' 
                  ? 'Clique no sabor desejado (clique novamente para desselecionar)'
                  : 'Clique para adicionar sabores (pode escolher múltiplos do mesmo)'
                }
              </p>
            </div>

            {/* Buy Button */}
            <Button 
              onClick={handleBuyClick}
              disabled={selectedFlavors.length < maxFlavors}
              className="w-full h-12 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-lg font-semibold rounded-xl shadow-lg shadow-pink-500/25 transition-all hover:shadow-xl hover:shadow-pink-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {selectedFlavors.length < maxFlavors
                ? `Selecione ${maxFlavors - selectedFlavors.length} sabor${maxFlavors - selectedFlavors.length > 1 ? 'es' : ''} para continuar`
                : 'Comprar Agora'
              }
            </Button>

            {/* Quiz Button */}
            <Link to={createPageUrl('Quiz')} className="w-full">
              <Button 
                variant="ghost"
                className="w-full h-12 text-gray-600 hover:text-pink-600 hover:bg-transparent text-sm font-normal"
              >
                <ClipboardList className="w-4 h-4 mr-2" />
                Descubra se esse colágeno é para você
              </Button>
            </Link>

            {/* Delivery Estimate */}
            <div className="bg-pink-100 border border-pink-300 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Package className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-pink-900">
                      Chegará Grátis entre {formatDate(minDeliveryDate)} e {formatDate(maxDeliveryDate)}
                    </p>
                    {selectedSize === '3 Unidades' && (
                      <Badge className="bg-green-600 hover:bg-green-700 text-white">
                        Receba + Rápido
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-pink-700 mt-1">
                    Confirme o prazo final na próxima etapa.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-pink-100 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Acelera Cicatrização</p>
              </div>
              <div className="bg-pink-100 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Flower2 className="w-5 h-5 text-pink-600" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Estimula Colágeno</p>
              </div>
              <div className="bg-pink-100 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Wind className="w-5 h-5 text-pink-600" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Ação Calmante</p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
              {[
                'Anti Envelhecimento Natural',
                'Manutenção de Manchas',
                'Recomendado para Cuidados Íntimos',
                'Controle de Caspas'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-pink-600" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation Menu */}
      <GreemyQuickNav />
    </section>
  );
}