const senha = document.getElementById("senha");
    const resultado = document.getElementById("resultado");

    senha.addEventListener("keyup", function(){

      const tamanho = senha.value.length;

      if(tamanho < 6){
        resultado.textContent = "Senha Fraca";
        resultado.className = "forca fraca";
      }

      else if(tamanho >= 6 && tamanho <= 8){
        resultado.textContent = "Senha Média";
        resultado.className = "forca media";
      }

      else{
        resultado.textContent = "Senha Forte";
        resultado.className = "forca forte";
      }

    });
