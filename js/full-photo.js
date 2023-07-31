import { isEscapeKey } from './util.js';
import { renderComments, clearComments } from './comments.js';

const pictureWrapper = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const pictureImgElement = document.querySelector('.big-picture__img img');
const likesCountElement = document.querySelector('.likes-count');
const pictureDescriptionElement = document.querySelector('.social__caption');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = ({url, description, likes, comments}) => {
  pictureWrapper.classList.remove('hidden');
  document.body.classList.add('modal-open');

  pictureImgElement.src = url;
  likesCountElement.textContent = likes;
  pictureDescriptionElement.alt = description;

  renderComments(comments);

  document.addEventListener('keydown', onDocumentKeydown);
};

closeButton.addEventListener('click', () => closeBigPicture());

function closeBigPicture() {
  pictureWrapper.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  clearComments();
}

export { openBigPicture };
