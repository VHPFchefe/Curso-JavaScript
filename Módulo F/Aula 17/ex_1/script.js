var tabela = window.document.getElementById('tab')
var resposta = window.document.getElementById('resposta')
resposta.style.visibility= 'hidden' 
resposta.style.width= '0px'
var click = Number(0)

// criar array para armazenar valores
var num = []


function adicionar(){
    var item = window.document.getElementById('item')
    
    // setar frase padrão: "Valor digitado: []"
    
    if(item.value.length == 0){
        alert('Digite um número na caixa de entrada!')
    }else{
        click += 1        
        console.log('click: ' + click)
        if(click == 1){
            tabela.innerText= ''
        }
        num.push(Number(item.value))
        let option = window.document.createElement('option')
        option.text= `Valor digitado: ${Number(item.value)}`
        tabela.appendChild(option)
        console.log('itens na tabela: ' + tabela.length)
    }
}

function executar(){
    console.log('Itens: '+ tabela.length)
    if(click == 0){
        alert('Adicione algum item à lista!')
    }else{
        var img= window.document.getElementById('narutinho')
        img.src=""
        img.style.width= '0px'
        resposta.style.visibility= 'visible' 
        resposta.style.width= '50%'
        
        var amostra = Number(num.length)
        // Amostra com N itens
        var r_itens= document.getElementById('r_itens')
        r_itens.innerHTML= `Amostra com ${amostra} ite${amostra == 1 ? 'm' : 'ns'}`
        
        // Média da Amostra
        var r_media= document.getElementById('r_media')
        r_media.innerHTML= `Média:  ${media(num)} `

        // Desvio padrão da Amostra
        var r_desv= document.getElementById('r_desv')
        r_desv.innerHTML= `Desvio padrão amostral:  ${desvpad(num)} `

        // Maior valor encontrado na amostra
        var r_maior= document.getElementById('r_maior')
        r_maior.innerHTML= `Maior valor encontrado:  ${maiorvalor(num)} `
        
        // Menor valor encontrado na amostra
        var r_menor= document.getElementById('r_menor')
        r_menor.innerHTML= `Menor valor encontrado:  ${menorvalor(num)} `
    }
}

function reiniciar(){
    alert("Sistema reiniciado!")
    window.document.location.reload()
}

function somar(vetor){
    var soma = 0 
    for(var c in vetor){
        soma += vetor[c]
        console.log('pega  -> '  + soma)  
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