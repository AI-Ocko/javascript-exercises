const findTheOldest = function (people) {
  const getAge = function (person) {
    const currentYear = new Date().getFullYear();
    const deathYear = person.yearOfDeath || currentYear;
    return deathYear - person.yearOfBirth;
  };
  return people.reduce((oldest, current) => {
    const oldestAge = getAge(oldest);
    const currentAge = getAge(current);
    return currentAge > oldestAge ? current : oldest;
  });
};


// Do not edit below this line
module.exports = findTheOldest;
