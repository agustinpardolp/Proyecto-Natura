const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/naturaDb', {
    logging: false
})

module.exports = db;
