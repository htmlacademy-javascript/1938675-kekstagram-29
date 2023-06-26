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
const getNumberFromString = (string) => {
  let number = '';

  for(let i = 0 ; i < string.length ; i++) {
    const characterIsNan = Number.isNaN(parseInt(string[i],10));
    number = characterIsNan ? number : number + string[i];
  }

  return parseInt(number,10);
};

getNumberFromString('2023 год');

/**возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.*/

const isMeetingPartOfWorkday = (startOfWorkday, endOfWorkday, startOfMeeting, durationOfMeeting) => {
  //Перевести строковые данные в минуты = разделить строку методом split по двоеточию => первый эл-т массива*60+второй эл-т массива
  const startOfWorkdaySplitToHoursAndMinutes = startOfWorkday.split(':'); //надо перевести в функцию и вызвать для каждого аргумента
  const startOfWorkdayMinutes = Number(startOfWorkdaySplitToHoursAndMinutes[0])*60 + Number(startOfWorkdaySplitToHoursAndMinutes[1]);
  //Проверить, что начало встречи не раньше начала рабочего дня и (начало встречи + длина встречи) не больше конца рабочего дня
}

console.log("Ожидаю true, а получаю - " + isMeetingPartOfWorkday('08:00', '17:30', '14:00', 90));
console.log("Ожидаю true, а получаю - " + isMeetingPartOfWorkday('8:0', '10:0', '8:0', 120));
console.log("Ожидаю false, а получаю - " + isMeetingPartOfWorkday('08:00', '14:30', '14:00', 90));
console.log("Ожидаю false, а получаю - " + isMeetingPartOfWorkday('14:00', '17:30', '08:0', 90));
console.log("Ожидаю false, а получаю - " + isMeetingPartOfWorkday('8:00', '17:30', '08:00', 900));
