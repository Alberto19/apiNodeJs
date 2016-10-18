var fs = require('fs');

fs.createReadStream('of.pdf')
    .pipe(fs.createWriteStream('ofu.pdf'))
    .on('finish', function(){
      console.log('arquivo escrito com Stream');  
    });