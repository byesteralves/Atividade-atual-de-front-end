const icone = document.getElementById("icone");
    const notificacoes = document.getElementById("notificacoes");

    icone.addEventListener("mouseover", function(){
      notificacoes.style.display = "block";
    });

    icone.addEventListener("mouseout", function(){
      notificacoes.style.display = "none";
    });
