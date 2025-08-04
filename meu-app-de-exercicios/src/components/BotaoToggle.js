/* Localização: src/components/BotaoToggle.js */

import React, { useState } from 'react';

function BotaoToggle() {
  const [estaLigado, setEstaLigado] = useState(false);

  const handleToggle = () => {
    setEstaLigado(!estaLigado);
  };

  const estiloBotao = {
    backgroundColor: estaLigado ? '#28a745' : '#dc3545',
    color: 'white',
  };

  return (
    <div>
      <p>O botão está: <strong>{estaLigado ? 'ON' : 'OFF'}</strong></p>
      <button onClick={handleToggle} style={estiloBotao}>
        {estaLigado ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default BotaoToggle;