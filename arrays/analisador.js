let valores = []
let resposta = document.getElementById('resposta')
function adicionar(){
    let n = document.getElementById('inumero')
    let numero = Number(n.value)
    if (numero == 0 || numero > 100){
        window.alert('[ERRO] - Informe um numero dentro do intervalo 1 a 100')
    }
    else if (valores.includes(numero)){
        window.alert('Esse valor já foi adicionado')
    }
    else {
        n.value = ''
        valores.push(numero)
        let lista = document.getElementById('ilist')
        let opt = document.createElement('option')
        opt.text = `O valor ${numero} foi adicionado`
        opt.value = numero
        lista.appendChild(opt)
    }
    if (resposta != ''){
        resposta.innerHTML = ''
    }
}
function analisar(){
    if (valores.length == 0){
        window.alert('[ERRO] Nenhum valor foi informado')
    }
    else {
        let menor, maior 
        let soma = 0
        for (let c = 0; c < valores.length; c++){
            soma = soma + valores[c]
            if (c == 0 || valores[c] < menor){
                menor = valores[c]
            }
            if (c == 0 || valores[c] > maior){
                maior = valores[c]
            }
        }

        resposta.innerHTML = `Foram adicionados ${valores.length} valores <br>`
        resposta.innerHTML += `O maior valor adicionado é ${maior} <br>`
        resposta.innerHTML += `O menor valor adicionado é ${menor} <br>`
        resposta.innerHTML += `A soma dos valores adicionados é ${soma} <br>`
        resposta.innerHTML += `A média dos valores adicionados é de ${soma / valores.length}`
    }
}

function resetar(){
    resposta.innerHTML = ''
    let lista = document.getElementById('ilist')
    while (valores.length >= 0) {
        lista.removeChild(lista.firstChild)
        valores.shift()
    }
    
    
    
    
}
function apagar(){
    let del = document.getElementById('ilist')
    if (valores.length == 0 || del.value == ''){
        window.alert('Não há valores para apagar ou não foi selecionado')
    }
    else {
        
        deletar = valores.indexOf(Number(del.value))
        valores.splice(deletar, 1)
        resposta.innerHTML = `Valor ${del.value} removido com Sucesso`
        del.removeChild(del.children[deletar])
    }
}