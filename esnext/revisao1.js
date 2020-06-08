// let e const (Definir variáveis)
// let: Tem escopo de bloco.
// var não tem escopo de bloco.
// Operador rest ' ... '
{
    var a = 2
    var b = 4
    console.log(b)
}
//console.log(b)
console.log(a)

// Template String (obedece quebra de linhas..)
const produto = 'iPad'
console.log(`${produto} é caro`)// É possível quebrar linhas

// Desctructuring (Permite tirar de um array, de uma string) operador
const [l, e, ...tras] = "Cod3r"
console.log(l,e,tras)

const [x, , y] = [1, 2, 3]
console.log(x,y)

const {idade: i, nome} = {nome : 'Joao', idade : 10}
console.log(i,nome)
