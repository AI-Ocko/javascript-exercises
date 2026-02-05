const fibonacci = function (number) {
  let n = Number(number);

  if (n < 0) {
    return "OOPS";

  } else if (n == 0) {
    return 0;

  } else if (n == 1) {
    return 1;

  } else if (n == 2) {
    return 1;

  } else {
    let firstNum = 1;
    let secondNum = 1;
    let result = firstNum + secondNum;

    for (let i = 3; i < n; i++) {
      secondNum = firstNum;
      firstNum = result;
      result = firstNum + secondNum;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = fibonacci;
