import { renderPack } from './util.js';

const COMMENTS_PACK_AMOUNT = 5;

const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');
const commentsRendered = commentsCount.querySelector('.comments-rendered');
const allComments = commentsCount.querySelector('.comments-count');

let shownComments = 0;

const createComment = ({avatar, message, name}) => {
  const commentElement = commentTemplate.cloneNode(true);
  const commentAvatar = commentElement.querySelector('.social__picture');
  const commentText = commentElement.querySelector('.social__text');

  commentAvatar.src = avatar;
  commentAvatar.alt = name;
  commentText.textContent = message;

  return commentElement;
};

let onLoadMoreClick = null;

const createSliceRenderer = (comments) => () => {
  const startOfSlice = shownComments;
  const endOfSlice = shownComments + COMMENTS_PACK_AMOUNT;

  const commentsPack = comments.slice(startOfSlice, endOfSlice);

  renderPack(commentsPack, commentsList, createComment);

  shownComments += commentsPack.length;

  commentsRendered.textContent = shownComments;
  allComments.textContent = comments.length;

  if(shownComments >= comments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const renderComments = (comments) => {
  commentsList.innerHTML = '';
  onLoadMoreClick = createSliceRenderer(comments);
  onLoadMoreClick();

  commentsLoader.addEventListener('click', onLoadMoreClick);
};

const clearComments = () => {
  shownComments = 0;
  commentsLoader.removeEventListener('click', onLoadMoreClick);
};

export {renderComments, clearComments};
