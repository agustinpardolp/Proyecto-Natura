const Sequelize = require("sequelize");
const db = require("../index");

const Consultant = db.define("consultant", {
  code: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  sector: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  identification: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  location: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  cod_superviser: {
    type: Sequelize.STRING,
    unique: true
  },
  mail: {
    type: Sequelize.STRING,
    defaultValue: null,
    validate: {
      isEmail: true
    }
  },
  profit: {
    type: Sequelize.DOUBLE,
    defaultValue: null
  },
  
});

module.exports = Consultant;
