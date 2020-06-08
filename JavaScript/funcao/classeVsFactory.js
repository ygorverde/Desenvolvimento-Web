class Pessoa{
    constructor(nome){
        this.nome = nome;// a chamada da função com this pode variar no browser e aq
    }

    falar(){
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar() 

const criarpessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome é: ${nome}`) 
    }
}

const pessoa2 = criarpessoa('Ygor')
pessoa2.falar()