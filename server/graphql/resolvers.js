const { getCarData } = require("../routes/cars");

const resolvers = {
  Query: {
    cars: () => {
      const cars = getCarData();
      return cars;
    },
  },
};

module.exports.resolvers = resolvers;