const Sequelize = require("sequelize");
const db = require("../index");

const OrderDetail = db.define("orderDetail", {

price: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
      isNumeric: true
    }
  },
   quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
});

module.exports = OrderDetail;
