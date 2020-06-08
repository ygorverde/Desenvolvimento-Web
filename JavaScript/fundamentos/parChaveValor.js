const saudacao = 'opa' //contexto léxico 1


function exec() {
    const saudacao = 'Falaa'
    return saudacao
}

//Objetos são aninhados de pares nome/valor


const cliente = {
    nome: 'Ygor',
    idade: 15,
    endereço: {
        rua: 'ProfessorSouza',
        numero: 123
    }
}



console.log(cliente.endereço.rua)
