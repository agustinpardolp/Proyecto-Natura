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
  
            if (state.order.length == 0) {
                var objProd1 = {
                    product: action.product,
                    quantity: 1,
                    price: action.product.price
                };

                localStorage.setItem("order", JSON.stringify([objProd1]))
                var localOrder = JSON.parse(localStorage.getItem("order"))
                console.log("ORDER N 1", state.order)
                return {
                    ...state,
                    order: localOrder
                };
            } else if (state.order.length > 0) {
                  var objProd2 = {
                    product: action.product,
                    quantity: 1,
                    price: action.product.price
                };
                var exist = false;

                for (let i = 0; i < state.order.length; i++) {
                    if (state.order[i].product.id == action.product.id) {
                  
                            var objProdOk = {
                              product: action.product,
                              quantity: state.order[i].quantity + 1,
                              price: state.order[i].product.price *
                                    (state.order[i].quantity + 1)
                            };
                            var newProductOrder = state.order;
                            newProductOrder[i] = objProdOk;
                            exist = true;

                            localStorage.setItem("order", JSON.stringify([objProdOk]))
                            var localOrder = JSON.parse(localStorage.getItem("order"))
                            console.log("ORDER N 2", state.order)
                            return {
                                ...state,
                                order: localOrder
                            } 
                          } else { 
                
                            var objProdOk2 = {
                              product: action.product,
                              quantity: 1,
                              price: state.order[i].product.price * state.order[i].quantity
                            };
                              var newProductOrder = state.order;
                              newProductOrder[i] = objProdOk2;
                              exist = true;
                              console.log("ORDER N 3", state.order)
                            localStorage.setItem("order", JSON.stringify([...state.order, newProductOrder]))
                            var localOrder = JSON.parse(localStorage.getItem("order"))

                            return {
                                ...state,
                                booksToCart: localOrder
                            };
                        }
                    }
                }
                if (exist == false) {
                    localStorage.setItem("order", JSON.stringify([...state.order, objProd2]))
                    var localOrder = JSON.parse(localStorage.getItem("order"))

                    return {
                        ...state,
                        order: [...localOrder]
                    };
                }
            // }

      // if (!state.order.length) {
    
      //   var objProd1 = {
      //     product: action.product,
      //     quantity: 1,
      //     price: action.product.price
      //   };
      //   let productArray = [objProd1]
      //   // console.log("CASO 1", productArray)
      //   return {...state, order: productArray };

      // } else if (state.order.length > 0) {
      //   var objProd2 = {
      //     product: action.product,
      //     quantity: 1,
      //     price: action.product.price
      //   };
      //   var exist = false;
      //   // console.log("CASO 2", state.order)
      //   for (var i = 0; i < state.order.length; i++) {
      //     // console.log("ID ORDER REDUCER ", state.order[i].product.id, "ID ACTION",action.product.id)
          
      //     if (state.order[i].product.id == action.product.id) {
      //       console.log("CASO 2, if", state.order[i])
      //       var objProd3 = {
      //         product: action.product,
      //         quantity: state.order[i].quantity + 1,
      //         price: state.order[i].product.price * state.order[i].quantity 
      //       };
            
      //       let productArray = state.order;
      //       productArray[i] = objProd3;
      //       exist = true
      //       console.log(productArray, "soy product array")
      //       return {...state, order:productArray };

      //     } else {
      //       console.log("CASO 3, else", state.order)
      //       var objProd4 = {
      //         product: action.product,
      //         quantity: 1,
      //         price: action.product.price
      //       };
      //       exist = false
      //       let productArray = [objProd4];
      //       return { order: [...state.order, ...productArray] };
      //     }
      //   }
      // }

    default:
      return state;
  }
};
