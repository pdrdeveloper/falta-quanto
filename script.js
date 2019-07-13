let select = document.querySelector('select');

select.addEventListener('change', function() {
  option = this.selectedOptions[0];
  texto = option.textContent;
  console.log(texto)
  let input = document.getElementById('meta')
  let input2 = document.getElementById('atual')
  let input3 = document.getElementById('dinmeta')
  let input4 = document.getElementById('tempo')
  let txtin = document.getElementById('txtMeta')
  let txtin2 = document.getElementById('txtAtual')
  let txtin3 = document.getElementById('txtDinmeta')
  let txtin4 = document.getElementById('txtTexto')
  if (texto === 'Estudos') {
    input.style.display = 'block'
    txtin.innerHTML = 'Qual é a sua meta em relação aos estudos?'
    input2.style.display = 'block'
    txtin2.innerHTML = 'Qual é a sua nota agora?'
    input3.style.display = 'block'
    txtin3.innerHTML = 'Quanto você precisa atingir?'
    input4.style.display = 'block'
    txtin4.innerHTML = 'Em quantos meses você precisa atingir?'
  } else if (texto === 'Viagem') {
    input.style.display = 'block'
    txtin.innerHTML = 'Para onde você deseja viajar?'
    input2.style.display = 'block'
    txtin2.innerHTML = 'Quanto você tem agora?'
    input3.style.display = 'block'
    txtin3.innerHTML = 'Quanto você precisa atingir?'
    input4.style.display = 'block'
    txtin4.innerHTML = 'Em quantos meses você precisa atingir?'
  } else if (texto === 'Compras') {
    input.style.display = 'block'
    txtin.innerHTML = 'O que você deseja comprar?'
    input2.style.display = 'block'
    txtin2.innerHTML = 'Quanto você tem agora?'
    input3.style.display = 'block'
    txtin3.innerHTML = 'Quanto você precisa atingir?'
    input4.style.display = 'block'
    txtin4.innerHTML = 'Em quantos meses você precisa atingir?'
  } else {
    input.style.display = 'none'
    input2.style.display = 'none'
    input3.style.display = 'none'
    input4.style.display = 'none'
  }
});

function validaInfo() {
    metaUsuario = document.getElementById('metaUsuario').value.toLowerCase()
    dinheiroAtual = document.getElementById('dinheiroAtual').value
    dinheiroMeta = document.getElementById('dinheiroMeta').value
    tempoMeta = document.getElementById('tempoMeta').value
    resultado = document.getElementById('resultado')
    option = select.selectedOptions[0];
    texto = option.textContent;
    if (texto == 'Escolha uma categoria.') {
      resultado.innerHTML = 'Por favor, escolha uma categoria.'
    } else {
      if (metaUsuario == "") {
          resultado.innerHTML = 'Por favor, preencha todos os dados acima.'
      } else if (dinheiroAtual == "") {
          resultado.innerHTML = 'Por favor, preencha todos os dados acima.'
      } else if (dinheiroMeta == "") {
          resultado.innerHTML = 'Por favor, preencha todos os dados acima.'
      } else if (tempoMeta == "") {
          resultado.innerHTML = 'Por favor, preencha todos os dados acima.'
      } else {
        if (dinheiroMeta - dinheiroAtual <= 0) {
          resultado.innerHTML = `Você já atingiu a sua meta.`
        } else {
          if (texto === 'Estudos') {
            if (tempoMeta > 1) {
              resultado.innerHTML = `Falta ${dinheiroMeta - dinheiroAtual} pontos para você ${metaUsuario} em ${tempoMeta} meses.`
            } else {
              resultado.innerHTML = `Falta ${dinheiroMeta - dinheiroAtual} pontos para você ${metaUsuario} em ${tempoMeta} mês.`
            }          
          } else if (texto === 'Viagem') {
            if (tempoMeta > 1) {
              resultado.innerHTML = `Falta R$${dinheiroMeta - dinheiroAtual} para você viajar para ${metaUsuario} em ${tempoMeta} meses.`
            } else {
              resultado.innerHTML = `Falta R$${dinheiroMeta - dinheiroAtual} para você viajar para ${metaUsuario} em ${tempoMeta} mês.`
            }
          } else if (texto === 'Compras') {
            if (tempoMeta > 1) {
              resultado.innerHTML = `Falta R$${dinheiroMeta - dinheiroAtual} para você comprar ${metaUsuario} em ${tempoMeta} meses.`
            } else {
              resultado.innerHTML = `Falta R$${dinheiroMeta - dinheiroAtual} para você comprar ${metaUsuario} em ${tempoMeta} mês.`
            }
          }
      }
    }
  }
}

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut(2000);
});

let box = document.getElementById('container')
window.addEventListener("load", function (event) {
    setTimeout(() => {
       box.style.display = 'flex' 
    }, 1500);
})

/*
Qual é a sua meta?
Quanto você tem?
Quanto você precisa atingir?
Em quanto tempo você precisa atingir?
*/