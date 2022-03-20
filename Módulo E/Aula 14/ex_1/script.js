var passo= window.document.getElementById("n_inter")
passo.value = 1
var inicio= window.document.getElementById("n_inicio")
inicio.value = 0
var fim= window.document.getElementById("n_fim")
fim.value = 10

function calcular(){
    inicio= Number(window.document.getElementById("n_inicio").value)
    fim= Number(window.document.getElementById("n_fim").value)
    passo = Number(window.document.getElementById("n_inter").value)
    console.log(`Valor Inicial: ${inicio}`)
    console.log(`Valor Final: ${fim}`)
    console.log(`Valor do Passo: ${passo}`)
    if(passo == 0){
        alert('Não é possível realizar a contagem a partir do passo 0!')
    }else{
        var contador= window.document.getElementById("contador")
        // bora chamar o texto 
        var contagem= intervalator(inicio,fim,passo)
        contador.innerHTML = contagem
    }
}

function intervalator(init,final,pass){
    var contagem= ''
    var cont = init

    while(cont < final){
        cont += pass
        contagem += cont  

        if(cont < final){
            contagem += '->  '
        }else{
            contagem += '!'
        }

        if(cont > final){
            alert(`O valor final é: ${final}, a contagem está sendo realizada de ${passo} em ${passo}, a contagem extrapola o valor final!`)
        }

        console.log(contagem)
    }

    return init + '-> ' + contagem 
}

