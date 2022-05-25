function calcularmedia(notas){
    soma = 0
    for(c = 0; c < notas.length; c++){
        soma += notas[c]
    }
    media = soma / notas.length
    return media
}   

let media
function aprovação(notas){
    let media = calcularmedia(notas)
    let condicao = media > 7 ? 'Aprovado' : 'Reprovado'
    return 'Média: ' + media + ' - Resultado: ' + condicao
} 


document.getElementById('formulario-01').addEventListener('submit', function(evento) {
    
    evento.preventDefault()
    evento.stopPropagation()
    
    
    let dados = new FormData(this)

    notas = []
    
    for(let key of dados.keys()) {
        numero = dados.get(key).match(/\d/) ? Number(dados.get(key)) : 0
        if (!isNaN(numero)) {   
            notas.push(Number(numero))
        }
    }
    
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = aprovação(notas)

})