Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [ //json
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.45}',
    '{"nome": "Kit de Lapis", "preco": 23.45}',
    '{"nome": "Caneta", "preco": 43.45}',
]


const paraObjeto = function(json){
    return JSON.parse(json)
}
//const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)


/*const soma = (a,b) => {console.log(a+b)}
soma(2,2)*/

const produtos = [  
    '{"caderno": "azul", "preco": 5.0}',
    '{"lapis": "bic", "preco": 6.0}'
]

const paraObjeto2 = function(json){
    return JSON.parse(json)
}

const apenasPreco2 = function(produto){
    return produto.preco
}

const resultado2 = produtos.map(paraObjeto2).map(apenasPreco2)
console.log(resultado2)




const materiais = [
    {nome: 'Caderno', preco: 13.99},
    {nome: 'Lapis', preco: 2.50},
    {nome: 'mochila', preco: 39.90}
]

const materiais2 = [
    '{"nome": "caderno", "preco": 10.99}',
    '{"nome": "lapis", "preco": 2.70}',
]

const paraObjeto4 = function(json){
    return JSON.parse(json)
}

const resultadonovo = materiais2.map(paraObjeto4)

