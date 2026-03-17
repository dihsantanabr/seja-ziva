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
  'https://media.base44.com/images/public/698f17e9124bfe3a6f9a6198/6581dae92_Screenshot2026-03-17at140841.png',
  'https://sejaziva.com.br/cdn/shop/files/Design_sem_nome_4_1.png',
  'https://sejaziva.com.br/cdn/shop/files/Sache_Probiotico_WEBP.webp'
];

const flavors = [
  { 
    id: 'cranberry', 
    name: 'Sérum Íntimo Ozonizado', 
    image: 'https://sejaziva.com.br/cdn/shop/files/2_ef7a6779-789b-4749-84b2-893761bc28f1.png?v=1764703506', 
    price: 187.00, 
    color: 'from-blue-500 to-cyan-500', 
    mostChosen: true, 
    code: '6J3KDTF80E',
    benefits: [
      'Hidratação profunda',
      'Combate odores',
      'Previne infecções'
    ]
  },
  { 
    id: 'tropical', 
    name: 'Espuma Íntima Ozonizada', 
    image: 'https://sejaziva.com.br/cdn/shop/files/3_f86c8057-32aa-4f7f-ab7b-a402d1f2c134.png?v=1764703529', 
    price: 117.00, 
    color: 'from-purple-500 to-pink-500', 
    code: 'GAA70WUDT7',
    benefits: [
      'Limpeza suave',
      'Frescor duradouro',
      'Não resseca'
    ]
  }
];

// Códigos de produtos
const PROBIOTIC_CODES = {
  '1 Unidade': 'CODIGO_PROBIOTICO_1',
  '3 Unidades': 'CODIGO_PROBIOTICO_3'
};

const FLAVOR_CODES = {
  'cranberry': '6J3KDTF80E',
  'tropical': 'GAA70WUDT7'
};

