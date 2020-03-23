const host = 'http://localhost:8080';

export default class MarketConnection {

    /* GET Ações props: nome, preco */
    static getAcoes() {
        return fetch(`${host}/api/acoes`).then(res => res.json()).catch(err => console.log(err));
    }

    /* GET Commodities props: nome, produtos[] */
    /* produtos[] props: nome, preco e unidade */
    static getCommodities() {
        return fetch(`${host}/api/commodities`).then(res => res.json()).catch(err => console.log(err));
    }

    /* GET Moedas props: nome, valor */
    static getMoedas() {
        return fetch(`${host}/api/moedas`).then(res => res.json()).catch(err => console.log(err));
    }
}