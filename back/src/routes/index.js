const express = require("express");
const magazineRoutes = require("./magazineRoutes"); 
const router = express.Router();

router.use("/magazines", magazineRoutes)

module.exports = router;