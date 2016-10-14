module.exports = function(app){

    app.get('/pagamentos',function(req,res){
        res.send('ok');
    });


    app.post('/pagamentos/pagamento',function(req, res){

        req.assert("forma_de_pagamento",
        "Forma de pagamento obrigatorio").notEmpty();
        req.assert("valor",
        "Valor obrigatorio e deve ser decimal").notEmpty().isFloat();

        var erros = req.validationErrors();
        if(erros){
            console.log("erro de validadcao");
            res.status(400).send(erros);
            return;
        }

        var pagamento = req.body;
        pagamento.status = 'Criado';
        pagamento.data = new Date;

        var con = app.infra.connectionFactory();
        var pagamentoDAO = new app.infra.PagamentoDAO(con);
        pagamentoDAO.salva(pagamento,function(err,result){
            if(err){
                console.log("erro ai inserir");
                res.status(500).send(err);
            }else{
            console.log('pagamento criado');
            res.location('/pagamentos/pagamento/' + result.insertId);

                 res.status(201).json(pagamento);
            }

           
        });
    });
}

