module.exports = function(app){

    app.get('/pagamentos',function(req,res){
        res.send('ok');
    });


    app.post('/pagamentos/pagamento',function(req, res){
        
        var pagamento = req.body;
        pagamento.status = 'Criado';
        pagamento.data = new Date;

        var con = app.infra.connectionFactory();
        var pagamentoDAO = new app.infra.PagamentoDAO(con);
        pagamentoDAO.salva(pagamento,function(err,result){
            console.log('pagamento criado');
            res.json(pagamento);
        });
    });
}

