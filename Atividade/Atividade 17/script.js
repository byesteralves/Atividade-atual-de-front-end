const btn = document.getElementById("iniciar");

    const vermelho = document.getElementById("vermelho");
    const amarelo = document.getElementById("amarelo");
    const verde = document.getElementById("verde");

    let intervalo;

    function limpar(){
      vermelho.classList.remove("ativo");
      amarelo.classList.remove("ativo");
      verde.classList.remove("ativo");
    }

    function semaforo(){
      limpar();
      vermelho.classList.add("ativo");

      setTimeout(() => {
        limpar();
        verde.classList.add("ativo");
      }, 2000);

      setTimeout(() => {
        limpar();
        amarelo.classList.add("ativo");
      }, 4000);
    }

    btn.addEventListener("click", function(){

      semaforo();

      intervalo = setInterval(semaforo, 6000);

    });
