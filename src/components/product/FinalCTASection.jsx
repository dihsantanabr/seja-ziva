import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Truck, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function FinalCTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#2D5A4A] via-[#3d7a64] to-[#2D5A4A]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Pronta para estimular sua produção de leite de forma natural e segura?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Seu corpo pode responder — você só precisa do estímulo certo.
          </p>

          <Button 
            size="lg"
            className="bg-white text-[#2D5A4A] hover:bg-gray-100 text-lg px-10 py-7 rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all group"
          >
            Comprar Agora – Envio Imediato
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Compra 100% segura
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              Frete grátis acima de R$199
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              4.9/5 (3.500+ avaliações)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}