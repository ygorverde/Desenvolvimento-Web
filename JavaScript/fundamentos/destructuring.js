//novo recurso do ES2015

const pessoa = { //objeto
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Professor Souza Carneiro',
        numero: 98
    }
}

    const {nome, idade} = pessoa
    console.log(nome, idade)

    const{nome: n, idade: i} = pessoa
    console.log(n, i)

    const {endereco: {logradouro, numero, cep}} = pessoa
    console.log(logradouro,",", numero,",",cep)
