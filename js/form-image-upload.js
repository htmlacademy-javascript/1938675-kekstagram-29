const formContainer = document.querySelector('.img-upload__overlay');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgPreview = document.querySelector('.img-upload__preview img');
const effectPreviews = document.querySelectorAll('.effects__preview');

/**открывает попап с формой после загрузки фото */
imgUploadInput.addEventListener('change', (evt) => {
  formContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');

  const currFiles = evt.target.files;
  if(currFiles.length > 0){
    const src = URL.createObjectURL(currFiles[0])
    imgPreview.src = src;

    const changePreviewImage = (element) => {
      element.style.backgroundImage = `url('${src}')`;
    };
    effectPreviews.forEach(changePreviewImage);
  }
});

/**После выбора изображения пользователем с помощью стандартного контрола загрузки файла .img-upload__input, нужно подставить его в форму редактирования вместо тестового изображения в блок предварительного просмотра и в превью эффектов. */

