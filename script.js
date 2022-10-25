// Minecraft fishing Simlatior
// Varibles to store HTML Elements
let steveImgEl = document.getElementById("steve-img");
let villageImgEl = document.getElementById("villager-img");
let alexImgEl = document.getElementById("alex-img");
let fishBtnEl = document.getElementById("fish-btn");
let imgResultEl = document.getElementById("img-result");
let numcodEl = document.getElementById("num-cod");
let numSalmonEl = document.getElementById("num-salmon");
let numTropicalEl = document.getElementById("num-tropical");
let numPufferEl = document.getElementById("num-puffer");
let plus5btn = document.getElementById("plus5");
let until200btn = document.getElementById("until200");

// Global
let character = "Steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Event listers
villageImgEl.addEventListener("click", selectVillager);
steveImgEl.addEventListener("click", selectsteve);
alexImgEl.addEventListener("click", selectAlex);
fishBtnEl.addEventListener("click", fishOnce);
plus5btn.addEventListener("click", plus5);
until200btn.addEventListener("click", until200);

// Event
function selectsteve() {
  // Up
  steveImgEl.classList.add("active");
  alexImgEl.classList.remove("active");
  villageImgEl.classList.remove("active");

  // up
  character = "Steve";
}

function selectAlex() {
  // Up
  steveImgEl.classList.remove("active");
  alexImgEl.classList.add("active");
  villageImgEl.classList.remove("active");

  // up
  character = "Alex";
}

function selectVillager() {
  // Up
  steveImgEl.classList.remove("active");
  alexImgEl.classList.remove("active");
  villageImgEl.classList.add("active");

  // up
  character = "Villager";
}

function fishOnce() {
  // Test
  if (character === "Steve") {
    // use Steve
    let randNum = Math.random();

    console.log(randNum);

    if (randNum < 0.7) {
      numCod++;
      imgResultEl.src = "img/Raw-Cod.png";
      numcodEl.innerHTML = numCod;
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
    let randNum = Math.random();

    console.log(randNum);

    if (randNum < 0.1) {
      numCod++;
      imgResultEl.src = "img/Raw-Cod.png";
      numcodEl.innerHTML = numCod;
    } else if (randNum < 0.2) {
      numSalmon++;
      imgResultEl.src = "img/Raw-Salmon.png";
      numSalmonEl.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      numTropical++;
      imgResultEl.src = "img/Tropical-Fish.png";
      numTropicalEl.innerHTML = numTropical;
    } else {
      numPuffer++;
      imgResultEl.src = "img/Pufferfish.png";
      numPufferEl.innerHTML = numPuffer;
    }
  } // use Alex
  let randNum = Math.random();

  console.log(randNum);

  if (randNum < 0.1) {
    numCod++;
    imgResultEl.src = "img/Raw-Cod.png";
    numcodEl.innerHTML = numCod;
  } else if (randNum < 0.1) {
    numSalmon++;
    imgResultEl.src = "img/Raw-Salmon.png";
    numSalmonEl.innerHTML = numSalmon;
  } else if (randNum < 0.2) {
    numTropical++;
    imgResultEl.src = "img/Tropical-Fish.png";
    numTropicalEl.innerHTML = numTropical;
  } else {
    numPuffer++;
    imgResultEl.src = "img/Pufferfish.png";
    numPufferEl.innerHTML = numPuffer;
  }
}

function plus5() {
  for (let n = 1; n <= 5; n++) {
    console.log(n);
    fishOnce();
  }
}

function until200() {
  let codTraget = numCod + 200;
  let count = 0;
  while (numCod < codTraget) {
    fishOnce();
    count++;
  }
  console.log(count);
}
