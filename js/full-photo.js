import {isEscapeKey} from './util.js';

const pictureWrapper = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const pictureImgElement = document.querySelector('.big-picture__img img');
const likesCountElement = document.querySelector('.likes-count');
const commentsCountElement = document.querySelector('.comments-count');
const pictureDescriptionElement = document.querySelector('.social__caption');
const commentsList = pictureWrapper.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');

const createComment = ({avatar, message, name}) => {
  const commentElement = commentTemplate.cloneNode(true);
  const commentAvatar = commentElement.querySelector('.social__picture');
  const commentText = commentElement.querySelector('.social__text');

  commentAvatar.src = avatar;
  commentAvatar.alt = name;
  commentText.textContent = message;

  return commentElement;
};

const renderComments = (comments) => {
  commentsList.innerHTML = '';
  const fragment = document.createDocumentFragment();
  comments.forEach((element) => {
    const comment = createComment(element);
    fragment.append(comment);
  });

  commentsList.append(fragment);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = ({url, description, likes, comments}) => {
  pictureWrapper.classList.remove('hidden');
  document.body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  pictureImgElement.src = url;
  commentsCountElement.textContent = comments;
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
}

export {openBigPicture};
