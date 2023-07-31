import './upload-form/scale.js';
import './upload-form/effects.js';
import { renderPack } from './util.js';
import { pictureList, createPictureMarkUp } from './thumbnails.js';
import { setUserFormSubmit } from './upload-form/validation.js';
import { closeForm } from './upload-form/form-image-upload.js';
import { showFilters } from './upload-form/filters.js';

fetch('https://29.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    renderPack(photos, pictureList, createPictureMarkUp);
  })
  .then(showFilters());

setUserFormSubmit(closeForm);
