function lerVetor(vetorNumeros){
    let pares = 0;
    let impares = 0;
    for (let i = 0; i < vetorNumeros.length; i++){
        if (vetorNumeros[i] %2 == 0){
            pares++
        }else{
            impares++
        }
    }
    console.log(`${pares} números pares e ${impares} números impares`)
}

let vetor = ['1', '2', '3', '4', '5', '6', '7', '8']

console.log(lerVetor(vetor))