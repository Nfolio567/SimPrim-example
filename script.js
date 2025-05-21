const inputCvs = document.getElementById("input");
const outputCvs = document.getElementById("output");
const previewCvs = document.getElementById("preview");
const inputFile = document.getElementById("inputFile");
const checkbox = document.getElementById("checkbox");
const button = document.getElementById("button");
const radios = document.getElementsByName("image");

const simprim = new SimPrim(inputCvs);
const reader = new FileReader();

const img = new Image();

img.onload = () => {
    simprim.init(img, "70vh", "auto");
    simprim.dragDetection(previewCvs);
    simprim.sizeChange();
};


checkbox.addEventListener("input", (e) => {
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
