/* Localização: src/App.js */

import React from 'react';
// Atualize os caminhos de importação para apontar para a pasta 'components'
import CartaoPerfil from './components/CartaoPerfil';
import BotaoToggle from './components/BotaoToggle';
import InputControlado from './components/InputControlado';
import ListaDinamica from './components/ListaDinamica';

import './styles.css'; // O estilo continua no mesmo lugar

export default function App() {
  return (
    <div className="container">
      <h1>Exercícios Práticos de React</h1>

      <div className="exercicio">
        <h2>1 & 2. Cartão de Perfil com Botão de Curtir</h2>
        <CartaoPerfil />
      </div>

      <div className="exercicio">
        <h2>3. Botão de Toggle (ON/OFF)</h2>
        <BotaoToggle />
      </div>

      <div className="exercicio">
        <h2>4. Input Controlado</h2>
        <InputControlado />
      </div>

      <div className="exercicio">
        <h2>5. Lista Dinâmica</h2>
        <ListaDinamica />
      </div>
    </div>
  );
}