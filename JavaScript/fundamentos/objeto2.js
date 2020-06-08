//A forma de criar objeto em javascript é através de função.

console.log(typeof Object) //Function

console.log(typeof new Object) //object

const Cliente = function(){}
console.log(typeof Cliente) //Function
console.log(typeof new Cliente)  //object

class Produto{}
console.log(typeof Produto) //function
console.log(typeof new Produto()) //object

