import React from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import LinkBioInlineQuiz from '../components/linkbio/LinkBioInlineQuiz';
import { motion } from 'framer-motion';

const links = [
  { label: 'Sérum Íntimo Ozonizado', url: 'https://sejaziva.com.br/products/serum-intimo-ozonizado' },
  { label: 'Espuma Íntima Ozonizada', url: 'https://sejaziva.com.br/products/espuma-intima-ozonizada' },
  { label: 'BOX Equilibrium', url: 'https://sejaziva.com.br/products/kit-bem-estar-completo' },
];

export default function LinkBio() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-sm space-y-4">

        {/* Logo / Marca */}
        <div className="text-center mb-6">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698f17e9124bfe3a6f9a6198/9eab2108f_Screenshot2026-02-13at165800.png"
            alt="Ziva"
            className="h-12 mx-auto mb-2 object-contain"
          />
          <p className="text-sm text-pink-500 font-medium">Saúde íntima que transforma sua vida.</p>
        </div>

        {/* Quiz CTA */}
        <LinkBioInlineQuiz />

        {/* Banner produto em destaque */}
        <motion.a
          href="https://sejaziva.com.br/products/simbiotico-intimo"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.97 }}
          className="block relative overflow-hidden rounded-2xl shadow-md"
        >
          <img
            src="https://media.base44.com/images/public/698f17e9124bfe3a6f9a6198/03fb3c764_Gemini_Generated_Image_dx7biidx7biidx7b.png"
            alt="Simbiótico Íntimo Ziva"
            className="w-full h-44 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end">
            <span className="text-xs text-pink-300 font-semibold uppercase tracking-wide mb-1">✨ Mais Vendido</span>
            <h2 className="text-white font-bold text-lg leading-tight">Simbiótico Íntimo Ziva</h2>
            <p className="text-white/80 text-sm mt-0.5">pH saudável, sem odor, sem candidíase.</p>
            <span className="mt-2 inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full px-3 py-1 w-fit">
              Ver produto <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </motion.a>

        {/* Links de categoria */}
        {links.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center w-full bg-white text-gray-800 font-medium text-sm rounded-2xl py-3.5 px-4 shadow-sm border border-gray-100 hover:border-pink-300 hover:shadow-md transition-all"
          >
            {link.label}
          </motion.a>
        ))}

        {/* WhatsApp */}
        <motion.a
          href="https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%20Ziva,%20preciso%20de%20ajuda!"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 w-full bg-white text-gray-700 font-medium text-sm rounded-2xl py-3.5 px-4 shadow-sm border border-gray-100 hover:border-green-300 hover:shadow-md transition-all"
        >
          <MessageCircle className="w-4 h-4 text-green-500" />
          Atendimento Personalizado
        </motion.a>

        {/* Rodapé */}
        <p className="text-center text-xs text-pink-400 font-medium pt-2 pb-6">
          sejaziva.com.br
        </p>
      </div>
    </div>
  );
}