var Api = require('../api/Api');
var express = require('express');
var router = express.Router();

/* GET ações. */
router.get('/acoes', function(req, res, next) {
  res.send(Api.get('acoes'));
});

/* GET commodities. */
router.get('/commodities', function(req, res, next) {
  res.send(Api.get('commodities'));
});

/* GET moedas. */
router.get('/moedas', function(req, res, next) {
  res.send(Api.get('moedas'));
});

module.exports = router;
