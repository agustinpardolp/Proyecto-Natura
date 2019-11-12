const Sequelize = require("sequelize");
const db = require("../index");

const Order = db.define("order", {
 
  total: {
    type: Sequelize.INTEGER,
    validate: {
        notEmpty: true,
        isNumeric: true
    },
    defaultValue: 0
},
  extra: {
    type: Sequelize.INTEGER,
  },

});

module.exports = Order;
