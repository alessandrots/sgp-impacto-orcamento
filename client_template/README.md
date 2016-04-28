# Cliente Template do Angular 2
##MEUS ENTENDIMENTOS - Alessandro Santos
***************************************************************************************************************
1) Para instalar as dependências:
npm install

2) Este comando tem que criar a pasta typings e a node_modules.

3) Para startar o serviço para teste no ambiente de desenvolvimento. 
$ npm run start (roda a configuração definida no arquivo webpack.config.js)

4) O fluxo de funcionamento é index.html => main.ts que é o bootstrap da app e aí carrega a app/componente/ApplicationComponent.

5) Na pasta src os arquivos main e vendor são usados pelo webpack no ambiente desenv em memória ao carregar a aplicação.

6) Para  produção é rodar o comando: (que aí serão gerados os arquivos físicos main e vendor e feito um bundle nos dois.)
$ npm run build 
("webpack --config webpack.prod.config.js --progress --profile --colors --display-error-details --display-cached")
isto vai criar uma pasta dist e os arquivos main e vendor serão agreagados num só.


***************************************************************************************************************
