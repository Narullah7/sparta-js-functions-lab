function addTwo(n1 , n2) {
  return n1 + n2
}

function addThree(n1, n2, n3) {
  return n1 + n2 + n3;
}

function multiplyTwo(n1,n2) {
  return n1 * n2;
}

function increaseByPercentage(total, percentage) {
  return total + (total * (percentage/100));
}

function reverseWord(word) {
  var reverse = word.split("").reverse().join("");
  return reverse;
}

function celciusToFahrenheit(celcius) {
  var CtF = celcius * (9/5) +32;
  return CtF;
}

function fahrenheitToCelcius(fahr) {
  var FtC = (fahr -32) * (5/9);
  return FtC;
}

// BONUS QUESTION
function stripVowels(word) {
  var answer = word.replace(/[aeiou]/ig, '');
  return answer;
}

runTests();
