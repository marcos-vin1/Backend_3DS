import express from 'express'

const PORT = 3004
const app = express()

app.get('/', (req, res) => { // callback ou retorno
    res.send('<h3>Hello pet!</h3>')
}) 

app.get('/servicos', (req, res) => { // callback ou retorno
    res.send('<h3>Serviços Pet</h3>')
}) 

app.get('/servicos', (req, res) => { // callback ou retorno
    res.send('<h3>Serviços Pet</h3>')
}) 

app.listen(PORT, () => {console.log('servidor Vivo')})
