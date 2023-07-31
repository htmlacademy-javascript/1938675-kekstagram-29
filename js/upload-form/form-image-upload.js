import { form, wrapper, imgPreview, effectPreviews } from './form-elements.js';
import { isEscapeKey } from '../util.js';
import { resetEffects } from './effects.js';
import { resetScale } from './scale.js';
import { pristine } from './validation.js';


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

form.addEventListener('reset', () => {
  wrapper.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetEffects();
  resetScale();
  pristine.reset();
});

export { closeForm };
