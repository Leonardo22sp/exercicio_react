/* Localização: src/components/ListaDinamica.js */

import React, { useState } from 'react';

function ListaDinamica() {
  const [frutas, setFrutas] = useState(['Maçã', 'Banana', 'Uva']);

  const adicionarFruta = () => {
    setFrutas([...frutas, 'Morango']);
  };

  return (
    <div>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
      <button onClick={adicionarFruta}>Adicionar Fruta</button>
    </div>
  );
}

export default ListaDinamica;