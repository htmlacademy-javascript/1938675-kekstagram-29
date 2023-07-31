//import { isEscapeKey } from "../util";

const successTemplate = document.querySelector('#success').content.querySelector('.success');
//const successBtn = successWindow.querySelector('.success__button');

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
//const errorBtn = errorWindow.querySelector('.error__button');

const showErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  document.body.append(errorMessage);
};

const showSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  document.body.append(successMessage);
};

export { showErrorMessage, showSuccessMessage };
