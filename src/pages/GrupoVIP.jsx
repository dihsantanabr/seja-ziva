import React, { useState } from 'react';
import { Check, X, Users, MessageCircle, Clock, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function GrupoVIP() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format WhatsApp message
    const message = encodeURIComponent(`Olá! Me chamo ${formData.name} e quero entrar no grupo VIP de cuidados 🌿`);
    const phone = '5511999999999'; // Substitua pelo número correto
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="pt-12 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
            <div className="px-3 py-1.5 bg-teal-100 text-teal-800 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
              Acesso Gratuito
            </div>
            <div className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-bold animate-pulse whitespace-nowrap">
              🔥 +247 pessoas hoje
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight px-2">
            Entre no Grupo e Comece o Ano <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Cuidando de Você</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 max-w-2xl mx-auto px-2">
            Durante 15 dias, vamos compartilhar rotinas simples de cuidado para pele, corpo e bem-estar direto no WhatsApp.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3 bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl">
            <Input
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-12 sm:h-14 text-base sm:text-lg"
            />
            <Input
              type="tel"
              placeholder="Seu WhatsApp"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="h-12 sm:h-14 text-base sm:text-lg"
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 sm:h-14 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {isSubmitting ? 'Aguarde...' : '✨ Garantir Minha Vaga'}
            </Button>
            <p className="text-xs text-gray-500 text-center leading-relaxed">✓ Sem compromisso • ✓ Cancele quando quiser</p>
          </form>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center px-2">
            Esse grupo é para você que…
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Sente a pele mais sensível depois do fim de ano',
              'Quer começar janeiro com mais cuidado e menos exagero',
              'Busca rotinas simples e possíveis',
              'Quer se sentir melhor no dia a dia',
              'Não quer mais promessas irreais',
              'Deseja fazer parte de uma comunidade de cuidado'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-teal-50 rounded-xl">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm sm:text-base leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O Que Vai Receber */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center px-2">
            O que você vai receber no grupo
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: MessageCircle, title: 'Rotinas guiadas', desc: 'Íntima, rosto, cabelo e completa' },
              { icon: Clock, title: 'Dicas práticas e curtas', desc: 'Conteúdo direto ao ponto' },
              { icon: Users, title: 'Acompanhamento', desc: 'Durante 15 dias completos' },
              { icon: Shield, title: 'Sem excesso', desc: 'Comunicação direta e organizada' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-teal-100">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center px-2">
            Como funciona
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { num: '1', text: 'Você entra no grupo gratuito' },
              { num: '2', text: 'Recebe uma mensagem por dia' },
              { num: '3', text: 'Aplica no seu ritmo' },
              { num: '4', text: 'Escolhe se quer seguir alguma rotina' }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-xl sm:text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-3">
                  {step.num}
                </div>
                <p className="text-gray-700 font-medium text-xs sm:text-sm leading-snug px-1">{step.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-6 text-sm sm:text-base">
            Sem pressão. Sem obrigação. Sem spam.
          </p>
        </div>
      </section>

      {/* O Que NÃO É */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center px-2">
            Antes de entrar, é importante saber:
          </h2>
          
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg space-y-3 mb-6">
            {[
              'Não é grupo de promoção',
              'Não é grupo com mensagem o dia inteiro',
              'Não é grupo de promessa milagrosa'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-3">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm sm:text-base leading-snug">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-700 text-base sm:text-lg font-medium px-2">
            É um espaço de cuidado, orientação e rotina simples para começar o ano melhor.
          </p>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center px-2">
            Quem já entrou, disse isso:
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { quote: 'Finalmente um grupo que não fica empurrando oferta.', name: 'Ana M.' },
              { quote: 'As rotinas são simples e fazem sentido.', name: 'Carla S.' },
              { quote: 'Me ajudou a começar o ano com mais calma.', name: 'Juliana R.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-teal-50 p-4 sm:p-5 rounded-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.name[0]}
                  </div>
                  <span className="font-semibold text-gray-900 text-sm">{item.name}</span>
                </div>
                <p className="text-gray-700 italic text-sm leading-snug">"{item.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-block px-3 py-1.5 bg-red-100 text-red-800 rounded-full text-xs sm:text-sm font-bold mb-4">
              ⏰ Últimas vagas disponíveis
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 px-2">
              As vagas são limitadas para manter o grupo organizado
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3 bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl">
            <Input
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-12 sm:h-14 text-base sm:text-lg"
            />
            <Input
              type="tel"
              placeholder="Seu WhatsApp"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="h-12 sm:h-14 text-base sm:text-lg"
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 sm:h-14 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {isSubmitting ? 'Aguarde...' : '🎁 Quero Entrar Agora'}
            </Button>
            <p className="text-xs text-gray-500 text-center leading-relaxed">✓ Acesso imediato • ✓ 100% gratuito</p>
          </form>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { q: 'É realmente gratuito?', a: 'Sim.' },
              { q: 'Quantas mensagens por dia?', a: '1 mensagem.' },
              { q: 'Posso sair quando quiser?', a: 'Sim.' },
              { q: 'Vai ter venda?', a: 'O foco é cuidado e orientação.' }
            ].map((faq, idx) => (
              <div key={idx} className="bg-teal-50 p-4 sm:p-5 rounded-xl">
                <p className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{faq.q}</p>
                <p className="text-gray-700 text-sm sm:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}