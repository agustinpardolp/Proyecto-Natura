import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { Row, Col, Layout } from "antd";
import {fetchLoggedUser} from "../../redux/actions/user"
import NavBarContainer from "../NavBarContainer";
import Footer from "../FooterContainer/footer";
import ProductContainer from "../ProductsContainer/index";
import SideBarContainer from "../SiderBarContainer/index";
import HomeContainer from "../HomeContainer/Home";
import LoginContainer from "../LoginContainer/index";
import OrderHistoryContainer from "../OrderHistoryContainer";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:"",
      loading: true

    };
  }

  componentDidMount(){
    this.props.fetchLoggedUser()
    .then(user=>{
      console.log(user, "userrr")
      this.setState({
        user:user,
        loading:false
      })

    })
  }

  render() {
    // if (this.state.loading) {
    //   return <h1>Ups! something went wrong.. Please, reload the web again</h1>
    // }
    return (
      <div className="mainRouter">
        <NavBarContainer user= {this.props.user}/>
      { this.props.user.code?
        <Layout style={{ minHeight: '100vh' }}>
        <SideBarContainer />
        <Switch>
           <Route exact path= "/" component= {HomeContainer} />
           <Route exact path="/pedidos" component={ProductContainer} />
           <Route exact path= "/pedidos/consulta" component={OrderHistoryContainer} />
        </Switch>
        </Layout>
        :
        <>
        <Route exact path= "/login" component = {LoginContainer} /> 
         <Redirect from="/" to="/login" component={LoginContainer} /> 
        </>
  }
  </div>
        );
  }
}

const mapStateToProps = state => ({
  user: state.user.user

});

const mapDispatchToProps = dispatch => ({

  fetchLoggedUser: ()=> dispatch(fetchLoggedUser())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
