const ALERT_SHOW_TIME = 5000;

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

/** Получет рандомное число от -0.5 до 0.5 для сортировки массива */
const sortRandom = () => Math.random() - 0.5;

/** Устраняет дребезг */
function debounce (callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

/** Показывает сообщение об ошибке загрузки данных */
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { isEscapeKey, renderPack, sortRandom, debounce, showAlert};
