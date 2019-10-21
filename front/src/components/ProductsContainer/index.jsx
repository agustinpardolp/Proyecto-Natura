import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../ProductsContainer/products";
import { fetchProducts } from "../../redux/actions/products";
import { addProductToOrder } from "../../redux/actions/order";
import { fetchConsultantBySuperviser } from "../../redux/actions/user";

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidad: 0,
      precioVenta: 0,
      previoRevend: 0,
      ganancia: 0,
      puntos: 0,
      estuches: 0,
      order: []
    };
    this.onHandleIncrement = this.onHandleIncrement.bind(this);
    this.onHandlerDecrement = this.onHandlerDecrement.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();

    if (this.props.user.isSuperviser) {
      this.props.fetchConsultantBySuperviser(this.props.user.id);
    }
  }

  onHandleIncrement(product) {

    this.props.addProductToOrder(product)
    // this.props.addProductToOrder(product, this.props.user);
  }
  onHandlerDecrement(val) {
    this.setState({
      cantidad: this.state.cantidad + val
    });
  }

  render() {
    return (
      <>
        {console.log(this.props.order, "ORDER")}
        <Products
          consultantList={this.props.consultantList}
          user={this.props.user}
          products={this.props.products}
          cantidad={this.state.cantidad}
          onHandleIncrement={this.onHandleIncrement}
          onHandlerDecrement={this.onHandlerDecrement}
        />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  products: state.product.productList,
  user: state.user.user,
  consultantList: state.user.consultantList,
  order: state.orders.order
});

const mapDispatchToProps = dispatch => {
  return {
    addProductToOrder: product => dispatch(addProductToOrder(product)),
    fetchProducts: () => dispatch(fetchProducts()),
    addProductToOrder: (product, user) =>
      dispatch(addProductToOrder(product, user)),
    fetchConsultantBySuperviser: userId =>
      dispatch(fetchConsultantBySuperviser(userId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
