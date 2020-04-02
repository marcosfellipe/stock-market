import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Acoes from './Components/Acoes';
import Categoria from './Categoria';
import Footer from './Footer';
import MarketController from './controllers/MarketController';

class App extends Component {
  constructor(props) {
    super(props);
    this._MarketController = new MarketController();
    this._listAcoes = [];
    this._listMoedas = [];
    this._listCommodities = [];
    this._init();
  }

  _init() {
    this._listAcoes = this._MarketController.obterAcoes();
    this._listMoedas = this._MarketController.obterMoedas();
    this._listCommodities = this._MarketController.obterCommodities();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Acoes data={this._listAcoes} />
          <Categoria titulo="Moedas" categoria="moedas" data={this._listMoedas} />
          <Categoria titulo="Commodities" categoria="commodities" data={this._listCommodities} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
