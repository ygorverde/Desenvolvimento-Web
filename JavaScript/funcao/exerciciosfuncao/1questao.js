/*1)*/function soma(a,b){
console.log('soma: ',a+b, '\nsubtracao: ',a-b, '\nmultiplicacao: ', a*b, '\ndivisao: ', a/b, '\n\n',);
}
soma(50,5)

/*2)*/
function formarTriangulo(a,b,c){
    if(a,b == c){
        console.log('O triangulo é Equilátero')
    }else if(a==b || a==c ||b==c){
        console.log('O triangulo é isósceles')
    }else if(a != b && a !=c){
        console.log('O triangulo é Escaleno')
    }else{
        console.log('não foi possível formar um triangulo')
    }
}
formarTriangulo(5,4,3)

/*3)*/
function baseExpoente(base,expoente){
resultado = Math.pow(base,expoente);
return resultado;
}
console.log(baseExpoente(2,2))

/*4)*/

function dividendoDivisor(a,b){
console.log('resultado: ', a/b, '\nresto: ', a%b,);
}
dividendoDivisor(20,5)

/*5)*/
function lidarComNumeros(a,b){
    resultado = parseFloat(a+b);
    console.log('\n\nresultado: R$', resultado.toFixed(2));
}
lidarComNumeros(0.1,0.2);

/*6)*/
function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}
function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}
console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));


/*7)*/
function bhaskara(ax2, bx, c){
console.log('\n\n==BHASKARA==')
let resultados = [];
let delta = (bx**2) - (4 * ax2 * c)
if(delta<0){
    return "Delta é negativo"
}
let x1 = (-bx + Math.sqrt(delta))/2*ax2
let x2 = (-bx - Math.sqrt(delta))/2*ax2
resultados.push(x1)
resultados.push(x2)
return resultados
}
console.log(bhaskara(2,2,3))
console.log(bhaskara(2,2,3))

/*8)*/
let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function avaliaPontuacoes(stringPontuacoes){
let pontuacoes = stringPontuacoes.split(", ")
let qtdQuebraRecords = 0
let piorJogo = 1
let maiorPontuacao = pontuacoes[0]
let menorPontuacao = pontuacoes[0]
for (let i = 1; i < pontuacoes.length; i++){
    if(pontuacoes[i] > maiorPontuacao){
        maiorPontuacao = pontuacoes[i]
        qtdQuebraRecords++
    }else if(pontuacoes[i] < menorPontuacao){
        menorPontuacao = pontuacoes[i]
        piorJogo = i+1;
    }
}
return [qtdQuebraRecords, piorJogo]
}
console.log(avaliaPontuacoes(stringPontuacoes))

