import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Categoria from './Categoria';
import Footer from './Footer';
import MarketController from './controllers/MarketController';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Categoria titulo="Acoes" getProdutos={MarketController.obterAcoes} />
          <Categoria titulo="Moedas" getProdutos={MarketController.obterMoedas} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
