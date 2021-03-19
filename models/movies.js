const {
    DataTypes
} = require("sequelize");
const db = require("../db");

const Movies = db.define("movies", {
    title: {
        type: DataTypes.STRING(),
        allowNull: false,

    },

    year: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    rated: {
        type: DataTypes.STRING(),
        allowNull: false,
    },

    poster: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    owner: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Movies;