const add = function(num1, num2) {
  // return num1 + num2;

};

const subtract = function(num1, num2) {
  return num1 - num2;

};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1);
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
