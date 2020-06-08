function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}



let vetorInt = [1,2,3,4]
let vetorString = ['Um', 'Dois', 'Três', 'Quatro']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

console.log(concatenar(vetorInt, vetorString, vetorDouble))