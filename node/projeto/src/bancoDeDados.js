const sequence = { // É visível somente nesta classe
    _id: 1,
    get id(){return this._id++}
}

const produtos = {}

function salvarProduto(produto) {
    //Testa se o produto já tem ID
    if(!produto.id){
        //Se ñ tiver, seta um novo ID.
        produto.id = sequence.id
    }
    //Cria um atributo cuja chave é o ID e o valor é o produto em si
    produtos[produto.id] = produto
    //Retorna esse produto. 
    return produto
}

function getProduto(id){
    return produtos[id] || {} // Caso n encontre, retorna um objeto vazio.
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto // Retorna produto que foi deletado
}

module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto} // Exportando os modulos
