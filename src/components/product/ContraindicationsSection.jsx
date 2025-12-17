import React from 'react';
import { AlertTriangle, Shield, Heart, RefreshCw } from 'lucide-react';

export default function ContraindicationsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-medium text-sm uppercase tracking-wider">
            Transparência
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Contraindicações e Segurança
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Transparência gera confiança. Saiba tudo sobre o uso seguro do Bari Essential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contraindications */}
          <div className="bg-purple-50 border border-purple-600/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Atenção especial</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Consulte seu médico antes de iniciar qualquer suplementação',
                'Gestantes devem consultar obstetra antes do uso',
                'Respeite sempre a dosagem recomendada',
                'Alérgicos a algum dos componentes devem evitar',
                'Mantenha fora do alcance de crianças',
                'Armazene em local fresco e seco'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Safety & Support */}
          <div className="space-y-6">
            <div className="bg-orange-50 border border-[#FF6B35]/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
                <h4 className="font-semibold text-gray-900">Qualidade garantida</h4>
                </div>
                <p className="text-gray-600 text-sm">
                Fórmula cientificamente desenvolvida com 3 tipos de colágeno hidrolisado + Ácido Hialurônico, 
                criada especialmente para rejuvenescer pele, fortalecer cabelos e unhas.
                </p>
            </div>

            <div className="bg-orange-50 border border-[#FF6B35]/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
                <h4 className="font-semibold text-gray-900">Suporte especializado</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Nossa equipe está pronta para te orientar no uso do produto. 
                Você não está sozinho(a) nessa jornada!
              </p>
            </div>

            <div className="bg-orange-50 border border-[#FF6B35]/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="w-6 h-6 text-purple-600" />
                <h4 className="font-semibold text-gray-900">Política de troca</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Se não se adaptar ao produto, fale com a gente. 
                Temos política de troca e devolução clara e justa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}