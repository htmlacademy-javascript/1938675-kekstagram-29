import { renderPhotos, clearPhotos } from '../thumbnails.js';
import { sortRandom, debounce } from '../util.js';

const TIMEOUT = 500;
const PICTURES_COUNT = 10;
const WRAPPER_CLASS = 'img-filters';
const BUTTON_CLASS = `${WRAPPER_CLASS}__button`;
const ACTIVE_BUTTON_CLASS = `${BUTTON_CLASS}--active`;

const filtersWrapper = document.querySelector(`.${WRAPPER_CLASS}`);
const filterBtn = document.querySelectorAll(`.${BUTTON_CLASS}`);

const [defaultBtn, RandomBtn, DiscussedBtn] = filterBtn;
let activeBtn = defaultBtn;

const isButton = (target) => target.classList.contains(BUTTON_CLASS);

let photos = [];

const sortPhotos = () => {
  if(activeBtn === RandomBtn) {
    return photos.slice().sort(sortRandom).slice(0, PICTURES_COUNT);
  }

  if(activeBtn === DiscussedBtn) {
    return photos.slice().sort((a, b) => b.comments.length - a.comments.length);
  }

  return photos;
};

const debaunceThumbnailsRender = debounce(() => {
  clearPhotos();
  renderPhotos(sortPhotos());
}, TIMEOUT);

filtersWrapper.addEventListener('click', (evt) => {
  const target = evt.target;

  if(!isButton(target) || activeBtn === target) {
    return;
  }

  activeBtn.classList.remove(ACTIVE_BUTTON_CLASS);
  target.classList.add(ACTIVE_BUTTON_CLASS);
  activeBtn = target;

  debaunceThumbnailsRender();
});

const setFilters = (receivedPhotos) => {
  photos = receivedPhotos;
  filtersWrapper.classList.remove('img-filters--inactive');
  renderPhotos(receivedPhotos);
};

export { setFilters };
