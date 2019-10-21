import React, { Component } from 'react'
import OrderHistory from "../OrderHistoryContainer/orderHistory"
import { connect } from 'react-redux'
import ModalDetail from "../ModalsContainer/modalDetail"

class OrderHistoryContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedOrder: {},
            showModal:false
        }
        this.onHandlerDetail = this.onHandlerDetail.bind(this)
    }

    componentDidMount(){
        // this.props.fetchOrders()
       
    }

    onHandlerDetail(orderId){
        this.props.fetchOrderByid(orderId)
        .then(selectedOrder=>{
            if(selectedOrder) 
            this.setState({
                selectedOrder:selectedOrder,
                showModal:true
            })
        })
    }

    render() {
        return (
            <div>
                <OrderHistory onHandlerDetail = {this.onHandlerDetail}/>
                <ModalDetail showModal={this.state.showModal} handleOk={this.handleOk}/>
            </div>
         
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    fetchOrders: () => dispatch(fetchOrders()),
    fetchOrderByid: (user)=> dispatch(fetchOrders(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryContainer)
