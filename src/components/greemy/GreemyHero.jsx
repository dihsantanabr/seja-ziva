import React, { useState, useEffect } from 'react';
import { Star, Shield, Leaf, Heart, Check, Truck, ChevronLeft, ChevronRight, Package, Tag, Zap, Sparkles, Activity, Flower2, Wind, ClipboardList, Clock, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import GreemyStories from './GreemyStories';
import GreemyQuickNav from './GreemyQuickNav';
import { useGreemy } from './GreemyContext';

const productImages = [
  'https://sejaziva.com.br/cdn/shop/files/PROBIOTICO_-_04.png',
  'https://sejaziva.com.br/cdn/shop/files/Design_sem_nome_4_1.png',
  'https://sejaziva.com.br/cdn/shop/files/Sache_Probiotico_WEBP.webp'
];

const flavors = [
  { id: 'cranberry', name: 'Cranberry', emoji: '🍒', color: 'from-red-500 to-pink-500', mostChosen: true, code: '6J3KDTF80E' },
  { id: 'tropical', name: 'Frutas Tropicais', emoji: '🍍', color: 'from-yellow-500 to-orange-500', code: 'GAA70WUDT7' },
  { id: 'limao', name: 'Limão', emoji: '🍋', color: 'from-lime-500 to-green-500', code: 'OY7JZG4UE9' },
  { id: 'pink-lemonade', name: 'Pink Lemonade', emoji: '🍹', color: 'from-pink-400 to-rose-400', code: 'Q7TJA8P8X6' },
  { id: 'tangerina', name: 'Tangerina', emoji: '🍊', color: 'from-orange-500 to-amber-500', code: '4JF2A26WUQ' },
  { id: 'chocolate', name: 'Chocolate', emoji: '🍫', color: 'from-amber-700 to-brown-600', hasLactose: true, code: 'OY9KOFHD8D' }
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

export default function GreemyHero() {
  const [selectedImage, setSelectedImage] = useState(0);
  const { selectedSize, setSelectedSize, selectedFlavor, setSelectedFlavor, selectedFlavors, setSelectedFlavors, prices } = useGreemy();

  // Fixed number of reviews
  const formattedReviews = '37';
  const today = new Date();

  // Countdown timer (4 days, then resets)
  const [timeLeft, setTimeLeft] = useState({ days: 4 });
  
  // Live viewers counter (oscilates between 150-200)
  const [viewersCount, setViewersCount] = useState(175);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 4);
    targetDate.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24))
        });
      } else {
        // Reset after 4 days
        targetDate.setDate(targetDate.getDate() + 4);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateViewers = () => {
      // Random oscillation between 150-200 (175 ± 25)
      const baseCount = 175;
      const variation = Math.floor(Math.random() * 51) - 25; // -25 to +25
      setViewersCount(baseCount + variation);
    };

    // Update every 3-5 seconds
    const interval = setInterval(updateViewers, 3000 + Math.random() * 2000);
    
    return () => clearInterval(interval);
  }, []);

  const pricesWithExtras = {
    '1 Unidade': { ...prices['1 Unidade'], badge: '30ml', duration: '1 frasco' },
    '3 Unidades': { original: 897.00, current: 567.00, discount: 37, badge: '90ml total', duration: '3 frascos' }
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

  const handleBuyClick = () => {
    const maxFlavors = selectedSize === '1 Unidade' ? 1 : 3;
    
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
    
    console.log('=== DEBUG CHECKOUT HERO ===');
    console.log('Tamanho selecionado:', selectedSize);
    console.log('Sabores selecionados (array):', selectedFlavors);
    console.log('Contagem de sabores:', flavorCounts);
    console.log('Códigos gerados:', productParts);
    console.log('URL final:', checkoutUrl);
    console.log('==========================');
    
    // Redirecionar imediatamente
    window.location.href = checkoutUrl;
  };

  const maxFlavors = selectedSize === '1 Unidade' ? 1 : 3;

  const handleFlavorClick = (flavorId) => {
    const count = getFlavorCount(flavorId);
    const totalSelected = selectedFlavors?.length || 0;
    
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
    return selectedFlavors?.filter(f => f === flavorId).length || 0;
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
                Frete Grátis acima de R$ 249
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4" />
                10 Bilhões de UFC + Prebiótico FOS
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Heart className="w-4 h-4" />
                pH saudável e odor controlado
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Logo */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695d9796d8674f7efcac0aa1/81df3e842_LOGO-RENOVA-PRETO2.png"
            alt="Renova Be"
            className="h-8 lg:h-10 mx-auto"
          />
        </div>
      </div>

      {/* Stories Section */}
      <GreemyStories />

      <div className="max-w-7xl mx-auto px-4 pt-2 pb-6 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4 lg:sticky lg:top-8 lg:self-start">
            {/* Mobile Stats Bar */}
            <div className="lg:hidden flex items-center justify-between px-2">
              <span className="text-xs font-medium text-gray-500">+2 Milhões de Vendas</span>
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
            <h1 className="lg:hidden text-base font-bold text-gray-900 text-center px-2">
              Simbiótico Íntimo <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">para pH Saudável</span>
            </h1>

            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
              <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
                Mais Vendido
              </Badge>
              <img
                src={productImages[0]}
                alt="Simbiótico Íntimo"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 lg:space-y-6">
            <div>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600 font-medium text-xs lg:text-sm uppercase tracking-wider mb-2">
                Saúde Íntima Natural
              </p>
              <h1 className="text-xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Simbiótico Íntimo
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">Ziva</span>
              </h1>
              <p className="mt-2 text-sm lg:text-lg text-gray-600">
                Probiótico vaginal que equilibra pH, elimina odores e previne infecções. 10 bilhões de UFC + prebiótico FOS.
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
              <Badge variant="outline" className="border-pink-500 text-pink-600 px-2 py-1 text-xs lg:px-3 lg:py-1.5 lg:text-sm">
                <Shield className="w-3 h-3 lg:w-3.5 lg:h-3.5 mr-1 lg:mr-1.5" />
                <span className="whitespace-nowrap">10 Bilhões UFC</span>
              </Badge>
              <Badge variant="outline" className="border-pink-500 text-pink-600 px-2 py-1 text-xs lg:px-3 lg:py-1.5 lg:text-sm">
                <Heart className="w-3 h-3 lg:w-3.5 lg:h-3.5 mr-1 lg:mr-1.5" />
                <span className="whitespace-nowrap">Equilibra pH</span>
              </Badge>
              <Badge variant="outline" className="border-pink-500 text-pink-600 px-2 py-1 text-xs lg:px-3 lg:py-1.5 lg:text-sm">
                <Leaf className="w-3 h-3 lg:w-3.5 lg:h-3.5 mr-1 lg:mr-1.5" />
                <span className="whitespace-nowrap">Prebiótico FOS</span>
              </Badge>
              <Badge variant="outline" className="border-pink-500 text-pink-600 px-2 py-1 text-xs lg:px-3 lg:py-1.5 lg:text-sm">
                <Sparkles className="w-3 h-3 lg:w-3.5 lg:h-3.5 mr-1 lg:mr-1.5" />
                <span className="whitespace-nowrap">Elimina Odores</span>
              </Badge>
              <Badge variant="outline" className="border-pink-500 text-pink-600 px-2 py-1 text-xs lg:px-3 lg:py-1.5 lg:text-sm">
                <Zap className="w-3 h-3 lg:w-3.5 lg:h-3.5 mr-1 lg:mr-1.5" />
                <span className="whitespace-nowrap">Previne Infecções</span>
              </Badge>
              <Badge variant="outline" className="border-pink-500 text-pink-600 px-2 py-1 text-xs lg:px-3 lg:py-1.5 lg:text-sm">
                <Star className="w-3 h-3 lg:w-3.5 lg:h-3.5 mr-1 lg:mr-1.5" />
                <span className="whitespace-nowrap">30 Sachês</span>
              </Badge>
            </div>

            {/* Countdown Banner */}
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-3 border border-orange-200">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-orange-600 animate-pulse" />
                <span className="text-sm font-semibold text-orange-900">
                  Faltam {timeLeft.days} dias para essa oferta acabar
                </span>
              </div>
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden mt-2 relative">
                <div 
                  className="h-full bg-gradient-to-r from-orange-500 to-pink-500 relative"
                  style={{ width: '65%' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
                </div>
              </div>
              
              {/* Live Viewers */}
              <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-orange-200">
                <div className="relative">
                  <Eye className="w-4 h-4 text-orange-600" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
                <span className="text-xs font-medium text-gray-700">
                  <span className="font-bold text-orange-600">{viewersCount}</span> pessoas vendo esse produto agora
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-white rounded-2xl p-3 lg:p-6 border border-gray-100">
              {pricesWithExtras[selectedSize].discount > 0 && (
                <div className="flex items-center gap-1.5 lg:gap-2 mb-2 flex-wrap">
                  <span className="text-sm lg:text-lg text-gray-400 line-through">
                    R$ {pricesWithExtras[selectedSize].original.toFixed(2).replace('.', ',')}
                  </span>
                  <Badge className="bg-pink-600 text-white text-xs whitespace-nowrap">
                    {pricesWithExtras[selectedSize].discount}% OFF
                  </Badge>
                  <Badge className="bg-pink-600 text-white text-xs whitespace-nowrap">
                    Frete Grátis
                  </Badge>
                </div>
              )}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl lg:text-4xl font-bold text-gray-900">
                  R$ {pricesWithExtras[selectedSize].current.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <p className="text-xs lg:text-sm text-gray-600 mt-2">
                ou 6x de R$ {(pricesWithExtras[selectedSize].current / 6).toFixed(2).replace('.', ',')} sem juros
              </p>
              <div className="flex items-center gap-2 mt-3 text-green-800 bg-green-100 px-2 lg:px-3 py-2 rounded-lg">
                <div className="relative flex-shrink-0">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 bg-green-600 rounded-full animate-ping opacity-75" />
                </div>
                <span className="text-xs lg:text-sm font-medium">
                  Receba de Volta R$ {(pricesWithExtras[selectedSize].current * 0.1).toFixed(2).replace('.', ',')} em Cashback
                </span>
              </div>
              </div>

              {/* Size Selection */}
              <div>
              <p className="font-medium text-gray-700 mb-3 text-sm lg:text-base">Escolha a quantidade:</p>
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                {Object.keys(pricesWithExtras).map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeChange(size)}
                    className={`relative px-3 py-4 lg:px-6 lg:py-5 rounded-xl border-2 font-medium transition-all text-center ${
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
                    <div className="text-sm lg:text-base font-bold mb-1">{size}</div>
                    <div className={`text-xs lg:text-sm ${selectedSize === size ? 'text-white/80' : 'text-gray-500'}`}>
                      {size === '1 Unidade' ? 'Rotina de 30 Dias' : 'Rotina de 3 Meses'}
                    </div>
                    {size === '3 Unidades' && (
                      <div className={`text-[10px] lg:text-xs font-bold mt-1 ${selectedSize === size ? 'text-white' : 'text-pink-500'}`}>
                        43% OFF
                      </div>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Unit Price Box - Only for 3 Units */}
              {selectedSize === '3 Unidades' && (
                <div className="mt-3 bg-green-100 border border-green-300 rounded-xl p-2 lg:p-3 text-center">
                  <p className="text-green-800 font-semibold text-xs lg:text-sm">
                    Cada Unidade sai por R$ {(pricesWithExtras[selectedSize].current / 3).toFixed(2).replace('.', ',')}
                  </p>
                </div>
              )}
            </div>

            {/* Flavor Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-gray-700 text-sm lg:text-base">
                  {selectedSize === '1 Unidade' ? 'Escolha seu sabor:' : 'Escolha seus sabores:'}
                </p>
                <span className="text-xs lg:text-sm text-pink-600 font-medium whitespace-nowrap">
                  {selectedFlavors?.length || 0}/{maxFlavors} {selectedSize === '1 Unidade' ? 'selecionado' : 'selecionados'}
                </span>
              </div>

              {/* Flavor Options */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {flavors.map((flavor) => {
                  const count = getFlavorCount(flavor.id);
                  const isDisabled = (selectedFlavors?.length || 0) >= maxFlavors && count === 0;

                  return (
                    <button
                      key={flavor.id}
                      onClick={() => handleFlavorClick(flavor.id)}
                      disabled={isDisabled}
                      className={`relative p-3 lg:p-4 rounded-xl border-2 transition-all text-center active:scale-95 ${
                        count > 0
                          ? 'border-pink-500 bg-gradient-to-br ' + flavor.color + ' text-white'
                          : isDisabled
                          ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                          : 'border-gray-200 hover:border-pink-300 text-gray-700'
                      }`}
                      >
                      {count > 0 && (
                        <div className="absolute -top-2 -right-2 w-5 h-5 lg:w-6 lg:h-6 bg-pink-600 text-white rounded-full flex items-center justify-center text-[10px] lg:text-xs font-bold">
                          {count}
                        </div>
                      )}
                      {flavor.hasLactose && (
                        <div className="absolute -top-2 -left-2">
                          <Badge className="bg-amber-600 text-white text-[9px] lg:text-xs whitespace-nowrap px-1 lg:px-2">Lactose</Badge>
                        </div>
                      )}
                      {flavor.mostChosen && (
                        <div className="absolute -top-2 -left-2">
                          <Badge className="bg-green-600 text-white text-[9px] lg:text-xs whitespace-nowrap px-1 lg:px-2">+ Escolhido</Badge>
                        </div>
                      )}
                      <div className="text-2xl lg:text-3xl mb-1 lg:mb-2">{flavor.emoji}</div>
                      <div className={`text-xs lg:text-sm font-semibold break-words ${count > 0 ? 'text-white' : ''}`}>
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
              disabled={(selectedFlavors?.length || 0) < maxFlavors}
              className="w-full h-11 lg:h-12 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-base lg:text-lg font-semibold rounded-xl shadow-lg shadow-pink-500/25 transition-all hover:shadow-xl hover:shadow-pink-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {(selectedFlavors?.length || 0) < maxFlavors
                ? `Selecione ${maxFlavors - (selectedFlavors?.length || 0)} sabor${maxFlavors - (selectedFlavors?.length || 0) > 1 ? 'es' : ''}`
                : 'Comprar Agora'
              }
            </Button>

            {/* Delivery Estimate */}
            <div className="bg-green-100 border border-green-300 rounded-xl p-3 lg:p-4">
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

            {/* Trust Cards */}
            <div className="grid grid-cols-3 gap-2 lg:gap-3">
              <div className="bg-pink-100 rounded-xl p-2 lg:p-4 text-center">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                  <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-pink-600" />
                </div>
                <p className="font-semibold text-gray-900 text-[10px] lg:text-sm leading-tight">Proteção</p>
              </div>
              <div className="bg-pink-100 rounded-xl p-2 lg:p-4 text-center">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                  <Heart className="w-4 h-4 lg:w-5 lg:h-5 text-pink-600" />
                </div>
                <p className="font-semibold text-gray-900 text-[10px] lg:text-sm leading-tight">Equilíbrio</p>
              </div>
              <div className="bg-pink-100 rounded-xl p-2 lg:p-4 text-center">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                  <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-pink-600" />
                </div>
                <p className="font-semibold text-gray-900 text-[10px] lg:text-sm leading-tight">Bem-Estar</p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3 pt-4 border-t border-gray-100">
              {[
                'Regula pH Vaginal',
                'Elimina Odores Indesejados',
                'Previne Candidíase',
                'Restaura Flora Natural'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs lg:text-sm text-gray-600">
                  <Check className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-pink-600 flex-shrink-0" />
                  <span className="break-words">{benefit}</span>
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