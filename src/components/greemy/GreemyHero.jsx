import React, { useState } from 'react';
import { Star, Shield, Leaf, Heart, Check, Truck, ChevronLeft, ChevronRight, Package, Tag, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GreemyStories from './GreemyStories';
import GreemyQuickNav from './GreemyQuickNav';

const productImages = [
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/3241e2406_greemy01463.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/3a4bffd1d_greemy01464.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/306b7dd93_greemy01465.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/eca409eca_greemy01466.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/d64f3f7a0_greemy01467.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/6b81b3b53_greemy01468.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/5a05d7c8e_greemy01469.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/89e1cd01b_greemy01470.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/104b0b8b7_greemy01471.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/f5208c881_greemy01472.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/bf7edd9ff_greemy01473.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/e39dc02a4_greemy01474.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/3a1a3eea5_greemy01475.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/1b627cde0_greemy01476.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/7c74c221a_greemy01477.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/37f025e22_greemy01478.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/870e72d6f_greemy01479.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/d7747df96_greemy01480.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/a645c088d_greemy01481.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/0c801ff40_greemy01482.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/ab16ebbb0_greemy01483.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/d6a4ce0ce_greemy01484.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/d2571f294_greemy01485.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/f5d0223f3_greemy01486.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/d04307962_greemy01487.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/09d5f6cd4_greemy01489.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/77bf11766_greemy01490.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/611c90b22_greemy01491.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/d123bb568_greemy01492.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/81dfc51c1_greemy01493.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/0591585ce_greemy01494.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/5202101b6_greemy01495.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/1317ee5e0_greemy01496.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/67815b5c5_greemy01497.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/1fdf65293_greemy01498.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/6d0fda170_greemy01499.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/f0a618577_greemy01500.jpg"
];

export default function GreemyHero() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('2 Caixas');
  const [selectedFlavor, setSelectedFlavor] = useState('Limão Siciliano');

  // Auto-advance images every 1 second
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % productImages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const prices = {
    '1 Caixa': { original: 227.00, current: 167.90, discount: 26, badge: 'FRETE GRÁTIS', duration: 'Duração 30 dias' },
    '2 Caixas': { original: 454.00, current: 267.90, discount: 41, badge: '41%OFF + FRETE GRÁTIS', duration: 'Duração 60 dias' },
    '3 Caixas + 1 Grátis': { original: 908.00, current: 437.90, discount: 52, badge: '52%OFF + FRETE GRÁTIS', duration: 'Duração 120 dias' }
  };

  // Calculate delivery dates
  const today = new Date();
  const minDeliveryDate = new Date(today);
  minDeliveryDate.setDate(today.getDate() + 3);
  const maxDeliveryDate = new Date(today);
  maxDeliveryDate.setDate(today.getDate() + 9);

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  };



  return (
    <section className="bg-gradient-to-b from-green-50 to-white">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-green-600 to-lime-600 text-white py-2.5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="flex items-center gap-2 text-sm">
                <Truck className="w-4 h-4" />
                Frete Grátis para todo Brasil
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4" />
                Até 52% de Desconto
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Leaf className="w-4 h-4" />
                22 Superalimentos Verdes
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
            <div className="relative aspect-[2/3] bg-white rounded-2xl overflow-hidden shadow-lg">
              <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-green-600 to-lime-600 text-white">
                52% OFF
              </Badge>
              <img
                src={productImages[selectedImage]}
                alt="Greemy"
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
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600 font-medium text-sm uppercase tracking-wider mb-2">
                Energia Verde Premium
              </p>
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Greemy
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600">22 Superalimentos Verdes</span>
              </h1>
              <p className="mt-2 text-base lg:text-lg text-gray-600">
                Energia natural com 22 superalimentos verdes, vitaminas e minerais essenciais. Sabores Limão Siciliano e Laranja.
              </p>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-gray-900">4.9</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600">5.000+ avaliações reais</span>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-green-600 text-green-600 px-3 py-1.5">
                <Leaf className="w-3.5 h-3.5 mr-1.5" />
                22 Superalimentos
              </Badge>
              <Badge variant="outline" className="border-green-600 text-green-600 px-3 py-1.5">
                <Zap className="w-3.5 h-3.5 mr-1.5" />
                Energia Natural
              </Badge>
              <Badge variant="outline" className="border-green-600 text-green-600 px-3 py-1.5">
                <Heart className="w-3.5 h-3.5 mr-1.5" />
                Limão ou Laranja
              </Badge>
            </div>

            {/* Price Box */}
            <div className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-100">
              {prices[selectedSize].discount > 0 && (
                <div className="flex items-baseline gap-3">
                  <span className="text-gray-400 line-through text-lg">
                    R$ {prices[selectedSize].original.toFixed(2).replace('.', ',')}
                  </span>
                  <Badge className="bg-gradient-to-r from-green-600 to-lime-600 text-white">
                    -{prices[selectedSize].discount}%
                  </Badge>
                </div>
              )}
              <div className={`flex items-baseline gap-2 ${prices[selectedSize].discount > 0 ? 'mt-1' : ''}`}>
                <span className="text-4xl font-bold text-gray-900">
                  R$ {prices[selectedSize].current.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                ou 12x de R$ {(prices[selectedSize].current / 12).toFixed(2).replace('.', ',')} sem juros
              </p>
              <div className="flex items-center gap-2 mt-3 text-green-700 bg-green-50 px-3 py-2 rounded-lg">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 bg-green-600 rounded-full animate-ping opacity-75" />
                </div>
                <span className="text-sm font-medium">
                  Receba de Volta R$ {((prices[selectedSize].original - prices[selectedSize].current) * 0.1).toFixed(2).replace('.', ',')} em Cashback
                </span>
              </div>
            </div>

            {/* Unit Price Info */}
            {(selectedSize === '2 Caixas' || selectedSize === '3 Caixas + 1 Grátis') && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
                <p className="text-sm font-semibold text-green-700">
                  Cada Caixa sai por R$ {(prices[selectedSize].current / (selectedSize.includes('Grátis') ? 4 : parseInt(selectedSize))).toFixed(2).replace('.', ',')}
                </p>
              </div>
            )}

            {/* Flavor Selection */}
            <div>
              <p className="font-medium text-gray-700 mb-3">Escolha o sabor:</p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { name: 'Limão Siciliano', icon: '🍋' },
                  { name: 'Laranja', icon: '🍊' },
                  { name: 'Mix (Limão + Laranja)', icon: '🍋🍊' }
                ].map((flavor) => (
                  <button
                    key={flavor.name}
                    onClick={() => setSelectedFlavor(flavor.name)}
                    className={`px-4 py-3 rounded-xl border-2 font-medium transition-all text-center text-sm ${
                      selectedFlavor === flavor.name
                        ? 'border-green-600 bg-gradient-to-r from-green-600 to-lime-600 text-white'
                        : 'border-gray-200 text-gray-700 hover:border-green-600'
                    }`}
                  >
                    <div className="text-2xl mb-1">{flavor.icon}</div>
                    {flavor.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <p className="font-medium text-gray-700 mb-3">Escolha a quantidade:</p>
              <div className="grid grid-cols-3 gap-3">
                {Object.keys(prices).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`relative px-4 py-4 rounded-xl border-2 font-medium transition-all text-center ${
                      selectedSize === size
                        ? 'border-green-600 bg-gradient-to-r from-green-600 to-lime-600 text-white'
                        : 'border-gray-200 text-gray-700 hover:border-green-600'
                    }`}
                  >
                    {size === '2 Caixas' && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                          Mais Vendido
                        </span>
                      </div>
                    )}
                    <div className="text-sm font-bold">{size}</div>
                    <div className={`text-xs mt-1 ${selectedSize === size ? 'text-white/80' : 'text-gray-500'}`}>
                      {prices[size].duration}
                    </div>
                    {prices[size].discount > 0 && (
                      <div className={`text-xs mt-1 ${selectedSize === size ? 'text-white/90' : 'text-gray-600'}`}>
                        {prices[size].discount}% OFF
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Buy Button */}
            <Button className="w-full h-12 bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white text-lg font-semibold rounded-xl shadow-lg shadow-green-600/25 transition-all hover:shadow-xl hover:shadow-green-600/30">
              Comprar Agora
            </Button>

            {/* Delivery Estimate */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Package className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900">
                    Frete grátis para todo Brasil
                  </p>
                  <p className="text-sm text-green-700 mt-1">
                    Chegará entre {formatDate(minDeliveryDate)} e {formatDate(maxDeliveryDate)}
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-5 h-5 text-green-600" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">50.000+ Clientes</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Qualidade Garantida</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-5 h-5 text-green-600" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Energia Natural</p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
              {[
                'Energia natural duradoura',
                '22 superalimentos verdes',
                'Rico em vitaminas',
                'Sabor delicioso'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-600" />
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