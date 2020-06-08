// Arrow Function
// Funções Arrows são funções anônimas, não permite atribuir um nome a elas. (Necessário atribuir a uma variável ou constante).
// Se colocar um corpo na função '{}' é necessário utilizar o return (Colocar explicito return).
// Exemplo: const soma = (a,b) => {
// return a + b
//}
const soma = (a,b) => a+b;
console.log(soma(20,20))

// Arrow Function (this) se for escrita diretamente no módulo, arquivo node, sempre vai apontar p exports ou module exports
// Com função tradicional o this pode variar com a chamada da função, ou pode mudar com o bind ou apply.
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({}) // apontei para um outro objeto, um outro contexto.
lexico1()
lexico2()

// Parâmetro default.
// Atribuindo uma propriedade padrão, quando undefined ou sem especificar, assumirá o valor padrão (Node).
function log(texto = 'Node') {
    console.log(texto)
}

log('Sou mais forte')

// Operador rest agrupar (spread).

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n);
    return total
}
console.log(total(2,3,4,5))