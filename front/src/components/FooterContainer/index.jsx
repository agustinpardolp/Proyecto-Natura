import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../FooterContainer/footer";
import ModalConfirmOrder from "../ModalsContainer/ModalConfirmOrder"
import { removeOrder, createOrder, updateOrderShipping } from "../../redux/actions/order";
import { resetOrderProducts } from "../../redux/actions/products";

class FooterContainer extends Component {
  constructor() {
    super();
    this.state = {
      scrollChange: "hidden-footer",
      showModal: false,
      orderId:""
    };

    this.onScroll = this.onScroll.bind(this);
    this.onHandlerClear = this.onHandlerClear.bind(this);
    this.onConfirmOrder = this.onConfirmOrder.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
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
     let userType = this.props.selectedConsultant? this.props.selectedConsultant: this.props.user
     this.props.createOrder(this.props.order, userType, this.props.totalOrderValue)
     .then(order =>{
      this.setState({
        showModal:true,
        orderId:order.id
      })
     })
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
  handleOk(e) {
    console.log("entreeeeeeee")
    this.setState({
      showModal: false
    });
  }

  handleCancel(e) {
    console.log(e);
    this.setState({
      showModal: false
    });
  }
  onConfirmShipping(orderId){
    this.props.updateOrderShipping(orderId)

  }
  render() {
    return (
      <>
      <Footer
      onHandlerClear= {this.onHandlerClear}
      onConfirmOrder= {this.onConfirmOrder}
      scrollChange={this.state.scrollChange}
      totalOrderValue={this.props.totalOrderValue}
      />
       <ModalConfirmOrder showModal = {this.state.showModal} handleCancel ={this.handleOk} handleOk = {this.handleOk} orderId = {this.state.orderId}/>
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.user,
    totalOrderValue: state.orders.totalOrderValue,
    products: state.product.productList,
    order: state.orders.order,
    selectedConsultant: state.user.selectedConsultant
  };
};

const mapDispatchToProps = dispatch => ({
  removeOrder: () => dispatch(removeOrder()),
  resetOrderProducts: products => dispatch(resetOrderProducts(products)),
  createOrder: (order, user, totals) => dispatch(createOrder(order, user, totals)),
  updateOrderShipping: (orderId) => dispatch(updateOrderShipping(orderId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterContainer);
