/* Localização: src/components/CartaoPerfil.js */

import React, { useState } from 'react';

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  maxWidth: '300px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  margin: '20px auto',
};

const imageStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  objectFit: 'cover',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
};

function CartaoPerfil() {
  const [curtidas, setCurtidas] = useState(0);

  const handleCurtir = () => {
    setCurtidas(curtidas + 1);
  };

  return (
    <div style={cardStyle}>
      <img
        src="https://cdn.autopapo.com.br/box/uploads/2024/10/15201441/chevrolet-meriva-2012-prata-frente-e-lateral.jpg"
        alt="Foto de perfil"
        style={imageStyle}
      />
      <h2>Chevrolet Meriva</h2>
      <p>Melhor minivan que existe!</p>
      <button onClick={handleCurtir} style={buttonStyle}>
        Curtir 👍 ({curtidas})
      </button>
    </div>
  );
}

export default CartaoPerfil;