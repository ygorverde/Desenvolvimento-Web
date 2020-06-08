function numeroPorExtenso(numero) {
        switch (numero) {
            case '0':
                console.log('ZERO')
                break
            case '1':
                console.log('UM')
                break
            case '2':
                console.log('DOIS')
                break
            case '3':
                console.log('TRES')
                break
            case '4':
                console.log('QUATRO')
                break
            case '5':
                console.log('CINCO')
                break
            case '6':
                console.log('SEIS')
                break
            case '7':
                console.log('SETE')
                break
            case '8':
                console.log('OITO')
                break
            case '9':
                console.log('NOVE')
                break
            case '10':
                console.log('DEZ')
                break
            default:
                console.log("Numero fora do intervalo")
        }
}

numeroPorExtenso('6')