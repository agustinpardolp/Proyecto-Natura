const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/naturaDb', {
    logging: false
})

// const db = new Sequelize('NaturaPrueba','root', 'XXXXXXXXXXJumpX', {
//     host: 'XXXXX.cykssfqpmcmf.us-west-2.rds.amazonaws.com',
//     port: 3306,
//     dialect: 'mysql',
//     dialectOptions: {
//        ssl: 'Amazon RDS'
//     }
// });
module.exports = db;
