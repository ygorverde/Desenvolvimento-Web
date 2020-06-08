const aprovados = ['Agatha', 'Joao', 'Pedro', 'Marcelo']

aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1} ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => { // Arrow Function
    console.log(nome)
})

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)