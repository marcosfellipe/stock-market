const host = 'http://localhost:8080';

export default class MarketConnection {

    _handleError(res) {
        if (!res.ok) throw new Error(res.responseText);
        return res;
    }

    /* GET Ações props: nome, preco */
    getAcoes() {
        return fetch(`${host}/api/acoes`)
            .then(res => this._handleError(res))
            .then(res => res.json())
            .catch(error => console.error('Ocorreu um problema com sua requisição: ', error));
    }

    /* GET Commodities props: nome, produtos[] */
    /* produtos[] props: nome, preco e unidade */
    getCommodities() {
        return fetch(`${host}/api/commodities`)
            .then(res => this._handleError(res))
            .then(res => res.json())
            .catch(error => console.error('Ocorreu um problema com sua requisição: ', error));
    }

    /* GET Moedas props: nome, valor */
    getMoedas() {
        return fetch(`${host}/api/moedas`)
            .then(res => this._handleError(res))
            .then(res => res.json())
            .catch(error => console.error('Ocorreu um problema com sua requisição: ', error));
    }
}