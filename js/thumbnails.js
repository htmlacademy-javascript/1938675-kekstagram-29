import {getMockedPhotos} from './data.js';
import {openBigPicture} from './full-photo.js';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictures = getMockedPhotos();

const createPictureMarkUp = ({description, comments, likes, url}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  const imageElement = pictureElement.querySelector('.picture__img');

  imageElement.src = url;
  imageElement.alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  return pictureElement;
};

const pictureListFragment = document.createDocumentFragment();

const renderPicture = ((photo) => {
  const pictureElement = createPictureMarkUp(photo);
  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture(photo);
  });

  pictureListFragment.appendChild(pictureElement);
});

pictures.forEach(renderPicture);
pictureList.appendChild(pictureListFragment);

export {renderPicture};
