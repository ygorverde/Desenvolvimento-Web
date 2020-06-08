let dobro = function (a){
    return 2 * a
}

dobro = (a) =>{
    return 2 * a
}

//Se colocar chaves, o return é obrigatório.

dobro = a => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function (){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //possui parâmetro
console.log(ola())