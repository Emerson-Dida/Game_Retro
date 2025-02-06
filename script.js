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
        ligarTv.textContent = "Desligar Tv";
        videos.src = "./vd/fundo.mp4";
        videos.play();
        videos.currentTime = loop;
    } else {
        ligarTv.textContent = "Ligar Tv";
        videos.removeAttribute("loop");
        videos.currentTime = 0;
        videos.pause();
        clearTimeout(timeoutId1);
        clearTimeout(timeoutId2);
        
    }

    
   
});

ligarConsole.addEventListener("click", () => {

    videos.removeAttribute("loop");
    videos.src = Math.random() < 0.5 ? "./vd/video1.mp4" : "./vd/video2.mp4";
    videos.play();

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
    videos.currentTime = 0;
    videos.pause();
    videos.src = "./vd/fundo.mp4";
    videos.play();

    

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
    videos.removeAttribute("loop");
    videos.src = Math.random() < 0.5 ? "./vd/video1.mp4" : "./vd/video2.mp4";
    videos.play();



  if (ligarTv.textContent === "Ligar Tv") {
    alert("ligar Tv");
    videos.pause();
    return;
  }
});