const inputCvs = document.getElementById("input");
const outputCvs = document.getElementById("output");
const previewCvs = document.getElementById("preview");
const checkbox = document.getElementById("checkbox");
const button = document.getElementById("button");
const radios = document.getElementsByName("image");
const version = document.getElementById("version");


const reader = new FileReader();

const img = new Image();
let simprim;

img.onload = () => {
    simprim = new SimPrim(inputCvs);
    simprim.init(img, "70vh", "auto");
    simprim.dragDetection(previewCvs);
    simprim.sizeChange();
    version.innerText = simprim.VERSION;
};


checkbox.addEventListener("input", () => {
    if(checkbox.checked){
        previewCvs.style.display = "block";
    }else{
        previewCvs.style.display = "none";
    }
})

button.addEventListener("click", () => {
    simprim.exportImg(outputCvs);
})

radios.forEach(radio => {
    if(radio.checked){
        img.src = "img/"+ radio.value +"_.jpeg";
    }
    radio.addEventListener("change", () => {
        img.src = "img/"+ radio.value +"_.jpeg";
    })
})
