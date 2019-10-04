const Sequelize = require("sequelize");
const db = require("../index");

const ParameterData = db.define("parameterData", {
  param_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  event_code: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  sector: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  value: {
    type: Sequelize.STRING,
    defaultValue: null
  },
 
});

module.exports = ParameterData;
