const escola = [{
    nome: 'TurmaM1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.2
    }]
}, {
    nome: 'TurmaM2',
    alunos: [{
        nome: 'Maria',
        nota: 9.5
    }, {
        nome: 'Gabriel',
        nota: 7.2
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

const resultado = escola.map(getNotasDaTurma)
console.log(resultado)


Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)

