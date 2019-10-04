const Sequelize = require("sequelize");
const db = require("../index");

const PaymentNotification = db.define("paymentNotification", {
  paymentId: {
    type: Sequelize.STRING,
    unique: true
  },
  liveMode: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  type: {
    type: Sequelize.STRING,
    defaultValue: "test"
  },
  creationDate: {
    type: Sequelize.DATE,
    defaultValue: null
  },
  UpdateDate: {
    type: Sequelize.DATE,
    defaultValue: null
  },
  UserId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  APIVersion: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  Action: {
    type: Sequelize.STRING,
    defaultValue: 'test.created'
  },
  Data: {
    type: Sequelize.TEXT,
    defaultValue: null
  },
  Replicate: {
    type: Sequelize.INTEGER,
    defaultValue: null
  },
  
});



module.exports = PaymentNotification;
