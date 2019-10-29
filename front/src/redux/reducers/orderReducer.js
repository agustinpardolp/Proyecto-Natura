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
        let productArray = objProd1;
        console.log("CASO 1", productArray)
        return {...state, order:[...state.order, productArray] };

      } else if (state.order.length > 0) {
        var objProd2 = {
          product: action.product,
          quantity: 1,
          price: action.product.price
        };
        var exist = false;
        console.log("CASO 2", state.order)
        for (let i = 0; i < state.order.length; i++) {
          console.log("ID ORDER REDUCER ", state.order[i].product.id, "ID ACTION",action.product.id)
          if (state.order[i].product.id == action.product.id) {
            var objProd3 = {
              product: action.product,
              quantity: state.order[i].quantity + 1,
              price: state.order[i].product.price * state.order[i].quantity + 1
            };
            
            let productArray = state.order;
            productArray[i] = objProd3;
            exist = true
            
            return {...state, order:productArray };

          } else {
            console.log("CASO 3", state.order)
            var objProd3 = {
              product: action.product,
              quantity: 1,
              price: action.product.price
            };
            let productArray = [];
            productArray[0] = objProd3;
    
            return { order: [...state.order, ...productArray] };
          }
        }
      }

    default:
      return state;
  }
};
