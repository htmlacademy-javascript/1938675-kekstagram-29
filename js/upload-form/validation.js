import { form, submitButton } from './form-elements.js';
import { showErrorMessage, showSuccessMessage } from './success-error-messages.js';
import { sendData } from '../api.js';

const hashtagRegex = /^#(?![\s])[a-z0-9а-яё]{1,19}$/i;

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

export const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

let hashtagsError = '';

const validateHashtags = (value) => {
  if (value.trim() === '') {
    hashtagsError = '';
    return true;
  }

  const hashtags = value.trim().toLowerCase().split(' ');

  if (hashtags.length > 5) {
    hashtagsError = 'Превышено количество хэш-тегов';
    return false;
  }

  const uniqueHashtags = new Set(hashtags);
  if (uniqueHashtags.size !== hashtags.length) {
    hashtagsError = 'Хэш-теги повторяются';
    return false;
  }

  return hashtags.every((hashtag) => {
    if (!hashtagRegex.test(hashtag)) {
      hashtagsError = 'Введен невалидный хэш-тег';
      return false;
    }

    return true;
  });
};

pristine.addValidator(form.hashtags, validateHashtags, () => hashtagsError);


const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(() => {
          onSuccess();
          showSuccessMessage();
        })
        .catch(() => {
          showErrorMessage();
        })
        .finally(unblockSubmitButton);
    }
  });
};

export {setUserFormSubmit};
