const botao = document.getElementById("botaoTema");

    botao.addEventListener("click", function(){

      document.body.classList.toggle("dark");

      if(document.body.classList.contains("dark")){
        botao.textContent = "Modo Claro";
      } else {
        botao.textContent = "Modo Escuro";
      }

    });
