const form = document.getElementById("formLogin");

    form.addEventListener("submit", function(event){

      event.preventDefault();

      const usuario = document.getElementById("usuario").value.trim();
      const senha = document.getElementById("senha").value.trim();

      const mensagem = document.getElementById("mensagem");

      if(usuario === "" || senha === ""){
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.className = "erro";
      } else {
        mensagem.textContent = "Login realizado com sucesso!";
        mensagem.className = "sucesso";
      }

    });
