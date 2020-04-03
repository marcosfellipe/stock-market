import React from 'react';

function Secao(props) {
  let lista = null;
  let retorno = null;
  if (props.data === null) {
    retorno = <div><p>Loading...</p></div>;
  } else {
    if (props.tipo === 'commodities') {
      lista = props.data.map(categoria => {
        return (
          <li key={categoria.nome.toString()}>
            <h3>{categoria.nome}</h3>
            <ul>
              {categoria.commodities.map(commoditie => <li key={commoditie.nome.toString()}>{commoditie.nome}</li>)}
            </ul>
          </li>
        );
      });
    } else {
      lista = props.data.map(itens => <li key={itens.nome.toString()}>{itens.nome}</li>);
    }
    retorno = <ul>{lista}</ul>;
  }

  return (
    <section>
      <h2>{props.titulo}</h2>
      {retorno}
    </section>
  );
}

export default Secao;