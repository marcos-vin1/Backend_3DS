import express from 'express'
import path from 'path'

const PORT = process.env.PORT || 3000
const app = express()
const baseDir = import.meta.dirname

app.use('/estilos', express.static(path.join(baseDir, 'public', 'estilos')))
app.use('/imagem', express.static(path.join(baseDir, 'imagem')))

app.get('/', (req, res) => {
    res.sendFile(path.join(baseDir, 'pages', 'index.html'))
})

app.get('/produtos', (req, res) => {
    res.sendFile(path.join(baseDir, 'pages', 'produtos.html'))
})

app.get('/servicos', (req, res) => {
    res.sendFile(path.join(baseDir, 'pages', 'servicos.html'))
})

app.listen(PORT, () => {
    console.log('servidor vivo na porta ' + PORT)
})

