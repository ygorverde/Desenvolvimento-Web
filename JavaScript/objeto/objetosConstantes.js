// Pessoa -> 123(endmemoria) -> {...} (objeto)
const pessoa = {nome: 'Joao'}
pessoa. nome = 'Pedro'
console.log(pessoa)

// Pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa) //O objeto se torna constante

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

// Tornar um objeto congelado desde o inicio
const pessoaConstante = Object.freeze({
    nome: 'Joao'
})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
