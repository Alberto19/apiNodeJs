var soap = require('soap');

soap.createClient('http://ws.correios.com.br/calculador/calcprecoprazo.asmx?wsdl', 
    function(erro, cliente){
        console.log('client soap criado');

        cliente.CalcPrazo({'nCdServico':'40010',
                            'sCepOrigem':'06436350',
                            'sCepDestino':'65000600'}, 
            function(err,result){
                console.log(JSON.stringify(result));
            });
    });
