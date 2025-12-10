import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Clock, Calendar, AlertCircle } from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "Extraia 1ml",
    description: "Use a seringa para extrair 1ml do extrato",
    icon: Droplet
  },
  {
    number: "2",
    title: "Dilua em 50ml",
    description: "Dilua em 50ml de água ou líquido de preferência",
    icon: "💧"
  },
  {
    number: "3",
    title: "3x ao dia",
    description: "Tome como um shot, 3 vezes ao dia",
    icon: Clock
  },
  {
    number: "4",
    title: "Use diariamente",
    description: "Para melhores resultados, use todos os dias",
    icon: Calendar
  }
];

export default function HowToUseSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#2D5A4A] font-medium text-sm uppercase tracking-wider">
            Modo de uso
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Como usar o extrato?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="bg-[#F9F6F2] rounded-2xl p-6 h-full">
                <div className="w-10 h-10 bg-[#2D5A4A] rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#2D5A4A]/30" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Expectations Card */}
        <div className="bg-gradient-to-r from-[#2D5A4A] to-[#3d7a64] rounded-3xl p-8 lg:p-10 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Quando esperar resultados?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Primeiros sinais em <strong>3-7 dias</strong> de uso contínuo</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Resultados mais expressivos em <strong>10-14 dias</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>A resposta do corpo varia de pessoa para pessoa</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-2">Importante saber</h4>
                  <p className="text-sm text-white/90">
                    É natural, não é milagre instantâneo. Cada corpo responde de forma única. 
                    O uso diário e consistente é fundamental para os melhores resultados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}