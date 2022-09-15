function Multar(){
    var vel = document.getElementById('velo').value
    var res = document.getElementById('res')
    if(vel > 60){
        res.innerHTML = `${vel} Km/h, Velocidade Excedida`
    }
    else{
        res.innerHTML= `${vel} Km/h, Velocidade Normal`
    }
}