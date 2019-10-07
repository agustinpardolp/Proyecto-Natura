const express = require("express")
const router = express.Router();
// const Magazine = require("../../db/index").Magazine;


router.get("/", function(req, res){
    // Magazine.findAll()
    res.send("MAGAZINESSSSSSSS")
})

module.exports = router;