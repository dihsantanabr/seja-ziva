import React, { useState } from 'react';
import { Star, Shield, Leaf, Heart, Check, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const productImages = [
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68c5b2bb0cdd456c97ee531f/91611728f_Screenshot2025-12-10at095244.png",
  "https://acdn-us.mitiendanube.com/stores/006/300/998/products/extrato-li-8193d9f288744c92ab17544887013079-1024-1024.webp",
  "https://acdn-us.mitiendanube.com/stores/006/300/998/products/mama-still04164-d6298db2174fc7c46217489767629228-1024-1024.webp"
];

export default function ProductHero() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('30ml');

  const prices = {
    '30ml': { original: 69.90, current: 59.90 },
    '60ml': { original: 119.90, current: 99.90 }
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <section className="bg-gradient-to-b from-[#F9F6F2] to-white">
      {/* Announcement Bar */}
      <div className="bg-[#2D5A4A] text-white py-2.5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="flex items-center gap-2 text-sm">
                <Truck className="w-4 h-4" />
                Frete Grátis acima de R$199
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Heart className="w-4 h-4" />
                +60.000 famílias atendidas
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4" />
                100% Natural e Seguro
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
              <Badge className="absolute top-4 left-4 z-10 bg-[#2D5A4A] text-white">
                MAIS VENDIDO
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
                    selectedImage === idx ? 'border-[#2D5A4A] shadow-lg' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain bg-white p-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-[#2D5A4A] font-medium text-sm uppercase tracking-wider mb-2">
                Mamamais • Toda gota conta
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Extrato Vegetal Mamamais
                <span className="block text-[#2D5A4A]">Lactação Induzida</span>
              </h1>
              <p className="mt-3 text-lg text-gray-600">
                A solução natural e concentrada para induzir sua produção de leite — mesmo nos casos mais difíceis.
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
              <Badge variant="outline" className="border-[#2D5A4A] text-[#2D5A4A] px-3 py-1.5">
                <Leaf className="w-3.5 h-3.5 mr-1.5" />
                100% Natural
              </Badge>
              <Badge variant="outline" className="border-[#2D5A4A] text-[#2D5A4A] px-3 py-1.5">
                <Shield className="w-3.5 h-3.5 mr-1.5" />
                Seguro na Amamentação
              </Badge>
              <Badge variant="outline" className="border-[#2D5A4A] text-[#2D5A4A] px-3 py-1.5">
                <Heart className="w-3.5 h-3.5 mr-1.5" />
                Fórmula Estudada
              </Badge>
            </div>

            {/* Price Box */}
            <div className="bg-gradient-to-r from-[#F5E6E8] to-[#F9F6F2] rounded-2xl p-6">
              <div className="flex items-baseline gap-3">
                <span className="text-gray-400 line-through text-lg">
                  R$ {prices[selectedSize].original.toFixed(2).replace('.', ',')}
                </span>
                <Badge className="bg-red-500 text-white">
                  -{Math.round((1 - prices[selectedSize].current / prices[selectedSize].original) * 100)}%
                </Badge>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-bold text-gray-900">
                  R$ {prices[selectedSize].current.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                ou 3x de R$ {(prices[selectedSize].current / 3).toFixed(2).replace('.', ',')} sem juros
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <p className="font-medium text-gray-700 mb-3">Tamanho:</p>
              <div className="flex gap-3">
                {['30ml', '60ml'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-xl border-2 font-medium transition-all ${
                      selectedSize === size
                        ? 'border-[#2D5A4A] bg-[#2D5A4A] text-white'
                        : 'border-gray-200 text-gray-700 hover:border-[#2D5A4A]'
                    }`}
                  >
                    {size}
                    <span className="block text-xs mt-0.5 opacity-80">
                      {size === '30ml' ? '~10 dias' : '~20 dias'}
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
              <Button className="flex-1 h-12 bg-[#2D5A4A] hover:bg-[#234539] text-white text-lg font-semibold rounded-xl shadow-lg shadow-[#2D5A4A]/25 transition-all hover:shadow-xl hover:shadow-[#2D5A4A]/30">
                Comprar Agora
              </Button>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
              {[
                'Envio imediato',
                'Criado por consultora em lactação',
                'Usado por +60.000 famílias',
                'Suporte especializado'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#2D5A4A]" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}