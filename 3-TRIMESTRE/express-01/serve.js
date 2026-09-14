import express from 'express'
import path from 'path'
const PORT = 3000
const app = express()

app.use(express.static(path.join(import.meta.dirname)))

app.get('/', (req, res) => { // callback ou retorno
    res.sendFile('src/pages/index.html', {root: import.meta.dirname})
}) 

app.listen(PORT, () => {console.log('servidor Vivo')})
