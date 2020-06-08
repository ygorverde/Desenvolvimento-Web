function mediaAritmetica(vetor){
    let total = 0;
    for(let i = 0; i < vetor.length; i++){
        total += vetor[i] / vetor.length
    }
    return total
}

vetor = [1, 2, 3, 4, 5]
console.log(mediaAritmetica(vetor))

