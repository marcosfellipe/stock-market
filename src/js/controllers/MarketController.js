import MarketConnection from '../services/MarketConnection';
import Acao from '../models/Acao';
import Mercadoria from '../models/Mercadoria';
import Commoditie from '../models/Commoditie';
import CategoriaCommoditie from '../models/CategoriaCommoditie';

export default class MarketController {
    obterAcoes() {
        return MarketConnection
            .getAcoes()
            .then(acoes => {
                return acoes.map(acao => new Acao(acao.nome, acao.preco));
            })
            .catch(err => console.log(err));
    }

    obterCommodities = tipo => {
        return MarketConnection
        .getCommodities()
        .then(categorias => {
            return categorias.map(categoria => {
                return new CategoriaCommoditie(categoria.nome, categoria.produtos.map(commoditie => {
                    return new Commoditie(commoditie.nome, commoditie.preco, commoditie.unidade);
                }));
            })
        })
        .catch(err => console.log(err));
    }

    

    obterMoedas() {
        return MarketConnection
            .getMoedas()
            .then(moedas => {
                return moedas.map(moeda => new Mercadoria(moeda.nome, moeda.valor));
            })
            .catch(err => console.log(err));;
    }
}