const express = require("express");
const router = express.Router();
const DataStorage = require("../auxFunctions/auxFunctions").DataStorage;
const passport = require("../../config/passport");
const Consultant = require("../../db/models").Consultant;
const Superviser = require("../../db/models").Superviser;
const userResponse = require ("../auxFunctions/auxFunctions").userResponse
const consultantsRespose = require ("../auxFunctions/auxFunctions").consultantsResponse

// router.post("/login", passport.authenticate("local"), function(req, res) {
//   res.send(req.user);
// });

router.post("/login", function(req, res) {
  userResponse()
  .then(user =>{
    console.log(user)
    if(req.body.pass == user.code)
        res.send(user);
  })
});

router.post("/logout", function(req, res) {
  req.logout();
  res.send("logoutOK");

});
router.get("/logged", function(req, res) {
  res.send(req.user);
});

router.get("/superviser/consultant/:id", function(req, res) {
  consultantsRespose()
  .then(consultantList =>{
    res.send(consultantList)
  })
  // Superviser.findByPk(req.params.id)
  // .then(superviser=>{

  //   Consultant.findAll({
  //     where:{
  //       cod_superviser: superviser.code
  //     }
  //   }).then(consultantList =>{
  //     console.log(consultantList,"consultants")
  //     res.send(consultantList)
  //   })
  // })
});
module.exports = router;
