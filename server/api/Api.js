var data = require('./Data.json');

const Api = {};

Api.get = function(element) {
    return JSON.stringify(data[element]);
}

module.exports = Api;