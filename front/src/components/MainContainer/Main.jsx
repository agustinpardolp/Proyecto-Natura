import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { Row, Col, Layout } from "antd";
// import {fetchLoggedUser} from "../../redux/actions/user"

import NavBarContainer from "../NavBarContainer";
import Footer from "../FooterContainer/footer";
import ProductContainer from "../ProductsContainer/products";
import SideBarContainer from "../SiderBarContainer/index";
import Home from "../HomeContainer/Home";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:""

    };
  }

  // componentDidMount(){
  //   this.props.fetchLoggedUser()
  //   .then(user=>{
  //     this.setState({
  //       user:user
  //     })

  //   })
  // }

  render() {
    return (
      <div className="mainRouter">
        <NavBarContainer />
        <Layout style={{ minHeight: '100vh' }}>
        <SideBarContainer />
        <Switch>
          <Route exact path= "/" component= {Home} />
          <Route exact path="/pedidos" component={ProductContainer} />
        </Switch>
        </Layout>
        {/* <Footer/> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({

  // fetchLoggedUser = ()=> dispatch(fetchLoggedUser())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
