import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Star, Truck, Check, Tag, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PriceSection() {
  const [selectedSize, setSelectedSize] = useState('3 Unidades');

  const prices = {
    '1 Unidade': { 
      original: 147.00, 
      current: 147.00, 
      discount: 0, 
      badge: 'FRETE GRÁTIS', 
      duration: 'Dura 30 Dias',
      unitPrice: 147.00
    },
    '3 Unidades': { 
      original: 441.00, 
      current: 264.60, 
      discount: 40, 
      badge: '40% OFF + FRETE GRÁTIS', 
      duration: 'Dura 90 Dias',
      unitPrice: 88.20
    },
    '5 Unidades': { 
      original: 735.00, 
      current: 367.50, 
      discount: 50, 
      badge: '50% OFF + FRETE GRÁTIS', 
      duration: 'Dura 150 Dias',
      unitPrice: 73.50
    }
  };

  const today = new Date();
  const minDeliveryDate = new Date(today);
  minDeliveryDate.setDate(today.getDate() + 3);
  const maxDeliveryDate = new Date(today);
  maxDeliveryDate.setDate(today.getDate() + 9);

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  };

  return (
    <section id="preco" className="py-16 lg:py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-[#FF6B35] text-white text-sm px-4 py-2 mb-4">
            Oferta Exclusiva
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Escolha seu plano e economize até 50%
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quanto mais você garante, mais você economiza. Frete grátis para todo Brasil!
          </p>
        </div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="max-w-md mx-auto">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6941e696a4baa9c466e144f4/9539d4095_Screenshot2025-12-17at134320.png"
              alt="Bari Essential"
              className="w-full drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {Object.entries(prices).map(([size, details], idx) => (
            <motion.div
              key={size}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedSize(size)}
              className={`relative cursor-pointer rounded-3xl p-6 border-2 transition-all hover:shadow-2xl ${
                selectedSize === size
                  ? 'border-[#FF6B35] bg-gradient-to-br from-orange-50 to-white shadow-xl scale-105'
                  : 'border-gray-200 bg-white hover:border-[#FF6B35]/50'
              }`}
            >
              {/* Most Popular Badge */}
              {size === '3 Unidades' && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Mais Escolhido
                </Badge>
              )}

              {/* Discount Badge */}
              {details.discount > 0 && (
                <Badge className="absolute -top-3 -right-3 bg-red-500 text-white text-lg px-3 py-1 rotate-12">
                  -{details.discount}%
                </Badge>
              )}

              <div className="text-center space-y-4">
                <Package className={`w-16 h-16 mx-auto ${selectedSize === size ? 'text-[#FF6B35]' : 'text-gray-400'}`} />
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{size}</h3>
                  <p className="text-sm text-gray-500">{details.duration}</p>
                </div>

                {details.discount > 0 && (
                  <div className="text-gray-400 line-through text-lg">
                    R$ {details.original.toFixed(2).replace('.', ',')}
                  </div>
                )}

                <div className="space-y-1">
                  <div className="text-4xl font-bold text-[#FF6B35]">
                    R$ {details.current.toFixed(2).replace('.', ',')}
                  </div>
                  <p className="text-sm text-gray-600">
                    ou 3x de R$ {(details.current / 3).toFixed(2).replace('.', ',')}
                  </p>
                </div>

                {(size === '3 Unidades' || size === '5 Unidades') && (
                  <div className="bg-orange-100 rounded-lg p-2">
                    <p className="text-sm font-semibold text-[#FF6B35]">
                      Cada unidade: R$ {details.unitPrice.toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                )}

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-600" />
                    Frete Grátis
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-600" />
                    Garantia 30 dias
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-600" />
                    10% Cashback
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Plan Details */}
        <motion.div
          key={selectedSize}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-[#FF6B35]"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Plano Selecionado: {selectedSize}
              </h3>
              <p className="text-gray-600">
                {prices[selectedSize].badge}
              </p>
            </div>

            <div className="flex items-center justify-center gap-8 py-4">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#FF6B35]">
                  R$ {prices[selectedSize].current.toFixed(2).replace('.', ',')}
                </div>
                <p className="text-gray-600 mt-1">Pagamento único</p>
              </div>
            </div>

            <Button 
              className="w-full h-16 bg-[#FF6B35] hover:bg-[#E55A2B] text-white text-xl font-bold rounded-2xl shadow-xl shadow-[#FF6B35]/30 transition-all hover:scale-105"
            >
              GARANTIR MINHA OFERTA AGORA
            </Button>

            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 bg-green-50 rounded-xl p-3">
                <Truck className="w-5 h-5 text-green-600" />
                <div className="text-sm">
                  <p className="font-semibold text-green-900">Frete Grátis</p>
                  <p className="text-green-700">Todo Brasil</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-blue-50 rounded-xl p-3">
                <Package className="w-5 h-5 text-blue-600" />
                <div className="text-sm">
                  <p className="font-semibold text-blue-900">Entrega Rápida</p>
                  <p className="text-blue-700">{formatDate(minDeliveryDate)} - {formatDate(maxDeliveryDate)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-purple-50 rounded-xl p-3">
                <Tag className="w-5 h-5 text-purple-600" />
                <div className="text-sm">
                  <p className="font-semibold text-purple-900">Cashback</p>
                  <p className="text-purple-700">10% de volta</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-amber-400 pt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
              <span className="ml-2 font-semibold text-gray-900">4.9/5 • 3.500+ avaliações</span>
            </div>
          </div>
        </motion.div>

        {/* Trust footer */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            Compra 100% segura e protegida • Garantia de 30 dias ou seu dinheiro de volta
          </p>
        </div>
      </div>
    </section>
  );
}