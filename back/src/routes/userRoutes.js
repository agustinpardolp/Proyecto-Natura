const express = require("express")
const router = express.Router();
const DataStorage = require("../auxFunctions/auxFunctions").DataStorage
// const Magazine = require("../../db/index").Magazine;


router.post("/login", function(req, res){
    let user = DataStorage().getUserData()
 
    if(req.body.user.code == user.code && req.body.user.dni == user.dni) {
        console.log(user, "soy user del post")
        DataStorage().setUserData(user)
        res.send(user)
    }
    else res.sendStatus(401)
})

router.post("/logout", function(req, res){
    console.log("LOGOUT")
    let user = DataStorage().setUserData({})
  
    res.send(user)
})
router.get("/logged", function(req, res){
   
    let user = DataStorage().getUserData()
    console.log("USERRRRRRRRRRRRRRRRRRR", user)
    res.send(user)
   
})

module.exports = router;