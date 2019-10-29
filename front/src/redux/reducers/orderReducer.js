import {
  RECEIVE_ORDERS,
  RECEIVE_ORDER,
  ADD_PRODUCT_TO_ORDER
} from "../../constants";

const initialState = {
  orderList: [],
  order: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ORDERS:
      return { ...state, orderList: action.orderList };

    case ADD_PRODUCT_TO_ORDER:
    
      if (!state.order.length) {
        var objProd1 = {
          product: action.product,
          quantity: 1,
          price: action.product.price
        };
        let productArray = [];
        productArray[0] = objProd1;

        return { order: [...state.order, ...productArray] };

      } else if (state.order.length > 0) {
        for (let i = 0; i < state.order.length; i++) {
          if (state.order[i].product.id == action.product.id) {
            var objProd2 = {
              product: action.product,
              quantity: 1,
              price: action.product.price
            };

          } else {
            var objProd2 = {
              product: action.product,
              quantity: 1,
              price: action.product.price
            };
            let productArray = [];
            productArray[0] = objProd2;
    
            return { order: [...state.order, ...productArray] };
          }
        }
      }

    default:
      return state;
  }
};
