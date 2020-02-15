// var express = require("express");
// var router = express.Router();
// var sequelize = require("../db");
// var User = sequelize.import("../models/user");
// var AuthTestModel = sequelize.import("../models/authtest")

// router.get("/getall", function (req, res) {
//     //Grabbing all of the grocery list items from the database for a given user

//     //localhost:3000/api/authtest/create
//     //what goes in the body?
//     //{authtestdate:{item:something in it}

//     var userid = req.user.id
//     AuthTestModel.findAll({
//         where: {
//             owner: userid
//         }
//     }).then(
//         function findAllSuccess(data) {
//             res.json(data)

//         },
//         function findaAll(err) {
//             res.send(500, err.message)
//         }
//     );
// });

// router.post('/create', function (req, res) {
//     var owner = req.user.id
//     var authTestData = req.body.authtestdata.item


//     AuthTestModel.create({
//         authtestdata: authTestData,
//         owner: owner
//     }).then(
//         function createSuccess(authtestdata) {
//             res.json({
//                 authtestdata: authtestdata
//             })
//         },
//         function createError(err) {
//             res.send(500, err.message)
//         }
//     );

// });
// //localhose:3000/authtest/
// router.get("/:id", function (req, res) {
//     var primaryKey = req.params.id;
//     var userid = req.user.id
//     AuthTestModel.findOne({
//             where: {
//                 id: primaryKey,
//                 owner: userid
//             }
//         }).then(
//             data => {
//                 return data ? res.json(data) : res.send("Not Authorized");
//             }),
//         err => res.send(500, err.message);



// });

// router.delete("/delete/:id", function (req, res) {
//     var primaryKey = req.params.id
//     var userid = req.user.id

//     AuthTestModel.destroy({
//         where: {
//             id: primaryKey,
//             owner: userid
//         }
//     }).then(data => {
//         return res.json(data)
//     }), err => res.send(500, err.message)
// })
// //updating record for the individual
// //endpoint: /update/[number here]
// //Actual URL: localhost:3000/authtest/update/10
// router.put("/update/:id", function (req, res) {
//     var userid = req.user.id;
//     var primaryKey = req.params.id
//     var authtestdata = req.body.authtestdata.item

//     AuthTestModel.update({
//         authtestdata: authtestdata
//     }, {
//         where: {
//             id: primaryKey,
//             owner: userid
//         }
//     }).then(
//         data => {
//             return data ? res.json(data) : res.send("Not Updated");
//         }
//     ), err => res.send(500, err.message);


// });

// module.exports = router;