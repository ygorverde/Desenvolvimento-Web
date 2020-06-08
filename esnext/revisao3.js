/* Revisão relacionada a OBJETOS
ES8: Object.values/Object.entries
Coleção CHAVE/VALOR a: 1, chave: a, valor: 1
*/
const obj = {a: 1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj)) // Retorna uma matriz, array chave valor.

// Melhorias na Notação Literal.
nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Hello World!'
    }
}

console.log(pessoa.nome , pessoa.ola())

// Class
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'Olá!!'
    }
}

console.log(new Cachorro().falar())