const alunos = [
    {nome: 'Joao', nota: 11, bolsista: false},
    {nome: 'Maria', nota: 10.0, bolsista: false},
    {nome: 'Otavio', nota: 20.0, bolsista: false}
]

/*function recebenota(array){
return array.nota
}*/


const resultado = alunos.map(array => array.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)















