import { form } from './form-elements.js';

const valueElement = document.querySelectorAll('.effect-level__value');//уровень применения фильтра
const sliderElement = document.querySelector('.effect-level__slider');//инпут-позунок
const radioElement = document.querySelectorAll('.effects__radio');//переключатель фильтров (радиокнопки)

const effect = {
  chrome: {
    rangeMin: 0,
    rangeMax: 1,
    step: 0.1
  },

  sepia: {
    rangeMin: 0,
    rangeMax: 1,
    step: 0.1
  },

  marvin: {
    rangeMin: 0,
    rangeMax: 100,
    step: 1
  },

  phobos: {
    rangeMin: 0,
    rangeMax: 3,
    step: 0.1
  },

  heat: {
    rangeMin: 1,
    rangeMax: 3,
    step: 0.1
  }
};

/** создаем базовые настройки для слайдера */
noUiSlider.create(sliderElement, {
  range: {
    'min': [0],
    'max': [1],
  },
  start: [0],
  step: 0.1,
  connect: 'lower',
});

/** подписываемся на изменения внутри слайдера */
sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();//записываем значение слайдера в значение текстового инпута
});

/** подписываемся на изменение в чекбоксе */
/* radioElements.addEventListener('change', (evt) => {
  if (evt.target.checked) {//если чекнут, то меняем на такие настройки
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 10
      },
      start: 8,
      step: 0.1
    });
  } else { //если нет - то возвращаем такие настройки
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1
    });
    sliderElement.noUiSlider.set(80);//то же самое, что start: 8,
  }
}); */

const setEffect = (item) => {
  item.addEventListener('click', (evt) => {
    const effectName = evt.target.value;
    const rangeMin = effect + '.' + effectName;
    const rangeMax = effect + '.' + effectName;
    const step = effect + '.' + effectName;

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: rangeMin,
        max: rangeMax
      },
      step: step
    });
  });
};

radioElement.forEach(setEffect);
