# apiNodeJs

## Modulos da aplicacao
- npm i --save express
- npm i -g nodemon
- npm i -save consign
- npm i --save body-parser
- npm i --save mysql
- npm i --save express-validator
- npm i --save restify
- npm i --save soap

## fazendo o poste pegando o Json

- POST
````
 curl http://localhost:3000/pagamentos/pagamento -X POST -v -H "Content-type: application/json" -d @files/pagamento.json | json_pp
````
- PUT
````
curl -X PUT http://localhost:3000/pagamentos/pagamento/12 -v
````
- DELETE
````
curl -X DELETE http://localhost:3000/pagamentos/pagamento/10 -v
````

- Servico correios
````
curl -X POST http://localhost:3000/correios/calculo-prazo -H "Content-type: application/json" -d @files/dadosEntrega.json | json_pp
````

- Upload de um file  
````
curl -X POST http://localhost:3000/upload/imagem --data-binary @util/le.jpg -H "Content-type: application/octet-stream" -v -H "filename: imagem.jpg"
````