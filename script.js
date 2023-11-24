const animatedElement = document.getElementById('animatedElement');
const animateButton = document.getElementById('animateButton');

function fadeInElement() {
  animatedElement.style.opacity = '1';
}

animateButton.addEventListener('click', fadeInElement);