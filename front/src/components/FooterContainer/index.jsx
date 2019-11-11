import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../FooterContainer/footer";
import { removeOrder } from "../../redux/actions/order";

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
    this.props.removeOrder();
  }

  onConfirmOrder(){
    console.log("order", this.props.order, "user", this.props.user, "total", this.props.totalOrderValue)
    this.props.createOrder()
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
        scrollChange={this.state.scrollChange}
        onHandlerClear={this.onHandlerClear}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.user,
    totalOrderValue: state.orders.totalOrderValue,
    order : state.orders.order
  };
};

const mapDispatchToProps = dispatch => ({
  removeOrder: () => dispatch(removeOrder())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterContainer);
