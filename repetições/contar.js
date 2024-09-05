function contar(){
    var inicio  = document.getElementById('icomeço')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    if (inicio.value != '' && fim.value != '' && passo.value != ''){
        var p = Number(passo.value)
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var info = document.getElementById('informação')
        var contagem = document.getElementById('contagem')
        contagem.innerHTML = ''
        info.innerHTML = `Contando: `
        for (i; i<= f; i+=p){
            contagem.append(i)
            contagem.append('👉🏽')
        }
        contagem.append('🏁')
    }
    else {
        window.alert('Preencha todos os campos')
    }
}