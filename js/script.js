function validaInfo() {
    metaUsuario = document.getElementById('metaUsuario').value.toLowerCase()
    dinheiroAtual = document.getElementById('dinheiroAtual').value
    dinheiroMeta = document.getElementById('dinheiroMeta').value
    tempoMeta = document.getElementById('tempoMeta').value
    resultado = document.getElementById('resultado')
    if (metaUsuario == "") {
        resultado.innerHTML = 'Por favor, preencha todos os dados acima!'
    } else if (dinheiroAtual == "") {
        resultado.innerHTML = 'Por favor, preencha todos os dados acima!'
    } else if (dinheiroMeta == "") {
        resultado.innerHTML = 'Por favor, preencha todos os dados acima!'
    } else if (tempoMeta == "") {
        resultado.innerHTML = 'Por favor, preencha todos os dados acima!'
    } else {
        if (tempoMeta > 1) {
            resultado.innerHTML = `Falta R$${dinheiroMeta - dinheiroAtual} para você atingir a meta para ${metaUsuario} em ${tempoMeta} meses.`
        } else {
            resultado.innerHTML = `Falta R$${dinheiroMeta - dinheiroAtual} para você atingir a meta para ${metaUsuario} em ${tempoMeta} mês.`
        }
    }
}
/*
Qual é a sua meta?
Quanto você tem?
Quanto você precisa atingir?
Em quanto tempo você precisa atingir?
*/