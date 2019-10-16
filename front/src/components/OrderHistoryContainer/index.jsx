import React, { Component } from 'react'
import OrderHistory from "../OrderHistoryContainer/orderHistory"

export default class OrderHistoryContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedOrder = {}
        }
    }

    componentDidMount(){
        this.props.fetchOrders()
      
    }

    onHandlerDetail(orderId){
        this.props.fetchOrderByid(orderId)
        .then(selectedOrder=>{
            this.setState({
                selectedOrder:selectedOrder
            })
        })
    }


    render() {
        return (
          <OrderHistory/>
          <ModalDetail selectedOrder = {this.state.selectedOrder}/>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    fetchOrders: user => dispatch(fetchOrders())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
