const OBJECT_PHOTO_COUNT = 25; // кол-во объектов фото

const PHOTO_DESCRIPTIONS = [
  'Мистический закат над горизонтом, окрашенный в огненные оттенки.',
  'Искрящийся водопад, льющийся среди пышной тропической растительности.',
  'Величественная горная вершина, покрытая пушистыми снежными шапками.',
  'Полярное сияние, танцующее в небе, озаряя заснеженные ландшафты.',
  'Волнующий бурями океан, где смешиваются небо и вода.'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const AUTHOR_NAMES = [
  'Иван',
  'Елена',
  'Константин',
  'Ольга',
  'Петр',
  'Васька'
];

// Функция для получения рандомного целого цисла из диапазона
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// Функция получения рандомного объекта из массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Функция для создания объекта—комментария
const createComments = () => ({
  id: Math.floor(Math.random() * 100),
  avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(AUTHOR_NAMES)
});

// Функция для генерации рандомного неповторяющегося целого цисла
const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    previousValues.includes(currentValue);
    if (previousValues.length >= (max - min + 1)) {
      console.error(`Перебраны все числа из диапазона от ${min} до ${max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

// Генераторы случайных неповторяющихся чисел из заданного диапазона для id/url и количества комментариев
const generatePhotoId = createRandomIdFromRangeGenerator(1,25);
const generateCommentsCount = createRandomIdFromRangeGenerator(0,30);

// Функция создания одного объекта-фото
const createPhotoInfo = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoId()}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(15,200),
  comments: Array.from({length: generateCommentsCount()}, createComments)
});

// Массив из 25 объектов-фото
const photoArray = Array.from({length: OBJECT_PHOTO_COUNT}, createPhotoInfo);
