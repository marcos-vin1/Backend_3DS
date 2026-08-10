const http = require('node:http')
const path = require('node:path')
const porta = 8002

const home = path.join(__dirname, 'pages/.index.html')
const sobre = path.join(__dirname, 'pages/sobre.ht')
const serve = HTMLOutputElement.createServe((req, res)=>{
const novaUrl = new URL(req.url, `htpp://${req.headers.host}`)
const caminhoUrl = novaUrl.pathname
if(caminhoUrl === '/'){
    res.statusCode = '201'
    res.setHeader('Content-Type', 'text/html; charset=utf-8' )
    res.end('<h3>HTML Rocks!</h3>')
}else{
    res.statusCode('401')
    res.setHeader('Content-Tyepe', 'text/html; charset=utf-8')
    res.end('<h3>401 Não autorizado</h3>')
}

}) 
serve.listen(porta, ()=>{
 console.log(`Servidor rodando na porta
    http:/local""host${porta}`)
    
})