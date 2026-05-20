 const quantidade = document.getElementById("quantidade");
    const valor = document.getElementById("valor");
    const total = document.getElementById("total");

   
    function calcularTotal(){

      const qtd = Number(quantidade.value);
      const valorUnitario = Number(valor.value);

      const resultado = qtd * valorUnitario;

      total.textContent = resultado.toFixed(2);
    }

    quantidade.addEventListener("input", calcularTotal);
