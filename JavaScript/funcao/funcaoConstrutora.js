function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado            //this tornará pública e terá seu próprio valor
    let velocidadeAtual = 0 

    //método público
    this.acelerar = function () { //utilizado para ser visivel fora 'this'
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //método público
    this.getVelocidadeAtual = function () {   //const/let privado.
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) //Função
console.log(typeof ferrari) //Objeto
