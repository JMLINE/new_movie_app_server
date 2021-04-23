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
    let plot = req.body.movies.plot;
    let rating = req.body.movies.rating;
    let ratingSource = req.body.movies.ratingSource;
    let actors = req.body.movies.actors;
    let writtenBy = req.body.movies.writtenBy;
    let viewed = req.body.movies.viewed;

    let owner = req.user.id
    Movies.create({
        title: title,
        year: year,
        rated: rated,
        poster: poster,
        plot: plot,
        rating: rating,
        ratingSource: ratingSource,
        actors: actors,
        writtenBy: writtenBy,
        viewed: viewed,
        owner: owner,

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

router.put("/save/:id", function (req, res) {

    let userid = req.user.id;
    let primaryKey = req.params.id;
    // let title = req.body.movies.title;
    // let year = req.body.movies.year;
    // let rated = req.body.movies.rated;
    // let poster = req.body.movies.poster;
    // let plot = req.body.movies.plot;
    // let rating = req.body.movies.rating;
    // let ratingSource = req.body.movies.ratingSource;
    // let actors = req.body.movies.actors;
    // let writtenBy = req.body.movies.writtenBy;
    let viewed = req.body.movies.viewed;
    Movies.update({
            // title: title,
            // year: year,
            // rated: rated,
            // poster: poster,
            // plot: plot,
            // rating: rating,
            // ratingSource: ratingSource,
            // actors: actors,
            // writtenBy: writtenBy,
            viewed: viewed,

        }, {
            where: {
                id: primaryKey,
                owner: userid
            }
        }).then(
            data => {
                return data > 0 ?
                    res.send("Item was updated") :
                    res.send("Nothing was updated")
            }),

        err => res.send(500, err.message)

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