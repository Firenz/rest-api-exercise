const { GraphQLClient } = require("graphql-request");

const defaultPort = 3050;
const graphqlBaseUrl = `http://localhost:${defaultPort}/graphql`;

const graphqlClient = new GraphQLClient(graphqlBaseUrl);

const handleError = err => console.error(err);

export const getAllCars = () => {
  const query = `
  query {
    cars {
      car_id
      name
      brand
      year_release
    }
  }
  `;

  return graphqlClient
    .request(query)
    .then(response => response.cars)
    .catch(handleError);
};

export const getCarById = id => {
  const query = `
  query {
    car(id: ${id}) {
      car_id
      name
      brand
      year_release
    }
  }
  `;

  return graphqlClient
    .request(query)
    .then(response => response.car)
    .catch(handleError);
};

export const addCar = car => {
  console.log(car);
  const query = `
  mutation($newCar: CarEdit!){
    saveCar(carEdit: $newCar)
  }
  `;

  return graphqlClient
    .request(query, {
      newCar: car
    })
    .then(response => response.saveCar)
    .catch(handleError);
};
