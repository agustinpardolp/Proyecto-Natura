const Sequelize = require("sequelize");
const db = require("../index");

const Product = db.define("product", {
  code: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  points: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  list_order: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  add_points: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  add_cases: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  add_dif_cases: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  profit: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  event_code: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
const ProductGift = db.define("productGift", {
  code: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  img_type: {
    type: Sequelize.STRING,
    defaultValue: 'jpg'
  },
  min_points: {
    type: Sequelize.INTEGER,
    defaultValue: null
  },
  max_points: {
    type: Sequelize.INTEGER,
    defaultValue: null
  },
  min_dif_cases: {
    type: Sequelize.INTEGER,
    defaultValue: null
  },
  max_dif_cases: {
    type: Sequelize.INTEGER,
    defaultValue: null
  },
  
});


module.exports =  {Product, ProductGift}