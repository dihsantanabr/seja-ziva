import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LPPersonalizationCTA({ onOpenQuiz }) {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-2 border-pink-100 text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nem toda flacidez é igual
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Tipo de pele, rotina e objetivos mudam completamente a escolha do colágeno.<br />
            <span className="font-semibold text-gray-700">Descubra qual faz sentido para você.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onOpenQuiz}
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Receber Recomendação Personalizada
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Leva menos de 2 minutos • Totalmente gratuito
          </p>
        </motion.div>
      </div>
    </section>
  );
}