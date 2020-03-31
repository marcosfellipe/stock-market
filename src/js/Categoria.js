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
    let lista;
    if (this.props.categoria === 'commoditie') {
      lista = await this.props.getProdutos().then(categorias => {
        return categorias.find(categoria => categoria.nome.toLowerCase() === this.props.tipo.toLowerCase());
      })
        .then(categoria => {
          return categoria.obter().map((commoditie, i) => {
            return <li key={i}>
              {commoditie.nome} <span>R$:{commoditie.preco}</span>
            </li>
          });
        });
    } else {
      lista = await this.props.getProdutos().then(produtos => {
        return produtos.map((produto, i) => {
          return <li key={i}>
            {produto.nome} <span>R$:{produto.preco}</span>
          </li>
        })
      })
        .catch(err => console.log(err));
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
      </section >
    );
  }
}

export default Categoria;