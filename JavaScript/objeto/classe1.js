class Lancamento {
    constructor(nome = 'Genérico', valor = salario){
        this.nome = nome,
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes,
        this.ano = ano,
        this.lancamentos = []
    }
addLancamentos(...lancamentos){
    lancamentos.forEach(e => this.lancamentos.push(e))
    }

    sumario(){
        let valorConsolidado = 0;
        this.lancamentos.forEach(e =>{
            valorConsolidado += e.valor
        })
        return valorConsolidado
    }

}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())
