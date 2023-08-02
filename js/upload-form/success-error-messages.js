import { isEscapeKey } from '../util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successWindow = successTemplate.cloneNode(true);
const successBtn = successWindow.querySelector('.success__button');
const successInner = successWindow.querySelector('.success__inner');

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorWindow = errorTemplate.cloneNode(true);
const errorBtn = errorWindow.querySelector('.error__button');
const errorInner = errorWindow.querySelector('.error__inner');

let messageWindow = null;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
    closeMessageWindow();
  }
};

const onClickOverlay = (innerElement, evt) => {
  if (!messageWindow || evt.target === innerElement || innerElement.contains(evt.target)) {
    return;
  }
  closeMessageWindow();
};

function closeMessageWindow() {
  if (!messageWindow) {
    return;
  }
  messageWindow.remove();
  document.removeEventListener('keydown', onDocumentKeydown, true);
  document.removeEventListener('click', onClickOverlay);
  messageWindow = null;
}

const showMessage = (windowElement, btn, innerElement) => {
  if (messageWindow) {
    closeMessageWindow();
  }
  document.body.append(windowElement);
  btn.addEventListener('click', closeMessageWindow);
  document.addEventListener('keydown', onDocumentKeydown, true);
  document.addEventListener('click', (evt) => onClickOverlay(innerElement, evt));
  messageWindow = windowElement;
};

const showSuccessMessage = () => showMessage(successWindow, successBtn, successInner);
const showErrorMessage = () => showMessage(errorWindow, errorBtn, errorInner);

export { showErrorMessage, showSuccessMessage };
