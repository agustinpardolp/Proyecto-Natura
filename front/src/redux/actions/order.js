import axios from "axios";
import {
  ADD_PRODUCT_TO_ORDER,
  RECEIVE_ORDER,
  REMOVE_ORDER,
  DECREMENT_PRODUCT_FROM_ORDER
} from "../../constants";

export const addProductToOrder = function(product) {

  return {
    type: ADD_PRODUCT_TO_ORDER,
    product
  };
};

export const decrementProductFromOrder = function(product) {
  return {
    type: DECREMENT_PRODUCT_FROM_ORDER,
    product
  };
};
export const receiveOrder = function(orderCreated) {
  return {
    type: RECEIVE_ORDER,
    orderCreated
  };
};

export const removeOrder = function() {
  let product = []
  return {
    type: REMOVE_ORDER,
    product
  };
};

export const createOrder= (order, user, totals) => dispatch => {
  
  return axios
    .post("/api/orders/new", { order, user, totals })
    .then(res => res.data)
    .then(orderCreated => {
      dispatch(receiveOrder(orderCreated))
      return orderCreated
    });
};

export const fetchOrdersById = userId => dispatch => {

  return axios
    .get(`api/orders/${userId}`)
    .then(res => res.data)
    .then(orderCreated =>{
      dispatch(receiveOrder(orderCreated))
      return orderCreated
    })
};

export const updateOrderShipping = (orderId, shippingType) => dispatch => {

  return axios
    .put("/api/orders/updateShippping", { orderId, shippingType })
    .then(orderUpdated =>{
      return orderUpdated
    })
}
