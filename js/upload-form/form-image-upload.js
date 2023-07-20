import { form, wrapper } from './form-elements.js';
import { isEscapeKey } from '../util.js';

const imgPreview = document.querySelector('.img-upload__preview img');
const effectPreviews = document.querySelectorAll('.effects__preview');
const hashtagRegex = /^#(?![\s])[a-z0-9а-яё]{2,19}$/i;

const closeForm = () => form.reset();

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !form.hashtags.contains(document.activeElement) && !form.description.contains(document.activeElement)) {
    evt.preventDefault();
    closeForm();
  }
};

/**открывает попап с формой редактирования после загрузки фото */
const onChangeimgUploadInput = (evt) => {
  wrapper.classList.remove('hidden');
  document.body.classList.add('modal-open');

  const currFiles = evt.target.files;
  if(currFiles.length > 0) {
    const src = URL.createObjectURL(currFiles[0]);
    imgPreview.src = src;

    const changePreviewImage = (element) => {
      element.style.backgroundImage = `url('${src}')`;
    };
    effectPreviews.forEach(changePreviewImage);
  }

  document.addEventListener('keydown', onDocumentKeydown);
};

form.filename.addEventListener('change', onChangeimgUploadInput);

form.cancelButton.addEventListener('click', () => {
  wrapper.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

form.addEventListener('reset', () => {
  wrapper.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

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
  for (let i = 0; i < hashtags.length; i++) {
    if (!hashtagRegex.test(hashtags[i])) {
      hashtagsError = 'Введен невалидный хэш-тег';
      return false;
    }
  }

  // Проверка на уникальность хэштегов
  const uniqueHashtags = Array.from(new Set(hashtags));
  if (uniqueHashtags.length !== hashtags.length) {
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
