import { isEscapeKey } from './util.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const formContainer = document.querySelector('.img-upload__overlay');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgPreview = document.querySelector('.img-upload__preview img');
const effectPreviews = document.querySelectorAll('.effects__preview');
const popupCloseElement = document.querySelector('.img-upload__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
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

function closeForm() {
  formContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgUploadInput.value = '';
}

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});
