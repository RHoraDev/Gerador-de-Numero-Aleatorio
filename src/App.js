import React, {useState} from 'react';
import './App.css';

function PaginaInicial() {

  const [ numeroAleatorio, gerarNumeroAleatorio] = useState(0);

  function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * (100 - 1) + 1);
    gerarNumeroAleatorio(novoNumero);
  }

  return (
    <main>
      <div className='container-centralizado'>
        <h3>Numero Aleatório:</h3>
        <h1>{numeroAleatorio}</h1>
        <div className='area-botao'>
          <label>Clique no botão abaixo para gerar um número aleatório:</label>
          <button onClick={gerarNumero}>Gerar número</button>
        </div>
      </div>
    </main>
  );
}

export default PaginaInicial;
