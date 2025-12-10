import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Star, 
  Check, 
  Shield, 
  Heart,
  Droplets,
  Baby,
  Users,
  Milk,
  Scale,
  Activity,
  Leaf,
  Clock,
  Award,
  Sparkles,
  TrendingUp,
  ChevronRight,
  Package,
  MessageCircle,
  CheckCircle2,
  X,
  Plus,
  ShoppingCart
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExtratoLactacao() {
  const [quantity, setQuantity] = useState(1);
  const [showFixedCTA, setShowFixedCTA] = useState(false);
  const price = 89.90;

  useEffect(() => {
    const handleScroll = () => {
      setShowFixedCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-gradient-to-b from-green-50/30 to-white">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 to-teal-100/40 rounded-full blur-3xl"></div>
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68c5b2bb0cdd456c97ee531f/product-bottle.png"
              alt="Extrato Vegetal Mamamais"
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-200 px-4 py-1">
                ✨ Fórmula Concentrada
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Extrato Vegetal Mamamais
              </h1>
              <p className="text-xl text-gray-600 font-light">
                Lactação Induzida
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 leading-snug">
                A solução natural e concentrada para induzir sua produção de leite — mesmo nos casos mais difíceis.
              </h2>
              <p className="text-lg text-gray-600">
                Extrato vegetal criado por consultora em lactação, usado por mais de <span className="font-semibold text-green-700">60.000 famílias</span>.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 py-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                <Leaf className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">100% Natural</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Seguro na Amamentação</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                <Award className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Fórmula Estudada</span>
              </div>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">4.9/5</span>
              <span className="text-gray-600">• 3.500 avaliações</span>
            </div>

            {/* Price & CTA */}
            <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-gray-900">
                    R$ {(price * quantity).toFixed(2)}
                  </span>
                  <span className="text-gray-600">ou 3x de R$ {(price * quantity / 3).toFixed(2)}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 font-semibold border-x border-gray-300">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-600">30ml • 1 mês de uso</span>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Comprar Agora • Envio Imediato
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Compra 100% segura e protegida</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* PARA QUEM É INDICADO */}
      <motion.section {...fadeIn} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Para quem é indicado?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uma opção natural e segura para mães que enfrentam desafios na amamentação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Droplets, title: "Quer estimular a produção de leite", desc: "Baixa produção ou pouco leite na bombinha" },
              { icon: Activity, title: "Quem tem cirurgia mamária", desc: "Redução, mastopexia ou implante" },
              { icon: Milk, title: "Quem ordenha", desc: "Dificuldade em extrair leite ou manter produção" },
              { icon: Baby, title: "Quem teve diabetes gestacional", desc: "Controle hormonal e estímulo à produção" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center">
                      <item.icon className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* O QUE ESTE PRODUTO FAZ */}
      <motion.section {...fadeIn} className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-green-600 text-white px-4 py-2 text-sm">
              Resultados Comprovados
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              O que este produto faz por você?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: TrendingUp, title: "Estimula naturalmente a produção de leite", color: "green" },
              { icon: Heart, title: "Auxilia na indução da lactação", color: "teal" },
              { icon: Droplets, title: "Aumenta a ejeção e descida do leite", color: "green" },
              { icon: Activity, title: "Melhora a resposta hormonal", color: "teal" },
              { icon: Baby, title: "Ajuda o bebê a ganhar peso", color: "green" },
              { icon: CheckCircle2, title: "Reduz o uso de fórmula", color: "teal" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-${item.color}-100 flex-shrink-0`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                  </div>
                  <p className="font-medium text-gray-900 leading-relaxed">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mecanismo */}
          <Card className="bg-white border-2 border-green-200">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
                <div className="space-y-2">
                  <Leaf className="w-12 h-12 text-green-600 mx-auto" />
                  <p className="font-semibold text-gray-900">Ervas Galactagogas</p>
                </div>
                <ChevronRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
                <div className="space-y-2">
                  <Activity className="w-12 h-12 text-teal-600 mx-auto" />
                  <p className="font-semibold text-gray-900">Aumento da Prolactina</p>
                </div>
                <ChevronRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
                <div className="space-y-2">
                  <TrendingUp className="w-12 h-12 text-green-600 mx-auto" />
                  <p className="font-semibold text-gray-900">Mais Produção de Leite</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* CIÊNCIA POR TRÁS DA FÓRMULA */}
      <motion.section {...fadeIn} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              O que vai na fórmula deste extrato?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Formulação baseada em literatura de herbologia e bancos como LactMed. Uma opção natural e segura.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Melissa", benefit: "Reduz ansiedade e estresse, favorecendo a descida do leite" },
              { name: "Funcho", benefit: "Galactagogo tradicional, estimula produção" },
              { name: "Camomila", benefit: "Acalma e reduz tensão, melhora ejeção" },
              { name: "Capim-Cidreira", benefit: "Relaxante natural, favorece produção hormonal" },
              { name: "Erva-doce", benefit: "Estimula ejeção e reduz cólicas no bebê" },
              { name: "Feno-grego", benefit: "Galactagogo clássico, aumenta prolactina" }
            ].map((herb, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center">
                      <Leaf className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-bold text-xl text-center text-gray-900">{herb.name}</h3>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">{herb.benefit}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Authority */}
          <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gradient-to-br from-green-200 to-teal-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-16 h-16 text-green-700" />
                </div>
                <div className="space-y-3 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Criado por Consultora em Lactação
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Fórmula desenvolvida com base em anos de experiência clínica e estudos científicos em herbologia e lactação. Cada erva foi cuidadosamente selecionada por suas propriedades galactagogas comprovadas e segurança na amamentação.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* COMO USAR */}
      <motion.section {...fadeIn} className="py-20 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Como usar o extrato?
            </h2>
            <p className="text-xl text-gray-600">
              Instruções claras para resultados consistentes
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: Clock, title: "Frequência", desc: "3 vezes ao dia, preferencialmente antes das mamadas principais" },
              { icon: Droplets, title: "Dosagem", desc: "10 gotas em meio copo de água ou diretamente na boca" },
              { icon: Activity, title: "Duração", desc: "Uso contínuo por no mínimo 21-30 dias para resultados consistentes" },
              { icon: TrendingUp, title: "Resultados", desc: "Primeiros efeitos podem aparecer entre 7-15 dias (varia individualmente)" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
                        <item.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="mt-8 bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <div className="flex gap-3">
                <Sparkles className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Importante lembrar:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• É um produto natural, não um milagre instantâneo</li>
                    <li>• A resposta do corpo varia de pessoa para pessoa</li>
                    <li>• Use diariamente e consistentemente para melhores resultados</li>
                    <li>• Combine com estimulação frequente (mamadas ou ordenha)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* COMO ELE AJUDA CADA DOR */}
      <motion.section {...fadeIn} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Como ele ajuda seu caso específico?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                title: "Baixa produção extrema", 
                desc: "Aumenta os níveis de prolactina e ativa a resposta galactopoiética do corpo, mesmo quando a produção está muito baixa",
                icon: Droplets
              },
              { 
                title: "Bebê abaixo do peso", 
                desc: "Favorece o aumento gradual da oferta de leite, permitindo mais mamadas efetivas e ganho de peso adequado",
                icon: Baby
              },
              { 
                title: "Indução de lactação", 
                desc: "Ajuda a iniciar a produção de leite mesmo sem gravidez ou parto, essencial para adoção e famílias homoafetivas",
                icon: Heart
              },
              { 
                title: "Relactação", 
                desc: "Auxilia na retomada da produção de leite após interrupção, reativando os mecanismos hormonais",
                icon: Activity
              },
              { 
                title: "Uso de fórmula", 
                desc: "Mais produção de leite materno significa menos dependência de fórmula e transição gradual",
                icon: Milk
              },
              { 
                title: "Pós-parto difícil", 
                desc: "Compensa atrasos no início da lactação causados por cesárea, prematuridade ou complicações",
                icon: Shield
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all hover:border-green-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl">
                        <item.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="font-bold text-xl text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PROVAS SOCIAIS */}
      <motion.section {...fadeIn} className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              O que outras mães dizem
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de transformação na amamentação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Juliana M.",
                result: "De 10ml para 60ml em 10 dias",
                text: "Eu não produzia quase nada na bombinha. Comecei a usar o extrato e em menos de 2 semanas consegui triplicar minha produção. Meu bebê finalmente está ganhando peso!",
                rating: 5
              },
              {
                name: "Carla S.",
                result: "Reduziu a fórmula pela metade",
                text: "Estava complementando muito com fórmula e me sentia frustrada. Com o extrato consegui aumentar minha produção e hoje meu filho mama muito mais no peito.",
                rating: 5
              },
              {
                name: "Amanda R.",
                result: "Lactação induzida bem-sucedida",
                text: "Adotamos nossa filha e eu queria muito amamentar. O extrato foi fundamental no processo de indução. Hoje ela mama exclusivamente no peito!",
                rating: 5
              }
            ].map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <Card className="h-full bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="space-y-2">
                      <p className="font-bold text-green-700 text-lg">{review.result}</p>
                      <p className="text-gray-700 leading-relaxed italic">"{review.text}"</p>
                    </div>
                    <p className="font-semibold text-gray-900">— {review.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block bg-white border-2 border-green-200">
              <CardContent className="p-8">
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Users className="w-8 h-8 text-green-600" />
                    <span className="text-4xl font-bold text-gray-900">60.000+</span>
                  </div>
                  <p className="text-xl text-gray-600">famílias confiam na Mamamais</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section {...fadeIn} className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire todas as suas dúvidas sobre o extrato
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "É seguro para o bebê?",
                a: "Sim, completamente seguro. Todas as ervas da fórmula são reconhecidas como seguras durante a amamentação segundo o LactMed e literatura científica. O extrato é consumido pela mãe e os princípios ativos são naturais e não apresentam risco ao bebê."
              },
              {
                q: "Funciona em casos de relactação?",
                a: "Sim! O extrato é especialmente eficaz para relactação, ajudando a reativar a produção de leite após períodos de interrupção. Combinado com estímulo frequente, os resultados costumam aparecer em 2-3 semanas."
              },
              {
                q: "Posso usar se estou tomando fórmula?",
                a: "Com certeza! Muitas mães usam o extrato exatamente para reduzir a necessidade de complementação com fórmula. À medida que sua produção aumenta, você pode gradualmente diminuir a quantidade de fórmula."
              },
              {
                q: "Quanto tempo demora para fazer efeito?",
                a: "A resposta varia individualmente. Algumas mães percebem mudanças em 7-10 dias, outras em 2-3 semanas. Recomendamos uso consistente por no mínimo 21-30 dias para avaliar os resultados."
              },
              {
                q: "Tem contraindicações?",
                a: "O extrato é contraindicado para gestantes. Mães com condições específicas (hipertensão, diabetes não controlado, alergias a ervas) devem consultar um profissional antes do uso. Em caso de dúvidas, nossa equipe está disponível para orientação."
              },
              {
                q: "Posso usar junto com outros produtos Mamamais?",
                a: "Sim! O extrato pode ser combinado com outros produtos da linha Mamamais, como o Buenas Noches (para ansiedade e ejeção) e chás. Essa combinação muitas vezes potencializa os resultados."
              },
              {
                q: "É seguro para mães de cesárea?",
                a: "Perfeitamente seguro! Na verdade, é especialmente útil para mães de cesárea, pois pode ajudar a compensar o atraso natural no início da lactação causado por esse tipo de parto."
              },
              {
                q: "Funciona para indução de lactação em adoção?",
                a: "Sim, esse é um dos principais usos do extrato. Ele ajuda a estimular a produção hormonal necessária para lactação mesmo sem ter passado pela gravidez e parto. Muitas mães adotivas têm sucesso com o protocolo."
              }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-gray-50 px-6 rounded-xl border border-gray-200">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.section>

      {/* CONTRAINDICAÇÕES */}
      <motion.section {...fadeIn} className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Transparência e Segurança
            </h2>
            <p className="text-xl text-gray-600">
              Informações importantes sobre uso seguro
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-white border-2 border-amber-200">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-3">
                  <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl text-gray-900">Não recomendado para:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex gap-2"><X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" /> Gestantes (uso exclusivo durante lactação)</li>
                      <li className="flex gap-2"><X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" /> Pessoas com alergia conhecida a alguma das ervas da fórmula</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-blue-200">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-3">
                  <MessageCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl text-gray-900">Consulte antes se você tem:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Hipertensão não controlada</li>
                      <li>• Diabetes descompensado</li>
                      <li>• Histórico de alergias a plantas medicinais</li>
                      <li>• Uso de medicações contínuas (possíveis interações)</li>
                    </ul>
                    <p className="text-sm text-gray-600 pt-2">
                      Nossa equipe está disponível para tirar dúvidas e orientar sobre uso seguro.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-green-200">
              <CardContent className="p-6">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl text-gray-900">Política de Satisfação</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Se você não se adaptar ao produto ou tiver qualquer dificuldade, entre em contato conosco. Estamos aqui para apoiar sua jornada de amamentação e encontrar a melhor solução para você.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* COMPARAÇÃO */}
      <motion.section {...fadeIn} className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Por que o Extrato é diferente?
            </h2>
            <p className="text-xl text-gray-600">
              Comparação com outras alternativas
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900"></th>
                  <th className="text-center p-4 bg-green-50 font-bold text-green-700 rounded-t-xl">
                    Extrato Mamamais
                  </th>
                  <th className="text-center p-4 font-semibold text-gray-600">Chá Comum</th>
                  <th className="text-center p-4 font-semibold text-gray-600">Tentativas Caseiras</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Potência", "Alta concentração", "Baixa", "Variável"],
                  ["Tempo de resposta", "7-15 dias", "20-30 dias", "Incerto"],
                  ["Comodidade", "10 gotas, 3x/dia", "Preparar chá várias vezes", "Trabalhoso"],
                  ["Segurança", "Dosagem precisa", "Difícil controlar", "Risco de erros"],
                  ["Qualidade", "Ervas selecionadas", "Dependede da origem", "Inconsistente"],
                  ["Expertise", "Criado por especialista", "Genérico", "Sem orientação"]
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">{row[0]}</td>
                    <td className="p-4 bg-green-50 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-green-700">{row[1]}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center text-gray-600">{row[2]}</td>
                    <td className="p-4 text-center text-gray-600">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* KITS RECOMENDADOS */}
      <motion.section {...fadeIn} className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-green-600 text-white px-4 py-2">
              Potencialize seus resultados
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Kits Recomendados
            </h2>
            <p className="text-xl text-gray-600">
              Combine produtos para resultados ainda melhores
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Kit Lactação Completo",
                products: ["Extrato Vegetal", "Buenas Noches", "Chá Amamentação"],
                price: 249.90,
                save: "Economize R$ 45",
                best: true
              },
              {
                name: "Kit Indução",
                products: ["Extrato Vegetal", "Buenas Noches", "Apoio Hormonal"],
                price: 229.90,
                save: "Economize R$ 35"
              },
              {
                name: "Kit Pós-Parto",
                products: ["Extrato Vegetal", "Banho de Assento", "Chá Recuperação"],
                price: 199.90,
                save: "Economize R$ 30"
              }
            ].map((kit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className={`h-full ${kit.best ? 'border-2 border-green-400 shadow-xl' : 'border border-gray-200'}`}>
                  {kit.best && (
                    <div className="bg-green-600 text-white text-center py-2 rounded-t-xl font-semibold">
                      🏆 Mais Popular
                    </div>
                  )}
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">{kit.name}</h3>
                      <Badge className="bg-green-100 text-green-700">{kit.save}</Badge>
                    </div>
                    <ul className="space-y-2">
                      {kit.products.map((product, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-green-600" />
                          <span>{product}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t">
                      <div className="text-3xl font-bold text-gray-900 mb-4">
                        R$ {kit.price.toFixed(2)}
                      </div>
                      <Button className={`w-full ${kit.best ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-800 hover:bg-gray-900'} text-white py-6`}>
                        <Package className="w-5 h-5 mr-2" />
                        Comprar Kit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* GARANTIA E SUPORTE */}
      <motion.section {...fadeIn} className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Você não está sozinha nessa jornada
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Suporte Especializado</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nossa equipe te orienta no uso do produto e tira todas as suas dúvidas durante o processo de lactação.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Garantia de Satisfação</h3>
                <p className="text-gray-700 leading-relaxed">
                  Se não se adaptar ao produto ou tiver qualquer problema, fale com a gente. Estamos aqui para ajudar.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">60.000+ Famílias</h3>
                <p className="text-gray-700 leading-relaxed">
                  Atendemos milhares de famílias em todo o Brasil com produtos de qualidade e suporte humanizado.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Qualidade Garantida</h3>
                <p className="text-gray-700 leading-relaxed">
                  Produtos desenvolvidos com expertise em lactação e compromisso com a segurança de mães e bebês.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* CTA FINAL */}
      <motion.section {...fadeIn} className="py-24 bg-gradient-to-br from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Pronta para estimular sua produção de leite de forma natural e segura?
          </h2>
          <p className="text-2xl text-green-50">
            Seu corpo pode responder — você só precisa do estímulo certo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all">
              <ShoppingCart className="w-6 h-6 mr-3" />
              Comprar Agora • Envio Imediato
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 text-green-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Fórmula Natural</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Seguro para o Bebê</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Suporte Especializado</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Fixed Mobile CTA */}
      {showFixedCTA && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-green-200 shadow-2xl p-4 z-50 md:hidden"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-bold text-gray-900">R$ {(price * quantity).toFixed(2)}</p>
              <p className="text-xs text-gray-600">30ml • Envio Imediato</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6">
              Comprar Agora
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}