var fs = require('fs');

fs.readFile('of.pdf', function(error, buffer){
    console.log('Arquivo lido');

    fs.writeFile('ofi.pdf', buffer, function(err){
        console.log('Arquivo escrito');
    });
});