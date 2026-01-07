import React from 'react';
import { useGreemy } from './GreemyContext';

const FLAVOR_CODES = {
  'cranberry': '6J3KDTF80E',
  'tropical': 'GAA70WUDT7',
  'limao': 'OY7JZG4UE9',
  'pink-lemonade': 'Q7TJA8P8X6',
  'tangerina': '4JF2A26WUQ',
  'chocolate': 'OY9KOFHD8D'
};

const FLAVOR_NAMES = {
  'cranberry': 'Cranberry',
  'tropical': 'Frutas Tropicais',
  'limao': 'Limão',
  'pink-lemonade': 'Pink Lemonade',
  'tangerina': 'Tangerina',
  'chocolate': 'Chocolate'
};

export default function GreemyDebugPanel() {
  const { selectedSize, selectedFlavors } = useGreemy();

  // Contar sabores
  const flavorCounts = {};
  selectedFlavors.forEach(flavorId => {
    flavorCounts[flavorId] = (flavorCounts[flavorId] || 0) + 1;
  });

  // Gerar produtos
  const productParts = [];
  Object.entries(flavorCounts).forEach(([flavorId, quantity]) => {
    const code = FLAVOR_CODES[flavorId];
    if (code) {
      productParts.push(`${code}:${quantity}`);
    }
  });

  const checkoutUrl = productParts.length > 0 
    ? 'https://renovabe5.pay.yampi.com.br/r/' + productParts.join(',')
    : 'Nenhum sabor selecionado';

  return (
    <div className="fixed bottom-20 right-4 bg-black/90 text-white p-4 rounded-lg text-xs max-w-sm z-50 backdrop-blur">
      <div className="font-bold mb-2">🔍 Debug Checkout</div>
      <div className="space-y-1">
        <div><strong>Tamanho:</strong> {selectedSize}</div>
        <div><strong>Sabores:</strong> [{selectedFlavors.join(', ')}]</div>
        <div><strong>Total:</strong> {selectedFlavors.length}</div>
        <div className="pt-2 border-t border-white/20">
          <strong>Contagem:</strong>
          {Object.entries(flavorCounts).map(([id, qty]) => (
            <div key={id} className="ml-2">
              • {FLAVOR_NAMES[id]}: {qty}x ({FLAVOR_CODES[id]})
            </div>
          ))}
        </div>
        <div className="pt-2 border-t border-white/20">
          <strong>URL Yampi:</strong>
          <div className="break-all text-green-300 mt-1">{checkoutUrl}</div>
        </div>
      </div>
    </div>
  );
}