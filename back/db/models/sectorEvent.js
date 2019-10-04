const Sequelize = require("sequelize");
const db = require("../index");

const SectorEvent = db.define("sectorEvent", {
  sector: {
        type: Sequelize.STRING
      },
  event_code: {
        type: Sequelize.STRING
      },
  load_from: {
        type: Sequelize.DATE,
        allowNull: false
      },
  load_to: {
        type: Sequelize.DATE,
        allowNull: false
      },
});

module.exports = SectorEvent;