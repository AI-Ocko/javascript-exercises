const sumAll = function(num1, num2) {
  let array = [];
  let result = 0;
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR"
  }
  // check if number is negative
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  // determine how to order the array based on input
  else if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
      array.push(i);
    }
  }
  else if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      array.push(i);
    }
  }
  // if something other than a number is input
  else {
    return "ERROR";
  }
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

// console.log(sumAll(1, 4))
// console.log(sumAll(4, 1))
// console.log(sumAll("text", 4))

// Do not edit below this line
module.exports = sumAll;
