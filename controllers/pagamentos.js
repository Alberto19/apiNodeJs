module.exports = function(app){

    app.get('/pagamentos',function(req,res){
        res.send('ok');
    });

    app.delete('/pagamentos/pagamento/:id', function(req, res){
        var pagamento = {};
        var id = req.params.id;
        pagamento.id = id;
        pagamento.status = 'CANCELADO';    

        var con = app.infra.connectionFactory();
        var pagamentoDAO = new app.infra.PagamentoDAO(con);
        pagamentoDAO.atualiza(pagamento, function(err, result){
            if(err){
                res.status(500).send(erro);
                return;
            }
            res.status(204).send(pagamento);
        });
    });



    app.put('/pagamentos/pagamento/:id', function(req, res){
        var pagamento = {};
        var id = req.params.id;
        pagamento.id = id;
        pagamento.status = 'CONFIMADO';    

        var con = app.infra.connectionFactory();
        var pagamentoDAO = new app.infra.PagamentoDAO(con);
        pagamentoDAO.atualiza(pagamento, function(err, result){
            if(err){
                res.status(500).send(erro);
                return;
            }
            res.send(pagamento);

        });
    });


    app.post('/pagamentos/pagamento',function(req, res){

        req.assert("pagamento.forma_de_pagamento",
        "Forma de pagamento obrigatorio").notEmpty();
        req.assert("pagamento.valor",
        "Valor obrigatorio e deve ser decimal").notEmpty().isFloat();

        var erros = req.validationErrors();
        if(erros){
            console.log("erro de validadcao");
            res.status(400).send(erros);
            return;
        }

        var pagamento = req.body["pagamento"];
        pagamento.status = 'Criado';
        pagamento.data = new Date;

        var con = app.infra.connectionFactory();
        var pagamentoDAO = new app.infra.PagamentoDAO(con);
        pagamentoDAO.salva(pagamento,function(err,result){
            if(err){
                console.log("erro ai inserir");
                res.status(500).send(err);
            }else{
            pagamento.id = result.insertId;

                if(pagamento.forma_de_pagamento == 'cartao'){
                    var cartao = req.body['cartao'];

                    var clienteCartoes = new app.servicos.clienteCartoes();
                        clienteCartoes.autoriza(cartao, function(erro, request, response, retorno){
                            console.log(retorno);
                             res.status(201).json(retorno);
                            return;
                        });
                }else{
                    res.location('/pagamentos/pagamento/' + pagamento.id);
            
                    var response = {
                        dados_do_pagamento: pagamento,
                        links: [
                            {
                                href:"http://localhost:3000/pagamentos/pagamento/" + pagamento.id,
                                rel:"CONFIRMAR",    
                                method:"PUT"
                            },
                            {
                                href:"http://localhost:3000/pagamentos/pagamento/" + pagamento.id,
                                rel:"CANCELAR",    
                                method:"DELETE"
                            }
                        ]
                    }

                res.status(201).json(response);
                }
            }

            

           
        });
    });
}

