function diaUtil(dia) {

    switch (dia) {
        case 1:
            console.log('Domingo não é dia útil')
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default: "Dia inválido"
    }

}

console.log(diaUtil(2));