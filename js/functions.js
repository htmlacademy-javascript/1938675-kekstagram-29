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

/**Переводит сроку со временем в количество минут.*/
const getMinutesNumberFromTimeString = (time) => {
  const SplitToHoursAndMinutes = time.split(':');
  const numberOfMinutes = Number(SplitToHoursAndMinutes[0]) * 60 + Number(SplitToHoursAndMinutes[1]);
  return numberOfMinutes;
};

/**Проверяет, выходит или нет встреча за рамки трудового дня.*/
const checkMeetingPartOfWorkday = (startOfWorkday, endOfWorkday, startOfMeeting, durationOfMeeting) => {
  const startOfWorkdayToMinutes = getMinutesNumberFromTimeString(startOfWorkday);
  const endOfWorkdayToMinutes = getMinutesNumberFromTimeString(endOfWorkday);
  const startOfMeetingToMinutes = getMinutesNumberFromTimeString(startOfMeeting);

  const isMeetingPartOfWorkday = !!(startOfMeetingToMinutes >= startOfWorkdayToMinutes && (startOfMeetingToMinutes + durationOfMeeting) <= endOfWorkdayToMinutes);

  return isMeetingPartOfWorkday;
};

checkMeetingPartOfWorkday();
