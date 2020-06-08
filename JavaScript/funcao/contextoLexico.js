const valor = 'Global' // Esta aula explica o contexto léxico da declaração de uma função

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

//as função não só carregam atributos, parâmetros
//mas também local onde foram declaradas