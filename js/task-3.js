const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const handleInput = event => {
  const inputValue = event.target.value.trim();
  nameOutput.textContent = inputValue === '' ? 'Anonymous' : inputValue;
  return;
};

nameInput.addEventListener('input', handleInput);
