
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


/*var notaPrimeiroBimestre = 9.4595
var notaSegundoBimestre = 5.9861
var notaTerceiroBimestre = 4.1254
var notaQuartoBimestre = 2.487
var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1) 

console.log(notaFixada)

if (notaFinal >= 6) {
    console.log ("Aluno aprovado! Parabéns!")
} else {
    console.log ("Reprovado! Tente de novo ano que vem.")
}

 o toFixed é usado quando o número tem muitas casas decimais apos a virgula e nele fixamos ate quantas queremos usar no calculo, nesse caso coloquei 1 */