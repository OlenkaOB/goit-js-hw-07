const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const handleInput = event => {
  console.dir(event.target.value);
};

nameInput.addEventListener('input', handleInput);
