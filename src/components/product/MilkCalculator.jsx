import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calculator } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MilkCalculator() {
  const [currentMl, setCurrentMl] = useState('');
  const [showResult, setShowResult] = useState(false);

  const calculateIncrease = () => {
    if (!currentMl || currentMl <= 0) return;
    setShowResult(true);
  };

  const potentialMl = Math.round(parseFloat(currentMl) * 1.5); // Aumento de 50%
  const increase = potentialMl - parseFloat(currentMl);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-[#2D5A4A] to-[#3d7a64] rounded-2xl p-6 lg:p-8 text-white"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Calculadora de Produção</h3>
          <p className="text-white/80 text-sm">Descubra seu potencial de aumento</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-white/90 mb-2 block">
            Quantos ml você produz hoje por dia?
          </label>
          <Input
            type="number"
            placeholder="Ex: 300"
            value={currentMl}
            onChange={(e) => {
              setCurrentMl(e.target.value);
              setShowResult(false);
            }}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg h-12"
          />
        </div>

        <Button
          onClick={calculateIncrease}
          disabled={!currentMl || currentMl <= 0}
          className="w-full bg-white text-[#2D5A4A] hover:bg-white/90 font-semibold h-12"
        >
          Calcular Potencial
        </Button>

        {showResult && currentMl > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-green-300" />
                <span className="text-sm text-white/80">Produção Potencial</span>
              </div>
              
              <div className="text-5xl font-bold mb-2">
                {potentialMl} ml
              </div>
              
              <div className="inline-block bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                +{increase} ml por dia (+50%)
              </div>

              <p className="text-white/70 text-sm">
                Baseado em resultados médios de mães que usaram o extrato regularmente por 14-30 dias
              </p>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-white/20">
        <p className="text-xs text-white/60 text-center">
          * Resultados podem variar. A calculadora usa a média de aumento de 50% relatada por usuárias.
        </p>
      </div>
    </motion.div>
  );
}