const COMMENTS_PACK_AMOUNT = 5;

const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');

let shownComments = 0;

const renderPack = (items, list, create) => {
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const comment = create(item);
    fragment.append(comment);
  });

  list.append(fragment);
};

const createComment = ({avatar, message, name}) => {
  const commentElement = commentTemplate.cloneNode(true);
  const commentAvatar = commentElement.querySelector('.social__picture');
  const commentText = commentElement.querySelector('.social__text');

  commentAvatar.src = avatar;
  commentAvatar.alt = name;
  commentText.textContent = message;

  return commentElement;
};

const onLoadMoreClick = (comments) => {
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
  }
};


const renderComments = (comments) => {
  commentsList.innerHTML = '';

  onLoadMoreClick(comments);

  commentsLoader.addEventListener('click', () => {
    onLoadMoreClick(comments);
  });
};

const clearComments = () => {
  commentsList.innerHTML = '';
};

export {renderComments, clearComments};
