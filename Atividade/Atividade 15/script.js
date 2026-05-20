const botoes = document.querySelectorAll(".votar");
    const resultado = document.getElementById("resultado");

    const votos = {
      Ana: 0,
      Bruno: 0,
      Carla: 0
    };

    botoes.forEach(function(botao){

      botao.addEventListener("click", function(){

        const nome = botao.getAttribute("data-nome");

        votos[nome]++;

        resultado.textContent =
          `Ana: ${votos.Ana} | Bruno: ${votos.Bruno} | Carla: ${votos.Carla}`;

      });

    });
