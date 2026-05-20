const audio = document.getElementById("audio");
    const play = document.getElementById("play");
    const pause = document.getElementById("pause");
    const volume = document.getElementById("volume");

    play.addEventListener("click", function(){
      audio.play();
    });

    pause.addEventListener("click", function(){
      audio.pause();
    });

    volume.addEventListener("input", function(){
      audio.volume = volume.value;
    });
