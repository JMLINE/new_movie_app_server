var jwt = require('jsonwebtoken')
let User = require('../models/user')


module.exports = function (req, res, next) {
    if (req.method == "OPTIONS") {
        next()
    } else {
        var sessionToken = req.headers.authorization
        console.log(sessionToken)
        sessionToken ? verifyToken() : res.status(200).send({
            auth: false,
            message: "No Token Provided",
            error: "No Token Provided"
        })

        function verifyToken() {
            jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => {
                decoded ? findUser(decoded) : res.status(401).send({
                    error: 'Not Authorized'
                })
            })
        }

        function findUser(decoded) {
            User.findOne({
                where: {
                    id: decoded.id
                }
            }).then(user => {
                req.user = user
                next()
            })
        }
    }
}