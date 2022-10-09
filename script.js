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

// Global
let character = "Steve";

// Event listers
steveImgEl.addEventListener("click", selectsteve);
alexImgEl.addEventListener("click", selectAlex);
fishBtnEl.addEventListener("click", fishOnce);

// Event 
function selectsteve() {
  // Up
  steveImgEl.classList.add("active");
  alexImgEl.classList.remove("active");

  // up
  character = "Steve";
}

function selectAlex() {
  // Up
  steveImgEl.classList.remove("active");
  alexImgEl.classList.add("active");
  
  // up
  character = "Alex";
}


function fishOnce () {
  // Test 
  if  (character === "Steve") {
    // use Steve
    alert ("Fish with Steve")
  } else {
    // use Alex
    alert ("Fish with Alex")
  }
}