import MarketConnection from './MarketConnection';
import { Acao } from './models/Acao';

export default class MarketController {
    static obterAcoes() {
        let lista = MarketConnection.getAcoes().then(acoes => {
            return acoes.map(acao => new Acao(acao.nome, acao.preco)) 
        })
        .catch(err => console.log(err));
        return lista;
    }
}