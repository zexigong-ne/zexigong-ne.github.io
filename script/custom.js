// Display a welcome message based on the time of the day
const currentTime = new Date().getHours();
let welcomeMessage = '';

if (currentTime >= 5 && currentTime < 12) {
  welcomeMessage = 'Good morning!';
} else if (currentTime >= 12 && currentTime < 18) {
  welcomeMessage = 'Good afternoon!';
} else {
  welcomeMessage = 'Good evening!';
}

const greetingElement = document.createElement('div');
greetingElement.innerHTML = `<h3>${welcomeMessage}</h3>`;
document.querySelector('.header .container').insertBefore(greetingElement, document.querySelector('.header .container h1'));
