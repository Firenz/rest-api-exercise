const express = require("express");
(path = require("path")),
  (cookieParser = require("cookie-parser")),
  (bodyParser = require("body-parser")),
  (cors = require("cors"));

const { ApolloServer } = require("apollo-server-express");

const users = require("./routes/users");
const cars = require("./routes/cars");

const app = express();

const typeDefs = require("./graphql/type-defs");
const resolvers = require("./graphql/resolvers");

// const typeDefs = gql`
//   type Query {
//     hello: String!
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => {
//       return 'Working endpoint';
//     },
//   },
// };

const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers
});

// setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/api/users", users);
app.use("/api/cars", cars);

graphqlServer.applyMiddleware({ app });

app.set("port", process.env.PORT || 3050);
app.listen(app.get("port"));

console.log(`Server running at http://localhost:${app.get("port")}`);
console.log(`GraphQL server running at http://localhost:${app.get("port")}${graphqlServer.graphqlPath}`);

module.exports = app;
