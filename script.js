const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  // Hue: 0-360 (all colors)
  // Saturation: 80-100% (very vibrant)
  // Lightness: 50-60% (perfect brightness)
  var h = random(360); 
  var s = 80 + random(20); 
  var l = 50 + random(10);
  
  var mt = random(200);
  var left = random(100);
  var dur = random(5) + 5;
  
  return `
  background-color: hsla(${h}, ${s}%, ${l}%, 0.9);
  color: hsla(${h}, ${s}%, ${l}%, 0.9); 
  box-shadow: inset -7px -3px 10px hsla(${h}, ${s}%, ${l - 20}%, 0.9);
  margin: ${mt}px 0 0 ${left}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove()
  }, 500)
}

window.addEventListener("load", () => {
  createBalloons(30)
});

window.addEventListener("click", () => {
  removeBalloons();
});

const slidingImage = document.getElementById("sliding-image");
const cardElement = document.querySelector(".card");

cardElement.addEventListener("click", (e) => {
    // Toggle the sliding animation
    slidingImage.classList.toggle("show");
});


