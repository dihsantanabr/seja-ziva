import React, { useState } from 'react';
import { Star, Shield, Leaf, Heart, Check, Truck, ChevronLeft, ChevronRight, Package, RefreshCw, Tag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StoriesSection from './StoriesSection';
import QuickNavigationMenu from './QuickNavigationMenu';

const productImages = [
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/2e60b72f8_20241220-_Z5F0119.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/a59c0929c_20241220-_Z5F0331.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/6234237a1_20241220-_Z5F0623.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/f729b64de_20241220-_Z5F0901.jpg"
];

export default function ProductHero() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('2 Pacotes');
  const [selectedFlavor, setSelectedFlavor] = useState('Blue Ice');

  const prices = {
    '1 Pacote': { original: 249.00, current: 167.90, discount: 33, badge: 'FRETE GRÁTIS', duration: 'Duração 30 dias' },
    '2 Pacotes': { original: 499.80, current: 277.90, discount: 44, badge: '44%OFF + FRETE GRÁTIS', duration: 'Duração 60 dias' },
    '3 Pacotes + 1 Grátis': { original: 999.60, current: 467.90, discount: 53, badge: '53%OFF + FRETE GRÁTIS', duration: 'Duração 120 dias' }
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
    <section className="bg-gradient-to-b from-purple-50 to-white">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2.5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="flex items-center gap-2 text-sm">
                <Truck className="w-4 h-4" />
                Frete Grátis para todo Brasil
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Heart className="w-4 h-4" />
                Até 53% de Desconto
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4" />
                3 Tipos de Colágeno
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
            <div className="relative aspect-[2/3] bg-white rounded-2xl overflow-hidden shadow-lg">
              <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                53% OFF
              </Badge>
              <img
                src={productImages[selectedImage]}
                alt="Multicolágeno"
                className="w-full h-full object-contain p-3"
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
                    selectedImage === idx ? 'border-purple-600 shadow-lg' : 'border-gray-200'
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
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium text-sm uppercase tracking-wider mb-2">
                Colágeno Premium
              </p>
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Multicolágeno
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">3 Tipos + Ácido Hialurônico</span>
              </h1>
              <p className="mt-2 text-base lg:text-lg text-gray-600">
                Fórmula completa com colágeno tipos I, II e III + Ácido Hialurônico que rejuvenesce a pele, fortalece cabelos e unhas.
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
              <Badge variant="outline" className="border-purple-600 text-purple-600 px-3 py-1.5">
                <Leaf className="w-3.5 h-3.5 mr-1.5" />
                3 Tipos de Colágeno
              </Badge>
              <Badge variant="outline" className="border-purple-600 text-purple-600 px-3 py-1.5">
                <Shield className="w-3.5 h-3.5 mr-1.5" />
                Ácido Hialurônico
              </Badge>
              <Badge variant="outline" className="border-purple-600 text-purple-600 px-3 py-1.5">
                <Heart className="w-3.5 h-3.5 mr-1.5" />
                Sabor Neutro
              </Badge>
            </div>

            {/* Price Box */}
            <div className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-100">
              {prices[selectedSize].discount > 0 && (
                <div className="flex items-baseline gap-3">
                  <span className="text-gray-400 line-through text-lg">
                    R$ {prices[selectedSize].original.toFixed(2).replace('.', ',')}
                  </span>
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
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

            {/* Unit Price Info */}
            {(selectedSize === '2 Pacotes' || selectedSize === '3 Pacotes + 1 Grátis') && (
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-center">
                <p className="text-sm font-semibold text-purple-700">
                  Cada Pacote sai por R$ {(prices[selectedSize].current / (selectedSize.includes('Grátis') ? 4 : parseInt(selectedSize))).toFixed(2).replace('.', ',')}
                </p>
              </div>
            )}

            {/* Flavor Selection */}
            <div>
              <p className="font-medium text-gray-700 mb-3">Escolha o sabor:</p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { name: 'Blue Ice', icon: '🧊' },
                  { name: 'Frutas Vermelhas', icon: '🍓' },
                  { name: 'Frutas Vermelhas + Blue Ice', icon: '🍓🧊' }
                ].map((flavor) => (
                  <button
                    key={flavor.name}
                    onClick={() => setSelectedFlavor(flavor.name)}
                    className={`px-4 py-3 rounded-xl border-2 font-medium transition-all text-center text-sm ${
                      selectedFlavor === flavor.name
                        ? 'border-purple-600 bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'border-gray-200 text-gray-700 hover:border-purple-600'
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
                        ? 'border-purple-600 bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'border-gray-200 text-gray-700 hover:border-purple-600'
                    }`}
                  >
                    {size === '2 Pacotes' && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                        <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                          Mais Escolhido
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
            <Button className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-semibold rounded-xl shadow-lg shadow-purple-600/25 transition-all hover:shadow-xl hover:shadow-purple-600/30">
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
              <div className="bg-purple-50 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">50.000+ Clientes</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Qualidade Garantida</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Tag className="w-5 h-5 text-purple-600" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Sabor Neutro</p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
              {[
                'Sabor neutro',
                'Hidrata profundamente',
                'Reduz rugas e linhas',
                'Fortalece cabelo e unhas'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-purple-600" />
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