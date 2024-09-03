function validar(){
    var ano = document.getElementById('iano')
    var anosistema = new Date()
    anoatual = anosistema.getFullYear()
    img = document.createElement('img')
    if (ano.value == '' ) {
        window.alert('O Campo Ano de Nascimento não pode estar vazio')
    } 
    else if (ano.value > anoatual || ano.value <= 0) {
        alert('Insira um ano válido')
    }
    else {
        idade = anoatual - ano.value
        var sexo = document.getElementsByName('sexo')
        resultado = document.getElementById('resultado')
        if (sexo[0].checked) {
            img.setAttribute('src', 'imagens/senhor.png')
            resultado.innerText = `Detectamos um Homem com ${idade} anos.`
            resultado.appendChild(img)
        } else if (sexo[1].checked) {
            resultado.innerText = `Detecamos uma Mulher com ${idade} anos`
        }
        
    }
}