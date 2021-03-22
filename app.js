require("dotenv").config();
const express = require("express");
const app = express();
var sequelize = require("./db");



let user = require("./controllers/usercontroller")
let movies = require("./controllers/moviecontroller")

sequelize.sync();
app.use(express.json());

app.use(require("./middleware/header"))
app.use("/user", user);
app.use(require('./middleware/validate-session'))
app.use("/movies", movies)



app.listen(process.env.PORT, function () {
  console.log(`app is listening on ${process.env.PORT} and hello world`);
});