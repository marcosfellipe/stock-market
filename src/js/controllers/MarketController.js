import MarketConnection from '../services/MarketConnection';
import Acao from '../models/Acao';
import Mercadoria from '../models/Mercadoria';
import Commoditie from '../models/Commoditie';
import CategoriaCommoditie from '../models/CategoriaCommoditie';

export default class MarketController {
    constructor() {
        this._connection = new MarketConnection();
    }
    obterAcoes() {
        return this._connection
            .getAcoes()
            .then(acoes => {
                return acoes.map(acao => new Acao(acao.nome, acao.preco));
            })
            .catch(err => console.log(err));
    }

    async obterCommodities() {
        return await this._connection
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

    

    async obterMoedas() {
        return await this._connection
            .getMoedas()
            .then(moedas => {
                return moedas.map(moeda => new Mercadoria(moeda.nome, moeda.valor));
            })
            .catch(err => console.log(err));;
    }
}