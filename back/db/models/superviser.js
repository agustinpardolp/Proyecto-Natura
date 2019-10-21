const Sequelize = require("sequelize");
const db = require("../index");

const Superviser = db.define("superviser", {
  code: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  mail: {
    type: Sequelize.STRING
  },
  isSuperviser: {
    type: Sequelize.BOOLEAN
  },
});



module.exports = Superviser;
