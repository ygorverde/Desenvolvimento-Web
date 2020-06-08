function calculadora(a, operacao, b) {
    switch (operacao) {
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break
        case '*':
            return a * b
            break
        case '/':
            return a / b
            break
        default: console.log('Operador inválido')
    }
}

console.log(calculadora(15, "-", 15))