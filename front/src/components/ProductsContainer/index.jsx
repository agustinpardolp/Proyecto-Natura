import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../ProductsContainer/products";
import TemplateProductLoading from "../ModalsContainer/templateProductLoading";
import {
  fetchConsultantAdress,
  receiveSelectedConsultant,
  receiveSelectedAdress
} from "../../redux/actions/user";
import { fetchProducts } from "../../redux/actions/products";
import {
  addProductToOrder,
  decrementProductFromOrder,
  removeOrder,
  fetchOrdersById
} from "../../redux/actions/order";

import { fetchConsultantBySuperviser } from "../../redux/actions/user";

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: "",
      consultantAdress: "",
      order: "",
      displayStatus: ""
    };
    this.onHandleIncrement = this.onHandleIncrement.bind(this);
    this.onHandlerDecrement = this.onHandlerDecrement.bind(this);
    this.onHandleSelectedConsultant = this.onHandleSelectedConsultant.bind(
      this
    );
    this.onHandleSelectedAdress = this.onHandleSelectedAdress.bind(this);
  }

  componentDidMount() {
    this.props.fetchConsultantBySuperviser(this.props.user.id);

    if(!this.props.user.isSuperviser)
    this.props.fetchOrdersById(this.props.user.id).then(order => {
          if (order) {
            this.setState({ order: order, displayStatus: "disabled" });
          }
        })
      
    this.props.fetchConsultantAdress(this.props.user);
    this.props.fetchProducts().then(products => {
      this.setState(
        {
          productList: products
        },
        () => {
          // console.log(this.state.productList);
        }
      );
    });

    this.props.removeOrder();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.order.id != this.props.order.id) {
      this.props.fetchProducts();
    }
  }
  //MANEJO LOCAL DE INCREMENTOS / DECREMENTOS DE ARTICULOS SELECCIONADOS CON USUARIO
  onHandleIncrement(product) {
    //Recibo productos con userQuantity en cero. Para poder increment/decrement y visualizar cambios en front
    var productList = this.props.products;

    for (let i = 0; i < productList.length; i++) {
      //itero sobre los productos
      if (productList[i].id == product.id) {
        productList[i].userQuantity = productList[i].userQuantity + 1; //incremento si es el seleccionado por usuario
      }
    }
    this.setState({
      productList: productList //seteo localmente productos c/ cantidad
    });

    this.props.addProductToOrder(this.state.productList); //FINALIZADA LA CANTIDAD, ENVIO PRODUCTO AL REDUCER PARA ARMAR ORDEN
  }

  onHandlerDecrement(product) {
    var productList = this.props.products;
    for (let i = 0; i < productList.length; i++) {
      //itero sobre el array de productos
      if (productList[i].id == product.id) {
        //si el producto esta en la lista, y la cantidad es mayor a cero
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

  onHandleSelectedConsultant(e) {
    //funcion para seleccionar domicilio segun consultor-

    let consultant = JSON.parse(e.target.value);

    this.props.receiveSelectedConsultant(consultant);
    this.props.fetchConsultantAdress(consultant);
    this.props.fetchOrdersById(consultant.id).then(order => {
      if (order) {
        this.setState({ order: order, displayStatus: "disabled" });
      }
    });
  }

  onHandleSelectedAdress(e) {
    let adress = JSON.parse(e.target.value);
    this.props.receiveSelectedAdress(adress);
  }

  render() {
    return (
      <div
        className={
          this.props.collapseView ? "main-product-full" : "main-product-partial"
        } //modificio width de productos si se colapsa el sidebar
      >
        {this.state.productList && this.state.productList.length ? (
          <Products
            displayStatus={this.props.displayStatus}
            consultantList={this.props.consultantList}
            user={this.props.user}
            order={this.props.order}
            products={this.state.productList}
            consultantAdress={this.state.consultantAdress}
            totalOrderValue={this.props.totalOrderValue}
            onHandleIncrement={this.onHandleIncrement}
            onHandlerDecrement={this.onHandlerDecrement}
            onHandleSelectedConsultant={this.onHandleSelectedConsultant}
            onHandleSelectedAdress={this.onHandleSelectedAdress}
            consultantAdressList={this.props.consultantAdressList}
          />
        ) : (
          <TemplateProductLoading />
        ) //Si aun no hay productos, muestro logo + loading...
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  products: state.product.productList,
  user: state.user.user,
  consultantAdressList: state.user.consultantAdressList,
  consultantList: state.user.consultantList,
  collapseView: state.product.collapseView,
  totalOrderValue: state.orders.totalOrderValue,
  order: state.orders.orderCreated,
  displayStatus: state.orders.displayStatus
});

const mapDispatchToProps = dispatch => {
  return {
    addProductToOrder: product => dispatch(addProductToOrder(product)),
    fetchProducts: () => dispatch(fetchProducts()),
    fetchConsultantBySuperviser: userId =>
      dispatch(fetchConsultantBySuperviser(userId)),
    decrementProductFromOrder: product =>
      dispatch(decrementProductFromOrder(product)),
    removeOrder: () => dispatch(removeOrder()),
    fetchConsultantAdress: consultant =>
      dispatch(fetchConsultantAdress(consultant)),
    fetchOrdersById: userId => dispatch(fetchOrdersById(userId)),
    receiveSelectedConsultant: consultant =>
      dispatch(receiveSelectedConsultant(consultant)),
    receiveSelectedAdress: selectedAdress =>
      dispatch(receiveSelectedAdress(selectedAdress))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
