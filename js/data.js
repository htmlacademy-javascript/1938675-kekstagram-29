import {getRandomInteger, getRandomArrayElement, createRandomIdFromRangeGenerator} from './util.js';

/** кол-во объектов фото */
const OBJECT_PHOTO_COUNT = 25;

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

/** Функция для создания объекта—комментария */
const createComments = () => ({
  id: Math.floor(Math.random() * 100),
  avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(AUTHOR_NAMES)
});

/** Генераторы случайных неповторяющихся чисел из заданного диапазона для id/url и количества комментариев */
const generatePhotoId = createRandomIdFromRangeGenerator(1,OBJECT_PHOTO_COUNT);
const generatePhotoUrlNumber = createRandomIdFromRangeGenerator(1,OBJECT_PHOTO_COUNT);
const generateCommentsCount = createRandomIdFromRangeGenerator(0,30);

/** Функция создания одного объекта-фото */
const createPhotoInfo = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrlNumber()}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(15,200),
  comments: Array.from({length: generateCommentsCount()}, createComments)
});

/**Создаёт массив из 25 объектов-фото */
const getMockedPhotos = () => Array.from({length: OBJECT_PHOTO_COUNT}, createPhotoInfo);

export {getMockedPhotos};
