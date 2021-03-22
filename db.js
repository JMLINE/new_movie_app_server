const {
    Sequelize
} = require("sequelize");

const db = new Sequelize("postgresql://postgres:password@localhost/newMovieDb");

module.exports = db;