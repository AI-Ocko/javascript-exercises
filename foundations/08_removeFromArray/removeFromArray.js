const removeFromArray = function (array, ...num) {
  let result = array.filter((item) => {
    return !num.includes(item);
  })
  return result;
};

console.log(removeFromArray([1, 2, 3, 4], 3))

// Do not edit below this line
module.exports = removeFromArray;
