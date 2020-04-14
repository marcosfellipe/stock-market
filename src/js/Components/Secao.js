import React, { Component } from 'react';
import '../../css/Secao.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Animated } from 'react-animated-css';
import Loading from './Loading';

class Secao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: true,
      isVisible: true,
      lista: null,
    };
  }

  componentDidUpdate = () => {
    if (this.state.lista || this.props.data === undefined)
      return;

    let lista;
    if (this.props.tipo === 'commodities') {
      lista = this.props.data.map(categoria => {
        return (
          <li key={categoria.nome.toString()}>
            <h3 className="sub-list-title">{categoria.nome}</h3>
            <ul>
              {
                categoria.commodities.map(commoditie => {
                  return (
                    <li className="list-item" key={commoditie.nome.toString()}>
                      {commoditie.nome}<span>R$ {commoditie.preco}</span>
                    </li>
                  );
                })
              }
            </ul>
          </li>
        );
      });
    } else {
      lista = this.props.data.map(item => <li className="list-item" key={item.nome.toString()}>{item.nome}<span>R$ {item.preco}</span></li>);
    }
    this.setState({
      lista: lista
    });
  }

  toggle = () => {
    this.setState((state, props) => {
     return {isToggled: !state.isToggled};  
    }); 
    setTimeout(() => this.setState((state, props) => {
      return {isVisible: !state.isVisible};
    }), this.state.isVisible ? 250 : 0);
  }

  render() {
    return (
      <section>
        <h2 className="list-title" onClick={this.toggle}>
          <FontAwesomeIcon icon={faAngleDown} rotation={this.state.isVisible ? null : 270} />
          {this.props.titulo}
        </h2>
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationOutDuration={250} 
          isVisible={this.state.isToggled} style={this.state.isVisible ? null : {display: "none"}}>
          { 
            this.props.data ? <ul>{this.state.lista}</ul> : <Loading /> 
          }
        </Animated>
      </section>
    );
  }
}

export default Secao;