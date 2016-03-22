var api = require('../api'),
    path = require('path'),
    jsonServer = require('json-server'),
    dbJson = require ('./db.json');
    server = jsonServer.create();

module.exports  = function(app) {
  server.use(jsonServer.defaults());

  app.get('/', function(req, res) {
    console.log('all json');
    res.json(dbJson);
  });

  app.get('/myrestapi/rest/logon', function(req, res) {
    console.log('logon');
    res.json(dbJson['logon']);
  });

   app.all('/myrestapi/rest/logon/logarComo', function(req, res) {
      console.log('logarComo');
      res.json(dbJson['logarComo']);
   });

   app.get('/myrestapi/rest/dadosPrograma/programas/:idIes', function(req, res, next) {
     var idIes = req.params.idIes;
     console.log('dadosPrograma/programas => idIes = ', idIes);
     res.json(dbJson['dadosPrograma/programas'][0]);//traz o primeiro
   });

   app.get('/myrestapi/rest/dadosPrograma/detalhe/:idPrograma/:idAno', function(req, res, next) {
     var idPrograma = req.params.idPrograma;
     var idAno = req.params.idAno;
     console.log('dadosPrograma/detalhe idPrograma = ', idPrograma);
     console.log('dadosPrograma/detalhe idAno = ', idAno);
     res.json(dbJson['dadosPrograma/detalhe']);
   });

   app.all('/myrestapi/rest/docentes', function(req, res, next) {
     console.log('docentes');
     res.json(dbJson['docentes']);
   });

   app.get('/myrestapi/rest/docentes/detalheDocente/:idDocente', function(req, res, next) {
     var idDocente = req.params.idDocente;
     console.log('docentes/detalheDocente = ', idDocente);
     res.json(dbJson['docentes/detalheDocente']);
   });

   app.all('/myrestapi/rest/discentes', function(req, res, next) {
     console.log('discentes');
     res.json(dbJson['discentes']);
   });

   app.get('/myrestapi/rest/discentes/detalheDiscente/:idDiscente', function(req, res, next) {
     var idDiscente = req.params.idDiscente;
     console.log('discentes/detalheDiscente = ', idDiscente);
     res.json(dbJson['detalheDiscente']);
   });

   app.get('/myrestapi/rest/dadosGeraisSolicitacao/quantitativosHomologacao/:idUsuario/:idIes', function(req, res, next) {
     var idUsuario = req.params.idUsuario;
     var idIes = req.params.idIes;
     console.log('discentes/detalheDiscente idUsuario = ', idUsuario);
     console.log('discentes/detalheDiscente idIes = ', idIes);
     res.json(dbJson['dadosGeraisSolicitacao/quantitativosHomologacao']);
   });

   app.all('/myrestapi/rest/solicitacoes', function(req, res, next) {
     console.log('solicitacoes');
     res.json(dbJson['solicitacoes']);
   });

   app.get('/myrestapi/rest/solicitacoes/detalhe/:idTipoSolicitacao/:idSolicitacao', function(req, res, next) {
     var idTipoSolicitacao = req.params.idTipoSolicitacao;
     var idSolicitacao = req.params.idSolicitacao;
     console.log('solicitacoes/detalhe idTipoSolicitacao = ', idTipoSolicitacao);
     console.log('solicitacoes/detalhe idSolicitacao = ', idSolicitacao);
     res.json(dbJson['solicitacoesPorIES']);
   });

};
