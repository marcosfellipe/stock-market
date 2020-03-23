import MarketConnection from '../services/MarketConnection';
import { Acao } from '../models/Acao';
import { Mercadoria } from '../models/Mercadoria';

export default class MarketController {
    static obterAcoes() {
        return MarketConnection
            .getAcoes()
            .then(acoes => {
                return acoes.map(acao => new Acao(acao.nome, acao.preco)); 
            })
            .catch(err => console.log(err));
    }

    static obterCommodities() {
        // return MarketConnection
        //     .getCommodities()
        //     .then(commodities => {
        //         return commodities.map(commoditie => {
        //             return new Commoditie(nome, commoditie.produtos.map(produto => {
        //                 return new Mercadoria(produto.nome, produto.preco);
        //             }));
        //         }); 
        //     })
        //     .catch(err => console.log(err));;
    }

    static obterMoedas() {
        return MarketConnection
            .getMoedas()
            .then(moedas => {
                return moedas.map(moeda => new Mercadoria(moeda.nome, moeda.valor)); 
            })
            .catch(err => console.log(err));;
    }
}