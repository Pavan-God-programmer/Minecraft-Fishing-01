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
let numcod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

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

function fishOnce() {
  // Test
  if (character === "Steve") {
    // use Steve
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      numcod++;
      imgResultEl.src = "img/Raw-Cod.png";
      numcodEl.innerHTML = numcod;
    } else if (randNum < 0.9) {
      numSalmon++;
      imgResultEl.src = "img/Raw-Salmon.png";
      numSalmonEl.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      numTropical++;
      imgResultEl.src = "img/Tropical-Fish.png";
      numTropicalEl.innerHTML = numTropical;
    } else {
      numPuffer++;
      imgResultEl.src = "img/Pufferfish.png";
      numPufferEl.innerHTML = numPuffer;
    }
  } else {
    // use Alex
  }
}
