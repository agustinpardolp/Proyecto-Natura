import {
  RECEIVE_ORDERS,
  RECEIVE_ORDER,
  ADD_PRODUCT_TO_ORDER,
  REMOVE_PRODUCT_FROM_ORDER
} from "../../constants";

const initialState = {
  orderList: [],
  order: [],
  totalOrderValue: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ORDERS:
      return { ...state, orderList: action.orderList };

    case ADD_PRODUCT_TO_ORDER: //1) agrego un producto, primer caso si NO hay nada en la orden
      if (state.order.length == 0) {
        var objProd1 = {
          //seteo primer objeto con producto, mas cantidad en 1
          product: action.product,
          quantity: 1,
          price: action.product.price,
          profit: action.product.profit,
          total: action.product.profit + action.product.price
        };

        localStorage.setItem("order", JSON.stringify([objProd1]));
        var localOrder = JSON.parse(localStorage.getItem("order"));

        var totalOrderValue = localOrder.length? localOrder.reduce((acum, order) => {
          //sumo totales
          return {
            profit: acum.profit + order.profit,
            price: acum.price + order.price,
            total: acum.total + order.total
          };
        }): 0;
        return {
          ...state,
          order: localOrder,
          totalOrderValue: totalOrderValue
        };
      } else if (state.order.length > 0) {
        //si hay algo en la orden
        var objProd2 = {
          product: action.product,
          quantity: 1,
          price: action.product.price,
          profit: action.product.profit,
          total: action.product.profit + action.product.price
        };
        var exist = false;

        for (let i = 0; i < state.order.length; i++) {
          //recorro array de orden
          if (state.order[i].product.id == action.product.id) {
            // si el producto ya existe, incremento canntidades
            var price =
              state.order[i].product.price * (state.order[i].quantity + 1);
            var profit = action.product.profit * (state.order[i].quantity + 1);
            var total = price + profit;

            var objProdOk = {
              //asigno valores++ y cantidad++ a nuevo objeto
              product: action.product,
              quantity: state.order[i].quantity + 1,
              price: price,
              profit: profit,
              total: total
            };
            var newProductOrder = state.order;
            newProductOrder[i] = objProdOk; //en esa posicion, reemplazo por nuevo objeto
            exist = true; //registro que existe

            localStorage.setItem("order", JSON.stringify(newProductOrder));
            var localOrder = JSON.parse(localStorage.getItem("order"));

            var totalOrderValue = localOrder.length? localOrder.reduce((acum, order) => {
              //sumo totales
              return {
                profit: acum.profit + order.profit,
                price: acum.price + order.price,
                total: acum.total + order.total
              };
            }): 0;  
            return {
              ...state,
              order: newProductOrder,
              totalOrderValue: totalOrderValue
            };
          }
        }
      }
      if (exist == false) {
        console.log("entre aca")
        //si el lenght es + a cero, pero producto NO existe en orden
        localStorage.setItem(
          "order",
          JSON.stringify([...state.order, objProd2])
        );
        var localOrder = JSON.parse(localStorage.getItem("order"));
      // debugger
        var totalOrderValue = localOrder.length? localOrder.reduce((acum, order) => {
          //sumo totales
          return {
            profit: acum.profit + order.profit,
            price: acum.price + order.price,
            total: acum.total + order.total
          };
        }): 0;

        return {
          ...state,
          order: [...localOrder],
          totalOrderValue: totalOrderValue
        };
      }

    case REMOVE_PRODUCT_FROM_ORDER:
      var newOrderList = state.order;

      for (let i = 0; i < newOrderList.length; i++) {
        if (newOrderList[i].product.id == action.product.id) {
          if (newOrderList[i].quantity > 1) {
            var price = (newOrderList[i].price =
              newOrderList[i].price - action.product.price);
            var profit = action.product.profit * (newOrderList[i].quantity - 1);
            var total = price + profit;

            newOrderList[i].quantity = newOrderList[i].quantity - 1;
            (newOrderList[i].price = price),
              (newOrderList[i].profit = profit),
              (newOrderList[i].total = total);
          } else {
            newOrderList = newOrderList.filter((product)=>{  //filtro y devuelvo con todos los que sean distintos a newOrder[i]
              return product !== newOrderList[i]
            })
            
          };
        }
      }

      localStorage.setItem("order", JSON.stringify(newOrderList));
      var localOrder = JSON.parse(localStorage.getItem("order"));

      var totalOrderValue = localOrder.length? localOrder.reduce((acum, order) => {
        //sumo totales
        return {
          profit: acum.profit + order.profit,
          price: acum.price + order.price,
          total: acum.total + order.total
        };
      }): 0;
      return {
        ...state,
        order: localOrder,
        totalOrderValue: totalOrderValue
      };

    default:
      return state;
  }
};
