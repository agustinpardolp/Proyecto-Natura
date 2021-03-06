import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./navBar";
import { logout } from "../../redux/actions/user";

class NavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false
    };

    this.onHandlerLogout = this.onHandlerLogout.bind(this);
  }

  onHandlerLogout(e) {
    this.props.logout().then(res => this.props.history.push("/login"));
  }

  render() {
    return (
      <div>
        <NavBar
          headerStyle={this.state.headerStyle}
          totalOrderValue={this.props.totalOrderValue}
          user={this.props.user}
          productPath={this.props.productPath}
          onHandlerLogout={this.onHandlerLogout}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.user,
    order: state.orders.order,
    totalOrderValue: state.orders.totalOrderValue,
    productPath: ownProps.location.pathname == "/pedidos"
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
