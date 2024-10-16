let fs = require('fs')

let fileName = './data/newFile_' + Date.now() + '.txt';

fs.open(fileName, 'w', function(err, file){
    if(err) throw err;

    console.log('file saved: ' + fileName)
})