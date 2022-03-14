function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    ano_atual= Number(fano.value)
    var res= document.querySelector('div#res')
    var genero
    var perfil

    if(ano_atual > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente')
    }else{
        var fsex= document.getElementsByName('radsex')
        var idade = ano - ano_atual
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if( fsex[0].checked){
            genero= 'homem'    
            if(idade >= 12 && idade < 18){
                perfil = 'O Jovem'
                img.setAttribute('src','jovem_menino.png')
            }else if(idade >= 18 && idade < 60){
                perfil = 'O Adulto'
                img.setAttribute('src','adulto_homem.png')
            }else if(idade >= 60){
                perfil = 'O Idoso'
                img.setAttribute('src','idoso_homem.png')
            }else{
                perfil = 'A Criança'
                img.setAttribute('src','crianca_menino.png')
            }
        }else{
            genero= 'mulher'
            if(idade >= 12 && idade < 18){
                perfil = 'A Jovem'
                img.setAttribute('src','jovem_menina.png')
            }else if(idade >= 18 && idade < 60){
                perfil = 'A Adulta'
                img.setAttribute('src','adulto_mulher.png')
            }else if(idade >= 60){
                perfil = 'A Idosa'
                img.setAttribute('src','idoso_mulher.png')
            }else{
                perfil = 'A Criança'
                img.setAttribute('src','crianca_menina.png')
            }
        }
        res.style.textAling= 'center'
        res.innerHTML= `${perfil} tem ${idade} anos de idade!`
        res.appendChild(img)
    }
    
     
    // fano.value.length == 0 - Adicionar ao verificar buton
}
