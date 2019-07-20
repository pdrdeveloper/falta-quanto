/* ↓ Validações ↓ */
var idiomaSelecionado = 'Português'
let idoma = document.querySelector('select#idiomaUsuario')
let categoria = document.querySelector('select#categoriaUsuario')
let modoTempo = document.querySelector('select#tempoOption')

function mostrarConteudo() {
  option = categoria.selectedOptions[0]
  texto = option.value
  let input = document.getElementById('meta')
  let input2 = document.getElementById('atual')
  let input3 = document.getElementById('dinmeta')
  let input4 = document.getElementById('tempo')
  let idiomaDiv = document.getElementById('lang')
  let idiomaTXT = document.getElementById('idiomaP')
  let title = document.getElementById('titleApp')
  if (texto === 'estudos') {
    input.style.display = 'block'
    input2.style.display = 'block'
    input3.style.display = 'block'
    input4.style.display = 'block'
    idiomaDiv.style.top = '5%'
    idiomaTXT.style.color = 'white'
    title.style.margin = '32px 0 10px'
  } else if (texto === 'viagem') {
    input.style.display = 'block'
    input2.style.display = 'block'
    input3.style.display = 'block'
    input4.style.display = 'block'
    idiomaDiv.style.top = '5%'
    idiomaTXT.style.color = 'white'
    title.style.margin = '32px 0 10px'
  } else if (texto === 'compras') {
    input.style.display = 'block'
    input2.style.display = 'block'
    input3.style.display = 'block'
    input4.style.display = 'block'
    idiomaDiv.style.top = '5%'
    idiomaTXT.style.color = 'white'
    title.style.margin = '32px 0 10px'
  } else {
    input.style.display = 'none'
    input2.style.display = 'none'
    input3.style.display = 'none'
    input4.style.display = 'none'
    idiomaDiv.style.top = '16%'
    idiomaTXT.style.color = 'black'
    title.style.margin = '0 0 30px'
  }
}

function definirTexto(idioma) {
  option = categoria.selectedOptions[0]
  texto = option.value
  let txtin = document.getElementById('txtMeta')
  let txtin2 = document.getElementById('txtAtual')
  let txtin3 = document.getElementById('txtDinmeta')
  let txtin4 = document.getElementById('txtTempo')
  let dateop1 = document.getElementById('optDia')
  let dateop2 = document.getElementById('optMes')
  let dateop3 = document.getElementById('optAno')
  if(idioma == 'Português') {
    if (texto === 'estudos') {
      txtin.innerHTML = 'Qual é a sua meta em relação aos estudos?'
      txtin2.innerHTML = 'Qual é a sua nota agora?'
      txtin3.innerHTML = 'Quanto você precisa atingir?'
      txtin4.innerHTML = 'Em quanto tempo você precisa atingir?'
      dateop1.innerHTML = 'Dia(s)'
      dateop2.innerHTML = 'Mês(es)'
      dateop3.innerHTML = 'Ano(s)'
    } else if (texto === 'viagem') {
      txtin.innerHTML = 'Para onde você deseja viajar?'
      txtin2.innerHTML = 'Quanto você tem agora?'
      txtin3.innerHTML = 'Quanto você precisa atingir?'
      txtin4.innerHTML = 'Em quanto tempo você precisa atingir?'
      dateop1.innerHTML = 'Dia(s)'
      dateop2.innerHTML = 'Mês(es)'
      dateop3.innerHTML = 'Ano(s)'
    } else if (texto === 'compras') {
      txtin.innerHTML = 'O que você deseja comprar?'
      txtin2.innerHTML = 'Quanto você tem agora?'
      txtin3.innerHTML = 'Quanto você precisa atingir?'
      txtin4.innerHTML = 'Em quanto tempo você precisa atingir?'
      dateop1.innerHTML = 'Dia(s)'
      dateop2.innerHTML = 'Mês(es)'
      dateop3.innerHTML = 'Ano(s)'
    } else {
      txtin.innerHTML = ''
      txtin2.innerHTML = ''
      txtin3.innerHTML = ''
      txtin4.innerHTML = ''
    }
  } else {
    if (texto === 'estudos') {
      txtin.innerHTML = 'What is your goal in relation to the studies?'
      txtin2.innerHTML = `What's your grade now?`
      txtin3.innerHTML = 'How much do you need to achieve?'
      txtin4.innerHTML = 'In how much time do you need to achieve?'
      dateop1.innerHTML = 'Day(s)'
      dateop2.innerHTML = 'Month(s)'
      dateop3.innerHTML = 'Year(s)'
    } else if (texto === 'viagem') {
      txtin.innerHTML = 'Where do you want to travel?'
      txtin2.innerHTML = 'How much do you have now?'
      txtin3.innerHTML = 'How much do you need to achieve?'
      txtin4.innerHTML = 'In how much time do you need to achieve?'
      dateop1.innerHTML = 'Day(s)'
      dateop2.innerHTML = 'Month(s)'
      dateop3.innerHTML = 'Year(s)'
    } else if (texto === 'compras') {
      txtin.innerHTML = 'What do you want to buy?'
      txtin2.innerHTML = 'How much do you have now?'
      txtin3.innerHTML = 'How much do you need to achieve?'
      txtin4.innerHTML = 'In how much time do you need to achieve?'
      dateop1.innerHTML = 'Day(s)'
      dateop2.innerHTML = 'Month(s)'
      dateop3.innerHTML = 'Year(s)'
    } else {
      txtin.innerHTML = ''
      txtin2.innerHTML = ''
      txtin3.innerHTML = ''
      txtin4.innerHTML = ''
    }
  }
}

