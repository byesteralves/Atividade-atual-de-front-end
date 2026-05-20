const controle = document.getElementById("controle");
    const lampada = document.getElementById("lampada");
    const porcentagem = document.getElementById("porcentagem");

    controle.addEventListener("input", function(){

      const intensidade = controle.value;

      porcentagem.textContent = intensidade;

      lampada.style.background = `rgba(255, 255, 0, ${intensidade / 100})`;

      lampada.style.boxShadow = `
        0 0 ${intensidade}px rgba(255,255,0,${intensidade / 100})
      `;
    });
