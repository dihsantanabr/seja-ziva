import React from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import LinkBioInlineQuiz from '../components/linkbio/LinkBioInlineQuiz';
import { motion } from 'framer-motion';

const links = [
  { label: 'Entre no Nosso Grupo VIP', url: '#' },
  { label: 'Quero ser uma Creator Ziva', url: '#' },
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
            src="https://sejaziva.com.br/cdn/shop/files/Design_sem_nome_4_1.png"
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

        {/* Card Conheça Nossa História */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
        >
          <div className="flex h-44">
            <div className="w-1/2 flex-shrink-0">
              <img
                src="https://media.base44.com/images/public/698f17e9124bfe3a6f9a6198/51445a86f_Frame_1261153608_0e5dec7c-b0d6-4339-b9e5-f8275dfa0d47.jpg"
                alt="Beatriz - Fundadora Ziva"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center p-4 gap-2">
              <h3 className="text-gray-800 font-bold text-base leading-tight">Minha jornada, <em>nossa missão</em></h3>
              <p className="text-gray-500 text-xs leading-snug line-clamp-3">Olá, sou Beatriz, fundadora da Ziva. Uma marca criada para transformar e acolher cada mulher.</p>
              <a
                href="#"
                className="mt-1 inline-block bg-pink-400 hover:bg-pink-500 text-white text-xs font-bold rounded-full px-4 py-2 text-center transition-colors"
              >
                LEIA NOSSA HISTÓRIA
              </a>
            </div>
          </div>
        </motion.div>

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