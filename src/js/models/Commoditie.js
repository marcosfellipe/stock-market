import Mercadoria from './Mercadoria';

export default class Commoditie extends Mercadoria {
    constructor(nome, preco, unidade) {
        super(nome, preco);
        this._unidade = unidade;
    }

    get unidade() {
        return this._unidade;
    }
}