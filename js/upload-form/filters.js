import { renderPhotos, clearPhotos } from '../thumbnails.js';
import { sortRandom, debounce } from '../util.js';

const TIMEOUT = 500;
const PICTURES_COUNT = 10;

const filters = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const filterDefaultBtn = document.getElementById('filter-default');
const filterRandomBtn = document.getElementById('filter-random');
const filterDiscussedBtn = document.getElementById('filter-discussed');

const compareFunction = (a, b) => b.comments.length - a.comments.length;

const showFilters = () => filters.classList.remove('img-filters--inactive');

const filterPhotos = (photos, filterBtn) => {
  if(filterBtn === filterDefaultBtn) {
    return photos;
  } else if(filterBtn === filterRandomBtn) {
    return photos.slice().sort(sortRandom).slice(0, PICTURES_COUNT);
  } else if(filterBtn === filterDiscussedBtn) {
    return photos.slice().sort(compareFunction);
  }
};

const debaunceThumbnailsRender = (photos, filterBtn) => {
  debounce(() => {
    clearPhotos();
    renderPhotos(filterPhotos(photos, filterBtn));
  }, TIMEOUT);
};

const onFilterButtonClick = (event, photos) => {
  const filterBtn = event.target;
  const activeButton = document.querySelector('.img-filters__button--active');
  activeButton.classList.remove('img-filters__button--active');
  filterBtn.classList.add('img-filters__button--active');
  debaunceThumbnailsRender(photos, filterBtn);
};

const setFilters = (photos) => {
  filterForm.addEventListener('click', (event) => {
    onFilterButtonClick(event, photos);
  });
};
export { showFilters, setFilters };
