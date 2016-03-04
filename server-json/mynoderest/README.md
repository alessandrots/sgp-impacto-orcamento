# myNodeRestApi

npm install

nodemon server.js

**********************************
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
*********************************

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
