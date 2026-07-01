import React from 'react';

export default function InfoStep({ onBack, onNext }) {
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
          src="https://media.base44.com/images/public/698f17e9124bfe3a6f9a6198/55eb28562_47ec9686-1c7a-4ed5-ba60-c750d9278d66.png"
          alt="Simbiótico Íntimo ZIVA"
          style={{ width: '100%', display: 'block' }}
        />
      </div>
      <button className="btn btn-primary" onClick={onNext}>
        Continuar →
      </button>
    </div>
  );
}