import React from 'react';
import { AlertTriangle, Shield, Heart, RefreshCw } from 'lucide-react';

export default function ContraindicationsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#2D5A4A] font-medium text-sm uppercase tracking-wider">
            Transparência
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Contraindicações e Segurança
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Transparência gera confiança. Saiba tudo sobre quando usar ou não o produto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contraindications */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Atenção especial</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Úlceras estomacais ou sensibilidade gástrica',
                'Não deve ser usado durante a gravidez',
                'Diabetes ou hipoglicemia - consultar médico',
                'Hipo/hipertireoidismo - consultar médico',
                'Uso de anticoagulantes - ter cuidado',
                'Alergias a algum dos ingredientes'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Safety & Support */}
          <div className="space-y-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
                <h4 className="font-semibold text-gray-900">Qualidade garantida</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Produto desenvolvido por consultora em lactação, com base em literatura científica 
                e ervas tradicionalmente usadas para amamentação.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Suporte especializado</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Nossa equipe está pronta para te orientar no uso do produto. 
                Não fique sozinha nesse processo!
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
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