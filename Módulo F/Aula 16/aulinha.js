var numiru = 4
var thamarinha 

function parOUimpar(numero){
    var resto = numero % 2
    return (resto == 0 ? "Par" : "Ímpar")
}
thamarinha = `é impar ou par o número ${numiru}?`
console.log('thamarinha: ' + thamarinha)
console.log('Vinicius: Óbvio, o número é ' + parOUimpar(numiru))

function fatorial(n){
    if(n==1){
        return 1
    }else{
       return n * fatorial(n-1) 
    }
}

console.log(fatoria(2))