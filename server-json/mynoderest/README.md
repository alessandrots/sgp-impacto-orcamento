# myNodeRestApi

*** Para referenciar as supastas do projeto vou referenciar a partir do path raiz do clone do projeto: 
path do projeto = $ sgp-impacto-orcamento>

INICIALIZANDO O PROJETO:
$ cd $path_orcamento/server-json/mynoderest
$ npm install

Para RODAR o SERVER:
Abra um terminal
$ cd /home/alessandrots/Projetos/SGP/sgp-impacto-orcamento/server-json/mynoderest
$ ./node_modules/.bin/nodemon server.js 
(vai startar na porta 3001), 


***</b>(PODE VOLTAR AO PASSO 4 DO README principal)</b>

****************************************************************************************************************
PARA MANIPULAR O JSON REMOTAMENTE
 O arquivo db.json está acessível na rede via samba no /etc/samba/samba.conf.

 Este arquivo é para ser alterado pela Anne para teste dos dados, no windows:
 \\10.224.126.253

 Fazer um backup do arquivo na pasta raiz

no final do arquivo
[pasta-publica]
   comment = Users profiles
   path = /home/alessandrots/Projetos/mynoderest/app/routes
   guest ok = no
   browseable = yes
   writeable = yes
   public = yes
   veto files = *.jpeg/*.vbs/*.wma/*.avi/*.wav
   default case = lower

/etc/init.d/samba restart
****************************************************************************************************************

Alterar as rotas dentro da pasta routes

http://localhost:3001/sucupira/rest/logon

http://localhost:3001/sucupira/rest/logon/logarComo

http://localhost:3001/sucupira/rest/dadosPrograma/programas/1

http://localhost:3001/sucupira/rest/dadosPrograma/detalhe/1/2015

http://localhost:3001/sucupira/rest/docentes

http://localhost:3001/sucupira/rest/docentes/detalheDocente/1/2015

http://localhost:3001/sucupira/rest/discentes

http://localhost:3001/sucupira/rest/discentes/detalheDiscente/1/1

http://localhost:3001/sucupira/rest/dadosGeraisSolicitacao/quantitativosHomologacao/1/1

http://localhost:3001/sucupira/rest/solicitacoes

http://localhost:3001/sucupira/rest/solicitacoes/detalhe/1/1
