/*
 *  Script com a lógica do relógio digital.
 *  Ele possui o esqueleto dos método essenciais.
 *  Modifique este arquivo o quanto for necessário.
 *
 *  DICAS GERAIS:
 *
 *  Você pode implementar a lógica de um relógio.
 *  1. Utilizando o método Date() do javaScript para retorna um objeto de data com
 *     a hora, os minutos e os segundos atuais.
 *
 *  Depois de computar os valores de hora, minutos e segundos,
 *  atualize o HTML chamando o método timer(). Para isso,
 *  finalize a implementação simplesmente colocando os valores dentro dos elementos
 *  usando do atributo textContent dos elementos retornados.
 *
 *  Essa atualização pode ser feita usando o método 'setInterval'.
 */
let relogio = setInterval(time, 1000);

function time() {
  // TODO (continuar implementacao) ...
  let data = new Date();

  let hora = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();

  if(hora < 10){
    hora = "0" + hora;
  }
  if(minutos < 10){
    minutos = "0" + minutos;
  }
  if(segundos < 10){
    segundos = "0" + segundos;
  }


  document.getElementById("horas").innerHTML = hora;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;



}



/** Chamada da função de time para funcionar o relógio usando o método 'setInterval'*/
