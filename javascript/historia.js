let video= document.getElementById("video");
let play=document.getElementById("btnPlay");
let pause=document.getElementById("btnPause");
let time= document.getElementById("time");
let timevideo= video.duration;
let tiempoActual
let imgV=document.getElementById("imgV");



const tiempoVideo=(tiempo)=>{
    let minutos
    let segundos
    if (tiempo===0) {
        minutos=0
        segundos=0
    }if(tiempo<60) {
        minutos=0
        segundos=tiempo.toFixed(0)
    }else{
        minutos=tiempo/60 | 0
        segundos=tiempo%60 | 0
    }
    return minutos+":"+segundos
};



play.addEventListener ("click", ()=>{
    video.play()
    tiempoActual=setInterval(()=>{
        time.textContent = tiempoVideo(video.currentTime)
    }, 1000)
    imgV.style.display="none"
});


pause.addEventListener ("click", ()=>{
    video.pause()
    clearInterval(tiempoActual)
});



video.addEventListener('loadedmetadata', () => {
    time.textContent = tiempoVideo(video.duration);
});

window.addEventListener("load", ()=>{
    time.textContent=tiempoVideo(video.duration)
});


tiempoVideo();

