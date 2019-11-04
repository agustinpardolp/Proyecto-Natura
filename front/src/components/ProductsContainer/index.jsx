import React, { Component } from "react";
import { connect } from "react-redux";
import productlist from "../../auxFunctions";
import Products from "../ProductsContainer/products";
import { fetchProducts } from "../../redux/actions/products";
import { addProductToOrder, removeProductFromOrder } from "../../redux/actions/order";
import { fetchConsultantBySuperviser } from "../../redux/actions/user";

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidad: 0,
      puntos: 0,
      estuches: 0,
      order: [],
      products: []
    };
    this.onHandleIncrement = this.onHandleIncrement.bind(this);
    this.onHandlerDecrement = this.onHandlerDecrement.bind(this);
  }

  componentDidMount() {
    // this.setState({
    //     products: productlist
    // })
    this.props.fetchProducts();

    if (this.props.user.isSuperviser) {
      this.props.fetchConsultantBySuperviser(this.props.user.id);
    }
  }

  onHandleIncrement(product) {
    this.props.addProductToOrder(product);
    
  }
  onHandlerDecrement(product) {
    this.props.removeProductFromOrder(product);
  }

  render() {
    return (
      <div>
        {console.log("ORDER", this.props.order)}

        <Products
          order = {this.props.order}
          consultantList={this.props.consultantList}
          user={this.props.user}
          products={this.props.products}
          // products={this.state.products}
          cantidad={this.state.cantidad}
          onHandleIncrement={this.onHandleIncrement}
          onHandlerDecrement={this.onHandlerDecrement}
        />
      </div>
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
      dispatch(fetchConsultantBySuperviser(userId)),
      removeProductFromOrder: (product) => dispatch(removeProductFromOrder(product))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
