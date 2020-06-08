function comprarCarro(carro){
    switch(carro){
        case 'hatch':
            return "Compra efetuada com sucesso!!"
            break
            case'sedan':
            case'motocicleta':
            case'caminhonetes':
            return "Tem certeza que prefere este modelo?"
            break
            default: console.log('Não trabalhamos com este tipo de automóvel aqui')
            
    }
    

}

console.log(comprarCarro('hatch'));