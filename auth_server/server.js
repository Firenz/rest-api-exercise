const express = require("express");
(path = require("path")),
  (cookieParser = require("cookie-parser")),
  (bodyParser = require("body-parser")),
  (cors = require("cors"));

const { resolveLogin } = require("./token-issuer.service");

const app = express();
const PORT = process.env.PORT || 8887;

// setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const { status, response } = resolveLogin(username, password);
  res.status(status).send(response);
});

app.get('*', (_, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

module.exports = app;