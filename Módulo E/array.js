let array = [0,25,60,1,2,3]

let teste1 = [2,3,4,5,6,7]
teste1[0]= 1
console.log(`os valores do vetor são ${teste1}`)
// Ele não adicionou o item ao "espaço" e realocou os demais
// Ele basicamento substituiu o 2 por 1 e o restante não foi alterado

let teste2 = [0,1,2]
teste2.push(3)
console.log(`os valores do vetor são ${teste2}`)
// Foi adicionado o valor 3 ao final do vetor

let teste3 = ['a','b','c']
console.log(`Há ${teste3.length} valores no vetor`)
// O vetor também aceita string e foi retornado a quantidade de itens

let teste4 = [9,1,2,3,5,4,6,7,8]
console.log(`Vetor ordenado: ${teste4.sort()}`)
// Os inteiros foram facilmente ordenados

let teste5 = [900,10,200,30,500,40,600,70,800]
console.log(`Vetor ordenado: ${teste5.sort()}`)
// Aqui parece que a ordenação é feita em strings...

let carretel= []
for(let c = 0; c < 10; c++){
    carretel[c] = `val: ${c+1}`
}
console.log(`valor do array ${carretel}`)

for(let position in carretel){
    console.log(carretel[position])
}

// Buscar o index a partir do valor dentro do vetor
// indexOf(VALOR) -> retorna -> Index
console.log(carretel.indexOf('val: 6'))

