import { form, imgPreview } from './form-elements.js';

const Default = {
  MIN: 25,
  MAX: 100,
  STEP: 25
};

const scaleButtonSmaller = document.querySelector('.scale__control--smaller');
const scaleButtonBigger = document.querySelector('.scale__control--bigger');

const getScale = () => parseInt(form.scale.value, 10);
const setScale = (value) => {
  imgPreview.style.transform = `scale(${value / 100})`;
  form.scale.value = `${value}%`;
};

scaleButtonSmaller.addEventListener('click', () => {
  const scaleCurrent = getScale();

  if(scaleCurrent <= Default.MIN) {
    return;
  }

  setScale(scaleCurrent - Default.STEP);
});

scaleButtonBigger.addEventListener('click', () => {
  const scaleCurrent = getScale();

  if(scaleCurrent >= Default.MAX) {
    return;
  }

  setScale(scaleCurrent + Default.STEP);
});

export const resetScale = () => imgPreview.style.removeProperty('transform');
