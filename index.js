
var botao = document.getElementById("botao");

botao.addEventListener('click', () => {
  var notaP1 = Number(document.getElementById("P1").value);
  var notaP2 = Number(document.getElementById("P2").value);
  var notaP3 = Number(document.getElementById("P3").value);
  var notaP4 = Number(document.getElementById("P3").value);

  var notaFinal = (notaP1 + notaP2 + notaP3 + notaP4) / 4;

  var notaFixada = notaFinal.toFixed(2)

  var resultado = document.getElementById("resultado");

  if (notaFixada >= 6) {
    resultado.innerHTML = "<div class='resultado'>Sua nota foi " + notaFixada + ". Você está aprovado.</div>"
  } else { 
    resultado.innerHTML = "<div class='resultado'>Sua nota foi " + notaFixada + ". Você está reprovado.</div>"
  }
})
