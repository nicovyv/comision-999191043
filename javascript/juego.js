let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let btnRef=document.getElementById("btnRef");
let boxImg=document.getElementById("boxImg");





img1.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("Text", "../assets/rompe2.png")
});

img2.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("Text", "../assets/rompe1.png")
});

img3.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("Text", "../assets/rompe3.png")
});

img1.addEventListener("dragend",(event)=>{
    img1.style.display="none"
})

img2.addEventListener("dragend",(event)=>{
    img2.style.display="none"
})

img3.addEventListener("dragend",(event)=>{
    img3.style.display="none"
})


box1.addEventListener("dragover", (event) => {
    event.preventDefault()
});

box2.addEventListener("dragover", (event) => {
    event.preventDefault()
});

box3.addEventListener("dragover", (event) => {
    event.preventDefault()
});

box1.addEventListener("drop", (event) => {
    event.preventDefault()
    let info1 = event.dataTransfer.getData("Text")
    let cuadro1 = document.createElement("img")
    cuadro1.style.width = "275px";
    cuadro1.style.height = "400px"
    cuadro1.src = info1
    box1.innerHTML = "";
    box1.appendChild(cuadro1)
})

box2.addEventListener("drop", (event) => {
    event.preventDefault()
    let info2 = event.dataTransfer.getData("Text")
    let cuadro2 = document.createElement("img")
    cuadro2.style.width = "275px";
    cuadro2.style.height = "400px"
    cuadro2.src = info2
    box2.innerHTML = "";
    box2.appendChild(cuadro2)
})

box3.addEventListener("drop", (event) => {
    event.preventDefault()
    let info3 = event.dataTransfer.getData("Text")
    let cuadro3 = document.createElement("img")
    cuadro3.style.width = "275px";
    cuadro3.style.height = "400px"
    cuadro3.src = info3
    box3.innerHTML = "";
    box3.appendChild(cuadro3)
    
});

btnRef.addEventListener("click",()=>{
    location.reload()
});

const ocultarSeccion=()=>{
if (img1.style.display==="none" && img2.style.display==="none" && img3.style.display==="none") {
    boxImg.style.display="none"
}
};
ocultarSeccion();



