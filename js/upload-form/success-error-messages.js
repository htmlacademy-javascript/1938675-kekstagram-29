import { isEscapeKey } from '../util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successWindow = successTemplate.cloneNode(true);
const successBtn = successWindow.querySelector('.success__button');
const successInner = successWindow.querySelector('.success__inner');

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorWindow = errorTemplate.cloneNode(true);
const errorBtn = errorWindow.querySelector('.error__button');
const errorInner = errorWindow.querySelector('.error__inner');

const removeErrorMessageWindow = () => {
  errorWindow.remove();
};

const onDocumentKeydownError = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removeErrorMessageWindow();
  }
};

const onClickOverlayError = (evt) => {
  if (evt.target !== errorInner) {
    removeErrorMessageWindow();
  }
};

const showErrorMessage = () => {
  document.body.append(errorWindow);
  errorBtn.addEventListener('click', removeErrorMessageWindow);
  document.addEventListener('keydown', onDocumentKeydownError);
  document.addEventListener('click', onClickOverlayError);
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

const onClickOverlaySuccess = (evt) => {
  if (evt.target !== successInner) {
    removeSuccessMessageWindow();
  }
};

const showSuccessMessage = () => {
  document.body.append(successWindow);
  successBtn.addEventListener('click', removeSuccessMessageWindow);
  document.addEventListener('keydown', onDocumentKeydownSuccess);
  document.addEventListener('click', onClickOverlaySuccess);
};

export { showErrorMessage, showSuccessMessage };
