// Não aceita repetição / não indexada
const times = new Set()
times.add('Bahia')
times.add('Palmeiras').add('Flamengo').add('Corinthians')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Joao', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)