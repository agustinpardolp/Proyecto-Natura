const express = require("express");
const router = express.Router();
const Products = require("../../db/models").Product

router.get("/", function(req, res){

    Products.findAll()
    .then(products => {
        res.send(products)
    })
    .catch(err => res.json(err));
})

module.exports = router;