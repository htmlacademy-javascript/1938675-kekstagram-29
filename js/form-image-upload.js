import { isEscapeKey } from './util.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const formContainer = document.querySelector('.img-upload__overlay');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgPreview = document.querySelector('.img-upload__preview img');
const effectPreviews = document.querySelectorAll('.effects__preview');
const popupCloseElement = document.querySelector('.img-upload__cancel');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const hashtagRegex = /^#(?![\s])[a-z0-9а-яё]{2,19}$/i;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !hashtagField.contains(document.activeElement) && !commentField.contains(document.activeElement)) {
    evt.preventDefault();
    imgUploadForm.reset();
  }
};

/**открывает попап с формой редактирования после загрузки фото */
const onChangeimgUploadInput = (evt) => {
  formContainer.classList.remove('hidden');
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

const openForm = () => {
  imgUploadInput.addEventListener('change', onChangeimgUploadInput);
};

openForm();

popupCloseElement.addEventListener('click', () => {
  formContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

imgUploadForm.addEventListener('reset', () => {
  formContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

let hashtagsError = '';

const validateHashtags = (value) => {
  const hashtags = value.trim().split(' ');

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

pristine.addValidator(hashtagField, validateHashtags, () => hashtagsError);

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    // Выполнять отправку формы
    imgUploadForm.submit();
  }
});
