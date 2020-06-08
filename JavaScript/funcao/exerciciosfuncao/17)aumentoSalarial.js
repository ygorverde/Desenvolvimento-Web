function aumentoSalario(salario, plano) {
    let novoSalario;
    switch (plano) {
        case 'A':
            return novoSalario = salario + (salario / 100) * 10;

        case 'B':
            return novoSalario = salario + (salario / 100) * 15;

        case 'C':
            return novoSalario = salario + (salario / 100) * 20;

        default: console.log('Tipo de plano inválido')

    }
}

//return salarioAtual * 1.1 outro retorno
console.log(aumentoSalario(2000, 'C'))