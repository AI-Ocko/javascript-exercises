const convertToCelsius = function(input) {
  let convertedNumber = ((input - 32) * (5 / 9));
  if (convertedNumber === 0) {
    return 0;
  }
  else {
    return +Number.parseFloat(convertedNumber).toFixed(1)
  }
};

const convertToFahrenheit = function(input) {
  let convertedNumber = (input * (9 / 5) + 32);
  return +Number.parseFloat(convertedNumber).toFixed(1)
};

// console.log(convertToCelsius(32))
// console.log(convertToCelsius(100))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
