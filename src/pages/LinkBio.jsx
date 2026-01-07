import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, Package, Gift, Star, BookOpen, Heart, ChevronRight, Shield, Instagram, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import LinkBioQuiz from '../components/linkbio/LinkBioQuiz';

export default function LinkBio() {
  const [email, setEmail] = useState('');
  const [emailCaptured, setEmailCaptured] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const quizRef = useRef(null);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate email capture (replace with actual integration)
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setEmailCaptured(true);
    setIsSubmitting(false);

    // Scroll to quiz section
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  const links = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Colágenos",
      subtitle: "Veja todos os colágenos disponíveis",
      url: "https://seguro.avozon.com.br/r/9LBQYYJH8D",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Kits e Combos",
      subtitle: "Mais economia na sua rotina",
      url: "https://seguro.avozon.com.br/r/9LBQYYJH8D",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Mais Vendidos",
      subtitle: "Os preferidos de quem já usa",
      url: "https://seguro.avozon.com.br/r/9LBQYYJH8D",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Conteúdos e Dicas",
      subtitle: "Artigos para cuidar melhor da sua pele",
      url: "https://bariessential.com.br/blog",
      color: "from-teal-500 to-emerald-500"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Cuidados com a Pele",
      subtitle: "Produtos para rotina diária",
      url: "https://seguro.avozon.com.br/r/9LBQYYJH8D",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">

      {/* SESSÃO 1: Captura de E-mail */}
      {!emailCaptured && (
        <section className="px-3 sm:px-4 py-6 sm:py-8">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-6 lg:p-8"
            >
              <div className="text-center mb-5 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                  Descubra o colágeno ideal para a sua pele
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Responda algumas perguntas rápidas e receba uma recomendação personalizada para sua rotina.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-3 sm:space-y-4">
                <Input
                  type="email"
                  placeholder="Digite seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 min-h-[48px] text-sm sm:text-base"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 min-h-[48px] bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white text-sm sm:text-base font-semibold"
                >
                  {isSubmitting ? 'Processando...' : 'Quero descobrir meu colágeno ideal'}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                Não enviamos spam. Você pode sair da lista quando quiser.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* SESSÃO 2: Quiz Inteligente */}
      <section ref={quizRef} className="px-3 sm:px-4 py-6 sm:py-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: emailCaptured ? 0.3 : 0 }}
          >
            <div className="text-center mb-6 sm:mb-8 px-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                Vamos encontrar o colágeno perfeito para você
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Leva menos de 1 minuto e considera seu tipo de pele, seus objetivos e sua rotina.
              </p>
            </div>

            <LinkBioQuiz />
          </motion.div>
        </div>
      </section>

      {/* SESSÃO 3: Links Úteis */}
      <section className="px-3 sm:px-4 py-8 sm:py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
            Acesse rapidamente
          </h2>

          <div className="grid gap-3 sm:gap-4">
            {links.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-white rounded-xl sm:rounded-2xl shadow-md border border-gray-100 p-4 sm:p-5 hover:shadow-xl transition-all active:scale-95 min-h-[72px]"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white flex-shrink-0`}>
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-0.5 sm:mb-1 truncate">
                      {link.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-1">
                      {link.subtitle}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-8 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/bariessential"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>

            {/* Brand */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Beleza que começa de dentro
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-pink-600 transition-colors">
                Política de Privacidade
              </a>
              <span>•</span>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
                Atendimento
              </a>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              <span>Compra 100% segura</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}