idoma.addEventListener('change', function() {
  optionIdioma = this.selectedOptions[0]
  txtIdioma = optionIdioma.value
  let txtop = document.getElementById('escolha')
  let txtop1 = document.getElementById('estudos')
  let txtop2 = document.getElementById('viagem')
  let txtop3 = document.getElementById('compras')
  let idiomaTXT = document.getElementById('idiomaP')
  let title = document.getElementById('titleApp')
  let btn = document.getElementById('btnRes')
  let resultado = document.getElementById('resultado')
  if (txtIdioma == 'en') {
    idiomaSelecionado = 'Inglês'
    txtop.innerHTML = 'Choose a category.'
    txtop1.innerHTML = 'Studies'
    txtop2.innerHTML = 'Travel'
    txtop3.innerHTML = 'Shopping'
    title.innerHTML = 'How Much?'
    idiomaTXT.innerHTML = 'Language'
    btn.innerHTML = 'Click here.'
    resultado.innerHTML = 'Please choose a category.'
  } else {
    idiomaSelecionado = 'Português'
    txtop.innerHTML = 'Escolha uma categoria'
    txtop1.innerHTML = 'Estudos'
    txtop2.innerHTML = 'Viagem'
    txtop3.innerHTML = 'Compras'
    title.innerHTML = 'Falta Quanto?'
    idiomaTXT.innerHTML = 'Idioma'
    btn.innerHTML = 'Clique aqui.'
    resultado.innerHTML = 'Por favor, escolha uma categoria.'
  }
  option = categoria.selectedOptions[0]
  texto = option.value
  if (texto === 'estudos') {
    mostrarConteudo()
    definirTexto(idiomaSelecionado)
  } else if (texto === 'viagem') {
    mostrarConteudo()
    definirTexto(idiomaSelecionado)
  } else if (texto === 'compras') {
    mostrarConteudo()
    definirTexto(idiomaSelecionado)
  } else {
    mostrarConteudo()
    definirTexto(idiomaSelecionado)
  }
  if (texto == 'escolhacategoria') {
    
  } else {
    if (idiomaSelecionado == 'Português') {
      resultado.innerHTML = 'Por favor, preencha todos os dados acima.'
    } else {
      resultado.innerHTML = 'Please fill all the data above.'
    }
  }
})

categoria.addEventListener('change', function() {
  option = this.selectedOptions[0];
  texto = option.value;
  let resultado = document.getElementById('resultado')
  if (texto === 'estudos') {
    mostrarConteudo()
    definirTexto(idiomaSelecionado)
  } else if (texto === 'viagem') {
    mostrarConteudo()
    definirTexto(idiomaSelecionado)
  } else if (texto === 'compras') {
    mostrarConteudo()
    definirTexto(idiomaSelecionado)
  } else {
    mostrarConteudo()
    definirTexto(idiomaSelecionado)
  }
  if (texto == 'escolhacategoria') {
    
  } else {
    if (idiomaSelecionado == 'Português') {
      resultado.innerHTML = 'Por favor, preencha todos os dados acima.'
    } else {
      resultado.innerHTML = 'Please fill all the data above.'
    }
  }
});

