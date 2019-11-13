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
export const receiveOrder = function(order) {
  return {
    type: RECEIVE_ORDER,
    order
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
    .then(order => {
      dispatch(receiveOrder(order))
      return order
    });
};

export const fetchOrdersById = userId => dispatch => {
  return axios
    .get(`api/orders/${userId}`)
    .then(res => res.data)
    .then(orderList => dispatch(receiveOrderById(orderList)));
};

export const updateOrderShipping = orderId => {
  return axios
    .post("/api/orders/updateShippping", { orderId })
    .then(res => res.data)
  
}

// export const resetProductFromOrder = () => dispatch => {
//   return axios.get("/api/products")
//    .then(res =>res.data) 

//    .then(product => {
//      console.log("action", product)
//      dispatch(removeOrder(product))
//    });
// };
