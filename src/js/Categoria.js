import React, { Component } from 'react';

class Categoria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: []
    };
  }

  componentDidMount() {
    this.renderItem();
  }

  renderItem = async function () {
    let lista = await this.props.getProdutos().then(produtos => {
      return produtos.map((produto, i) => {
        return <li key={i}>
                {produto.nome} <span>R$:{produto.preco}</span>
               </li>
      })
    });
    this.setState({
      lista: this.state.lista.concat(lista)
    });
  }

  render() {
    return (
      <section>
        <p><a href="#">{this.props.titulo}</a></p>
        <ul>
          {this.state.lista}
        </ul>
      </section >
    );
  }
}

export default Categoria;