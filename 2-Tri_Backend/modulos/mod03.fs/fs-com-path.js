// import PATH E FS
// path possui (join para juntar caminhos e Resolve
// para deduzir subdiretorios e S.O.)
const fs = require('fs')
 const path = require('path')

//Salvar o caminho em um variavel
//const caminho = path.join(__dirname, 'README.md') //Markdown, text,
//console.log(caminho)


// Abrir, ler, deletar, editar
//Markdown, text,
try{
const caminho = path.resolve(__dirname, 'README.md')
const arquivo = fs.readFileSync(caminho, 'utf-8')
console.log(arquivo)
} catch (erro) {
    //console.log(erro)
    console.log('--------------------------------')
    console.warn("atenção!"+erro.path)
    throw new Error("Mensagem de erro personalizada");
    console.log('--------------------------------')
}

