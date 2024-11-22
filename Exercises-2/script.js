// 1. Select the header by ID and log it to the console
let header = document.getElementById('header');
console.log(header);

// 2. Change the text of the header using textContent
header.textContent = 'DOM Interaction: Updated Header!';

// 3. Select the button using class name and add a click event listener
let button = document.querySelector('.button');
button.addEventListener('click', function() {
    // Change the button text when clicked
    button.textContent = 'You clicked me!';
    button.style.backgroundColor = 'lightgreen'; // Change button color
    button.style.fontSize = '18px'; // Increase font size

    // Add a new paragraph to the container
    let container = document.querySelector('.container');
    let newParagraph = document.createElement('p');
    newParagraph.textContent = 'New paragraph added after button click!';
    container.appendChild(newParagraph);
});

// 4. Create a new element in the container after 3 seconds
setTimeout(() => {
    let container = document.querySelector('.container');
    let timedParagraph = document.createElement('p');
    timedParagraph.textContent = 'This paragraph appeared after 3 seconds!';
    container.appendChild(timedParagraph);
}, 3000);
