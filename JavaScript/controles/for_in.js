const notas = [5.2, 4.3 , 6.9, 9, 5.6]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ygor',
    sobrenome: 'Verde',
    idade: 10,
    peso: 90
}
for (let i in pessoa){
    console.log(`${i} = ${pessoa[i]} `)
}