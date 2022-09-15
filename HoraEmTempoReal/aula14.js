function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 6 && hora < 12){
        img.src = 'dia.png'
        document.body.style.background = '#FFD700'

    }else if(hora >= 12 && hora <18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#DAA520'
    }else {
        img.src= 'noite.jpg'
        document.body.style.background = '#778899'
    }
}   