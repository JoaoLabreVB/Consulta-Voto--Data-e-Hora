function consultardata(){
var agora = new Date()
var dia = agora.getDay()
var span = document.getElementById('data')

switch(dia){
    case 0:
        span.innerHTML = `<br>Hoje é Domingo.`
    break
    case 1:
        span.innerHTML = `<br>Hoje é Segunda-feira.`
    break
    case 2:
        span.innerHTML = `<br>Hoje é Terça-feira`
    break
    case 3:
        span.innerHTML = `<br>Hoje é Quarta-feira`
    break
    case 4:
        span.innerHTML = `<br>Hoje é Quinta-feira`
    break
    case 5:
        span.innerHTML = `<br>Hoje é Sexta-feira`
    break
    default:
        span.innerHTML = `<br>Hoje é Sábado`

}

}

function consultarhora(){
    var agora = new Date()
    var hora = agora.getHours()
    var span = document.getElementById('hora')
    if(hora < 12){
               span.innerHTML = `<br>São ${hora} horas. Bom Dia!`
     }else if(hora <= 18){ 
            span.innerHTML = `<br>São ${hora} horas. Boa tarde!`
     } else {
        span.innerHTML = `<br>São ${hora} horas. Boa noite!`
     }

    }

