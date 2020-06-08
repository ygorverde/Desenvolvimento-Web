const nums = [1,2,3,4,5]

//For com proposito
let resultado = nums.map(function(e){ // Tem que ter um retorno, ou será undefined
    return e * 2
})

console.log(resultado)

const soma = e => e +10 // Recebe elemento e retorna 'e' + 10, tem return implícito
const triplo = e => e *3 
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma).map(triplo).map(paraDinheiro)
console.log(resultado)



const nums2 = [1,2,3,4,5]

const soma2 = elemento => elemento + 10
const triplo2 = elemento => elemento * 3
const paraDinheiro2 = e => `R$${parseFloat(e).toFixed(2).replace('.',',')}` 

console.log(nums2.map(soma2).map(triplo2).map(paraDinheiro2))
