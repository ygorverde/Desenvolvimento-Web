const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1499.99,
    desconto: 0.15
}

// const json = JSON.stringify(produto)
// console.log(json)

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
console.log(err || 'Arquivo Salvo!')
})