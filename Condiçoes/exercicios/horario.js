function carregar(){
    var horario = new Date
    var hora = horario.getHours()
    var min = horario.getMinutes()
    var h = document.getElementById('hora')
    var imagem = document.getElementById('imagem')
    var main = document.getElementById('fundo')
    var saudação = document.getElementById('saudação')
    var horaexata = `${hora}:${min}`
    if (hora >= 0 && hora < 12){
        h.innerText = `Agora são ${horaexata} horas`
        saudação.innerText = 'Bom Dia'
        imagem.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = '#add8e6'
    }
    else if (hora >=12 && hora < 18){
        h.innerText = `Agora são ${horaexata} horas`
        saudação.innerText = 'Boa Tarde'
        imagem.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = '#ff4400a4'
    }
    else if (hora >=18 && hora <= 23 ) {
        h.innerText = `Agora são ${horaexata} horas`
        saudação.innerText = 'Boa Noite'
        imagem.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = '#03033ac4'
        }
}
    



