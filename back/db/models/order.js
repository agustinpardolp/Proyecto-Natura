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
    defaultValue: 0
  },
  shipping: {
      type: Sequelize.STRING,
      defaultValue: "no informado"
  }
});

module.exports = Order;
