const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')

const porta = 8002
const home = path.join(__dirname, 'pages/index.html')
const sobre = path.join(__dirname, 'pages/sobre.html')
const css = path.join(__dirname, 'css/estilo.css')

const server = http.createServer((req, res) => {
    const novaUrl = new URL(req.url, `http://${req.headers.host}`)
    const caminhoUrl = novaUrl.pathname

    // Rota Home
    if (caminhoUrl === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        return res.end(fs.readFileSync(home, 'utf-8'))
    } 
    
    // Rota Sobre
    if (caminhoUrl === '/sobre') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        return res.end(fs.readFileSync(sobre, 'utf-8'))
    } 

    // Rota para o arquivo CSS
    if (caminhoUrl === '/css/estilo.css') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/css; charset=utf-8')
        return res.end(fs.readFileSync(css, 'utf-8'))
    }

    // Rota de erro (404 Not Found)
    else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<h3>404 - Página não encontrada</h3>')
    }
})

server.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})
