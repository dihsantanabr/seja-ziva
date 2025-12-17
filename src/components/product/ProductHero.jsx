import React, { useState } from 'react';
import { Star, Shield, Leaf, Heart, Check, Truck, ChevronLeft, ChevronRight, Package, RefreshCw, Tag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StoriesSection from './StoriesSection';
import QuickNavigationMenu from './QuickNavigationMenu';

const productImages = [
  "https://bariessential.com.br/wp-content/uploads/2025/09/3-frascos-bari-essential-atualizado-v2.webp",
  "https://bariessential.com.br/wp-content/uploads/2025/09/2-frascos-bari-essential-atualizado-v2.webp",
  "https://bariessential.com.br/wp-content/uploads/2025/07/product_bari-14caps.webp"
];

export default function ProductHero() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('3 frascos');

  const prices = {
    '1 frasco': { original: 147.00, current: 147.00 },
    '3 frascos': { original: 441.00, current: 264.60 }
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

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <section className="bg-gradient-to-b from-orange-50 to-white">
      {/* Announcement Bar */}
      <div className="bg-[#FF6B35] text-white py-2.5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="flex items-center gap-2 text-sm">
                <Truck className="w-4 h-4" />
                Frete Grátis para todo Brasil
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Heart className="w-4 h-4" />
                Até 60% de Desconto
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4" />
                Fórmula para Bariátricos
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stories Section */}
      <StoriesSection />

      <div className="max-w-7xl mx-auto px-4 py-6 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4 lg:sticky lg:top-8 lg:self-start">
            <div className="relative aspect-square lg:aspect-[3/4] bg-white rounded-2xl overflow-hidden shadow-lg">
              <Badge className="absolute top-4 left-4 z-10 bg-[#FF6B35] text-white">
                60% OFF
              </Badge>
              <img
                src={productImages[selectedImage]}
                alt="Extrato Vegetal Mamamais"
                className="w-full h-full object-contain p-8"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3 justify-center">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-[#FF6B35] shadow-lg' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain bg-white p-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 lg:space-y-6">
            <div>
              <p className="text-[#FF6B35] font-medium text-sm uppercase tracking-wider mb-2">
                Polivitamínico
              </p>
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Bari Essential
                <span className="block text-[#FF6B35]">Alta Absorção</span>
              </h1>
              <p className="mt-2 text-base lg:text-lg text-gray-600">
                Polivitamínico de alta absorção para bariátricos, que corrige deficiências nutricionais, recupera energia e fortalece a imunidade.
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
              <span className="text-gray-600">3.500+ avaliações reais</span>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-[#FF6B35] text-[#FF6B35] px-3 py-1.5">
                <Leaf className="w-3.5 h-3.5 mr-1.5" />
                Alta Concentração
              </Badge>
              <Badge variant="outline" className="border-[#FF6B35] text-[#FF6B35] px-3 py-1.5">
                <Shield className="w-3.5 h-3.5 mr-1.5" />
                Minerais Quelados
              </Badge>
              <Badge variant="outline" className="border-[#FF6B35] text-[#FF6B35] px-3 py-1.5">
                <Heart className="w-3.5 h-3.5 mr-1.5" />
                Criado para Bariátricos
              </Badge>
            </div>

            {/* Price Box */}
            <div className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-100">
              <div className="flex items-baseline gap-3">
                <span className="text-gray-400 line-through text-lg">
                  R$ {prices[selectedSize].original.toFixed(2).replace('.', ',')}
                </span>
                {prices[selectedSize].current !== prices[selectedSize].original && (
                  <Badge className="bg-[#FF6B35] text-white">
                    -{Math.round((1 - prices[selectedSize].current / prices[selectedSize].original) * 100)}%
                  </Badge>
                )}
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-bold text-gray-900">
                  R$ {prices[selectedSize].current.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                ou 3x de R$ {(prices[selectedSize].current / 3).toFixed(2).replace('.', ',')} sem juros
              </p>
              <div className="flex items-center gap-2 mt-3 text-green-700 bg-green-50 px-3 py-2 rounded-lg">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 bg-green-600 rounded-full animate-ping opacity-75" />
                </div>
                <span className="text-sm font-medium">
                  Receba R$ {(prices[selectedSize].current * 0.1).toFixed(2).replace('.', ',')} de Cashback
                </span>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <p className="font-medium text-gray-700 mb-3">Escolha a quantidade:</p>
              <div className="flex gap-3">
                {['1 frasco', '3 frascos'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-xl border-2 font-medium transition-all ${
                      selectedSize === size
                        ? 'border-[#FF6B35] bg-[#FF6B35] text-white'
                        : 'border-gray-200 text-gray-700 hover:border-[#FF6B35]'
                    }`}
                  >
                    {size}
                    <span className="block text-xs mt-0.5 opacity-80">
                      {size === '1 frasco' ? 'R$ 147,00' : '40% OFF'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Buy */}
            <div className="flex gap-4">
              <div className="flex items-center border-2 border-gray-200 rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-50"
                >
                  +
                </button>
              </div>
              <Button className="flex-1 h-12 bg-[#FF6B35] hover:bg-[#E55A2B] text-white text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 transition-all hover:shadow-xl hover:shadow-[#FF6B35]/30">
                Adicionar ao Carrinho
              </Button>
            </div>

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
              <div className="bg-orange-50 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Alta Concentração</p>
                <p className="text-xs text-gray-600 mt-1">+20 nutrientes essenciais</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <RefreshCw className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Minerais Quelados</p>
                <p className="text-xs text-gray-600 mt-1">Máxima absorção garantida</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Tag className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Para Bariátricos</p>
                <p className="text-xs text-gray-600 mt-1">Fórmula especializada</p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
              {[
                'Dosagem correta',
                'Fórmula com +20 componentes',
                'Resultados prolongados',
                'Criado para bariátricos'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#FF6B35]" />
                  {benefit}
                </div>
              ))}
            </div>
            </div>
            </div>
            </div>

            {/* Quick Navigation Menu */}
            <QuickNavigationMenu />
            </section>
            );
            }