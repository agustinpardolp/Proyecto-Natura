import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "antd";
import Footer from "../FooterContainer/footer";
import ModalConfirmOrder from "../ModalsContainer/modalConfirmOrder";
import {
  removeOrder,
  createOrder,
  updateOrderShipping
} from "../../redux/actions/order";
import { resetOrderProducts } from "../../redux/actions/products";

class FooterContainer extends Component {
  constructor() {
    super();
    this.state = {
      scrollChange: "hidden-footer",
      showModal: false,
      modalMsj: "",
      orderId: "",
      shippingType: "terrestre",
      displayStatus: ""
    };

    this.onScroll = this.onScroll.bind(this);
    this.onHandlerClear = this.onHandlerClear.bind(this);
    this.onConfirmOrder = this.onConfirmOrder.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onConfirmShipping = this.onConfirmShipping.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    console.log(this.props.order, "order");
    // if(this.props.orderCreated)

    // console.log("ordern creada", orderCreated)
    // this.setState({
    //   displayStatus: "disabled"
    // })
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onHandlerClear() {
    this.props.removeOrder(); //borro la orden
    this.props.resetOrderProducts(this.props.products); //reinicio la productList con userQuantity
  }

  onConfirmOrder() {
    let userType;
    if (
      this.props.selectedConsultant.id &&
      this.props.order.length &&
      this.props.selectedAdress.id
    ) {
      userType = this.props.selectedConsultant;

      this.props
        .createOrder(this.props.order, userType, this.props.totalOrderValue)
        .then(order => {
          this.setState({
            showModal: true,
            orderId: order.id
          });
        });
    } else if (
      !this.props.user.isSuperviser &&
      this.props.order.length &&
      this.props.selectedAdress.id
    ) {
      userType = this.props.user;
      this.props
        .createOrder(this.props.order, userType, this.props.totalOrderValue)
        .then(order => {
          this.setState({
            showModal: true,
            orderId: order.id
          });
        });
    } else if (!this.props.order.length) {
      Modal.error({
        title: "Ocurrió un error",
        content: "Debe seleccionar productos",
        centered: true
      });
    } else if (!this.props.selectedAdress.id) {
      Modal.error({
        title: "Ocurrió un error",
        content: "Debe seleccionar una direccion",
        centered: true
      });
    } else {
      Modal.error({
        title: "Ocurrió un error",
        content: "Debe seleccionar un consultor",
        centered: true
      });
    }
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
    this.setState({
      showModal: false,
    });
  }

  handleCancel(e) {
    this.setState({
      showModal: false,
    });
  }
  handleChange(value) {
    this.setState({
      shippingType: value
    });
  }
  onConfirmShipping(orderId) {
    this.props
      .updateOrderShipping(orderId, this.state.shippingType)
      .then(orderUpdated => {
        this.props.removeOrder();
        this.setState({
          showModal: false
        });
      });
  }

  render() {
    return (
      <>
        <Footer
          onHandlerClear={this.onHandlerClear}
          onConfirmOrder={this.onConfirmOrder}
          scrollChange={this.state.scrollChange}
          totalOrderValue={this.props.totalOrderValue}
          displayStatus={this.props.displayStatus}
        />
        <ModalConfirmOrder
          showModal={this.state.showModal}
          handleCancel={this.handleOk}
          orderId={this.state.orderId}
          onConfirmShipping={this.onConfirmShipping}
          handleChange={this.handleChange}
          shippingType={this.state.shippingType}
        />
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
    displayStatus: state.orders.displayStatus,
    orderCreated: state.orders.orderCreated,
    selectedConsultant: state.user.selectedConsultant,
    selectedAdress: state.user.selectedAdress
  };
};

const mapDispatchToProps = dispatch => ({
  removeOrder: () => dispatch(removeOrder()),
  resetOrderProducts: products => dispatch(resetOrderProducts(products)),
  createOrder: (order, user, totals) =>
    dispatch(createOrder(order, user, totals)),
  updateOrderShipping: (orderId, shippingType) =>
    dispatch(updateOrderShipping(orderId, shippingType))
});

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
