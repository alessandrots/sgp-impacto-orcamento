# sgp-impacto-orcamento

Esses passos foram trabalhados no linux e no mac.
************************************************************************************************
<h2> 0) Instale as seguintes ferramentas:</h2> 
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* [Bower](http://bower.io)
* [Gulp](http://gulpjs.com)
* [Nvm](https://github.com/creationix/nvm) => se quiser instalar o nvm para gerenciar a versão do node

<h2> 1) Baixando o Projeto </h2>
1.1) git clone https://github.com/alessandrots/sgp-impacto-orcamento
Para referenciar as supastas do projeto vou referenciar a partir do path raiz do clone do projeto: 
- $path_clone_orcamento = caminho aonde o projeto foi baixado

<h2> 2) Instalando o módulo cliente (ANGULAR2)</h2>
- $ cd $path_clone_orcamento/angular2/newimpactoorcamentario
- $ npm install

<h2> 3) Instalando o módulo server (NodeJs)</h2>
Projeto basedo no https://github.com/alessandrots/myNodeRestApi, tem README das urls configuradas:
- $ cd $path_clone_orcamento/server-json/mynoderest
- $ npm install

<h2> 4) Definir IP de funcionamento </h2>
- $ cd $path_clone_orcamento/angular2/newimpactoorcamentario
- Abra o arquivo webpack.config.js
- Na linha 10 coloque seu IP ou localhost:
(const HOST = process.env.HOST || '10.224.126.253';).

- Esse IP vai ser o mesmo do módulo server, se o server for rodar em outro IP então tem que mudar a linha:
- target: 'http://' + HOST + ':3001'

<h2> 5) Para RODAR o SERVER </h2>
Abra um terminal
- $ cd $path_clone_orcamento/server-json/mynoderest
- $ ./node_modules/.bin/nodemon server.js (vai startar na porta 3001), 

5.1) Teste a url da servidor:
Back-end:
Teste a url:http://<IP>:3001/<path servicos> 
  ex.: 
  - http://10.224.126.253:3001/sgp/astec/orcamento/nomeacao/
  - http://10.224.126.253:3001/sgp/astec/orcamento/nomeacao/detalhe/66

<h2> 6) Para RODAR o CLIENT </h2>
- $ cd $path_clone_orcamento/angular2/newimpactoorcamentario
- $ npm install
  
Testando a app no browser (chrome/firefox):
- http://<IP>:8080/#/
- http://10.224.126.253:8080

  *** Importante instalar a extensão no chrome para evitar problemas de CORS:
  https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

************************************************************************************************
==> Itens de menu disponibilizados:
- Inicial
- Form NEW
- Nomeações
- Nomeações Paginação/Service
- Nomeações Paginação/Filtro
- Varios Formularios

************************************************************************************************  

==> Referências Utilizadas:
- https://www.manning.com/books/angular-2-development-with-typescript (PDF)
- http://michaelbromley.github.io/ng2-pagination/ (fontes do livro acima)
- https://github.com/daviddt/angular2-spotify-sample-app
- https://egghead.io/lessons/angular-2-using-pipes-to-filter-data
- http://michaelbromley.github.io/ng2-pagination/
- https://github.com/johnpapa/angular2-tour-of-heroes

************************************************************************************************

==> Outros pontos:
NVM no linux
1) Baixei o arquivo: https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh
2) chmod +x install.sh
3) no meu diretório…export NVM_DIR="$HOME/.nvm"
 [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
5) export NVM_NODEJS_ORG_MIRROR=http://nodejs.org/dist…
nvm ls-remote command results in "N/A"

