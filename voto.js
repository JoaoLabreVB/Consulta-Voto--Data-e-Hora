function voto(){
var idade = document.querySelector("input#idade").value

var p = document.querySelector("p#p")

if (idade < 16) {
    p.innerHTML = `Você tem ${idade} anos.<strong>Não tem direito ao voto.</strong>`

} else if (idade < 18 || idade > 65) {
    
    p.innerHTML = `Você tem ${idade} anos. <strong>Voto opcional</strong>`
} else if (idade >= 18) {
    p.innerHTML = `Você tem ${idade} anos.<strong>Voto obrigatório</strong>`
}

    document.querySelector("input#idade"). value = "" ;
}