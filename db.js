  
const Sequelize = require("sequelize");
const sequelize = new Sequelize("fishin", "postgres", "password", {
    host: "localhost",
    dialect: "postgres"
  });
  sequelize.authenticate().then(
    function() {
      console.log("Connected to fished postgres database");
    },
    function(err) {
      console.log(err);
    }
  );

  module.exports= sequelize