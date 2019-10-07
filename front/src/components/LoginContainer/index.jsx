import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './login'

export class LoginContainer extends Component {
    constructor(){
        this.state = {}
    }
    componentDidMount(){


    }

    render() {
        return (
            <div>
                <Login/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)