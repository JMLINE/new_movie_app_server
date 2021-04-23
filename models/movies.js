const {
    DataTypes,
    BOOLEAN
} = require("sequelize");
const db = require("../db");

const Movies = db.define("movies", {
    title: {
        type: DataTypes.STRING(),
        allowNull: false,

    },

    year: {
        type: DataTypes.STRING(),
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
        type: DataTypes.INTEGER(),
        allowNull: false,
    },

    plot: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    rating: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    ratingSource: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    actors: {
        type: DataTypes.STRING(),
        allowNUll: false,
    },
    writtenBy: {
        type: DataTypes.STRING(5000),
        allowNull: false,
    },

    viewed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
});

module.exports = Movies;