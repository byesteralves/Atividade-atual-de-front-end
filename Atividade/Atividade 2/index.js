const inputTemp = document.getElementById("temperatura");
    const status = document.getElementById("status");

    inputTemp.addEventListener("keyup", function(){

      const temperatura = Number(inputTemp.value);

      if(temperatura < 40){
        document.body.style.background = "green";
        status.textContent = "Temperatura Normal";
      }
      else if(temperatura >= 40 && temperatura <= 70){
        document.body.style.background = "yellow";
        status.textContent = "Temperatura Moderada";
      }
      else if(temperatura > 70){
        document.body.style.background = "red";
        status.textContent = "Temperatura Alta!";
      }
      else{
        status.textContent = "Digite um valor válido";
      }
    });
