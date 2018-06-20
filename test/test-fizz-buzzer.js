// import chai, declare expect variable
const expect = require('chai').expect;

// import fizBuzzer file/function
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our fizzBuzzer num function
describe('fizzBuzzer', function() {
  // test the normal case
  it('should return fizz-buzz, fizz, or buzz depending on divisor', function() {
    const normalCases = [
      {input: 15, expected: "fizz-buzz"},
      {input: 30, expected: "fizz-buzz"},
      {input: 5, expected: "buzz"},
      {input: 10, expected: "buzz"},
      {input: 3, expected: "fizz"},
      {input: 6, expected: "fizz"},
      {input: 4, expected: 4},
      {input: 11, expected: 11}
    ];
    // test to produce the expected value
    normalCases.forEach(function(testCase) {
      const answer = fizzBuzzer(testCase.input)
      expect(answer).to.equal(testCase.expected);
    });
  });

  // test the corner case
  it('should raise error if arguments are not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = ['a', false];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0]);
      }).to.throw(Error);
    });
  });

})
