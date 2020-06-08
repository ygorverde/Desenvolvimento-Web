let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(i => { //função arrow
        vetorResultado.push(i * multiplicador) 
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor, 3))
