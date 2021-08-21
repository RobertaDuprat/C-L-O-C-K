function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var sdc = window.document.querySelector("#sdc");

    
    var data = new Date()
    var hora = data.getHours() 
    var minuto = data.getMinutes()

    if (hora < 10){
        hora = "0" + hora
    }

    if (minuto < 10){
        minuto = "0" + minuto
    }
    msg.innerHTML = `Agora são ${hora}: ${minuto} horas.`
      if (hora >= 0 && hora < 12){
        sdc.innerHTML = `Bom dia!`
         img.src = 'img/day.png'
         document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        sdc.innerHTML = `Boa tarde!`
         img.src = 'img/afternoon.png'
         document.body.style.background = "#EDB973"

    } else {
        sdc.innerHTML = `Boa noite!`
        img.src = 'img/night.png'
        document.body.style.background = "#545a66"
    }
    setTimeout(carregar, 1000)
    }
    
    

