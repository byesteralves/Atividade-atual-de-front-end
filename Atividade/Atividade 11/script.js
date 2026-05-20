const miniatura = document.getElementById("miniatura");
    const video = document.getElementById("video");

    miniatura.addEventListener("click", function(){

      video.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

      video.style.display = "block";

      miniatura.style.display = "none";

    });
