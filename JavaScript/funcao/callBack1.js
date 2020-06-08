const fabricantes = ["mercedes", "audi", "bwm"]

function imprimir(nome, indice){
console.log(`${indice +1}. ${nome}`)
}

fabricantes.forEach(imprimir) //função callback
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})

/*fabricantes.forEach(imprimir) //função callback
fabricantes.forEach(fabricante => console.log(fabricante))*/
//função arrow