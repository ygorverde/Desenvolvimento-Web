const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove elemento da última posição
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona na última posição!
console.log(pilotos)

pilotos.shift() // Remove da primeira posição!
console.log(pilotos)

pilotos.unshift() // Adiciona na primeira posição!
console.log(pilotos)

// Splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // Removeu F.Massa
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)





