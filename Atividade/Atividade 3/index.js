 const textarea = document.getElementById("comentario");
    const restantes = document.getElementById("restantes");

    const limite = 200;

    textarea.addEventListener("input", function(){

      const quantidade = textarea.value.length;

      const saldo = limite - quantidade;

      restantes.textContent = saldo;

      if(saldo <= 20){
        restantes.classList.add("limite");
      } else {
        restantes.classList.remove("limite");
      }

    });
