const db = require ("../index");
const Consultant = require("../models/consultant");
const Superviser = require ("../models/superviser");
const Adress = require ("../models/adress");
const Order = require ("../models/order");
const OrderDetail = require("../models/orderDetail");
const {Product, ProductGif} = require ("../models/product");
const SectorEvent = require ("../models/sectorEvent");

//CART RELATIONS
Order.belongsTo(Consultant, {as:"consultantId"})
Order.belongsTo(Superviser, {as:"superviserId"})

Order.belongsToMany(Product,{ through: OrderDetail, foreignKey: 'orderId' })
Product.belongsToMany(Order,{ through: OrderDetail, foreignKey: 'productId' } )

Product.belongsTo(SectorEvent, {as:"sectorEventId"})

Adress.belongsTo(Consultant, {as:"consultantId"})
Adress.belongsTo(Superviser, {as:"superviserId"})

module.exports = { db, Adress, Order, Product, Consultant, Superviser, OrderDetail };