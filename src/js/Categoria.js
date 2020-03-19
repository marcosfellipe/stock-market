import React from 'react';
import MarketController from './MarketController';

function Categoria(props) {
    console.log(MarketController.obterAcoes());
    return(
      <section>
        <p><a href="#">{props.titulo}</a></p>
        <ul>
          <li>Açao 1</li>
          <li>Acao 2</li>
          <li>Acao 3</li>
        </ul>
      </section>
    );
}

export default Categoria;