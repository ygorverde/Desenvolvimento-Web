const produtos = [1,2,3,4,5]


const soma = elemento => elemento * 2
const triplo = elemento => elemento * 3
const paraDinheiro = elemento => `R$${parseFloat(elemento).toFixed(2).replace('.',',')}`


resultado = produtos.map(soma).map(triplo).map(paraDinheiro)
console.log(resultado)