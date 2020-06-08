const valores = [7.7, 8.9, 6.3, 9.2] //dinamico, indexida, heterogenea

console.log(valores[0], valores[3])

valores.push({id :3}, false, true, 'teste')
console.log(valores)

console.log(valores.pop())

delete valores[0];
console.log(valores)

console.log(typeof valores)