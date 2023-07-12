/** Функция для получения рандомного целого цисла из диапазона */
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

/** Функция получения рандомного объекта из массива */
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

/** Функция для генерации рандомного неповторяющегося целого цисла */
const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    previousValues.includes(currentValue);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

/* const renderPack = (items, list, create) => {
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const element = create(item);
    fragment.append(element);
  });

  list.append(fragment);
}; */

export {getRandomInteger, getRandomArrayElement, createRandomIdFromRangeGenerator, isEscapeKey, /* renderPack */};
