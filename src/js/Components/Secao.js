import React from 'react';
import '../../css/Secao.css';

function Secao(props) {
  let lista = null;
  let retorno = null;
  if (!props.data) {
    retorno = <div><p>Loading...</p></div>;
  } else {
    if (props.tipo === 'commodities') {
      lista = props.data.map(categoria => {
        return (
          <li key={categoria.nome.toString()}>
            <h3>{categoria.nome}</h3>
            <ul>
              {
                categoria.commodities.map(commoditie => {
                  return (
                    <li className="list-item" key={commoditie.nome.toString()}>
                      {commoditie.nome}<span>R$:{commoditie.preco}</span>
                    </li>
                  );
                })
              }
            </ul>
          </li>
        );
      });
    } else {
      lista = props.data.map(item => <li className="list-item" key={item.nome.toString()}>{item.nome}<span>R$:{item.preco}</span></li>);
    }
    retorno = <ul>{lista}</ul>;
  }

  return (
    <section>
      <h2 className="list-title">{props.titulo}</h2>
      {retorno}
    </section>
  );
}

export default Secao;