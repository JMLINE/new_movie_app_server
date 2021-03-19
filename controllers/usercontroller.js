const router = require("express").Router();
const User = require("../models/user");
const { UniqueConstraintError } = require("sequelize/lib/errors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/register", function (req, res) {
  var username = req.body.user.username;
  var password = req.body.user.password;
  var email = req.body.user.email;

  User.create({
    username: username,
    password: bcrypt.hashSync(password, 10),
    email: email,
  }).then(
    function createSuccess(user) {
      var token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: 60 * 60 * 24,
        }
      );
      res.json({
        user: user,
        message: "created",
        sessionToken: token,
      });
    },
    function createError(err) {
      res.send(500, err.message);
    }
  );
});

// SIGNING IN A USER
router.post("/signin", function (req, res) {
  let username = req.body.user.username;
  let password = req.body.user.password;

  User.findOne({
    where: {
      username: username,
    },
  }).then((user) => {
    user ? comparePasswords(user) : res.send("User not found in our database");

    function comparePasswords(user) {
      bcrypt.compare(password, user.password, function (err, matches) {
        matches
          ? generateToken(user)
          : res.json({
              error: "Incorrect Password",
            });
      });
    }

    function generateToken(user) {
      var token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: 60 * 60 * 240,
        }
      );
      res.json({
        user: user,
        message: "User Successfully Logged In",
        sessionToken: token,
      });
    }
  });
});

module.exports = router;
