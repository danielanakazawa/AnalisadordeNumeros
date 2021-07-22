var num = document.getElementById ('num')
var dados = document.getElementById ('dados')
var res = document.getElementById('resultado')
var vetores = []

function IsNum(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function InList (n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
} else {
        return false
    }
}

function adicionar() {

        if (IsNum(num.value) && !InList(num.value, vetores)){
            vetores.push (Number(num.value))
            var item = document.createElement ('option')
            item.text = `Valor ${num.value} adicionado.`
            dados.appendChild(item)
            res.innerHTML = ''

    } else {
        window.alert ('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
} 

function finalizar(){
    if (vetores.length == 0){
        window.alert ('Insira os valores para dar continuidade.')
    } else {
        var tot = vetores.length
        var maior = vetores [0]
        var menor = vetores [0]
        var soma = 0
        var media = 0

        for (let pos in vetores){
            soma += vetores[pos]
            if (vetores[pos] > maior)
                maior = vetores[pos]
        
            if (vetores[pos] < menor)
            menor = vetores[pos]
        
        }
        media = soma / tot
        
        res.innerHTML += ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O menor valor da lista é ${menor}.</p>`
        res.innerHTML += `<p>O maior valor da lista é ${maior}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`


    }
}