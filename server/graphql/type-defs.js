const { gql } = require("apollo-server-express");

module.exports = gql`
  type Car {
    car_id: Float!
    name: String!
    brand: String!
    year_release: String!
  }

  type Query {
    cars: [Car!]!
    car(id: Float!): Car!
  }

  input CarEdit {
    car_id: Float!
    name: String!
    brand: String!
    year_release: String!
  }

  type Mutation {
    saveCar(carEdit: CarEdit!): Boolean
  }
`;