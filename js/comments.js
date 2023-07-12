const COMMENTS_PACK_AMOUNT = 5;

const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');

let allCommentsRenderer = [];
let shownComments = 0;

const renderPack = (items, list, create) => {
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const comment = create(item);
    fragment.append(comment);
  });

  commentsList.append(fragment);
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

  //обрезает массив комментариев для показа до первых 5
  const commentsPack = comments.slice(startOfSlice, endOfSlice);

  //добавляет во фрагмент элементы первого пака коммментов
  renderPack(commentsPack, commentsList, createComment);

  //обновляет данные для счетчика комментариев
  commentsCount.textContent = `${commentsPack.length} из ${comments.length} комментариев`;

  //записывает кол-во комментов в первом паке в shownComments
  shownComments = commentsPack.length;

  //прописывает условие, при котором кноппку "Загрузить еще" показывать или нет
  if(commentsPack.length >= comments.length) {
    commentsLoader.classList.add('hidden');
  }
};


const renderComments = (comments) => {
  onLoadMoreClick(comments);

  //добавляет слушатель на кнопку "Загрузить еще" и логику добавления нового пака комментов
  commentsLoader.addEventListener('click', () => {
    onLoadMoreClick(comments);
  });
};

const clearComments = () => {
  commentsList.innerHTML = '';
};

export {renderComments, clearComments};
