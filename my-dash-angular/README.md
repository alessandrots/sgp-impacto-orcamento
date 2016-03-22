# RDash rdash-angular
##MEUS ENTENDIMENTOS - Alessandro Santos

*** Para referenciar as supastas do projeto vou referenciar a partir do path raiz do clone do projeto: 
path do projeto = $ sgp-impacto-orcamento>

INICIALIZANDO O PROJETO:
$ cd $path_orcamento/my-dash-angular
$ npm install
$ ./node_modules/.bin/bower install
$ cp -Rf ./bower_components/ ./src/components


Para RODAR o ANGULAR:
Abra um terminal
$ cd /home/alessandrots/Projetos/my-dash-angular/src
$ ../node_modules/.bin/serve -p 3000


***<b>(PODE VOLTAR AO PASSO 3 DO README principal)</b>

*********************************************************************************************************************
NA HORA DE DISTRIBUIR:
<!-- 
    Na hora de distribuir tem que fazer o seguinte na raiz da pasta ($ xxxx/rdash-teste):
    1) Apagar a pasta de build:
      rm -Rf dist/

    2) apagar o arquivo minificado de produção
      rm -Rf dashboard.min.js 

    3) comentar as linhas de script abaixo: da module.js até a widget.js
    
    4) Liberar a linha do dashboard.min.js

    5) gerar o build ($path_orcamento/my-dash-angular)
      ./node_modules/.bin/gulp build

    6) copiar o arquivo minificado da pasta dist para a pasta js para fazer um teste final  
       cp dist/js/dashboard.min.js .
-->

 <!--  --> <script type="text/javascript" src="js/dashboard.min.js"></script>

  <!-- Custom Scripts -->
  <script type="text/javascript" src="js/module.js"></script>
  <script type="text/javascript" src="js/routes.js"></script>
  <script type="text/javascript" src="js/controllers/master-ctrl.js"></script>
  <script type="text/javascript" src="js/controllers/alert-ctrl.js"></script>
  
  <script type="text/javascript" src="js/directives/loading.js"></script>
  <script type="text/javascript" src="js/directives/widget-body.js"></script>
  <script type="text/javascript" src="js/directives/widget-footer.js"></script>
  <script type="text/javascript" src="js/directives/widget-header.js"></script>
  <script type="text/javascript" src="js/directives/widget.js"></script>



*********************************************************************************************************************

## Responsive, bloat free, bootstrap powered admin style dashboard!
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/rdash/rdash-angular?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

rdash-angular is an AngularJS implementation of the RDash admin dashboard. The dashboard uses a small number of modules to get you started, along with some handy directives and controllers to speed up development using the dashboard.

Check out the live example!

## Usage
### Requirements
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* [Bower](http://bower.io)
* [Gulp](http://gulpjs.com)

### Installation
1. Clone the repository: `git clone https://github.com/rdash/rdash-angular.git`
2. Install the NodeJS dependencies: `sudo npm install`.
3. Install the Bower dependencies: `bower install`.
4. Run the gulp build task: `gulp build`.
5. Run the gulp default task: `gulp`. This will build any changes made automatically, and also run a live reload server on [http://localhost:8888](http://localhost:8888).

Ensure your preferred web server points towards the `dist` directory.

### Development
Continue developing the dashboard further by editing the `src` directory. With the `gulp` command, any file changes made will automatically be compiled into the specific location within the `dist` directory.

#### Modules & Packages
By default, rdash-angular includes [`ui.bootstrap`](http://angular-ui.github.io/bootstrap/), [`ui.router`](https://github.com/angular-ui/ui-router) and [`ngCookies`](https://docs.angularjs.org/api/ngCookies). 

If you'd like to include any additional modules/packages not included with rdash-angular, add them to your `bower.json` file and then update the `src/index.html` file, to include them in the minified distribution output.

## Credits
* [Elliot Hesp](https://github.com/Ehesp)
* [Leonel Samayoa](https://github.com/lsamayoa)
* [Mathew Goldsborough](https://github.com/mgoldsborough)
* [Ricardo Pascua Jr](https://github.com/rdpascua)