function tabuada(){
    var numeroinserido = document.getElementById('inumero')
    var numero = Number(numeroinserido.value)
    var multiplicador = 0
    var tabuada = document.getElementById('itabuada')
    tabuada.innerHTML = ''
    for(numero; multiplicador <=10; multiplicador++){
        var valor = document.createElement('option')
        valor.append(`${numero} x ${multiplicador}   = ${numero * multiplicador}`)
        tabuada.appendChild(valor)
       
    }
}