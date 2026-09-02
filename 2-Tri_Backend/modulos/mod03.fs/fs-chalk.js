// import PATH E FS
// path possui (join para juntar caminhos e Resolve
// para deduzir subdiretorios e S.O.)
const { default: chalk } = require('chalk')
const { error } = require('console')
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
const chalk = require('chalk').default

console.log(arquivo)
} catch (erro) {    //console.log(erro)
    console.log(chalk.blue.bgRed.bold('falha ao carregar o arquivo. teste novamente mais tarde.'))
   console.log(chalk.green('arquivo carregado com sucesso!'))
   console.log(arquivo)
} catch (erro) {
    // console.warn("atenção!"+erro.path)
    //throw new Error("Mensagem de erro personalizada");
    console.log(chalk.green('erro interno de leitura de arquivo:\n', error.menssagem))
}

