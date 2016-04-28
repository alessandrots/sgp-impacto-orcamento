var api = require('../api'),
    path = require('path'),
    jsonServer = require('json-server'),
    dbJson = require ('./sgp.json');
    server = jsonServer.create();

module.exports  = function(app) {
  server.use(jsonServer.defaults());

  

  app.get('/sgp/astec/orcamento/grupos/', function(req, res) {
    console.log('grupos');
    res.json(dbJson['grupos']);
  });

  /**
  * Trazendo todos os impactos
  */
  app.get('/sgp/astec/orcamento/nomeacao', function(req, res) {
    console.log('nomeacao');
    res.json(dbJson['nomeacao']);
  });

/**
 * Trazendo todos os impactos por ID
 */
  app.get('/sgp/astec/orcamento/nomeacao/detalhe/:id', function(req, res, next) {
     var id = req.params.id, result;
     console.log('***** nomeacao => detalhe = ', id);
     // res.json(dbJson['nomeacao'][0]);valor fixo
     
     result = dbJson['nomeacao'].filter(function(chain){
        return chain.vaga == id;
     });

     // console.log('***** nomeacao => result = ', result);

     res.json(result[0]);
   });

};
