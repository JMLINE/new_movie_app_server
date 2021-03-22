require("dotenv").config();
const Express = require("express");
const app = Express();
const dbConnection = require("./db");



let user = require("./controllers/usercontroller")
let movies = require("./controllers/moviecontroller")

app.use(Express.json());

app.use(require("./middleware/header"))
app.use("/user", user);
app.use(require('./middleware/validate-session'))
app.use("/movies", movies)



dbConnection.authenticate()
  .then(() => dbConnection.sync())
  .then(() => {
    app.listen(3000, () => {
      console.log(`[Server]: App is listening on 3000`);
    });
  })
  .catch((err) => {
    console.log `[Server]: Server crached. Error = ${err}`
  });