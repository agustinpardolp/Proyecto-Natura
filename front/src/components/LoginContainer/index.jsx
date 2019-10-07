import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './login'
import {loginUser} from "../../redux/actions/user"

export class LoginContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            code:"",
            dni: "",
        }
        
        this.onHandlerClick = this.onHandlerClick.bind(this)
        this.onPassChange = this.onPassChange.bind(this)
        this.onCodeChange = this.onCodeChange.bind(this)
        this.onTabChange = this.onTabChange.bind(this)
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
        console.log(this.state)
        this.props.loginUser(this.state)
        .then(user=>{
            this.props.history.push("/");
            }).catch(() => {
                console.log(" ERROR")
        })
    }
    render() {
        return (
            <>
                <Login onPassChange = {this.onPassChange} 
                 onCodeChange = {this.onCodeChange} 
                 onHandlerClick={this.onHandlerClick}
           
                  />
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