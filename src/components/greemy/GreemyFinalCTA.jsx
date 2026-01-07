import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
            Encontre a opção ideal para sua rotina
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Cada pele é única. Descubra qual colágeno se encaixa melhor no seu perfil e objetivo.
          </p>

          <Button
            onClick={onOpenQuiz}
            className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all"
          >
            Receber Recomendação Personalizada
          </Button>

          <p className="text-white/80 text-sm mt-6">
            Menos de 2 minutos • Totalmente gratuito
          </p>
        </motion.div>
      </div>
    </section>
  );
}