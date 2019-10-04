import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from './navBar'

import ReactDOM from "react-dom";


class NavBarContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            showSidebar: false
        }
    }
    componentDidMount(){


    }

    sideBarToggle(){
        
    }

    render() {
        return (
            <div>
                <NavBar/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)