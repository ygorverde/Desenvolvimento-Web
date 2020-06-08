const alunos = [
    {nome: 'Joao', nota: 11, bolsista: false},
    {nome: 'Maria', nota: 10.0, bolsista: true},
    {nome: 'Otavio', nota: 20.0, bolsista: true}
]

//1) Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//2) Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

const alunos = [
    {nome: 'Joao', nota: 11, bolsista: false},
    {nome: 'Maria', nota: 10.0, bolsista: true},
    {nome: 'Otavio', nota: 20.0, bolsista: true}
]