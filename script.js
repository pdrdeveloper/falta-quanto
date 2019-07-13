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

var box = document.getElementById('faltaquanto')

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut(2000);
});

window.addEventListener("load", function (event) {
    setTimeout(() => {
       box.style.display = 'block' 
    }, 1500);
})

/*
Qual é a sua meta?
Quanto você tem?
Quanto você precisa atingir?
Em quanto tempo você precisa atingir?
*/