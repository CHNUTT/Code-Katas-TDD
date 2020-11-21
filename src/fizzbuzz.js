function fizzbuzz(number) {
  if (number < 0) return;
  if (number % 3 === 0) {
    return 'Fizz';
  }
  return 1;
}

module.exports = fizzbuzz;
