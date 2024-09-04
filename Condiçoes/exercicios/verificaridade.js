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
        var genero = ''
        resultado = document.getElementById('resultado')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade < 18) {   
                img.setAttribute('src', 'imagens/menino.png')
            }
            else if (idade < 50 && idade >= 18) {
                img.setAttribute('src', 'imagens/moço.png')
            }
            else if (idade >= 50){
                img.setAttribute('src', 'imagens/senhor.png')
            }
        } 
        else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade < 18){
                img.setAttribute('src', 'imagens/menina.jpg')
            }
            else if (idade >= 18 && idade < 50){
                img.setAttribute('src', 'imagens/moça.jpg')
            }
            else if (idade >= 50) {
                img.setAttribute('src', 'imagens/senhora.jpg')
            }
        }
        resultado.innerText =  `Detectamos um ${genero} com ${idade} anos.`
        resultado.appendChild(img)
        }
        
    }
