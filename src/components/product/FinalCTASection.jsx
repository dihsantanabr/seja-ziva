import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
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
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <FileText className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Guia Completo</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ainda em dúvidas se é para você?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Baixe nosso Ebook Completo e entenda como você terá resultados com a indução de lactação
          </p>

          <Button 
            size="lg"
            className="bg-white text-[#2D5A4A] hover:bg-gray-100 text-lg px-10 py-7 rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all group"
          >
            <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            Baixar Ebook Gratuito
          </Button>

          <p className="text-white/60 text-sm mt-6">
            PDF • 100% gratuito • Sem necessidade de cadastro
          </p>
        </motion.div>
      </div>
    </section>
  );
}