const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')
const porta = 8002

const home = path.join(__dirname, 'pages/.index.html')
const sobre = path.join(__dirname, 'pages/sobre.ht')

const server = http.createServer((req, res)=>{
const novaUrl = new URL(req.url, `http://${req.headers.host}`)
const caminhoUrl = novaUrl.pathname
if(caminhoUrl === '/'){
    res.statusCode = '201'
    res.setHeader('Content-Type', 'text/html; charset=utf8' )
    return res.end(fs.readFileSync(home, 'utf-8'))
}

if(caminhoUrl === '/sobre'){
    res.statusCode = '201'
    res.setHeader('Content-Type', 'text/html; charset=utf8' )
    return res.end(fs.readFileSync(home, 'utf-8'))
}else{
res.statusCode('401')
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h3>401 não autorizado</h3>')
}

}) 
server.listen(porta, ()=>{
 console.log(`Servidor rodando na porta
    http:/localhost${porta}`)
    
})