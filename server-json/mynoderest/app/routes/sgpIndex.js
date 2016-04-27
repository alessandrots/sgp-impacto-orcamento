var api = require('../api'),
    path = require('path'),
    jsonServer = require('json-server'),
    dbJson = require ('./sgp.json');
    server = jsonServer.create();

module.exports  = function(app) {
  server.use(jsonServer.defaults());

  app.get('/sgp/astec/orcamento/nomeacao', function(req, res) {
    console.log('nomeacao');
    res.json(dbJson['nomeacao']);
  });

  app.get('/sgp/astec/orcamento/grupos/', function(req, res) {
    console.log('grupos');
    res.json(dbJson['grupos']);
  });

  app.get('/sgp/astec/orcamento/nomeacao/detalhe/:id', function(req, res, next) {
     var id = req.params.id;
     console.log('***** nomeacao => detalhe = ', id);
     res.json(dbJson['nomeacao'][0]);
   });

};
