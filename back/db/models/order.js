const Sequelize = require("sequelize");
const db = require("../index");

const Order = db.define("order", {
 
  total: {
    type: Sequelize.INTEGER,
    validate: {
        notEmpty: true,
        isNumeric: true
    }
},
  extra: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
});

module.exports = Order;
