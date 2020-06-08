const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(resposta => {
    const funcionario = resposta.data

    const func = funcionario.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(func)
})

