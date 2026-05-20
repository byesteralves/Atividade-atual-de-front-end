const horarios = document.querySelectorAll(".horario");
    const mensagem = document.getElementById("mensagem");

    horarios.forEach(function(horario){

      horario.addEventListener("click", function(){

        horarios.forEach(h => h.classList.remove("selecionado"));

        horario.classList.add("selecionado");

        mensagem.textContent = `Horário selecionado: ${horario.textContent}`;

      });

    });
