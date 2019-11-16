'use strict';
const db = require ("../index");
const Consultant = require("../models/consultant");
const Superviser = require ("../models/superviser");
const Adress = require ("../models/adress");
const Order = require ("../models/order");
const OrderDetail = require("../models/orderDetail");
const {Product, ProductGif} = require ("../models/product");
const Event = require ("../models/sectorEvent");

//CART RELATIONS
Order.belongsTo(Consultant, {as:"consultant"})
Order.belongsTo(Superviser, {as:"superviser"})

Order.belongsToMany(Product,{ through: OrderDetail, foreignKey: 'order' })
Product.belongsToMany(Order,{ through: OrderDetail, foreignKey: 'product' } )

Product.belongsTo(Event, {foreignKey :"fk_event_code", targetKey:'event_code'})

Adress.belongsTo(Consultant, {as:"consultant"})
Adress.belongsTo(Superviser, {as:"superviser"})

module.exports = { db, Adress, Order, Product, Consultant, Superviser, OrderDetail, Event };