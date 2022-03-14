function carregar(){
    var frase = window.document.getElementById("hora_do_dia")
    var msg = window.document.getElementById("msg")
    var foto = window.document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML= `Agora são ${hora} horas.`
    if(hora >= 4 && hora < 12){
       // Bom dia
        frase.innerHTML = 'Olá, Bom Dia!'
        foto.src= 'manhã_A.png'
        document.body.style.background= "#fbc435"

    }else if(hora >= 12 && hora < 18){
       // boa tarde
       frase.innerHTML = 'Olá, Boa Tarde!'
       foto.src=  'Tarde_A.png'
       document.body.style.background= "#0e6299"

    }else{
        //boa noite
        frase.innerHTML = 'Olá, Boa Noite!'
        foto.src= 'Noite_A.png'
        document.body.style.background= "#192d3c"
    }




}
