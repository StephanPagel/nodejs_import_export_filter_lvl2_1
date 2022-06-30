const highPopulation = (arr) => {
  return arr.filter((city) => {
    return city.population >= 100000;
  });
};

const lowPopulation = (arr) => {
  return arr.filter((city) => {
    return city.population < 100000;
  });
};

module.exports = {
  highPopulation,
  lowPopulation,
};
