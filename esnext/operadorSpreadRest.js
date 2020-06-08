/*Operador Rest(juntar), Spread(espalhar) */
//usar rest com parâmetro de função

// Usar Spread como Objeto
const funcionario = {nome: 'Maria', salario: 12346.98}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//Usar Spread com Array
const grupoA = ['João', 'Pedro', 'Maria']
const grupoB = ['Ygor', ...grupoA, 'Verde']
console.log(grupoB)
