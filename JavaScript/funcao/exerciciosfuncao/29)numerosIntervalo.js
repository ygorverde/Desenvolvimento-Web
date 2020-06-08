function numerosIntervalo(vetor){
let numerosIntervalo = 0;
for(let i = 0; i < vetor.length; i++){
if(vetor[i]>= 10 && vetor[i] <= 20){
numerosIntervalo++
}
}
console.log(numerosIntervalo)
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

numerosIntervalo(vetor)