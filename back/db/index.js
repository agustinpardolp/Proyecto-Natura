const Sequelize = require('sequelize');
// const db = new Sequelize('postgres://localhost:5432/naturaDb', {
//     logging: false
// })

const db = new Sequelize('NaturaPrueba','root', '', {
    host: '',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
       ssl: 'Amazon RDS'
    }
});
module.exports = db;
