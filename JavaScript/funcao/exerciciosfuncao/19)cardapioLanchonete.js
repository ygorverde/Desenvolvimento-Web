function cardapioLanchonete(cod, qtd) {
    switch (cod) {
        case 100:
            return console.log(`Cachorro quente, TOTAL: ${qtd * 3}`)

        case 200:
            return console.log(`Hambúrguer Simples, TOTAL: ${qtd * 4}`)

        case 300:
            return console.log(`Cheeseburguer, TOTAL: ${qtd * 5.50}`)

        case 400:
            return console.log(`Bauru, TOTAL: ${qtd * 7.50}`)

        case 500:
            return console.log(`Refrigerante e, TOTAL: ${qtd * 3.50}`)

        case 600:
            return console.log(`Suco, TOTAL: ${qtd * 2.80}`)
        default:
            return 'Prudot inválido'
    }

}

cardapioLanchonete(300, 3)