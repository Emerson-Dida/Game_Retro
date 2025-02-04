const videos = document.getElementById("videos");
const ligarTv = document.getElementById("ligarTv");
const ligarConsole = document.getElementById("ligarConsole");
const desligarConsole = document.getElementById("desligarConsole");
const reset = document.getElementById("reset");
const textTv = document.getElementById("text_tv");
let timeoutId1;
let timeoutId2;




ligarTv.addEventListener("click", () => {

    if(ligarTv.textContent === "Ligar Tv") {
        textTv.style.display = "block";
        ligarTv.textContent = "Desligar Tv";
    } else {
        textTv.style.display = "none";
        ligarTv.textContent = "Ligar Tv";
        videos.currentTime = 0;
        videos.pause();
        clearTimeout(timeoutId1);
        clearTimeout(timeoutId2);
        
    }

    
   
});

ligarConsole.addEventListener("click", () => {

    

    if(ligarConsole.textContent === "Ligar Console") {
        ligarConsole.textContent = "Ligar Console "
        document.getElementById("msg").innerHTML = "";
        document.getElementById("tv").style.background = "none";
        textTv.style.display = "none";
        videos.src = "./vd/video1.mp4";
        videos.play();
        clearTimeout(timeoutId2);
        timeoutId1 = setTimeout(() => {
            document.getElementById("msg").innerHTML = "Cd lido com sucesso";
        }, 14000)
    } else {
        ligarConsole.textContent = "Ligar Console";
        document.getElementById("msg").innerHTML = "";
        textTv.style.display = "none";
        videos.src = "./vd/video2.mp4";
        videos.play();
        clearTimeout(timeoutId1);
       timeoutId2 = setTimeout(() => {
          document.getElementById("msg").innerHTML =
            "Algo inesperado aconteceu. Verifique o estado do Cd ou procure uma assistencia!";
        }, 8000);
    };

    if(ligarTv.textContent === "Ligar Tv") {
        alert("ligar Tv");
        videos.pause();
         clearTimeout(timeoutId1);
          clearTimeout(timeoutId2);
        return;
    };
    
});

desligarConsole.addEventListener("click", () => {
     document.getElementById("msg").innerHTML = "";
     textTv.style.display = "block";
    videos.currentTime = 0;
    videos.pause();

    

    if (ligarTv.textContent === "Ligar Tv") {
      alert("ligar Tv");
      videos.pause();
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      textTv.style.display = "none";
      return;
    }
    
    
})

reset.addEventListener("click", () => {
  document.getElementById("msg").innerHTML = "";
  textTv.style.display = "none";
  videos.src = "./vd/video1.mp4";
  videos.play();


  if (ligarTv.textContent === "Ligar Tv") {
    alert("ligar Tv");
    videos.pause();
    return;
  }
});