function soma(){
    let soma= 0;
    for (i in arguments){ //i: indice
        soma += arguments[i]
    }
return soma;
}

console.log(soma(10, 10, 10, 10, "Teste"))