const express = require("express");
(path = require("path")),
  (cookieParser = require("cookie-parser")),
  (bodyParser = require("body-parser")),
  (cors = require("cors"));

const { ApolloServer } = require("apollo-server-express");

const cars = require("./routes/cars");

const app = express();

// security setup
app.use(cors());

// rest api setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/cars", cars);

// graphql setup
const typeDefs = require("./graphql/type-defs");
const resolvers = require("./graphql/resolvers");

const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers
});

graphqlServer.applyMiddleware({ app });

app.set("port", process.env.PORT || 3050);
app.listen(app.get("port"));

console.log(`Server running at http://localhost:${app.get("port")}`);
console.log(
  `GraphQL server running at http://localhost:${app.get("port")}${
    graphqlServer.graphqlPath
  }`
);

module.exports = app;
