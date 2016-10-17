# apiNodeJs

## Modulos da aplicacao
- npm i --save express
- npm i -g nodemon
- npm i -save consign
- npm i --save body-parser
- npm i --save mysql
- npm i --save express-validator
- npm i --save restify

## fazendo o poste pegando o Json

- POST
- curl http://localhost:3000/pagamentos/pagamento -X POST -v -H "Content-type: application/json" -d @files/pagamento.json | json_pp

- PUT
- curl -X PUT http://localhost:3000/pagamentos/pagamento/11 -v

- DELETE
- curl -X DELETE http://localhost:3000/pagamentos/pagamento/10 -v
