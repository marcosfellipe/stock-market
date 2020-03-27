import Commoditie from "./Commoditie";

export default class CategoriaCommoditie {
    /* Recebe o nome da categoria e um Array de Commodities. */
    constructor(nome, commodities = []) {
        this._nome = nome;
        this._commodities = commodities;
    }

    adicionar(commoditie) {
       if (commoditie instanceof Commoditie) {
          this._commodities.push(commoditie); 
       } else {
           throw new Error('Informe uma commoditie como parâmetro.');
       }
    }

    remover(commoditie) {
        let index = this._commodities.indexOf(commoditie);
        if(index) {
            this._commodities.splice(index, 1);
        } else {
            throw new Error('Não foi possível deletar esta commoditie.');
        }
    }

    obter(nome = '') {
        return nome ? this._commodities.find(com => com.nome === nome) : this._commodities;     
    }
}