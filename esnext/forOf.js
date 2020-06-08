for(let letra of "Coder"){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i of assuntosEcma){
    console.log(i)
}

for (let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
['Map', {abordado : true}],
['Set', {abordado : true}],
['Promise', {abordado : false}]
])

//Exibe chave/valor
for(let assunto of assuntosMap){
    console.log(assunto)
}

//Exibe chave
for (let assunto of assuntosMap.keys()){
    console.log(assunto)
}

//Exibe valor
for (let assunto of assuntosMap.values()){
    console.log(assunto)
}

for (let [ch, vl] of assuntosMap.entries()){
    console.log(ch,vl)
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra)
}
