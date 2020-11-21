const fizzbuzz = require('../src/fizzbuzz');
/**
 * Test
 * 1. only positive number
 * 2. if not devided by 3 or 5 print that number
 * 3. if devided by 3 only print Fizz
 * 4. if devided by 5 only print Buzz
 * 5. if devided by both 3 and 5 print FizzBuzz
 */
describe('fizzbuzz function', () => {
  it('should only receive a positive number as an input', () => {
    expect(fizzbuzz(-1)).toBeFalsy();
    expect(fizzbuzz(-10)).toBeFalsy();
    expect(fizzbuzz(1)).toBeTruthy();
    expect(fizzbuzz(0)).toBeTruthy();
  });
});
