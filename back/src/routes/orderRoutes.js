const express = require("express");
const router = express.Router();
const Order = require("../../db/models").Order;
const OrderDetail = require("../../db/models").OrderDetail;
const Consultant = require("../../db/models").Consultant;
const Product = require("../../db/models").Product;

router.post("/new", function(req, res) {
 
  Consultant.findByPk(req.body.user.id).then(user => {
    Order.create({
        total: req.body.totals.price

    }).then(orderInstans => {
      orderInstans.setConsultant(user)
      let producArray = req.body.order
   
      producArray.forEach(product => {
            Product.findByPk(product.id).then(product => {
              console.log("soy el producttttttttttttttttttttt", product)
          
                product.addOrder(orderInstans, {
                  through: {
                    quantity: product.userQuantity,
                    price: product.price
                  }
                });
              }
         
            }); 
          
        })
    
      }).then(orderInstans => console.log(orderInstans)) 

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
