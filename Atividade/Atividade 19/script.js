const reais = document.getElementById("reais");
    const resultado = document.getElementById("resultado");

    const taxaDolar = 5.20;

    reais.addEventListener("input", function(){

      const valor = Number(reais.value);

      if(valor <= 0){
        resultado.textContent = "USD 0.00";
        return;
      }

      const dolar = valor / taxaDolar;

      resultado.textContent = `USD ${dolar.toFixed(2)}`;

    });
