import {
  RECEIVE_PRODUCTS,
  RECEIVE_CURRENT_PRODUCT,
  RECEIVE_PRODUCT_PARAMETERS,
  RECEIVE_VIEW_PRODUCT_CHANGE,
  RESET_ORDER_PRODUCTS
} from "../../constants";

const initialState = {
  productList: [],
  product: {},
  productParameters: [],
  collapseView: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return { ...state, productList: action.productList };

    case RESET_ORDER_PRODUCTS:
      let productListRestarted = action.products.map(function(product) {
        let userQuantity = 0;
        product.userQuantity = userQuantity;
        return product;
      });

      return { ...state, productList: productListRestarted };

    case RECEIVE_CURRENT_PRODUCT:
      return { ...state, product: action.product };

    case RECEIVE_PRODUCT_PARAMETERS:
      return { ...state, productParameters: action.productParameters };

    case RECEIVE_VIEW_PRODUCT_CHANGE:
      return { ...state, collapseView: action.collapse };

    default:
      return state;
  }
};
