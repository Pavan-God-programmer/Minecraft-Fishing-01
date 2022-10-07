// Minecraft fishing Simlatior
// Varibles to store HTML Elements
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let fishBtnEl = document.getElementById("fish-btn");
let imgResultEl = document.getElementById("img-result");
let numcodEl = document.getElementById("num-cod");
let numSalmonEl = document.getElementById("num-salmon");
let numTropicalEl = document.getElementById("num-tropical");
let numPufferEl = document.getElementById("num-puffer");

// Event listers
steveImgEl.addEventListener("click", selectsteve);
alexImgEl.addEventListener("click", selectAlex);

function selectsteve() {
  // Up
  steveImgEl.classList.add("active");
  alexImgEl.classList.remove("active");
}

function selectAlex() {
  // Up
  steveImgEl.classList.remove("active");
  alexImgEl.classList.add("active");
}
