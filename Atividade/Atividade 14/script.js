const upload = document.getElementById("upload");
    const nomeArquivo = document.getElementById("nomeArquivo");

    upload.addEventListener("change", function(){

      const arquivo = upload.files[0];

      if(arquivo){
        nomeArquivo.textContent = `Arquivo selecionado: ${arquivo.name}`;
        nomeArquivo.classList.remove("vazio");
      } else {
        nomeArquivo.textContent = "Nenhum arquivo selecionado";
        nomeArquivo.classList.add("vazio");
      }

    });
