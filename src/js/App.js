import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Categoria from './Categoria';
import Footer from './Footer';
import MarketController from './controllers/MarketController';

class App extends Component {
  constructor(props) {
    super(props);
    this._MarketController = new MarketController();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Categoria titulo="Acoes" getProdutos={this._MarketController.obterAcoes} />
          <Categoria titulo="Moedas" getProdutos={this._MarketController.obterMoedas} />
          <h2>Commodities</h2>
          <Categoria titulo="Energia" categoria="commoditie" tipo="energia" getProdutos={this._MarketController.obterCommodities} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
