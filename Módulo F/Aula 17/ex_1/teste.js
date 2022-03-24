
var num = []
       
num.push(2)
num.push(2)
num.push(2)
num.push(2)
num.push(2)
console.log(num)


function retorna_lenght(vetor){
    return vetor.length
}

console.log(retorna_lenght(num))

        function somar(vetor){
            var soma = 0 
            for(var c in vetor){
                soma += vetor[c]
                c++
            }
            console.log(`Soma: ${soma}`)
            return Number(soma)
        }

        function media(vetor){
            var n = vetor.length
            var soma= somar(vetor)
            var media = soma / n
            console.log(`Media: ${media}`)
            return  Number(media)
        }

        function desvpad(vetor){
            var avg = media(vetor)
            var n= vetor.length
            var conjunto = []
            var dif= 0
            for(var c in vetor){
                dif = (vetor[c] - avg)**2
                conjunto.push(dif) 
                c++
            }
            var desvpad= Math.sqrt(somar(conjunto)/(n-1))
            console.log(`Desvio Padrão: ${desvpad}`)
            return desvpad
        }
                
    function maiorvalor(vetor){
        vetor.sort()
        var max = vetor[vetor.length-1] 
        console.log(`Maior valor é: ${max}`)
        return max
    }


    function menorvalor(vetor){
        vetor.sort()
        var min = vetor[0] 
        console.log(`Maior valor é: ${min}`)
        return min
    }

        console.log(`chama -> ${desvpad(num)}`)
        console.log(`chama -> ${maiorvalor(num)}`)
        console.log(`chama -> ${menorvalor(num)}`)
        
  /*      
        function media(vetor){
            let media = somar(vetor) / vetor.length
            return media
        }
                
        console.log(`Média:  ${media(num)} `)

        // Desvio padrão da Amostra
        console.log(`Desvio padrão amostral:  ${num.length} `)

        // Maior valor encontrado na amostra
        console.log(`Maior valor encontrado:  ${num.length} `)
        
        // Menor valor encontrado na amostra
        console.log(`Menor valor encontrado:  ${num.length} `)






/*

// testando lógicas para funfar o exercicio

var array = []
console.log('tamanho inicial: ' + array.length)

// testando atributos

var teste = {
    bola: 35
}
console.log(teste.bola)

// Construtor de listas para minha tabela
// ficou facil sabendo disso kk

var num = {
    add: function add(element){
        [].push.call(this,element)
    }
}

num.add(1)
num.add(1)

console.log(num)

*/