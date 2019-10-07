const express = require("express")
const router = express.Router();
const DataStorage = require("../auxFunctions/auxFunctions").DataStorage
// const Magazine = require("../../db/index").Magazine;


router.post("/login", function(req, res){
    
    var user = {
        code:111,
        dni:111
    }
    if(req.body.user.code == user.code && req.body.user.dni == user.dni) {
        
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
router.get("user/logged", function(req, res){
    console.log("USERRRRRRRRRRRRRRRRRRR")
    let user = DataStorage().getUserData()
    console.log("USERRRRRRRRRRRRRRRRRRR", user)
    res.send(user)
   
})

module.exports = router;