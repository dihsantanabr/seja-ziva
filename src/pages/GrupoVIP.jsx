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
      <section className="pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <div className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
              Acesso Gratuito
            </div>
            <div className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-bold animate-pulse">
              🔥 +247 pessoas entraram hoje
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Entre no Grupo e Comece<br />
            o Ano <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Cuidando de Você</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Durante 15 dias, vamos compartilhar rotinas simples de cuidado para pele, corpo e bem-estar direto no WhatsApp.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 bg-white p-8 rounded-2xl shadow-xl">
            <Input
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-14 text-lg"
            />
            <Input
              type="tel"
              placeholder="Seu WhatsApp"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="h-14 text-lg"
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {isSubmitting ? 'Aguarde...' : '✨ Garantir Minha Vaga Gratuita'}
            </Button>
            <p className="text-xs text-gray-500 text-center">✓ Sem compromisso • ✓ Cancele quando quiser</p>
          </form>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
            Esse grupo é para você que…
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Sente a pele mais sensível depois do fim de ano',
              'Quer começar janeiro com mais cuidado e menos exagero',
              'Busca rotinas simples e possíveis',
              'Quer se sentir melhor no dia a dia',
              'Não quer mais promessas irreais',
              'Deseja fazer parte de uma comunidade de cuidado'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-teal-50 rounded-xl">
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O Que Vai Receber */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            O que você vai receber no grupo
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: MessageCircle, title: 'Rotinas guiadas', desc: 'Íntima, rosto, cabelo e completa' },
              { icon: Clock, title: 'Dicas práticas e curtas', desc: 'Conteúdo direto ao ponto' },
              { icon: Users, title: 'Acompanhamento', desc: 'Durante 15 dias completos' },
              { icon: Shield, title: 'Sem excesso', desc: 'Comunicação direta e organizada' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-teal-100">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Como funciona
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', text: 'Você entra no grupo gratuito' },
              { num: '2', text: 'Recebe uma mensagem por dia' },
              { num: '3', text: 'Aplica no seu ritmo' },
              { num: '4', text: 'Escolhe se quer seguir alguma rotina' }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <p className="text-gray-700 font-medium">{step.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 text-lg">
            Sem pressão. Sem obrigação. Sem spam.
          </p>
        </div>
      </section>

      {/* O Que NÃO É */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
            Antes de entrar, é importante saber:
          </h2>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-4 mb-8">
            {[
              'Não é grupo de promoção',
              'Não é grupo com mensagem o dia inteiro',
              'Não é grupo de promessa milagrosa'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-700 text-xl font-medium">
            É um espaço de cuidado, orientação e rotina simples para começar o ano melhor.
          </p>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Quem já entrou, disse isso:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: 'Finalmente um grupo que não fica empurrando oferta.', name: 'Ana M.' },
              { quote: 'As rotinas são simples e fazem sentido.', name: 'Carla S.' },
              { quote: 'Me ajudou a começar o ano com mais calma.', name: 'Juliana R.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-teal-50 p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    {item.name[0]}
                  </div>
                  <span className="font-semibold text-gray-900">{item.name}</span>
                </div>
                <p className="text-gray-700 italic">"{item.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-bold mb-4">
              ⏰ Últimas vagas disponíveis
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              As vagas são limitadas para manter o grupo organizado
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 bg-white p-8 rounded-2xl shadow-xl">
            <Input
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-14 text-lg"
            />
            <Input
              type="tel"
              placeholder="Seu WhatsApp"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="h-14 text-lg"
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {isSubmitting ? 'Aguarde...' : '🎁 Sim, Quero Entrar Agora'}
            </Button>
            <p className="text-xs text-gray-500 text-center">✓ Acesso imediato • ✓ 100% gratuito</p>
          </form>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: 'É realmente gratuito?', a: 'Sim.' },
              { q: 'Quantas mensagens por dia?', a: '1 mensagem.' },
              { q: 'Posso sair quando quiser?', a: 'Sim.' },
              { q: 'Vai ter venda?', a: 'O foco é cuidado e orientação.' }
            ].map((faq, idx) => (
              <div key={idx} className="bg-teal-50 p-6 rounded-xl">
                <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}