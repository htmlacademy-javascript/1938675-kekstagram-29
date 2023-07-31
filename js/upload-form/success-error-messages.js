import { isEscapeKey } from '../util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successWindow = successTemplate.cloneNode(true);
const successBtn = successWindow.querySelector('.success__button');

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorWindow = errorTemplate.cloneNode(true);
const errorBtn = errorWindow.querySelector('.error__button');

const removeErrorMessageWindow = () => {
  errorWindow.remove();
};

const onDocumentKeydownError = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removeErrorMessageWindow();
  }
};

const showErrorMessage = () => {
  document.body.append(errorWindow);
  errorBtn.addEventListener('click', removeErrorMessageWindow);
  document.addEventListener('keydown', onDocumentKeydownError);
};

const removeSuccessMessageWindow = () => {
  successWindow.remove();
};

const onDocumentKeydownSuccess = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removeSuccessMessageWindow();
  }
};

const showSuccessMessage = () => {
  document.body.append(successWindow);
  successBtn.addEventListener('click', removeSuccessMessageWindow);
  document.addEventListener('keydown', onDocumentKeydownSuccess);
};

export { showErrorMessage, showSuccessMessage };
