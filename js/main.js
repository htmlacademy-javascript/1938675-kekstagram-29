import './upload-form/form-image-upload.js';
import './upload-form/scale.js';
import './upload-form/effects.js';
import './upload-form/validation.js';
import { renderPack } from './util.js';
import { pictureList, createPictureMarkUp } from './thumbnails.js';

fetch('https://29.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    renderPack(photos, pictureList, createPictureMarkUp);
  });
