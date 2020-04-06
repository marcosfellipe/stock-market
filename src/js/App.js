import React, { Component } from 'react';
import '../css/App.css';
import Secao from './Components/Secao';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MarketController from './controllers/MarketController';

class App extends Component {
  constructor(props) {
    super(props);
    this._MarketController = new MarketController();
    this.state = {
      acoes: null,
      moedas: null,
      commodities: null
    };
  }

  async componentDidMount() {
    let acoes = await this._MarketController.obterAcoes();
    let moedas = await this._MarketController.obterMoedas();
    let commodities = await this._MarketController.obterCommodities();
    this.setState({
      acoes: acoes,
      moedas: moedas,
      commodities: commodities
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Secao titulo="Acoes" tipo="acoes" data={this.state.acoes} />
          <Secao titulo="Moedas" tipo="moedas" data={this.state.moedas} />
          <Secao titulo="Commodities" tipo="commodities" data={this.state.commodities} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
