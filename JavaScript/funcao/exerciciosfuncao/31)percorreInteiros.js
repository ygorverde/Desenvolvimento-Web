function acharNegativos(vetor){
let qtdnegativos = 0
for(let i = 0; i < vetor.length; i++){
if(vetor[i] < 0){
    qtdnegativos ++
}
}
return qtdnegativos
}

vetor = [8 ,10, -5, -3, 3, 5, 10 ]

console.log(acharNegativos(vetor))

    