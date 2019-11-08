import {
  RECEIVE_PRODUCTS,
  RECEIVE_CURRENT_PRODUCT,
  RECEIVE_PRODUCT_PARAMETERS,
  RECEIVE_PRODUCT_BY_LEGACY,
  RECEIVE_VIEW_PRODUCT_CHANGE
} from "../../constants";

const initialState = {
  productList: [],
  product: {},
  productParameters: [],
  productByLegacy: {},
  collapseView: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case RECEIVE_PRODUCTS:
      return { ...state, productList: action.productList };

    case RECEIVE_CURRENT_PRODUCT:
      return { ...state, product: action.product };

    case RECEIVE_PRODUCT_PARAMETERS:
      return { ...state, productParameters: action.productParameters };

    case RECEIVE_PRODUCT_BY_LEGACY:
      return { ...state, product: action.productByLegacy };

    case RECEIVE_VIEW_PRODUCT_CHANGE:
    return { ...state, collapseView:action.collapse};

    default:
      return state;
  }
};
