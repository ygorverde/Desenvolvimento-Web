function pagarPlanoDeSaude(idade){
    let A = 80;
    let B = 50;
    let C = 95;
    let D = 130;
    if(idade < 10 ){
        return console.log(`valor a ser pago: R$${100 + A}`)
    }else if(idade < 30){
        return console.log(`valor a ser pago: R$${100 + B}`)
    }else if(idade <60){
        return console.log(`valor a ser pago: R$${100 + C}`)
    }else{
        return console.log(`valor a ser pago: R$${100 + D}`)
    }
}

pagarPlanoDeSaude(70)