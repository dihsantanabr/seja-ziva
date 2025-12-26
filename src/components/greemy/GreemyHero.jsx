import React, { useState } from 'react';
import { Star, Shield, Leaf, Heart, Check, Truck, ChevronLeft, ChevronRight, Package, Tag, Zap, Sparkles, Activity, Flower2, Wind } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GreemyStories from './GreemyStories';
import GreemyQuickNav from './GreemyQuickNav';
import { useGreemy } from './GreemyContext';

const productImages = [
  "https://www.avozon.com.br/cdn/shop/files/Oleo_de_Avocado_Ozonizado_-_1_unidade.png",
  "https://www.avozon.com.br/cdn/shop/files/1_1.png",
  "https://www.avozon.com.br/cdn/shop/files/Segurando_Cartucho.png",
  "https://www.avozon.com.br/cdn/shop/files/Segurando_Oleo.png",
  "https://www.avozon.com.br/cdn/shop/files/Oleo_e_cartucho.png"
];

export default function GreemyHero() {
  const [selectedImage, setSelectedImage] = useState(0);
  const { selectedSize, setSelectedSize, selectedFlavor, setSelectedFlavor, prices } = useGreemy();

  // Calculate dynamic reviews based on date (98 reviews per day)
  const baseDate = new Date('2025-12-26');
  const baseReviews = 1473;
  const reviewsPerDay = 98;
  const today = new Date();
  const daysDiff = Math.floor((today - baseDate) / (1000 * 60 * 60 * 24));
  const currentReviews = baseReviews + (daysDiff * reviewsPerDay);
  const formattedReviews = currentReviews.toLocaleString('pt-BR');

  // Auto-advance images every 1 second
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % productImages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pricesWithExtras = {
    '1 Unidade': { ...prices['1 Unidade'], badge: '30ml', duration: '1 frasco' },
    '3 Unidades': { ...prices['3 Unidades'], badge: '90ml total', duration: '3 frascos' }
  };

  // Calculate delivery dates
  const minDeliveryDate = new Date(today);
  minDeliveryDate.setDate(today.getDate() + 4);
  const maxDeliveryDate = new Date(today);
  maxDeliveryDate.setDate(today.getDate() + 8);

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  };

  const getCheckoutLink = () => {
    return 'https://www.avozon.com.br/collections/oleo-ozonizado-1/products/oleo-de-avocado-ozonizado-30ml-1';
  };

  const handleBuyClick = () => {
    window.location.href = getCheckoutLink();
  };

  return (
    <section className="bg-gradient-to-b from-teal-50 to-white">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-2.5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="flex items-center gap-2 text-sm">
                <Truck className="w-4 h-4" />
                10% Cashback em todas as compras
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Leaf className="w-4 h-4" />
                100% Natural Ozonizado
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Heart className="w-4 h-4" />
                Hidratação intensa
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
              <span className="text-xs font-medium text-gray-500">+22MIL VENDIDOS</span>
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
              Óleo de Avocado <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Ozonizado 30ml</span>
            </h1>

            <div className="relative aspect-[2/3] bg-white rounded-2xl overflow-hidden shadow-lg">
              <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
                Mais Vendido
              </Badge>
              <img
                src={productImages[selectedImage]}
                alt="Óleo de Avocado Ozonizado"
                className="w-full h-full object-contain p-3"
              />
            </div>
            
            {/* Progress Dots */}
            <div className="flex gap-2 justify-center">
              {productImages.slice(0, 10).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`h-2 rounded-full transition-all ${
                    selectedImage === idx ? 'w-8 bg-green-600' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 lg:space-y-6">
            <div>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 font-medium text-sm uppercase tracking-wider mb-2">
                Cuidado Natural da Pele
              </p>
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Óleo de Avocado
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Ozonizado 30ml</span>
              </h1>
              <p className="mt-2 text-base lg:text-lg text-gray-600">
                Hidratação intensa com toque sedoso. Rico em vitaminas e antioxidantes, promove pele saudável, nutrida e com vitalidade natural.
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
              <Badge variant="outline" className="border-teal-600 text-teal-600 px-3 py-1.5">
                <Leaf className="w-3.5 h-3.5 mr-1.5" />
                100% Natural
              </Badge>
              <Badge variant="outline" className="border-teal-600 text-teal-600 px-3 py-1.5">
                <Heart className="w-3.5 h-3.5 mr-1.5" />
                Hidratação Intensa
              </Badge>
              <Badge variant="outline" className="border-teal-600 text-teal-600 px-3 py-1.5">
                <Shield className="w-3.5 h-3.5 mr-1.5" />
                Alívio de Irritações
              </Badge>
              <Badge variant="outline" className="border-teal-600 text-teal-600 px-3 py-1.5">
                <Zap className="w-3.5 h-3.5 mr-1.5" />
                Rápida Absorção
              </Badge>
              <Badge variant="outline" className="border-teal-600 text-teal-600 px-3 py-1.5">
                <Heart className="w-3.5 h-3.5 mr-1.5" />
                Cruelty Free
              </Badge>
              <Badge variant="outline" className="border-teal-600 text-teal-600 px-3 py-1.5">
                <Leaf className="w-3.5 h-3.5 mr-1.5" />
                Vegano
              </Badge>
            </div>

            {/* Price Box */}
            <div className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-100">
              {pricesWithExtras[selectedSize].discount > 0 && (
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg text-gray-400 line-through">
                    R$ {pricesWithExtras[selectedSize].original.toFixed(2).replace('.', ',')}
                  </span>
                  <Badge className="bg-teal-600 text-white">
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
              <div className="flex items-center gap-2 mt-3 text-teal-700 bg-teal-50 px-3 py-2 rounded-lg">
                <div className="relative">
                  <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 bg-teal-600 rounded-full animate-ping opacity-75" />
                </div>
                <span className="text-sm font-medium">
                  {selectedSize === '1 Unidade' 
                    ? 'Receba de Volta 10% em Cashback'
                    : `Receba de Volta R$ ${(pricesWithExtras[selectedSize].current * 0.1).toFixed(2).replace('.', ',')} em Cashback`
                  }
                </span>
              </div>
            </div>



            {/* Size Selection */}
            <div>
              <p className="font-medium text-gray-700 mb-3">Escolha a quantidade:</p>
              <div className="grid grid-cols-2 gap-4">
                {Object.keys(pricesWithExtras).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`relative px-6 py-5 rounded-xl border-2 font-medium transition-all text-center ${
                      selectedSize === size
                        ? 'border-teal-600 bg-gradient-to-r from-teal-600 to-emerald-600 text-white'
                        : 'border-gray-200 text-gray-700 hover:border-teal-600'
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
                      {size === '1 Unidade' ? 'Tratamento: 30 Dias' : 'Tratamento: 90 Dias'}
                    </div>
                    {size === '3 Unidades' && (
                      <div className={`text-xs font-bold mt-1 ${selectedSize === size ? 'text-white' : 'text-teal-600'}`}>
                        11% OFF
                      </div>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Unit Price Box - Only for 3 Units */}
              {selectedSize === '3 Unidades' && (
                <div className="mt-4 bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
                  <p className="text-teal-800 font-semibold">
                    Cada Unidade sai por R$ {(pricesWithExtras[selectedSize].current / 3).toFixed(2).replace('.', ',')}
                  </p>
                </div>
              )}
            </div>

            {/* Buy Button */}
            <Button 
              onClick={handleBuyClick}
              className="w-full h-12 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-lg font-semibold rounded-xl shadow-lg shadow-teal-600/25 transition-all hover:shadow-xl hover:shadow-teal-600/30"
            >
              Comprar Agora
            </Button>

            {/* Delivery Estimate */}
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Package className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-teal-900">
                      Chegará Grátis entre {formatDate(minDeliveryDate)} e {formatDate(maxDeliveryDate)}
                    </p>
                    {selectedSize === '3 Unidades' && (
                      <Badge className="bg-green-600 hover:bg-green-700 text-white">
                        Receba + Rápido
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-teal-700 mt-1">
                    Confirme o prazo final na próxima etapa.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-teal-50 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-teal-600/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Acelera Cicatrização</p>
              </div>
              <div className="bg-teal-50 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-teal-600/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Flower2 className="w-5 h-5 text-teal-600" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Estimula Colágeno</p>
              </div>
              <div className="bg-teal-50 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-teal-600/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Wind className="w-5 h-5 text-teal-600" />
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
                  <Check className="w-4 h-4 text-teal-600" />
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