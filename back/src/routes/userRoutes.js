// const DataStorage = require("../auxFunctions/auxFunctions").DataStorage;
// const userResponse = require ("../auxFunctions/auxFunctions").userResponse
// const consultantsRespose = require ("../auxFunctions/auxFunctions").consultantsResponse
const express = require("express");
const router = express.Router();
const passport = require("../../config/passport");
const Consultant = require("../../db/models").Consultant;
const Superviser = require("../../db/models").Superviser;
const Adress = require("../../db/models").Adress;

router.post("/login", passport.authenticate("local"), function(req, res) {
  res.send(req.user);
});

// router.post("/login", function(req, res) {
//   userResponse()
//   .then(user =>{
//     if(req.body.pass == user.code)
//         res.send(user);
//   })
// });

router.post("/logout", function(req, res) {
  req.logout();
  res.send("logoutOK");
});
router.get("/logged", function(req, res) {
  res.send(req.user);
});

router.get("/superviser/consultant/:id", function(req, res) {
  Superviser.findByPk(req.params.id).then(superviser => {
    Consultant.findAll({
      where: {
        cod_superviser: superviser.code
      }
    }).then(consultantList => {
      res.send(consultantList);
    });
  });
});

router.get("/consultant/adress/:id", function(req, res) {
  Adress.findAll({
    where: {
      consultantId: req.params.id
    }
  }).then(consultantAdressList => {
    console.log(consultantAdressList);

    res.status(200).send(consultantAdressList)
  });
});

module.exports = router;
