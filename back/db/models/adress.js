const Sequelize = require("sequelize");
const db = require("../index");

const Adress = db.define("adress", {
  code: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  type: {
    type: Sequelize.STRING,
    defaultValue: "particular"
  },
  code_management: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  name_management: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  province: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  county: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  zip_code: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  town: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  neighborhood: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  number: {
    type: Sequelize.STRING,
    defaultValue: "S/N"
  },
  street: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  reference: {
    type: Sequelize.STRING,
    defaultValue: "N/D"
  },
  
});

module.exports = Adress;
