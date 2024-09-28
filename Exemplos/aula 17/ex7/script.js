function calcularDegraus() {
    
    const alturaDegrau = parseFloat(document.getElementById('alturaDegrau').value);
    const alturaDesejada = parseFloat(document.getElementById('alturaDesejada').value);
  
    if (isNaN(alturaDegrau) || isNaN(alturaDesejada) || alturaDegrau <= 0 || alturaDesejada <= 0) {
      alert('Por favor, insira valores numéricos positivos para a altura do degrau e a altura desejada.');
      return;
    }
    const numDegraus = Math.ceil(alturaDesejada / alturaDegrau);
    document.getElementById('degrausCount').textContent = numDegraus;
  
    const container = document.getElementById('containerDegraus');
    container.innerHTML = '';

    for (let i = 0; i < numDegraus; i++) {
    const degrau = document.createElement('div');
    degrau.classList.add('degrau');

    degrau.style.width = `${50 + i * 50}px`;

    if (i === 0) {
      const alturaLabel = document.createElement('span');
      alturaLabel.classList.add('altura-degrau');
      alturaLabel.textContent = `${alturaDegrau}m`;
      degrau.appendChild(alturaLabel);
    }

    container.appendChild(degrau);
  }
  
  
}
