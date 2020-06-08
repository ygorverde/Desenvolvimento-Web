function sacarDinheiro(valorSaque) {
    let contador100 = 0;
    let contador50 = 0;
    let contador20 = 0;
    let contador10 = 0;
    let contador5 = 0;
    let contador1 = 0;
    valorNota = contadorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 20:
                valorSaque -= 20
                contador20++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                valorSaque -= 1
                contador1++
                break
        }
        valorNota = contadorNota(valorSaque)
    }
    return elaborarResultado(contador100, contador50, contador20, contador10, contador5, contador1)
}


function contadorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    }
    else if (valorSaque >= 50) {
        return 50
    }
    else if (valorSaque >= 20) {
        return 20
    }
    else if (valorSaque >= 10) {
        return 10
    }
    else if (valorSaque >= 5) {
        return 5
    }
    else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador20, contador10, contador5, contador1) {

    let resultado = ''

    if (contador100 > 0) {
        resultado += `\n${contador100} nota(s) de R$100`
    }
    if (contador50 > 0) {
        resultado += `\n${contador50} nota(s) de R$50`
    }

    if (contador20 > 0) {
        resultado += `\n${contador20} nota(s) de R$20`
    }

    if (contador10 > 0) {
        resultado += `\n${contador10} nota(s) de R$10`
    }

    if (contador5 > 0) {
        resultado += `\n${contador5} nota(s) de R$5`
    }

    if (contador1 > 0) {
        resultado += `\n${contador1} nota(s) de R$1`
    }
    return resultado
}

console.log(sacarDinheiro(274))