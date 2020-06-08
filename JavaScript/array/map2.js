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

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)


/*const soma = (a,b) => {console.log(a+b)}
soma(2,2)*/
