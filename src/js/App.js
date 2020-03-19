import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Categoria from './Categoria';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Categoria titulo="Acoes" />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
