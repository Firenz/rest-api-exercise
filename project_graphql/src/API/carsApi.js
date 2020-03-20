const { GraphQLClient } = require("graphql-request");

const defaultPort = 3050;
const graphqlBaseUrl = `http://localhost:${defaultPort}/graphql`;

const graphqlClient = new GraphQLClient(graphqlBaseUrl);

const handleError = err => console.error(`${err.status}:${err.statusText}`);

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
  const query=`
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
  const car_json = {
    card_id: car.car_id,
    name: car.name,
    brand: car.brand,
    year_release: car.year_release
  };

  const query=`
  mutation($carEdit: CarEdit!){
    saveCar(carEdit: $carEdit)
  }
  `;

  return graphqlClient
    .request(query, {
      carEdit: car_json
    })
    .then(response => response.saveCar)
    .catch(handleError);
};
