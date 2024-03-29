import { form, wrapper, imgPreview, effectPreviews } from './form-elements.js';
import { isEscapeKey } from '../util.js';
import { resetEffects } from './effects.js';
import { resetScale } from './scale.js';
import { resetValidation } from './validation.js';

const closeForm = () => form.reset();
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !form.hashtags.contains(document.activeElement) && !form.description.contains(document.activeElement)) {
    evt.preventDefault();
    closeForm();
  }
};

const onChangeImgUploadInput = (evt) => {
  wrapper.classList.remove('hidden');
  document.body.classList.add('modal-open');

  const file = evt.target.files;
  if(file.length > 0) {
    const currFile = file[0];
    const fileName = currFile.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    const src = URL.createObjectURL(currFile);
    if (matches) {
      imgPreview.src = src;
    }

    const changePreviewImage = (element) => {
      element.style.backgroundImage = `url('${src}')`;
    };
    effectPreviews.forEach(changePreviewImage);
  }

  document.addEventListener('keydown', onDocumentKeydown);
};

form.filename.addEventListener('change', onChangeImgUploadInput);

form.addEventListener('reset', () => {
  wrapper.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetEffects();
  resetScale();
  resetValidation();
});

export { closeForm };
