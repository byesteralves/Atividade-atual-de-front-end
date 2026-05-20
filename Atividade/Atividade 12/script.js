const estrelas = document.querySelectorAll(".estrela");
    const mensagem = document.getElementById("mensagem");

    estrelas.forEach(function(estrela){

      estrela.addEventListener("click", function(){

        const valor = Number(estrela.getAttribute("data-value"));

        estrelas.forEach(function(e){
          if(Number(e.getAttribute("data-value")) <= valor){
            e.classList.add("ativa");
          } else {
            e.classList.remove("ativa");
          }
        });

        mensagem.textContent = `Você deu nota ${valor} de 5`;

      });

    });
