const Sequelize = require("sequelize");
const db = require("../index");

const Adress = db.define("adress", {
  code: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  name: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  comertial_situation: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  code_comercial_structure: {
    type: Sequelize.TEXT,
    defaultValue: null
  },
  name_comercial_structure: {
    type: Sequelize.STRING,
    defaultValue: null
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
    defaultValue: null
  },
  street: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  complement: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  reference: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  
});

module.exports = Adress;
