
    var resistencia_110v = 12.5;
    var resistencia_220v = 39;
    function calcularResistencia() {
    // Lógica de cálculo existente...
    var comprimento_canaleta = document.getElementById("comprimento_canaleta").value;
    var quantidade_canaleta = document.getElementById("quantidade_canaleta").value;
    var tensao_escolhida = document.getElementById("tensao_escolhida").value;
    var quantidade_parciais = document.getElementById("quantidade_parciais").value;
  
    var resistencia_usada;
    if (tensao_escolhida == 110) {
      resistencia_usada = resistencia_110v;
    } else if (tensao_escolhida == 220) {
      resistencia_usada = resistencia_220v;
    } else {
      document.getElementById("resultado").innerHTML = "Tensão inválida. Por favor, escolha 110v ou 220v.";
      return;
    }
  
    var resistencia;
    if (quantidade_parciais === "") {
      resistencia = quantidade_canaleta * comprimento_canaleta * resistencia_usada;
    } else {
      resistencia = (quantidade_canaleta * comprimento_canaleta * resistencia_usada) / Math.pow(quantidade_parciais, 2);
    }
  
    var corrente = tensao_escolhida / resistencia;
    var corrente_127v = 127 / resistencia;
    var watts = Math.pow(tensao_escolhida, 2) / resistencia;
    var watts_127v = Math.pow(127, 2) / resistencia;
    var corrente = corrente.toFixed(2);
    var corrente_127v = corrente_127v.toFixed(2);
  
    if (tensao_escolhida == 110) {
      document.getElementById("resultado").innerHTML = "Resistência: " + Math.round(resistencia) + " ohms" + "<br>" + "Potência: " + Math.round(watts_127v) + " watts" + "<br>" + "Corrente: " + corrente_127v + " amperes";
    } else {
      document.getElementById("resultado").innerHTML = "Resistência: " + Math.round(resistencia) + " ohms" + "<br>" + "Potência: " + Math.round(watts) + " watts" + "<br>" + "Corrente: " + corrente + " amperes";
    }
  
    // Adiciona o esquemático ao elemento com id "esquematico"
    var esquematico = gerarEsquematico(quantidade_canaleta, quantidade_parciais);
    document.getElementById("esquematico").innerText = esquematico;
    // Chamar a função para gerar e exibir o esquemático
    gerarEsquematico(quantidade_canaleta.value, quantidade_parciais.value);
  }
  
  function gerarPDF() {
    // Obtenha os valores do formulário ou como preferir
    var quantidadeCanaletas = document.getElementById("quantidade_canaleta").value;
    var quantidadeParciais = document.getElementById("quantidade_parciais").value;
  
    // Gere o esquemático e obtenha seu HTML
    var esquematicoHTML = gerarEsquematico(quantidadeCanaletas, quantidadeParciais);
    
    // Use a biblioteca html2pdf para gerar o PDF
    html2pdf(esquematicoHTML, {
      margin: 10,
      filename: 'esquematico.pdf',
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
    });
  }
 
