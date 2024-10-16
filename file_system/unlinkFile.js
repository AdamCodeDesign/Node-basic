let fs = require('fs')

const fileName = './data/appendFile.txt'

fs.unlink(fileName, function(err){
    if(err) throw err;

    console.log(('file delete: ' + fileName))
})