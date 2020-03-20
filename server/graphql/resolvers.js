const {
  getCarData,
  getNextAvailableId,
  saveCarData
} = require("../routes/cars");

module.exports = {
  Query: {
    cars: () => {
      const cars = getCarData();
      return cars;
    },
    car: (parent, args) => {
      const car = getCarData().find(c => c.car_id === args.id);
      return car;
    }
  },
  Mutation: {
    saveCar: (parent, args) => {
      const cars = getCarData();
      const nextId = getNextAvailableId(cars);
      cars.push({ car_id: nextId, ...args.carEdit });
      saveCarData(cars);
      return true;
    }
  }
};
