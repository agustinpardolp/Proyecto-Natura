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

        var productArray = [objProd1];
     
        console.log("primer ingreso", productArray)
        return {  ...state, order:  productArray };

      } else if (state.order.length > 0) {
        for (let i = 0; i < state.order.length; i++) {
          if (state.order[i].product.id == action.product.id) {
            console.log(state.order[i] )
            var objProd3 = {
              product: action.product,
              quantity: state.order[i].product.quantity + 1,
              price: state.order[i].product.price * (state.order[i].quantity + 1)
                  
          };
          var productArray = [objProd3];
          return { ...state, order:  productArray  };

          } else {
            var objProd2 = {
              product: action.product,
              quantity: 1,
              price: action.product.price
            };
            var productArray = [objProd2];
         
            return { ...state, order:  productArray  };
          }
        }
      }

    default:
      return state;
  }
};
