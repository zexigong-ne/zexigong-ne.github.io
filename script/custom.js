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
greetingElement.innerHTML = `<h2>${welcomeMessage}</h2>`;
document.querySelector('.content .container').insertBefore(greetingElement, document.querySelector('.content .container h2'));
