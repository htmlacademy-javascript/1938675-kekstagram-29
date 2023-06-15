// Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее
const checkStringLength = (string,length) => string.length <= length;

checkStringLength('Привет', 60);

// Функция для проверки, является ли строка палиндромом.
const checkPalindrome = (string) => {
  const newString = string.replaceAll(' ','').toLowerCase();
  let stringMirror = '';

  for (let i = newString.length - 1 ; i >= 0 ; i--) {
    const letter = newString[i];
    stringMirror += letter;
  }

  return newString === stringMirror;
};

checkPalindrome('Мама мыла Милу мылом');

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN. Предусмотрите случай, когда вместо строки приходит число.
/*function getNumber(string) {
  let number = '';

  for(let i = 0 ; i < string.length ; i++) {
    const NumberIsNan = Number.isNaN(parseInt(string[i],10));

    const NumberIsNan===true ? number += string[i] : number = '';
  }
}*/

console.log('Ожидаю 2023 — получаю ' + getNumber('2023 год'));
//console.log('Ожидаю 2022 — получаю ' + getNumber('ECMAScript 2022'));
//console.log('Ожидаю 105 — получаю ' + getNumber('1 кефир, 0.5 батона'));
//console.log('Ожидаю 7 — получаю ' + getNumber('агент 007'));
//console.log('Ожидаю NaN — получаю ' + getNumber('а я томат'));
