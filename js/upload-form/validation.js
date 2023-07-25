import { form } from './form-elements.js';

const hashtagRegex = /^#(?![\s])[a-z0-9а-яё]{2,19}$/i;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

let hashtagsError = '';

const validateHashtags = (value) => {
  const hashtags = value.trim().toLocaleLowerCase().split(' ');

  // Проверка на количество хэштегов
  if (hashtags.length > 5) {
    hashtagsError = 'Превышено количество хэш-тегов';
    return false;
  }

  // Проверка каждого хэштега по регулярному выражению
  /* for (let i = 0; i < hashtags.length; i++) {
    if (!hashtagRegex.test(hashtags[i])) {
      hashtagsError = 'Введен невалидный хэш-тег';
      return false;
    }
  } */

  hashtags.every((hashtag) => {
    if (!hashtagRegex.test(hashtag)) {
      hashtagsError = 'Введен невалидный хэш-тег';
      return false;
    }
  });

  // Проверка на уникальность хэштегов
  const uniqueHashtags = new Set(hashtags);
  if (uniqueHashtags.size !== hashtags.length) {
    hashtagsError = 'Хэш-теги повторяются';
    return false;
  }

  return true;
};

pristine.addValidator(form.hashtags, validateHashtags, () => hashtagsError);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    // Выполнять отправку формы
    form.submit();
  }
});
