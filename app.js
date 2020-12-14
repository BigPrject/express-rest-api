const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Where we will keep users
var users = {};

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World, from asta");
});

app.post("/user", (req, res) => {
  const data = req.body;
  var n = data.inculdes("asta");
  
if (n = true) {
  return true;
}
else {
  return false;
}
  // Output the user to the console for debugging
  console.log(user);
  const username = user["userName"];
  users[username] = [user];
  res.send("true");
});

app.get("/:username/users", (req, res) => {
  let username = req.params.username;
  res.json(users[username]);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);

// heroku apps:rename altaf-node-rest-api --app powerful-eyrie-61812
//https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku
// https://devcenter.heroku.com/articles/deploying-nodejs
