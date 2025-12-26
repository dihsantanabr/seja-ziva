import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Truck, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGreemy } from './GreemyContext';

const packages = [
  {
    id: 1,
    units: '1 Unidade',
    duration: '30ml - 1 frasco',
    price: 'R$ 89,90',
    originalPrice: 'R$ 99,90',
    discount: '10% OFF',
    link: 'https://seguro.avozon.com.br/r/O0QFN501RQ',
    popular: false
  },
  {
    id: 3,
    units: '3 Unidades',
    duration: '90ml - 3 frascos',
    price: 'R$ 239,70',
    originalPrice: 'R$ 269,70',
    discount: '11% OFF',
    pricePerUnit: 'R$ 79,90/unidade',
    link: 'https://seguro.avozon.com.br/r/9LBQYYJH8D',
    popular: true,
    badge: 'Mais Vendido',
    savings: 'Economize R$ 30'
  }
];

export default function LPPurchaseBoxes() {
  const handleBuyClick = (link) => {
    window.location.href = link;
  };

  return (
    <section id="purchase-boxes" className="py-16 lg:py-24 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 font-medium text-sm uppercase tracking-wider">
              Escolha Seu Kit
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Comece Sua Transformação Hoje
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mais de 22 mil pessoas já transformaram sua pele com nosso óleo ozonizado. 
              Escolha o melhor kit para você.
            </p>
          </motion.div>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-12">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white rounded-3xl p-6 lg:p-8 shadow-xl border-2 transition-all hover:shadow-2xl hover:-translate-y-1 ${
                pkg.popular ? 'border-teal-600' : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                    {pkg.badge}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.units}</h3>
                <p className="text-gray-600 text-sm">{pkg.duration}</p>
                {pkg.pricePerUnit && (
                  <p className="text-teal-600 font-semibold text-sm mt-1">{pkg.pricePerUnit}</p>
                )}
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-gray-400 line-through text-lg">{pkg.originalPrice}</span>
                  <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
                    {pkg.discount}
                  </span>
                </div>
                <div className="text-4xl font-bold text-gray-900">{pkg.price}</div>
                {pkg.savings && (
                  <p className="text-sm text-teal-600 font-semibold mt-2">{pkg.savings}</p>
                )}
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                {[
                  'Hidratação intensa e duradoura',
                  'Acelera cicatrização natural',
                  'Rico em vitaminas e antioxidantes',
                  '100% natural e ozonizado'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => handleBuyClick(pkg.link)}
                className={`w-full text-white text-lg py-6 rounded-xl shadow-lg transition-all ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700'
                    : 'bg-gray-800 hover:bg-gray-900'
                }`}
              >
                Comprar Agora
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: Truck, text: 'Frete Grátis', subtext: 'Acima de R$ 200' },
            { icon: Shield, text: 'Compra Segura', subtext: '100% Protegida' },
            { icon: Star, text: '4.9/5.0', subtext: '+12.847 avaliações' },
            { icon: Zap, text: 'Entrega Rápida', subtext: '7-10 dias úteis' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-4 text-center shadow-md">
              <item.icon className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <p className="font-semibold text-gray-900 text-sm">{item.text}</p>
              <p className="text-xs text-gray-500">{item.subtext}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}