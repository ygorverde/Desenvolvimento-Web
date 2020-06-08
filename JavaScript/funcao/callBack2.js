const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasbaixas1 = []
for(let i in notas){
    if (notas[i] < 7){
        notasbaixas1.push(notas[i])
    }
}

console.log(notasbaixas1)

//com callback

const notasbaixas2 = notas.filter(function(notas){
    return notas <7
})

console.log(notasbaixas2)

//utilizando arrow

const notasBaixas3 = notas.filter(nota=> nota <=7) //utilizando callback
console.log(notasBaixas3)
