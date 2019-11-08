const express = require("express");
const router = express.Router();
const Products = require("../../db/models").Product
const productRespose = require ("../auxFunctions/auxFunctions").productRespose

router.get("/", function(req, res){
  
productRespose()
.then(productList => {
    console.log(productList, "product")
    res.send(productList)
    // Products.findAll()
    // .then(products => {
    //     res.send(products)
    // })
    // .catch(err => res.json(err));
})
})
module.exports = router;