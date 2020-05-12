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
const success4 = createElement('p', 'success');
success4.innerHTML = '//:Success'
const com1 = createElement('p', 'com-line');
com1.innerHTML = 'ALIM_SCRIPT.js:1 [TK][BaseOperator.init]:Initializing boot script...';
const com2 = createElement('p', 'com-line');
com2.innerHTML = 'ALIM_SCRIPT.js:1 [TK][BaseOperator.continueInitialization]:Preparing for launch game event...'
const com3 = createElement('p', 'com-line');
com3.innerHTML = 'ALIM_SCRIPT.js:1 [TK][BaseOperator.setupLaunchGameListener]:Registering event listener for launchGame-event';
const com4 = createElement('p', 'com-line');
com4.innerHTML = 'ALIM_SCRIPT.js:1 [TK][BaseOperator.postMessageToSelf]:Posting message to self. [event=launchgame]';
const com5 = createElement('p', 'com-line');
com5.innerHTML = 'ALIM_SCRIPT.js:1 [TK][BaseOperator.handleLaunchGameEvent]:Handling the launchGame-event...';
const com6 = createElement('p', 'com-line');
com6.innerHTML = 'ALIM_SCRIPT.js:1 [TK][BaseOperator.performInfoCall]:Calling the info service... ';
const com7 = createElement('p', 'com-line');
com7.innerHTML = 'ALIM_SCRIPT.js:1 [TK][BaseOperator.performInfoCall]:Info retrieved successfully';
const com8 = createElement('p', 'com-line');
com8.innerHTML = 'ALIM_SCRIPT.js:1 [TK][BaseOperator.handleInfoResponse]:Activating modules... ';
const com9 = createElement('p', 'com-line');
com9.innerHTML = 'ALIM_SCRIPT.js:61 [TK][ScriptsAndStyles.init]:Module initialized. [scripts added=0, stylesheets added=0 ';
const com10 = createElement('p', 'com-line');
com10.innerHTML = 'ALIM_SCRIPT.js:39 [TK][BackToLobby.init]:Module initialized [handleEvents=true]';
const com11 = createElement('p', 'com-line');
com11.innerHTML = 'ALIM_SCRIPT.js:61 [TK][OpenExternalGameRules.init]:Module initialized [handleEvents=true] ';
const com12 = createElement('p', 'com-line');
com12.innerHTML = 'ALIM_SCRIPT.js:39 [TK][OpenExternalGameRules.init]:Module initialized [handleEvents=true]  ';
const com13 = createElement('p', 'com-line');
com13.innerHTML = 'ALIM_SCRIPT.js:1 [TK][Game.init]:Module initialized';
const com14 = createElement('p', 'com-line');
com14.innerHTML = 'ALIM_SCRIPT.js:61 [TK][EventForwarding.init]:Module initialized.';
const button = document.querySelector('.button');
const containerText = document.querySelector('.text');

button.addEventListener('click', () => {
  button.classList.add('button-hide');
  addElements();
})

function addElements() {
  setTimeout(() => {containerText.append(pStart)}, 1000);
  setTimeout(() => {containerText.append(success1)}, 2000);
  setTimeout(() => {containerText.append(pHost)}, 3000);
  setTimeout(() => {containerText.append(success2)}, 4000);
  setTimeout(() => {containerText.append(pCasino)}, 5000);
  setTimeout(() => {containerText.append(success3)}, 6000);
  setTimeout(() => {containerText.append(pAlgorithms)}, 7000);
  setTimeout(() => {containerText.append(com1)}, 7100);
  setTimeout(() => {containerText.append(com2)}, 7200);
  setTimeout(() => {containerText.append(com3)}, 7300);
  setTimeout(() => {containerText.append(com4)}, 7400);
  setTimeout(() => {containerText.append(com5)}, 7500);
  setTimeout(() => {containerText.append(com6)}, 7600);
  setTimeout(() => {containerText.append(com7)}, 7700);
  setTimeout(() => {containerText.append(com8)}, 7800);
  setTimeout(() => {containerText.append(com9)}, 7900);
  setTimeout(() => {containerText.append(com10)}, 8000);
  setTimeout(() => {containerText.append(com11)}, 8100);
  setTimeout(() => {containerText.append(com12)}, 8200);
  setTimeout(() => {containerText.append(com13)}, 8300);
  setTimeout(() => {containerText.append(com14)}, 8400);
  setTimeout(() => {containerText.append(success4)}, 8500);
  //Ссылку менять тут
  setTimeout(() => { location.href = "https://www.wildtornado.casino/ru"}, 8600);
}


