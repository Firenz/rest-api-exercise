const { getCarData, saveCarData } = require("../routes/cars");

module.exports = {
  Query: {
    cars: () => {
      const cars = getCarData();
      return cars;
    },
    car: (parent, args) => {
      const car = getCarData().find(c => c.car_id === args.id);
      return car;
    },
  },
  Mutation: {
    saveCar: (parent, args) => {
      saveCarData(args.CarEdit);
      return true;
    }
  }
};