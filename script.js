const typedText = document.getElementById("typed");
const phrases = ["a Developer.", "a Designer.", "a Dreamer."];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

function typeLoop() {
  typedText.innerHTML = currentPhrase.join("");

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  }

  if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) {
    isDeleting = true;
    setTimeout(typeLoop, 1000);
    return;
  }

  if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(typeLoop, isDeleting ? 50 : 100);
}

typeLoop();