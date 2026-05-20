const estoque = document.getElementById("estoque");
    const mensagem = document.getElementById("mensagem");

    estoque.addEventListener("input", function(){

      const valor = Number(estoque.value);

      if(estoque.value === ""){
        mensagem.textContent = "";
        return;
      }

      if(valor < 10){
        mensagem.textContent = "⚠ Estoque baixo!";
        mensagem.className = "alerta baixo";
      } else {
        mensagem.textContent = "Estoque suficiente";
        mensagem.className = "alerta ok";
      }

    });
