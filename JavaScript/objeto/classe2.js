class Avo {
    constructor(sobrenome = 'Silveira'){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}
const pai = new Pai
console.log(pai)
const filho = new Filho
console.log(filho)