// Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее
function checkStringLength(string,length) {
  return string.length <= length;
}

// Функция для проверки, является ли строка палиндромом.
function checkPalindrome(string) {
  const stringWithoutSpaces = string.replaceAll(' ','');
  const newString = stringWithoutSpaces.toLowerCase();
  let stringMirror = '';

  for (let i = newString.length - 1 ; i >= 0 ; i--) {
    const letter = newString[i];
    stringMirror += letter;
  }

  return newString === stringMirror;
}
//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN
