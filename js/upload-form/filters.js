import { renderPhotos } from '../thumbnails.js';
import { sortRandom } from '../util.js';

//const TIMEOUT = 500;
const PICTURES_COUNT = 10;

const filters = document.querySelector('.img-filters');
const filterDefault = document.getElementById('filter-default');
const filterRandom = document.getElementById('filter-random');
const filterDiscussed = document.getElementById('filter-discussed');

const removeThumbnails = (thumbnails) => thumbnails.forEach((thumbnail) => thumbnail.remove());

const compareFunction = (a, b) => b.comments.length - a.comments.length;

const showFilters = () => filters.classList.remove('img-filters--inactive');

const sortItemsByDiscussion = (items) => items.slice().sort(compareFunction);

const sortItemsRandom = (items) => items.slice().sort(sortRandom).slice(0, PICTURES_COUNT);

const setFilters = (photos) => {
  showFilters();

  filterDiscussed.addEventListener('click', () => {
    const thumbnails = document.querySelectorAll('.picture');
    removeThumbnails(thumbnails);
    renderPhotos(sortItemsByDiscussion(photos));
  });

  filterRandom.addEventListener('click', () => {
    const thumbnails = document.querySelectorAll('.picture');
    removeThumbnails(thumbnails);
    renderPhotos(sortItemsRandom(photos));
  });

  filterDefault.addEventListener('click', () => {
    const thumbnails = document.querySelectorAll('.picture');
    removeThumbnails(thumbnails);
    renderPhotos(photos);
  });
};

export { setFilters };
