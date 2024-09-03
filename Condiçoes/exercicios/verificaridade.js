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
            if (idade < 18) {
                resultado.innerText = `Detectamos um Homem com ${idade} anos`
                img.setAttribute('src', 'imagens/menino.png')
                resultado.appendChild(img)
            }
            else if (idade < 50 && idade >= 18) {
                resultado.innerText = `Detectamos um Homem com ${idade} anos`
                img.setAttribute('src', 'imagens/moço.png')
                resultado.appendChild(img)
            }
            
            else if (idade >= 50){
                resultado.innerText = `Detectamos um Homem com ${idade} anos.`
                img.setAttribute('src', 'imagens/senhor.png')
                resultado.appendChild(img)
            }
        } 
        else if (sexo[1].checked) {
            if (idade < 18){
                resultado.innerText = `Detecamos uma Mulher com ${idade} anos`
                img.setAttribute('src', 'imagens/menina.jpg')
                resultado.appendChild(img)
            }
            else if (idade >= 18 && idade < 50){
                resultado.innerText = `Detectamos uma Mulher com ${idade} anos`
                img.setAttribute('src', 'imagens/moça.png')
                resultado.appendChild(img)}
            else if (idade >= 50) {
                resultado.innerText = `Detectamos uma Mulher com ${idade} anos`
                img.setAttribute('src', 'imagens/senhora.jpg')
                resultado.appendChild(img)
            }

            }
            
        }
        
    }
