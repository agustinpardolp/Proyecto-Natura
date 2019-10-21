import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from "antd"
import Login from './login'
import {loginUser} from "../../redux/actions/user"
import ModalError from "../../components/ModalsContainer/modalError" 

export class LoginContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            code:"",
            dni: "",
            modalShow: false
        }
        
        this.onHandlerClick = this.onHandlerClick.bind(this)
        this.onPassChange = this.onPassChange.bind(this)
        this.onCodeChange = this.onCodeChange.bind(this)
        this.onTabChange = this.onTabChange.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
    componentDidMount(){

    }

    onTabChange (key, type) {
        
        this.setState({ [type]: key });
      };

    onPassChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onCodeChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onHandlerClick(e){
        e.preventDefault()
        this.props.loginUser(this.state)
        .then(user=>{
            this.props.history.push("/");
            }).catch((e) => {
                this.setState({
                    modalShow:true
                })
        })
    }
    
  handleOk(e){
    console.log(e);
    this.setState({
        modalShow: false,
    });
  };

  handleCancel(e){
    console.log(e);
    this.setState({
        modalShow: false,
    });
  };
    render() {
        return (
            <>
                <Login onPassChange = {this.onPassChange} 
                 onCodeChange = {this.onCodeChange} 
                 onHandlerClick={this.onHandlerClick}/>
                <ModalError handleOk = {this.handleOk} handleCancel = {this.handleCancel} modalShow = {this.state.modalShow}/> 
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    loginUser: user => dispatch(loginUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)