const isEscapeKey = (evt) => evt.key === 'Escape';

/** Функция для рендера пачки чего-либо */
const renderPack = (items, list, create) => {
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const element = create(item);
    fragment.append(element);
  });

  list.append(fragment);
};

const sortRandom = () => Math.random() - 0.5;

/** устраняет дребезг */
function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export { isEscapeKey, renderPack, sortRandom, debounce};
