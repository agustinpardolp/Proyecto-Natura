import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { Row, Col, Layout } from "antd";
import {fetchLoggedUser} from "../../redux/actions/user"
import NavBarContainer from "../NavBarContainer";
import Footer from "../FooterContainer/index";
import ProductContainer from "../ProductsContainer/index";
import SideBarContainer from "../SiderBarContainer/index";
import HomeContainer from "../HomeContainer/Home";
import LoginContainer from "../LoginContainer/index";
import OrderConfirmContainer from "../OrderConfirmContainer/orderConfirm";
import OrderHistoryContainer from "../OrderHistoryContainer/index"

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:"",
      loading: true

    };
  }
  componentDidMount(){
    this.props.fetchLoggedUser() //pido user para mantander sesion iniciada //VER passport no mantiene sesion ¿?
    .then(user=>{
      this.setState({
        user:user,
        loading:false
      })
    })
  }

  render() {
    // if (this.state.loading) return <h1>Ups! something went wrong.. Please, reload the web again</h1>

    return (
      <div className="mainRouter">
        <Route component={NavBarContainer} />

      {this.props.user && this.props.user.id?
         <>
        <Layout className= "main-body" style={{ minHeight: '100vh' }}>
        <SideBarContainer />
         <Switch>
           <Route exact path= "/" component= {HomeContainer} />
           <Route exact path="/pedidos" component={ProductContainer} />
           <Route exact path="/orden" component= {OrderConfirmContainer}/>
           <Route exact path= "/pedidos/consulta" component = {OrderHistoryContainer} />
        </Switch>
        <Footer/>
        </Layout>
        </>
        :
        <>
            <Route exact path= "/login" component = {LoginContainer} />
            <Redirect from="/" to="/login" component={LoginContainer} />  
        </> //redirecciono a / si no hay user   
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
