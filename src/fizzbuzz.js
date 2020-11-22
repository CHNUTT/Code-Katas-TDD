function fizzbuzz(number) {
  if (number < 0) return;

  var word = new Array();
  var isDivisibled = false;

  if (number % 3 === 0) {
    word.push('Fizz');
    isDivisibled = true;
  }

  if (number % 5 === 0) {
    word.push('Buzz');
    isDivisibled = true;
  }

  return isDivisibled ? word.join('') : number;
}

module.exports = fizzbuzz;
