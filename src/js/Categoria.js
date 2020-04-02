import React, { Component } from 'react';

class Categoria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: []
    };
  }

  componentDidMount() {
    this._renderItem();
  }

  _renderItem = async function () {
    let lista = null;
    if (this.props.categoria === 'commodities') {
      lista = await this.props.data.then(listCategorias => {
        return listCategorias.map(categoria => {
          return (<li>
            <ul>{categoria.nome}</ul>
              {categoria.commodities.map(produto => <li>{produto.nome}</li>)}
            </li>
          );
      })
      });
    } else {
      lista = await this.props.data.then(listItens => {
        return listItens.map(itens => <li key={itens.nome.toString()}>{itens.nome}</li>);
      });
    }

    this.setState({
      lista: this.state.lista.concat(lista)
    });
  }

  render() {
    return (
      <section>
        <p><a href="/#">{this.props.titulo}</a></p>
        <ul>
          {this.state.lista}
        </ul>
      </section>
    );
  }
}

export default Categoria;