function displayResultado() {
  metaUsuario = document.getElementById('metaUsuario').value
  dinheiroAtual = document.getElementById('dinheiroAtual').value
  dinheiroMeta = document.getElementById('dinheiroMeta').value
  tempoMeta = document.getElementById('tempoMeta').value
  resultadoMeta = dinheiroMeta - dinheiroAtual
  resultadoMetaDia = (resultadoMeta / tempoMeta).toFixed(2)
  resultadoMetaMes = (resultadoMeta / (tempoMeta*30)).toFixed(2)
  resultadoMetaAno = (resultadoMeta / (tempoMeta*365)).toFixed(2)
  resultado = document.getElementById('resultado')
  option = categoria.selectedOptions[0];
  texto = option.textContent;
  optionTempo = modoTempo.selectedOptions[0];
  textoTempo = optionTempo.value
  let idiomaDiv = document.getElementById('lang')
  if (idiomaSelecionado == 'Português') {
    if (resultadoMeta <= 0) {
      idiomaDiv.style.top = '5%'
      resultado.innerHTML = `Você já atingiu a sua meta.`
    } else {
      if (texto === 'Estudos') {
        if (tempoMeta <= 1 && textoTempo == 'dia') {
          idiomaDiv.style.top = '5%'
          resultado.innerHTML = `Você precisa de ${resultadoMeta} pontos para você ${metaUsuario} em ${tempoMeta} dia.`
        } else if (tempoMeta > 1 && textoTempo == 'dia') {
          idiomaDiv.style.top = '5%'
          resultado.innerHTML = `Falta ${resultadoMeta} pontos para você ${metaUsuario} em ${tempoMeta} dias.`
        } else if (tempoMeta <= 1 && textoTempo == 'mes') {
          idiomaDiv.style.top = '5%'
          resultado.innerHTML = `Falta ${resultadoMeta} pontos para você ${metaUsuario} em ${tempoMeta} mês.`
        } else if (tempoMeta > 1 && textoTempo == 'mes') {
          idiomaDiv.style.top = '5%'
          resultado.innerHTML = `Falta ${resultadoMeta} pontos para você ${metaUsuario} em ${tempoMeta} meses.`
        } else if (tempoMeta <= 1 && textoTempo == 'ano') {
          idiomaDiv.style.top = '5%'
          resultado.innerHTML = `Falta ${resultadoMeta} pontos para você ${metaUsuario} em ${tempoMeta} ano.`
        } else if (tempoMeta > 1 && textoTempo == 'ano') {
          idiomaDiv.style.top = '5%'
          resultado.innerHTML = `Falta ${resultadoMeta} pontos para você ${metaUsuario} em ${tempoMeta} anos.`
        }
      } else if (texto === 'Viagem') {
        if (tempoMeta <= 1 && textoTempo == 'dia') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `Falta R$${resultadoMeta} para você viajar para ${metaUsuario} em ${tempoMeta} dia.<br>
          Para atingir a sua meta contribua com R$${resultadoMetaDia} todo dia.`
        } else if (tempoMeta > 1 && textoTempo == 'dia') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `Falta R$${resultadoMeta} para você viajar para ${metaUsuario} em ${tempoMeta} dias.<br>
          Para atingir a sua meta contribua com R$${resultadoMetaDia} todo dia.`
        } else if (tempoMeta <= 1 && textoTempo == 'mes') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `Falta R$${resultadoMeta} para você viajar para ${metaUsuario} em ${tempoMeta} mês.<br>
          Para atingir a sua meta contribua com R$${resultadoMetaMes} todo dia.`
        } else if (tempoMeta > 1 && textoTempo == 'mes') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `Falta R$${resultadoMeta} para você viajar para ${metaUsuario} em ${tempoMeta} meses.<br>
          Para atingir a sua meta contribua com R$${resultadoMetaMes} todo dia.`
        } else if (tempoMeta <= 1 && textoTempo == 'ano') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `Falta R$${resultadoMeta} para você viajar para ${metaUsuario} em ${tempoMeta} ano.<br>
          Para atingir a sua meta contribua com R$${resultadoMetaAno} todo dia.`
        } else if (tempoMeta > 1 && textoTempo == 'ano') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `Falta R$${resultadoMeta} para você viajar para ${metaUsuario} em ${tempoMeta} anos.<br>
          Para atingir a sua meta contribua com R$${resultadoMetaAno} todo dia.`
        }
      } else if (texto === 'Compras') {
        if (tempoMeta <= 1 && textoTempo == 'dia') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `Falta R$${resultadoMeta} para você comprar ${metaUsuario} em ${tempoMeta} dia.<br>
          Para atingir a sua meta contribua com R$${resultadoMetaDia} todo dia.`
        } else if (tempoMeta > 1 && textoTempo == 'dia') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `Falta R$${resultadoMeta} para você comprar ${metaUsuario} em ${tempoMeta} dias.<br>
          Para atingir a sua meta contribua com R$${resultadoMetaDia} todo dia.`
        } else if (tempoMeta <= 1 && textoTempo == 'mes') {
          idiomaDiv.style.top = '4%'
          resultado.innerHTML = `Falta R$${resultadoMeta} para você comprar ${metaUsuario} em ${tempoMeta} mês.<br>
          Para atingir a sua meta contribua com R$${resultadoMetaMes} todo dia.`
        } else if (tempoMeta > 1 && textoTempo == 'mes') {
          idiomaDiv.style.top = '4%'
          resultado.innerHTML = `Falta R$${resultadoMeta} para você comprar ${metaUsuario} em ${tempoMeta} meses.<br>
          Para atingir a sua meta contribua com R$${resultadoMetaMes} todo dia.`
        } else if (tempoMeta <= 1 && textoTempo == 'ano') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `Falta R$${resultadoMeta} para você comprar ${metaUsuario} em ${tempoMeta} ano.<br>
          Para atingir a sua meta contribua com R$${resultadoMetaAno} todo dia.`
        } else if (tempoMeta > 1 && textoTempo == 'ano') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `Falta R$${resultadoMeta} para você comprar ${metaUsuario} em ${tempoMeta} anos.<br>
          Para atingir a sua meta contribua com R$${resultadoMetaAno} todo dia.`
        }
      }
    }
  } else {
    if (resultadoMeta <= 0) {
      idiomaDiv.style.top = '5%'
      resultado.innerHTML = `You have already reached your goal.`
    } else {
      if (texto === 'Studies') {
        if (tempoMeta <= 1 && textoTempo == 'dia') {
          idiomaDiv.style.top = '5%'
          resultado.innerHTML = `You need ${resultadoMeta} points for you ${metaUsuario} in ${tempoMeta} day.`
        } else if (tempoMeta > 1 && textoTempo == 'dia') {
          idiomaDiv.style.top = '5%'
          resultado.innerHTML = `You need ${resultadoMeta} points for you ${metaUsuario} in ${tempoMeta} days.`
        } else if (tempoMeta <= 1 && textoTempo == 'mes') {
          idiomaDiv.style.top = '5%'
          resultado.innerHTML = `You need ${resultadoMeta} points for you ${metaUsuario} in ${tempoMeta} month.`
        } else if (tempoMeta > 1 && textoTempo == 'mes') {
          idiomaDiv.style.top = '5%'
          resultado.innerHTML = `You need ${resultadoMeta} points for you ${metaUsuario} in ${tempoMeta} months.`
        } else if (tempoMeta <= 1 && textoTempo == 'ano') {
          idiomaDiv.style.top = '5%'
          resultado.innerHTML = `You need ${resultadoMeta} points for you ${metaUsuario} in ${tempoMeta} year.`
        } else if (tempoMeta > 1 && textoTempo == 'ano') {
          idiomaDiv.style.top = '5%'
          resultado.innerHTML = `You need ${resultadoMeta} points for you ${metaUsuario} in ${tempoMeta} years.`
        }
      } else if (texto === 'Travel') {
        if (tempoMeta <= 1 && textoTempo == 'dia') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `You need $${resultadoMeta} to travel to ${metaUsuario} in ${tempoMeta} day.<br>
          To reach your goal contribute $${resultadoMetaDia} today.`
        } else if (tempoMeta > 1 && textoTempo == 'dia') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `You need $${resultadoMeta} to travel to ${metaUsuario} in ${tempoMeta} days.<br>
          To reach your goal contribute $${resultadoMetaDia} every day.`
        } else if (tempoMeta <= 1 && textoTempo == 'mes') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `You need $${resultadoMeta} to travel to ${metaUsuario} in ${tempoMeta} month.<br>
          To reach your goal contribute $${resultadoMetaMes} every day.`
        } else if (tempoMeta > 1 && textoTempo == 'mes') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `You need $${resultadoMeta} to travel to ${metaUsuario} in ${tempoMeta} months.<br>
          To reach your goal contribute $${resultadoMetaMes} every day.`
        } else if (tempoMeta <= 1 && textoTempo == 'ano') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `You need $${resultadoMeta} to travel to ${metaUsuario} in ${tempoMeta} year.<br>
          To reach your goal contribute $${resultadoMetaAno} every day.`
        } else if (tempoMeta > 1 && textoTempo == 'ano') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `You need $${resultadoMeta} to travel to ${metaUsuario} in ${tempoMeta} years.<br>
          To reach your goal contribute $${resultadoMetaAno} every day.`
        }
      } else if (texto === 'Shopping') {
        if (tempoMeta <= 1 && textoTempo == 'dia') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `You need $${resultadoMeta} to buy ${metaUsuario} in ${tempoMeta} day.<br>
          To reach your goal contribute $${resultadoMetaDia} today.`
        } else if (tempoMeta > 1 && textoTempo == 'dia') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `You need $${resultadoMeta} to buy ${metaUsuario} in ${tempoMeta} days.<br>
          To reach your goal contribute $${resultadoMetaDia} every day.`
        } else if (tempoMeta <= 1 && textoTempo == 'mes') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `You need $${resultadoMeta} to buy ${metaUsuario} in ${tempoMeta} month.<br>
          To reach your goal contribute $${resultadoMetaMes} every day.`
        } else if (tempoMeta > 1 && textoTempo == 'mes') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `You need $${resultadoMeta} to buy ${metaUsuario} in ${tempoMeta} months.<br>
          To reach your goal contribute $${resultadoMetaMes} every day.`
        } else if (tempoMeta <= 1 && textoTempo == 'ano') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `You need $${resultadoMeta} to buy ${metaUsuario} in ${tempoMeta} year.<br>
          To reach your goal contribute $${resultadoMetaAno} every day.`
        } else if (tempoMeta > 1 && textoTempo == 'ano') {
          idiomaDiv.style.top = '3.5%'
          resultado.innerHTML = `You need $${resultadoMeta} to buy ${metaUsuario} in ${tempoMeta} years.<br>
          To reach your goal contribute $${resultadoMetaAno} every day.`
        }
      }
    }
  }
}