export default function GreemyHero() {
  const [selectedImage, setSelectedImage] = useState(0);
  const { selectedSize, setSelectedSize, selectedFlavor, setSelectedFlavor, selectedFlavors, setSelectedFlavors, prices } = useGreemy();

  // Fixed number of reviews
  const formattedReviews = '+2.352';
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
    '1 Unidade': { ...prices['1 Unidade'], badge: '30ml', duration: '1 frasco' }
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
    // Sempre adicionar o probiótico base
    const productParts = [PROBIOTIC_CODES[selectedSize] + ':1'];

    // Adicionar produtos opcionais se selecionados
    if (selectedFlavors && selectedFlavors.length > 0) {
      const flavorCounts = {};
      selectedFlavors.forEach(flavorId => {
        flavorCounts[flavorId] = (flavorCounts[flavorId] || 0) + 1;
      });

      Object.entries(flavorCounts).forEach(([flavorId, quantity]) => {
        const code = FLAVOR_CODES[flavorId];
        if (code) {
          productParts.push(`${code}:${quantity}`);
        }
      });
    }

    // Montar a URL final
    const baseUrl = 'https://seguro.renovabe.com/r/';
    const checkoutUrl = baseUrl + productParts.join(',');
    
    console.log('=== DEBUG CHECKOUT HERO ===');
    console.log('Tamanho selecionado:', selectedSize);
    console.log('Produtos opcionais:', selectedFlavors);
    console.log('Códigos gerados:', productParts);
    console.log('URL final:', checkoutUrl);
    console.log('==========================');
    
    // Redirecionar imediatamente
    window.location.href = checkoutUrl;
  };

  const maxPerProduct = 1;

  const handleFlavorClick = (flavorId) => {
    const count = getFlavorCount(flavorId);
    
    if (count === 0) {
      // Adiciona o produto
      setSelectedFlavors([...selectedFlavors, flavorId]);
    } else {
      // Remove o produto
      const newFlavors = selectedFlavors.filter(f => f !== flavorId);
      setSelectedFlavors(newFlavors);
    }
  };

  const getFlavorCount = (flavorId) => {
    return selectedFlavors?.filter(f => f === flavorId).length || 0;
  };



  // Calcular preço total incluindo produtos opcionais
  const calculateTotalPrice = () => {
    let total = pricesWithExtras[selectedSize].current;
    
    if (selectedFlavors && selectedFlavors.length > 0) {
      selectedFlavors.forEach(flavorId => {
        const flavor = flavors.find(f => f.id === flavorId);
        if (flavor && flavor.price) {
          total += flavor.price;
        }
      });
    }
    
    return total;
  };

  const totalPrice = calculateTotalPrice();

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
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698f17e9124bfe3a6f9a6198/9eab2108f_Screenshot2026-02-13at165800.png"
            alt="Ziva Health"
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
                O simbiótico que acabou com a candidíase recorrente, o odor e o desconforto íntimo de mais de 2.352 mulheres.
              </p>
              <div className="mt-3 inline-flex items-center gap-2 bg-pink-50 border border-pink-200 rounded-full px-4 py-2">
                <span className="text-lg">🍬</span>
                <span className="text-sm font-semibold text-pink-700">Sabor Algodão Doce</span>
                <span className="text-xs text-pink-500 bg-pink-100 rounded-full px-2 py-0.5">Delicioso!</span>
              </div>
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
                <span className="whitespace-nowrap">Sem Candidíase</span>
              </Badge>
              <Badge variant="outline" className="border-pink-500 text-pink-600 px-2 py-1 text-xs lg:px-3 lg:py-1.5 lg:text-sm">
                <Heart className="w-3 h-3 lg:w-3.5 lg:h-3.5 mr-1 lg:mr-1.5" />
                <span className="whitespace-nowrap">Equilibra pH</span>
              </Badge>
              <Badge variant="outline" className="border-pink-500 text-pink-600 px-2 py-1 text-xs lg:px-3 lg:py-1.5 lg:text-sm">
                <Zap className="w-3 h-3 lg:w-3.5 lg:h-3.5 mr-1 lg:mr-1.5" />
                <span className="whitespace-nowrap">Resultado em 7 dias</span>
              </Badge>
              <Badge variant="outline" className="border-pink-500 text-pink-600 px-2 py-1 text-xs lg:px-3 lg:py-1.5 lg:text-sm">
                <Sparkles className="w-3 h-3 lg:w-3.5 lg:h-3.5 mr-1 lg:mr-1.5" />
                <span className="whitespace-nowrap">Elimina Odores</span>
              </Badge>
              <Badge variant="outline" className="border-pink-500 text-pink-600 px-2 py-1 text-xs lg:px-3 lg:py-1.5 lg:text-sm">
                <Leaf className="w-3 h-3 lg:w-3.5 lg:h-3.5 mr-1 lg:mr-1.5" />
                <span className="whitespace-nowrap">10 Bilhões UFC</span>
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
                  R$ {totalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <p className="text-xs lg:text-sm text-gray-600 mt-2">
                ou 3x de R$ {(totalPrice / 3).toFixed(2).replace('.', ',')} sem juros
              </p>
              <div className="flex items-center gap-2 mt-3 text-green-800 bg-green-100 px-2 lg:px-3 py-2 rounded-lg">
                <div className="relative flex-shrink-0">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 bg-green-600 rounded-full animate-ping opacity-75" />
                </div>
                <span className="text-xs lg:text-sm font-medium">
                  Receba de Volta R$ {(totalPrice * 0.1).toFixed(2).replace('.', ',')} em Cashback
                </span>
              </div>
              </div>



            {/* Complementary Products */}
            <div>
              <div className="mb-3">
                <p className="font-medium text-gray-700 text-sm lg:text-base mb-1">
                  Complete sua Rotina de Cuidado:
                </p>
                <p className="text-xs text-gray-500">
                  Opcional: Adicione 1 de cada produto complementar
                </p>
              </div>

              {/* Flavor Options */}
              <div className="grid grid-cols-2 gap-3">
                {flavors.map((flavor) => {
                  const count = getFlavorCount(flavor.id);

                  return (
                    <button
                      key={flavor.id}
                      onClick={() => handleFlavorClick(flavor.id)}
                      className={`relative p-3 lg:p-4 rounded-xl border-2 transition-all text-center active:scale-95 ${
                        flavor.image ? 'min-h-[140px] lg:min-h-[160px]' : ''
                      } ${
                        count > 0
                          ? 'border-pink-500 bg-white'
                          : 'border-gray-200 hover:border-pink-300 bg-white'
                      } text-gray-700`}
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
                      {flavor.image ? (
                        <div className="mb-2 flex items-center justify-center h-16 lg:h-20">
                          <img src={flavor.image} alt={flavor.name} className="h-full w-auto object-contain" />
                        </div>
                      ) : (
                        <div className="text-2xl lg:text-3xl mb-1 lg:mb-2">{flavor.emoji}</div>
                      )}
                      <div className="text-xs lg:text-sm font-semibold break-words text-gray-700">
                        {flavor.name}
                      </div>
                      <div className="text-xs lg:text-sm font-bold mt-1 text-gray-900">
                        R$ {flavor.price.toFixed(2).replace('.', ',')}
                      </div>
                      {flavor.benefits && (
                        <div className="mt-2 space-y-1">
                          {flavor.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-1 text-[10px] lg:text-xs text-gray-600">
                              <Check className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-pink-500 flex-shrink-0" />
                              <span className="leading-tight">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      </button>
                  );
                })}
              </div>

              <p className="text-xs text-gray-500 mt-2 text-center">
                Clique para adicionar ao carrinho. Clique novamente para remover.
              </p>
            </div>

            {/* Buy Button */}
            <Button 
              onClick={handleBuyClick}
              className="w-full h-11 lg:h-12 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-base lg:text-lg font-semibold rounded-xl shadow-lg shadow-pink-500/25 transition-all hover:shadow-xl hover:shadow-pink-500/30"
            >
              Comprar Agora
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