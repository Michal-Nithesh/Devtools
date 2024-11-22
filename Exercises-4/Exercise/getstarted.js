const button = document.querySelector('button');

button.addEventListener('click', () => {
  fetch('/getstarted.json');
});