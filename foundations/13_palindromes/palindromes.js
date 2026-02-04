const palindromes = function (str) {
  const ordered = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  return ordered == ordered.split("").reverse().join("");

};

// Do not edit below this line
module.exports = palindromes;
