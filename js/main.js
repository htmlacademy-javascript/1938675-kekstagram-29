import './upload-form/scale.js';
import './upload-form/effects.js';
import { renderPhotos } from './thumbnails.js';
import { setUserFormSubmit } from './upload-form/validation.js';
import { closeForm } from './upload-form/form-image-upload.js';
import { setFilters } from './upload-form/filters.js';
import { showAlert } from './util.js';
import { getData } from './api.js';

getData()
  .then((photos) => {
    renderPhotos(photos);
    setFilters(photos);
  })
  .catch(() => showAlert('Ошибка получения данных с сервера'));

setUserFormSubmit(closeForm);
