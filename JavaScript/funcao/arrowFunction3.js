//O this de uma função Arrow é um this associado a um contexto ao qual a função foi escrita, mesmo com bind.

let comparaComThis = function (param){
    console.log("1",this === param)
}
comparaComThis(global) //true


const obj = {}

comparaComThis = comparaComThis.bind(obj) //true, sem o bind: false
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
