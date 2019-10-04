const Sequelize = require("sequelize");
const db = require("../index");

const Management = db.define("management", {
  manager: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sector: {
    type: Sequelize.STRING,
    allowNull: false
  },
  superviser: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  cod_superviser: {
    type: Sequelize.STRING,
    allowNull: false
  },
  
});

  module.exports = Management

