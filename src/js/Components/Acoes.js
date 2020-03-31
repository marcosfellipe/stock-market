import React, { Component } from 'react';

class Acoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            acoes: []
        };
    }

    renderAcoes = async () => {
        let acoes = await this.props.getItens().then(acoes => {
            return acoes.map(acao => {
                return <li>{acao.nome}<span>R$:{acao.preco}</span></li>;
            });
        });
        this.setState({
            acoes: this.state.acoes.concat(acoes)
        });
    }

    componentDidMount() {
        this.renderAcoes();
    }

    render() {
        return (
        <section>
            <h2>Ações</h2>
            <ul>
                {this.state.acoes}
            </ul>
        </section>
    );
    }
}

export default Acoes;