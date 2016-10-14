# apiNodeJs

## Modulos da aplicacao
- npm i --save express
- npm i -g nodemon
- npm i -save consign
- npm i --save body-parser
- npm i --save mysql
- npm i --save express-validator

## fazendo o poste pegando o Json

- curl http://localhost:3000/pagamentos/pagamento -X POST -v -H "Content-type: application/json" -d @files/pagamento.json | json_pp
