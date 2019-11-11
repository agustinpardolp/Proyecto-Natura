import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../ProductsContainer/products";
import { fetchProducts, changePathProduct } from "../../redux/actions/products";
import {
  addProductToOrder,
  decrementProductFromOrder,
  removeOrder
} from "../../redux/actions/order";
import { fetchConsultantBySuperviser } from "../../redux/actions/user";

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: "",
      originalProductList: "",
      consultantAdress: "",
   
    };
    this.onHandleIncrement = this.onHandleIncrement.bind(this);
    this.onHandlerDecrement = this.onHandlerDecrement.bind(this);
    this.onHandleSelectedConsultant = this.onHandleSelectedConsultant.bind(this);
  }

  componentDidMount() {
    this.props.fetchConsultantBySuperviser(this.props.user.id);
    this.props.fetchProducts().then(products => {
      this.setState(
        {
          productList: products,
          originalProductList: products
        },
        () => {
          console.log(this.state.productList);
        }
      );
      this.setState({
        orderExist: this.props.orderExist
      })
    });
    this.props.removeOrder();
  }

  // componentDidUpdate (prevProps, prevState){
  
  //   if (prevProps.orderExist !== this.props.orderExist) {
  //     console.log("PREVSTATE ENTRE", prevProps.orderExist, this.props.orderExist)
  //     this.setState({
  //       productList: this.state.originalProductList
  //     })
  //   }
  //   console.log(this.state.productList, "cambie la product list")
  // }

  onHandleIncrement(product) {
    //PÁSO PREVIO DE SETEO PRODUCTOS CON CANTIDADES!! PARA VISTA PRODUCTS (INPUT DEL MAS Y MENOS)
    var productList = this.props.products;
 
    for (let i = 0; i < productList.length; i++) {
      //itero sobre los productos y al atributo userQuantity con cada click
      if (productList[i].id == product.id) {
        productList[i].userQuantity = productList[i].userQuantity + 1;
      }
    }
    this.setState({
      productList: productList //seteo de productos + cantidad
    });

    this.props.addProductToOrder(this.state.productList); //FINALIZADA LA CANTIDAD, ENVIO PRODUCTO AL REDUCER PARA ARMAR ORDEN
  }

  onHandlerDecrement(product) {
    
    var productList = this.props.products
    for (let i = 0; i < productList.length; i++) { //itero sobre el array de productos
     if (productList[i].id == product.id) { //si el producto esta en la lista, y la cantidad es mayor a cero
        if (productList[i].userQuantity > 0) {
          productList[i].userQuantity = productList[i].userQuantity - 1; //reduzco en 1 cantidad
        } else productList[i].userQuantity = 0; // sino seteo cero
      }
    }
    this.setState({
      productList: productList
    });
    this.props.decrementProductFromOrder(this.state.productList);
  }

  onHandleSelectedConsultant(e) { //funcion para seleccionar domicilio segun consultor
    let consultant = JSON.parse(e.target.value);
    let consultantAdress = [];
    let consultantList = this.props.consultantList;

    for (let i = 0; i < consultantList.length; i++) {
      if (consultantList[i].id == consultant.id) {
        consultantAdress = consultant.location;
      }
    }

    this.setState({
      consultantAdress: [consultantAdress] //seteo array, por si se trabaja c/ mas de 1 domicilio
    });
  }

  render() {
    return (
      <div
        className={
          this.props.collapseView ? "main-product-full" : "main-product-partial"
        }
      >
        <Products
          consultantList={this.props.consultantList}
          user={this.props.user}
          products={this.state.productList}
          consultantAdress={this.state.consultantAdress}
          totalOrderValue={this.props.totalOrderValue}
          onHandleIncrement={this.onHandleIncrement}
          onHandlerDecrement={this.onHandlerDecrement}
          onHandleSelectedConsultant={this.onHandleSelectedConsultant}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  products: state.product.productList,
  user: state.user.user,
  consultantList: state.user.consultantList,
  collapseView: state.product.collapseView,
  totalOrderValue: state.orders.totalOrderValue,
  orderExist: state.orders.orderExist
});

const mapDispatchToProps = dispatch => {
  return {
    addProductToOrder: product => dispatch(addProductToOrder(product)),
    fetchProducts: () => dispatch(fetchProducts()),
    fetchConsultantBySuperviser: userId =>
      dispatch(fetchConsultantBySuperviser(userId)),
    decrementProductFromOrder: product =>
      dispatch(decrementProductFromOrder(product)),
      removeOrder: () => dispatch(removeOrder())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
