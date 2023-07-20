import { form, imgPreview } from './form-elements.js';

const Default = {
  MIN: 25,
  MAX: 100,
  STEP: 25
};

const scaleButtonSmaller = document.querySelector('.scale__control--smaller');//кнопка уменьшить масштаб
const scaleButtonBigger = document.querySelector('.scale__control--bigger');//кнопка увеличить масштаб

scaleButtonSmaller.addEventListener('click', () => {
  const scaleCurrent = parseInt(form.scale.value, 10);

  if(scaleCurrent <= Default.MIN) {
    return;
  }

  const newScale = scaleCurrent - Default.STEP;
  imgPreview.style.transform = `scale(${newScale / 100})`;
  form.scale.value = `${newScale}%`;
});

scaleButtonBigger.addEventListener('click', () => {
  const scaleCurrent = parseInt(form.scale.value, 10);

  if(scaleCurrent >= Default.MAX) {
    return;
  }

  const newScale = scaleCurrent + Default.STEP;
  imgPreview.style.transform = `scale(${newScale / 100})`;
  form.scale.value = `${newScale}%`;
});
