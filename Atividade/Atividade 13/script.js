const peso = document.getElementById("peso");
    const altura = document.getElementById("altura");
    const resultado = document.getElementById("resultado");

    function calcularIMC(){

      const p = Number(peso.value);
      const a = Number(altura.value);

      if(p > 0 && a > 0){
        const imc = p / (a * a);

        let classificacao = "";

        if(imc < 18.5){
          classificacao = "Abaixo do peso";
        } 
        else if(imc < 25){
          classificacao = "Peso normal";
        } 
        else if(imc < 30){
          classificacao = "Sobrepeso";
        } 
        else{
          classificacao = "Obesidade";
        }

        resultado.textContent = `IMC: ${imc.toFixed(2)} (${classificacao})`;
      } 
      else{
        resultado.textContent = "Digite peso e altura válidos";
      }
    }

    peso.addEventListener("input", calcularIMC);
    altura.addEventListener("input", calcularIMC);
