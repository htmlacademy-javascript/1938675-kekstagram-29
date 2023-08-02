import { openBigPicture } from './full-photo.js';
import { renderPack } from './util.js';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictureMarkUp = (picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  const imageElement = pictureElement.querySelector('.picture__img');

  imageElement.src = picture.url;
  imageElement.alt = picture.description;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture(picture);
  });

  return pictureElement;
};

const renderPhotos = (photos) => renderPack(photos, pictureList, createPictureMarkUp);

const clearPhotos = () => pictureList.querySelectorAll('.picture').forEach((photo) => photo.remove());

export { pictureList, createPictureMarkUp, renderPhotos, clearPhotos };
