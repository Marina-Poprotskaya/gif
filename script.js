const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.classList.add(className);
    return element
  }

const pStart = createElement('p', 'main-line');
pStart.innerHTML = 'Starting host...'
const pHost = createElement('p', 'main-line');
pHost.innerHTML = 'Connecting to host...'
const pCasino = createElement('p', 'main-line');
pCasino.innerHTML = 'Connecting to casino...'
const pAlgorithms = createElement('p', 'main-line');
pAlgorithms.innerHTML = 'Starting algorithms...'
const success1 = createElement('p', 'success');
success1.innerHTML = '//:Success'
const success2 = createElement('p', 'success');
success2.innerHTML = '//:Success'
const success3 = createElement('p', 'success');
success3.innerHTML = '//:Success'
const button = createElement('button', 'button');
button.innerHTML = 'Start';
const containerText = document.querySelector('.text');
const containerBtn = document.querySelector('.col-btn');

button.addEventListener('click', () => {
  location.href = "https://www.wildtornado.casino/ru";
})

function addElements() {
  setTimeout(() => {containerText.append(pStart)}, 1000);
  setTimeout(() => {containerText.append(success1)}, 3000);
  setTimeout(() => {containerText.append(pHost)}, 4000);
  setTimeout(() => {containerText.append(success2)}, 6000);
  setTimeout(() => {containerText.append(pCasino)}, 7000);
  setTimeout(() => {containerText.append(success3)}, 9000);
  setTimeout(() => {containerText.append(pAlgorithms)}, 10000);
  setTimeout(() => {containerBtn.append(button)}, 12000);
}
addElements();