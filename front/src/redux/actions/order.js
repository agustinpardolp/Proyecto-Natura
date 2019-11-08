import axios from "axios";
import {
  ADD_PRODUCT_TO_ORDER,
  RECEIVE_ORDERS,
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
export const receiveOrders = function(orderList) {
  return {
    type: RECEIVE_ORDERS,
    orderList
  };
};

export const removeOrder = function() {
  let order = []
  return {
    type: REMOVE_ORDER,
    order
  };
};

// export const addProductToOrder = (product, user) => dispatch => {
//   console.log("ACTION", product, user);
//   return axios
//     .post("/api/orders/add", { product, user })
//     .then(res => res.data)
//     .then(updatedPruduct => dispatch(addProductFromOrder(updatedPruduct)));
// };

export const fetchOrders = () => dispatch => {
  return axios
    .get("api/orders/")
    .then(res => res.data)
    .then(orderList => dispatch(receiveOrders(orderList)));
};
export const fetchOrdersById = userId => dispatch => {
  return axios
    .get(`api/orders/${userId}`)
    .then(res => res.data)
    .then(orderList => dispatch(receiveOrders(orderList)));
};
