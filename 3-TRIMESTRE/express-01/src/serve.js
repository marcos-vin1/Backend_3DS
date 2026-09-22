import express from 'express'
import path from 'path'
const PORT = process.env.PORT || 3000
const app = express()
const baseDir = import.meta.dirname

app.use(express.static(path.join(baseDir, 'src/public')))

app.get('/', (req, res) => { // callback ou retorno
    res.sendFile('src/pages/index.html', {root: baseDir})
}) 

app.listen(PORT, () => {console.log('servidor Vivo'+PORT)})

