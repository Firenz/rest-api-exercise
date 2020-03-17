const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Car {
    car_id: Float!
    name: String!
    brand: String!
    year_release: String!
  }

  type Query {
    cars: [Car!]!
  }
`;

module.exports.typeDefs = typeDefs;