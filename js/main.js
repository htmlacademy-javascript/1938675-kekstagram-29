import './upload-form/scale.js';
import './upload-form/effects.js';
import { renderPhotos } from './thumbnails.js';
import { setUserFormSubmit } from './upload-form/validation.js';
import { closeForm } from './upload-form/form-image-upload.js';
import { setFilters } from './upload-form/filters.js';

fetch('https://29.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    renderPhotos(photos);
    setFilters(photos);
  });

setUserFormSubmit(closeForm);
