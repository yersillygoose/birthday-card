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

const card = document.querySelector(".card");

function createConfetti(x, y) {
    const colors = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'];
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        
        // Randomize color and shape
        const color = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.backgroundColor = color;
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';
        
        // Randomize travel direction
        const destinationX = (Math.random() - 0.5) * 300;
        const destinationY = (Math.random() - 0.5) * 300;
        
        // Apply the animation via JS for unique directions
        const animation = confetti.animate([
            { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
            { transform: `translate(${destinationX}px, ${destinationY}px) rotate(720deg)`, opacity: 0 }
        ], {
            duration: 1000 + Math.random() * 1000,
            easing: 'ease-out'
        });

        document.body.appendChild(confetti);
        
        // Remove element after animation finishes
        animation.onfinish = () => confetti.remove();
    }
}

// Trigger confetti when the card is clicked
card.addEventListener("click", (e) => {
    // e.clientX and e.clientY are the coordinates of the mouse click
    createConfetti(e.clientX, e.clientY);
});