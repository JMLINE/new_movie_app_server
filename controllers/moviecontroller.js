const router = require("express").Router();
const {
    UniqueConstraintError
} = require("sequelize/lib/errors");
const Movies = require("../models/movies");



router.get('/watchlist', function (req, res) {
    let userid = req.user.id;
    Movies.findAll({
        where: {
            owner: userid
        }
    }).then(
        function findAllSuccess(data) {
            res.json(data);
        },
        function findAllError(err) {
            res.send(500, err);
        }
    )
})

router.post("/save", function (req, res) {
    let title = req.body.movies.title;
    let year = req.body.movies.year;
    let rated = req.body.movies.rated;
    let poster = req.body.movies.poster;
    let owner = req.user.id
    Movies.create({
        title: title,
        year: year,
        rated: rated,
        poster: poster,
        owner: owner
    }).then(
        function createMovie(response) {
            res.json({
                message: "success",
                added: response
            })
        },
        function createError(err) {
            res.send(500, err.message)
        }
    )
})

router.delete('/watchlist/:id', function (req, res) {
    let primaryKey = req.params.id;
    let userid = req.user.id;
    Movies.destroy({
        where: {
            id: primaryKey,
            owner: userid
        }
    }).then(
        data => {
            return data > 0 ?
                res.send('Item was deleted') :
                res.send('Nothing deleted')
        }), err => res.send(500, err.message);
});

module.exports = router