let saldo = 1000;

    const valor = document.getElementById("valor");
    const btn = document.getElementById("btnTransferir");
    const mensagem = document.getElementById("mensagem");

    btn.addEventListener("click", function(){

      const valorTransferencia = Number(valor.value);

      const confirmar = confirm("Deseja realmente realizar a transferência?");

      if(!confirmar){
        mensagem.textContent = "Operação cancelada.";
        mensagem.className = "mensagem erro";
        return;
      }

      if(valorTransferencia <= 0){
        mensagem.textContent = "Digite um valor válido!";
        mensagem.className = "mensagem erro";
      }
      else if(valorTransferencia > saldo){
        mensagem.textContent = "Saldo insuficiente!";
        mensagem.className = "mensagem erro";
      }
      else{
        saldo -= valorTransferencia;
        mensagem.textContent = `Transferência realizada com sucesso! Saldo: R$ ${saldo.toFixed(2)}`;
        mensagem.className = "mensagem sucesso";
      }

    });
