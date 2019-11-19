const express = require("express");
const router = express.Router();
const Order = require("../../db/models").Order;
const OrderDetail = require("../../db/models").OrderDetail;
const Consultant = require("../../db/models").Consultant;
const Product = require("../../db/models").Product;

    router.get("/:userId", function(req, res){
      let consultantId = req.params.userId?req.params.userId: 0

      Order.findAll({
        where:{
          consultantId: req.params.userId
        },
        order: [["id", "DESC"]]
      }).then(orders => {
        res.send(orders[0])})
  })

router.post("/new", function(req, res) {
  console.log("BODY",req.body)
    Consultant.findByPk(req.body.user.id).then(user => {
      Order.create({
          total: req.body.totals.price
  
      }).then(orderInstans => {

        // console.log("order instanssssss", orderInstans)
        orderInstans.setConsultant(user)
        let producArray = req.body.order
  
        producArray.forEach(orderProduct => {
              Product.findByPk(orderProduct.id).then(product => {
                product.addOrder(orderInstans, {
                  through: {
                    quantity: orderProduct.userQuantity,
                    price: orderProduct.price
                  }
                });
              }); 
          })
          res.send(orderInstans)
        })
    })

    router.put("/updateShippping", function(req, res){

        Order.update({
          shipping: req.body.shippingType 
        },{
          where:{
           id: req.body.orderId
          } 
        }).then(orderUpdated => {
    
          res.send(orderUpdated)})
    })
    
    
    // .then(orderInstans => {
  //     // if (orderInstans == null) {
  //     Order.create({
  //       total: req.body.product.price
  //     })
  //       total
  //       .then(orderInstans => {
  //         console.log(orderInstans, "segundoOrderInstans");

  //         Product.findByPk(req.body.product.id).then(product => {
  //           product.addOrder(orderInstans, {
  //             through: {
  //               quantity: 1,
  //               price: product.price
  //             }
  //           });
  //         });
  //         return orderInstans.save();
  //       })
  //       .then(orderInstans => {
  //         Order.findByPk(orderInstans.id);
  //       })
  //       .then(orderInstans => {
  //         console.log(orderInstans, "order finalaa");
  //         res.send(orderInstans);
  //       });
  //   });

});

module.exports = router;
