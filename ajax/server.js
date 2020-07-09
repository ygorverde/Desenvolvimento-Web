const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) // Middleware que servirá todos os arquivos estáticos. (html, js, css, etc..)
app.use(bodyParser.urlencoded({extended: true}))// Caso venha de um submit de formulário, lê e transforma em objeto. Para qualquer requisição.
app.use(bodyParser.json()) // Se chegar json dentro do body da requisição, transformará em objeto.
app.get('/teste', (req, res) => res.send(new Date))

const multer = require('multer') // Biblioteca multer
const { response } = require('express')
const storage = multer.diskStorage({
    destination: function(req, file, callback){ // Pasta destino
        callback(null, './upload')
    },
    filename: function(req, file, callback){ // Nome do arquivo que será persistido
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo') // Passao objeto storage que foi criado a partir do diskStorage. E digo que vou receber um arquivo chamado arquivo.

app.post('/upload', (req,res) => {// Rota via /upload. Recebe uma requisição tipo post, chama uma func middleware
    upload(req,res,err => { // Após o upload ser concluído, chamara esta função.
        if(err) {
            return res.end('Ocorreu um erro')
        }
        res.end('Concluído com sucesso!') // Se der certo
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 7
    })
})

app.get('/parOuImpar', (req, res) => {
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, ()=> console.log('Executando..'))