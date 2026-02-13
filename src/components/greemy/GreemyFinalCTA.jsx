import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function GreemyFinalCTA({ onOpenQuiz }) {
  return (
    <section className="py-12 lg:py-24 pb-32 lg:pb-24 bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight">
            Comece sua jornada para saúde íntima
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Proteja-se naturalmente e recupere o equilíbrio da sua flora vaginal com o Simbiótico Íntimo.
          </p>

          <a href="#tp-main-product">
            <Button
              className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all"
            >
              Garantir Minha Proteção Agora
            </Button>
          </a>

          <p className="text-white/80 text-sm mt-6">
            Frete Grátis acima de R$ 249 • Entrega Rápida
          </p>
        </motion.div>
      </div>
    </section>
  );
}