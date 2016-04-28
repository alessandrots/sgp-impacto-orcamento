# sgp-impacto-orcamento

*** Esses passos foram trabalhados no linux e no mac.

0) Instale as seguintes ferramentas:
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* [Bower](http://bower.io)
* [Gulp](http://gulpjs.com)

<h1>1) git clone https://github.com/alessandrots/sgp-impacto-orcamento</h1>

*** Para referenciar as supastas do projeto vou referenciar a partir do path raiz do clone do projeto: 
path do projeto = $ sgp-impacto-orcamento>

2) Para funcionar o módulo cliente (ANGULAR2):
- Siga os passos em: $path_orcamento/angular2/newimpactoorcamentario/README

3) Para funcionar o módulo server (NodeJs):
Projeto basedo no Baseado no https://github.com/alessandrots/myNodeRestApi, tem README das urls configuradas.
- Siga os passos em: $path_orcamento/server-json/mynoderest/README

4) Teste a url da aplicação:

Back-end:
Teste a url:http://<IP>:3001/<path servicos> 
  ex.: 
  http://10.224.126.253:3001/sgp/astec/orcamento/nomeacao/
  http://10.224.126.253:3001/sgp/astec/orcamento/nomeacao/detalhe/66

Front-End:
http://<IP>:8080/#/

Itens de menu disponibilizados:
  - Inicial
  - Form NEW
  - Nomeações
  - Nomeações Paginação/Service
  - Nomeações Paginação/Filtro
  - Varios Formularios