function validaInfo() {
    metaUsuario = document.getElementById('metaUsuario')
    dinheiroAtual = document.getElementById('dinheiroAtual')
    dinheiroMeta = document.getElementById('dinheiroMeta')
    tempoMeta = document.getElementById('tempoMeta')
    resultado = document.getElementById('resultado')
    if (idiomaSelecionado == 'Português') {
      if (texto == 'escolhacategoria') {
        resultado.innerHTML = 'Por favor, escolha uma categoria.'
      } else {
        if (metaUsuario.value == "") {
            resultado.innerHTML = 'Por favor, preencha todos os dados acima.'
        } else if (dinheiroAtual.value == "") {
            resultado.innerHTML = 'Por favor, preencha todos os dados acima.'
        } else if (dinheiroMeta.value == "") {
            resultado.innerHTML = 'Por favor, preencha todos os dados acima.'
        } else if (tempoMeta.value == "") {
            resultado.innerHTML = 'Por favor, preencha todos os dados acima.'
        } else {
            displayResultado()
        }
      } 
    } else {
      if (texto == 'escolhacategoria') {
        resultado.innerHTML = 'Please choose a category.'
      } else {
        if (metaUsuario.value == "") {
            resultado.innerHTML = 'Please fill all the data above.'
        } else if (dinheiroAtual.value == "") {
            resultado.innerHTML = 'Please fill all the data above.'
        } else if (dinheiroMeta.value == "") {
            resultado.innerHTML.value = 'Please fill all the data above.'
        } else if (tempoMeta.value == "") {
            resultado.innerHTML = 'Please fill all the data above.'
        } else {
            displayResultado()
        }
      } 
    }
}

/* ↓ Load Screen ↓ */

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