const controls = document.querySelector('#controls');
const boxesContainer = document.querySelector('#boxes');
const inputEl = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');

createBtn.addEventListener('click', () => {
  const amount = parseInt(inputEl.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = '';
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
