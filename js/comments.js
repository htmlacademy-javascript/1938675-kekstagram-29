import { renderPack } from './util.js';

const COMMENTS_PACK_AMOUNT = 5;

const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');

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

  /**обрезает массив комментариев до 5*/
  const commentsPack = comments.slice(startOfSlice, endOfSlice);

  /**отрисовывает пачку комментов*/
  renderPack(commentsPack, commentsList, createComment);

  /**записывает кол-во отображаемых комментов в shownComments*/
  shownComments += commentsPack.length;

  /**обновляет данные для счетчика комментариев*/
  commentsCount.textContent = `${shownComments} из ${comments.length} комментариев`;

  /**прописывает условие, при котором кноппку "Загрузить еще" показывать или нет*/
  if(shownComments >= comments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const renderComments = (comments) => {
  commentsList.innerHTML = '';
  const renderCommentSlice = createSliceRenderer(comments);
  renderCommentSlice();
  onLoadMoreClick = renderCommentSlice;

  commentsLoader.addEventListener('click', onLoadMoreClick);
};

const clearComments = () => {
  shownComments = 0;
  commentsLoader.removeEventListener('click', onLoadMoreClick);
};

export {renderComments, clearComments};
