const Sequelize = require("sequelize");
const db = require("../index");

const Consultant = db.define("consultant", {
  code: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sector: {
    type: Sequelize.STRING,
    defaultValue: null
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
    defaultValue: null
  },
  mail: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  profit: {
    type: Sequelize.DOUBLE,
    defaultValue: null
  },
  isSuperviser: {
    type: Sequelize.BOOLEAN
  }
});

module.exports = Consultant;
