# sgp-impacto-orcamento
git clone https://github.com/alessandrots/sgp-impacto-orcamento

Para referenciar as supastas do projeto vou referenciar a partir do raiz do clone do projeto a variável: $path_orcamento

- Para startar o ANGULAR:
Projeto baseado https://github.com/rdash/rdash-angular.git
*** Tem um README em $path_orcamento/my-dash-angular
$ cd /home/alessandrots/Projetos/my-dash-angular/src
$ ../node_modules/.bin/serve -p 3000

- Para startar o SERVER (node)
Projeto basedo no Baseado no https://github.com/alessandrots/myNodeRestApi, tem README das urls configuradas.
$ cd /home/alessandrots/Projetos/SGP/sgp-impacto-orcamento/server-json/mynoderest
./node_modules/.bin/nodemon server.js 
(vai startar na porta 3001)


ATUALIZAÇÕES IMPORTANTES (desc):
2) 22/03/16
Atualizado o README principal

****************************************************************************************************************
1) 21/03/16
==>Angular
*** Cópia de arquivos :
- Para a pasta components:
  	angular-resource.min.js
  	angular-route.min.js
- Para a pasta controllers:
  	foto-controller.js
  	grupos-controller.js
  	nomeacao-ctrl.js

*** Alteração de arquivo 
- routes.js:  
	.state('formulario', {
        url: '/formulario',
        controller: 'FotoController',
        templateUrl: 'templates/formulario.html'
    })
    .state('nomeacoes', {
        url: '/nomeacoes',
        controller: 'NomeacaoController',
        templateUrl: 'templates/nomeacoes.html'
    })
-index.html:
 <!-- Adicionado por causa da solução do formulario.js e do meus-servico.js -->
  <script type="text/javascript" src="components/angular-resource.min.js"></script>
  <script type="text/javascript" src="components/angular-route.min.js"></script>
  ...
  <script type="text/javascript" src="js/controllers/foto-controller.js"></script>
  <script type="text/javascript" src="js/controllers/grupos-controller.js"></script>
  <script type="text/javascript" src="js/controllers/nomeacao-ctrl.js"></script>    

  <!-- este aqui vai cair no otherwise('/') lá no routes.js -->
  <li class="sidebar-list">
    <a href="#/nomeacoes">Nomeações <span class="menu-icon fa fa-table"></span></a>
  </li>

==>Server
- Alterado no projeto server-json, criado os arquivos: 
  1) na pasta /app/routes
  	sgp.json (arquivo de nomeações convertido de csv para json)
  	sgpIndex.js (arquivo que mapeia as urls para segmentos específicos do json)
  2) na pasta /config
  	express.js (carregando o novo arquivo de rotas sgpIndex.js)
  	passando o middleware express para o este novo arquivo de rotas: routesSgp(app);
  3) Colocado o array de grupos no sgp.json:
  "grupos": [
        {
            "_id": 1,
            "nome": "esporte"
        },
        {
            "_id": 2,
            "nome": "lugares"
        },
        {
            "_id": 3,
            "nome": "animais"
        }
    ]	

****************************************************************************************************************