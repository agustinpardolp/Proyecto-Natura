import React, { Component } from 'react'
import {connect} from "react-redux"
import OrderHistory from "../OrderHistoryContainer/orderHistory"
import ModalDetail from "../ModalsContainer/modalDetail"
class OrderHistoryContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedOrder : {},
            showModal:false
        }
    }

    componentDidMount(){
        // this.props.fetchOrders()
       
    }

    onHandlerDetail(orderId){
        // this.props.fetchOrderByid(orderId)
        // .then(selectedOrder=>{
        //     if(selectedOrder) 
            this.setState({
                selectedOrder:selectedOrder,
                showModal:true
            // })
        })
    }

    render() {
        return (
            <div>
                <OrderHistory onHandlerDetail = {this.onHandlerDetail}/>
                <ModalDetail selectedOrder = {this.state.selectedOrder} showModal={this.state.showModal}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    // fetchOrders: user => dispatch(fetchOrders())
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryContainer)
