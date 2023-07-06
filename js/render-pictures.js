import {getMockedPhotos} from './data.js';
import {openBigPicture} from './full-photo.js';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictures = getMockedPhotos();

const pictureListFragment = document.createDocumentFragment();

const onPictureClick = (evt) => {
  evt.preventDefault();
  const link = evt.currentTarget;
  const id = link.dataset.id;
  const foundPhoto = pictures.find((picture) => picture.id === id);

  if(foundPhoto) {
    return openBigPicture(foundPhoto);
  }
};

pictures.forEach(({description, comments, likes, url}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  const imageElement = pictureElement.querySelector('.picture__img');
  imageElement.src = url;
  imageElement.alt = description;

  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureListFragment.appendChild(pictureElement);

});

pictureList.appendChild(pictureListFragment);

export {onPictureClick};
