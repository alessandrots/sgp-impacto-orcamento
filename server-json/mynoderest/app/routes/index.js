var api = require('../api'),
    path = require('path'),
    jsonServer = require('json-server'),
    dbJson = require ('./db.json');
    server = jsonServer.create();
    // router = jsonServer.router('../db.json'),
    // db = router.db;

module.exports  = function(app) {
  server.use(jsonServer.defaults());
  // var router = jsonServer.router('db.json'), db = router.db;

    // app.route('/', function(req, res) {
    //     console.log ('FIRST OIEEEEEEEE!!!');
    //     res.sendFile(path.resolve('public/index.html'));
    // });

  // Logon (POST)
  // https://hom.capes.gov.br/sucupira/rest/logon
  // header:(idUsuario:token)
  // body: idUsuarioDTI e cpfUsuarioALogar
  app.get('/sucupira/rest/logon', function(req, res) {
    console.log('logon');
    res.json(dbJson['logon']);
  });

  // Logar Como (POST)
  // https://hom.capes.gov.br/sucupira/rest/logon/logarComo
  // header:(idUsuario:token)
  // body: idUsuarioDTI e cpfUsuarioALogar
   app.all('/sucupira/rest/logon/logarComo', function(req, res) {
      console.log('logarComo');
      res.json(dbJson['logarComo']);
   });

   // Programas por Instituicao de Ensino (GET)
   // https://hom.capes.gov.br/sucupira/rest/dadosPrograma/programas/<idInstituicaoEnsino>
   // header:(idUsuario:token)
   app.get('/sucupira/rest/dadosPrograma/programas/:idIes', function(req, res, next) {
     var idIes = req.params.idIes;
     console.log('dadosPrograma/programas => idIes = ', idIes);
     res.json(dbJson['dadosPrograma/programas'][0]);//traz o primeiro
   });

   //
   // Detalhamento por Programa e Ano
   // https://hom.capes.gov.br/sucupira/rest/dadosPrograma/detalhe/<idPrograma>/ano
   // header:(idUsuario:token)
   app.get('/sucupira/rest/dadosPrograma/detalhe/:idPrograma/:idAno', function(req, res, next) {
     var idPrograma = req.params.idPrograma;
     var idAno = req.params.idAno;
     console.log('dadosPrograma/detalhe idPrograma = ', idPrograma);
     console.log('dadosPrograma/detalhe idAno = ', idAno);
     res.json(dbJson['dadosPrograma/detalhe']);
   });

   // Docentes por Programa (POST)
   // https://hom.capes.gov.br/sucupira/rest/docentes
   // header:(idUsuario:token)
   // body: idIes, idPrograma e ano
   app.all('/sucupira/rest/docentes', function(req, res, next) {
     console.log('docentes');
     res.json(dbJson['docentes']);
   });

   // Detalhamento Docente
   // https://hom.capes.gov.br/sucupira/rest/docentes/detalheDocente/<idDocente>/<ano>
   // header:(idUsuario:token)
   app.get('/sucupira/rest/docentes/detalheDocente/:idDocente', function(req, res, next) {
     var idDocente = req.params.idDocente;
     console.log('docentes/detalheDocente = ', idDocente);
     res.json(dbJson['docentes/detalheDocente']);
   });

   //
   // Discentes por Programa (POST)
   // https://hom.capes.gov.br/sucupira/rest/discentes
   // header:(idUsuario:token)
   // body: idIes, idPrograma e ano
   app.all('/sucupira/rest/discentes', function(req, res, next) {
     console.log('discentes');
     res.json(dbJson['discentes']);
   });

   //
   // Detalhamento de Discente
   // https://hom.capes.gov.br/sucupira/rest/discentes/detalheDiscente/<idDiscente>/<ano>
   // header:(idUsuario:token)
   app.get('/sucupira/rest/discentes/detalheDiscente/:idDiscente', function(req, res, next) {
     var idDiscente = req.params.idDiscente;
     console.log('discentes/detalheDiscente = ', idDiscente);
     res.json(dbJson['detalheDiscente']);
   });

   //
   // Quantitativo de Solicitacoes
   // https://hom.capes.gov.br/sucupira/rest/dadosGeraisSolicitacao/quantitativosHomologacao/<idUsuario>/<idIes>
   // header:(idUsuario:token)
   app.get('/sucupira/rest/dadosGeraisSolicitacao/quantitativosHomologacao/:idUsuario/:idIes', function(req, res, next) {
     var idUsuario = req.params.idUsuario;
     var idIes = req.params.idIes;
     console.log('discentes/detalheDiscente idUsuario = ', idUsuario);
     console.log('discentes/detalheDiscente idIes = ', idIes);
     res.json(dbJson['dadosGeraisSolicitacao/quantitativosHomologacao']);
   });

   //
   // Solicitacoes por Instituicao de Ensino (POST)
   // https://hom.capes.gov.br/sucupira/rest/solicitacoes
   // header:(idUsuario:token)
   // body: idIes, idTipoSol e idTipoSit
   app.all('/sucupira/rest/solicitacoes', function(req, res, next) {
     console.log('solicitacoes');
     res.json(dbJson['solicitacoes']);
   });

   //
   // Detalhamento de Solicitacoes
   // https://hom.capes.gov.br/sucupira/rest/solicitacoes/detalhe/<idTipoSolicitacao>/<idSolicitacao
   // header:(idUsuario:token)
   app.get('/sucupira/rest/solicitacoes/detalhe/:idTipoSolicitacao/:idSolicitacao', function(req, res, next) {
     var idTipoSolicitacao = req.params.idTipoSolicitacao;
     var idSolicitacao = req.params.idSolicitacao;
     console.log('solicitacoes/detalhe idTipoSolicitacao = ', idTipoSolicitacao);
     console.log('solicitacoes/detalhe idSolicitacao = ', idSolicitacao);
     res.json(dbJson['solicitacoesPorIES']);
   });

    // habilitando HTML5MODE
    // app.all('/*', function(req, res) {
    //     console.log ('OIEEEEEEEE 22222!!!');
    //     // res.sendFile(path.resolve('public/index.html'));
    // });
};
