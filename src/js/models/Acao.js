import { Mercadoria } from "./Mercadoria";

export class Acao extends Mercadoria {
    constructor(nome, preco) {
        super(nome, preco);
        this._variacao = Math.random();
    }

    get variacao() {
        return this._variacao;
    }

    /* Função para simular um crescimento/diminuição orgânica */
    atualizarVariacao() {
        let diferenca = Math.random();
        this.variacao = diferenca >= this.variacao ? diferenca + this.variacao : this.variacao - diferenca;
    }
}