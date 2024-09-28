
function calcularParcela() {
    const valorTotal = parseFloat(document.getElementById('Reais').value);
    const numParcelas = parseInt(document.getElementById('Parcelas').value);

    const parcelasPermitidas = [1, 2, 4]; // valores possiveis de parcelas
    
    //verificar valores de input
    if (isNaN(valorTotal) || valorTotal <= 0) {
        alert('Valor total inválido.');
        return;
    }
    if (isNaN(valorTotal) || !parcelasPermitidas.includes(numParcelas)) {
        alert(`Número de parcelas inválido. Permitido apenas: ${parcelasPermitidas.join(', ')}`);
        return;
    }
 
    const tabelaJuros = {
        1: 0,
        2: 3,
        4: 7,
    };

    
    const taxaJuros = tabelaJuros[numParcelas] || 0;
    const juros = valorTotal * (taxaJuros / 100);
    const valorAcumulado = valorTotal + juros;
    const valorParcela = valorAcumulado / numParcelas;

    const resultado = `Valor da compra: R$ ${valorTotal.toFixed(2)}
Valor de cada parcela: R$ ${valorParcela.toFixed(2)}
Juros: R$ ${juros.toFixed(2)} (${taxaJuros}%)
Total: ${numParcelas}x de R$ ${valorParcela.toFixed(2)} = R$ ${valorAcumulado.toFixed(2)}`;
    document.getElementById('resultado').value = resultado;
}

document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); 
    calcularParcela();
});
