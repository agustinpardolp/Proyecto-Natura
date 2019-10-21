import axios from "axios";
import {RECEIVE_PRODUCTS,
    RECEIVE_CURRENT_PRODUCT,
    RECEIVE_PRODUCT_PARAMETERS,
  } from "../../constants"

  export const receiveProducts = function (productList) {
  return {
    type: RECEIVE_PRODUCTS,
    productList
  };
};
export const receiveCurrentProduct = function(product) {
  return {
    type: RECEIVE_CURRENT_PRODUCT,
    product
  }
};
export const receiveProductParameters = function (productParameters) {
    return {
      type: RECEIVE_PRODUCT_PARAMETERS,
      productParameters
    };
  };


export const fetchProducts = () => dispatch => {
    axios.get("/api/products")
    .then(res =>res.data) 
    .then(productList => dispatch(receiveProducts(productList)));
};
export const fetchProductById =(magazineId) => dispatch =>{
    axios.get(`/api/products/${magazineId}`)
    .then(res =>res.data)
    .then(product => dispatch(receiveCurrentProduct(product)))
}

export const fetchProductParameters =() => dispatch =>{
    axios.get('api/products/parameters')
    .then(res => res.data)
    .then(productParameters => dispatch(receiveProductParameters(productParameters)))
}

export const createProduct = (dataProduct ) => () => {
    return axios
      .post('api/products', dataProduct)
      .then(newProduct => {return newProduct}); 
  };

  export const updateProduct = (dataProduct) =>() =>{
    return axios
    .post('api/products/update', dataProduct)
    .then(productUpdated => {return productUpdated});
  }

  export const deleteProduct = (dataProduct) =>() =>{
    return axios
    .post('api/products/delete', dataProduct)
    .then(productDeleted => {return productDeleted});
  }

  export const updateProductImg= (dataProduct, imgKey) =>() =>{
    return axios
    .post('api/products/update', {dataProduct, imgKey})
    .then(productImgUpdated => {return productImgUpdated});
  }