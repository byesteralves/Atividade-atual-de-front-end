const busca = document.getElementById("busca");
    const filmes = document.querySelectorAll("#listaFilmes li");
    const mensagem = document.getElementById("mensagem");

    busca.addEventListener("input", function(){

      const texto = busca.value.toLowerCase();

      let encontrados = 0;

      filmes.forEach(function(filme){

        const nomeFilme = filme.textContent.toLowerCase();

        if(nomeFilme.includes(texto)){
          filme.style.display = "block";
          encontrados++;
        } else {
          filme.style.display = "none";
        }

      });

      if(encontrados === 0){
        mensagem.textContent = "Nenhum filme encontrado.";
      } else {
        mensagem.textContent = "";
      }

    });
