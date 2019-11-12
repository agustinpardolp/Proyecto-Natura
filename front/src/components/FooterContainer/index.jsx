import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../FooterContainer/footer";
import { removeOrder, createOrder } from "../../redux/actions/order";
import { resetOrderProducts } from "../../redux/actions/products";

class FooterContainer extends Component {
  constructor() {
    super();
    this.state = {
      scrollChange: "hidden-footer"
    };

    this.onScroll = this.onScroll.bind(this);
    this.onHandlerClear = this.onHandlerClear.bind(this);
    this.onConfirmOrder = this.onConfirmOrder.bind(this)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onHandlerClear() {
    this.props.removeOrder(); //borro la orden
    this.props.resetOrderProducts(this.props.products); //reinicio la productList con userQuantity
  }

  onConfirmOrder(){
    console.log("order", this.props.order, "user", this.props.user, "total", this.props.totalOrderValue)
    this.props.createOrder(this.props.order, this.props.user, this.props.totalOrderValue)
  }

  onScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      this.setState({
        scrollChange: "show-footer"
      });
    } else {
      this.setState({
        scrollChange: "hidden-footer"
      });
    }
  }
  render() {
    return (
      <Footer
      onHandlerClear= {this.onHandlerClear}
      onConfirmOrder= {this.onConfirmOrder}
      scrollChange={this.state.scrollChange}
      totalOrderValue={this.props.totalOrderValue}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.user,
    totalOrderValue: state.orders.totalOrderValue,
    products: state.product.productList,
    order: state.orders.order
  };
};

const mapDispatchToProps = dispatch => ({
  removeOrder: () => dispatch(removeOrder()),
  resetOrderProducts: products => dispatch(resetOrderProducts(products)),
  createOrder: (order, user, totals) => dispatch(createOrder(order, user, totals))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterContainer);
