const host = 'http://localhost:8080';

export default class MarketConnection {    
    static getAcoes() {
        return fetch(`${host}/api/acoes`).then(res => res.json());
    }
}