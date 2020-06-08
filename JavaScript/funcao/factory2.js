function criarProduto(nome, preco){
    return{
nome,
preco,
desconto: 0.1
    }
}

console.log(criarProduto('batata', 500))
console.log(criarProduto('morango', 600))
