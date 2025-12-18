import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function GreemyFinalCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className="py-12 lg:py-24 bg-gradient-to-br from-green-600 via-lime-600 to-green-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <FileText className="w-5 h-5 text-white" />
            <span className="text-white font-medium">E-Book Gratuito</span>
          </div>

          <h2 className="text-2xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight">
            10 Dicas para Mais Energia Natural
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Baixe nosso E-Book gratuito e descubra as melhores dicas para ter energia natural, disposição e vitalidade
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 px-6 text-lg bg-white/95 border-0 rounded-full focus:ring-2 focus:ring-white placeholder:text-gray-400"
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 h-14 rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all group whitespace-nowrap"
              >
                <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Baixar Grátis
              </Button>
            </div>
          </form>

          <p className="text-white/60 text-sm mt-6">
            PDF • 100% gratuito • Enviado direto no seu e-mail
          </p>
        </motion.div>
      </div>
    </section>
  );
}