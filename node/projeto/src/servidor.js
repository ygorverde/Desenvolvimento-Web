//Alguns comandos,
//npm start, rs(restart)

const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

//transforma o corpo da requisição em objeto para que possa ser utilizado.
app.use(bodyParser.urlencoded({extended: true})) // Sem uma url específica, para todas as url's ele vai ser disparado

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) =>{ // Recebe ID na url
    res.send(bancoDeDados.getProduto(req.params.id)) 
})

app.post('/produtos', (req, res, next) =>{ // Postar no bancos
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Gera um JSON
})

app.put('/produtos/:id', (req, res, next) =>{ // Recebe ID na url // Altera dados
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) =>{ // Recebe ID na url
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () => { // Escutando na porta 3003
    console.log(`Servidor está executando na porta: ${porta}.`)
})