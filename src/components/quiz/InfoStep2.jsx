import React from 'react';

export default function InfoStep2({ onBack, onNext }) {
  return (
    <div className="step active" style={{ animation: 'fadeUp 0.35s ease' }}>
      <button className="back-btn" onClick={onBack}>← Voltar</button>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        marginBottom: '24px',
      }}>
        <img
          src="https://media.base44.com/images/public/698f17e9124bfe3a6f9a6198/81a4af634_be65c9b3-6c2e-4ffd-a6e3-281ec6738188.png"
          alt="Informações nutricionais e benefícios ZIVA"
          style={{ width: '100%', display: 'block' }}
        />
      </div>
      <button className="btn btn-primary" onClick={onNext}>
        Continuar →
      </button>
    </div>
  );
}