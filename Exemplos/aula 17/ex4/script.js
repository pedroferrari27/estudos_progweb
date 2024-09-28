let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let output = document.getElementById("outputContainer");  


function calcularOutput(event) {
  let numero_1 = parseFloat(input1.value);
  let numero_2 = parseFloat(input2.value);
  output.textContent = numero_1 + numero_2;
}
