const produtos = [//array
    {nome: 'Notebook', preco: 2499, fragil: true },//objetos
    {nome: 'Macbook', preco: 5499, fragil: true },
    {nome: 'Computador', preco: 2399, fragil: true},
    {nome: 'PCGAMER', preco: 5000, fragil: false }

]

/*const filtrados = produtos.filter(function(e){
    return e.fragil == true
})

console.log(filtrados)*/

const filtroCaros = function(e){
    return e.preco > 500
}
/*const caro = produto => produto.preco >=500*/

const filtroFrageis = function(e){
    return e.fragil == true
}

const resultado = produtos.filter(filtroCaros).filter(filtroFrageis)
console.log(resultado)