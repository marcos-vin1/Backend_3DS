const fs = require('fs')

//console.log(fs)


const arquivo = fs.readFileSync('./README.md', 'utf-8')
//workspaces/Backend_3DS/mod03.fs/README.md
//mod03.fs/README.md
const arquivoFinal = fs.readFileSync(__dirname+"/README.md",  'utf-8')
console.log(arquivoFinal)         
