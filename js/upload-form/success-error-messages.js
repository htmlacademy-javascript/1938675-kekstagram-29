import { isEscapeKey } from '../util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successWindow = successTemplate.cloneNode(true);
const successBtn = successWindow.querySelector('.success__button');
const successInner = successWindow.querySelector('.success__inner');

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorWindow = errorTemplate.cloneNode(true);
const errorBtn = errorWindow.querySelector('.error__button');
const errorInner = errorWindow.querySelector('.error__inner');

const onDocumentKeydownError = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
    closeErrorMessageWindow();
  }
};

const onClickOverlayError = (evt) => {
  if (evt.target === errorInner || errorInner.contains(evt.target)) {
    return;
  }
  closeErrorMessageWindow();
};

function closeErrorMessageWindow() {
  errorWindow.remove();
  errorBtn.removeEventListener('click', closeErrorMessageWindow);
  document.removeEventListener('keydown', onDocumentKeydownError, true);
  document.removeEventListener('click', onClickOverlayError);
}

const showErrorMessage = () => {
  document.body.append(errorWindow);
  errorBtn.addEventListener('click', closeErrorMessageWindow);
  document.addEventListener('keydown', onDocumentKeydownError, true);
  document.addEventListener('click', onClickOverlayError);
};

const onDocumentKeydownSuccess = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
    closeSuccessMessageWindow();
  }
};

const onClickOverlaySuccess = (evt) => {
  if (evt.target === successInner || successInner.contains(evt.target)) {
    return;
  }
  closeSuccessMessageWindow();
};

function closeSuccessMessageWindow() {
  successWindow.remove();
  successBtn.removeEventListener('click', closeSuccessMessageWindow);
  document.removeEventListener('keydown', onDocumentKeydownSuccess, true);
  document.removeEventListener('click', onClickOverlaySuccess);
}

const showSuccessMessage = () => {
  document.body.append(successWindow);
  successBtn.addEventListener('click', closeSuccessMessageWindow);
  document.addEventListener('keydown', onDocumentKeydownSuccess, true);
  document.addEventListener('click', onClickOverlaySuccess);
};

export { showErrorMessage, showSuccessMessage };
