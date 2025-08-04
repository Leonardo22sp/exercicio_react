/* Localização: src/components/InputControlado.js */

import React, { useState } from 'react';

function InputControlado() {
  const [valorInput, setValorInput] = useState('');

  const handleChange = (evento) => {
    setValorInput(evento.target.value);
  };

  return (
    <div>
      <label htmlFor="textoInput">Digite algo:</label>
      <br />
      <input
        type="text"
        id="textoInput"
        value={valorInput}
        onChange={handleChange}
      />
      <p>
        <strong>Texto em tempo real:</strong> {valorInput}
      </p>
    </div>
  );
}

export default InputControlado;