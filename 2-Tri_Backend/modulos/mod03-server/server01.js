const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')

const porta = 8002
const home = path.join(__dirname, 'pages/index.html')
const sobre = path.join(__dirname, 'pages/sobre.html')
const css = path.join(__dirname, 'css/estilo.css')

const server = http.createServer((req, res) => {
    // Tratamento seguro para evitar quebras se o host estiver ausente
    const host = req.headers.host || `localhost:${porta}`
    const novaUrl = new URL(req.url, `http://${host}`)
    const caminhoUrl = novaUrl.pathname

    // Rota Home
    if (caminhoUrl === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        
        // Uso de fs.readFile (assíncrono) para não bloquear o servidor
        fs.readFile(home, 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 500
                return res.end('<h3>500 - Erro Interno do Servidor</h3>')
            }
            res.end(data)
        })
        return
    } 
    
    // Rota Sobre
    if (caminhoUrl === '/sobre') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        
        fs.readFile(sobre, 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 500
                return res.end('<h3>500 - Erro Interno do Servidor</h3>')
            }
            res.end(data)
        })
        return
    } 

    // Rota para o arquivo CSS
    if (caminhoUrl === '/css/estilo.css') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/css; charset=utf-8')
        
        fs.readFile(css, 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 500
                return res.end('/* Erro ao carregar CSS */')
            }
            res.end(data)
        })
        return
    }

    // Rota de erro (404 Not Found)
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h3>404 - Página não encontrada</h3>')
})

server.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})
