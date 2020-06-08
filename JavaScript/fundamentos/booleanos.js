let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)
isAtivo = 1 //TRUE

// 1 = TRUE, 0 = FALSE.

console.log('----------TESTES---------')
console.log('os verdadeiros...')

console.log(!!isAtivo) //NOT NOT
console.log(!!3)
console.log(!!-1)

console.log('os falsos..')
let nome = ''
console.log(!!0)
console.log(nome || 'Desconhecido')