import './render-pictures.js';
import {isEscapeKey} from './util.js';

const pictureWrapper = document.querySelector('.big-picture');//окно полноэкранного показа изображения
const closeButton = document.querySelector('.big-picture__cancel');//крестик для закрытия окна
const socialCommentCount = document.querySelector('.social__comment-count');//блок счётчика комментариев
const commentsLoader = document.querySelector('.comments-loader');//загрузка новых комментариев
const pictureImgElement = document.querySelector('.big-picture__img img');
const likesCountElement = document.querySelector('.likes-count');
const commentsCountElement = document.querySelector('.comments-count');
const pictureDescriptionElement = document.querySelector('.social__caption');

const openBigPicture = (/*{url, description, likes, comments}*/) => {
  pictureWrapper.classList.remove('hidden');
  document.body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  //pictureImgElement.src = url;
  //commentsCountElement.textContent = comments;
  //likesCountElement.textContent = likes;
  //pictureDescriptionElement.alt = description;

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeBigPicture();
    }
  });
};

function closeBigPicture () {
  pictureWrapper.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown',isEscapeKey);
}

closeButton.addEventListener('click', () => closeBigPicture());

/** отрисовывает данные о конкретной фотографии */
//url = src внутри .big-picture__img.
//likes = текстовое содержание .likes-count.
//comments = текстовое содержание .comments-count.
//description = строка в .social__caption.

/*Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:
<li class="social__comment">
    <img
        class="social__picture"
        src="{{аватар}}"
        alt="{{имя комментатора}}"
        width="35" height="35">
    <p class="social__text">{{текст комментария}}</p>
</li>*/

export {openBigPicture};
