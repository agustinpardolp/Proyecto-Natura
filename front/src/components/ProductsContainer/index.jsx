import React, { Component } from 'react'
import { connect } from 'react-redux'
import Products from './products'
import productlist from  "../../auxFunctions"


export class ProductContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            productlist:[],
            precioVenta:0,
            pagoConsultor:0,
            ganancia:0,
            productOrder:[]
        }
        this.onhandlerIncrement = this.onhandlerIncrement.bind(this)
        this.onhandlerDecrement = this.onhandlerDecrement.bind(this)
    }

componentDidMount() {

    this.setState({
        productlist: productlist
    })
}

    onhandlerIncrement(product ){
        var pagoConsultor = product.precio + product.profit
        this.setState({
            pagoConsultor: this.state.pagoConsultor + pagoConsultor,
            precioVenta:this.state.precioVenta + product.precio,
            ganancia: this.state.ganancia + product.profit,
            productOrder:[...this.state.productOrder, product]

        })
        console.log(this.state.productOrder, "increment")
    }

    onhandlerDecrement(product){

        var pagoConsultor = product.precio + product.profit
        if (this.state.precioVenta > 0) {
            this.setState({
                pagoConsultor: this.state.pagoConsultor - pagoConsultor,
                precioVenta:this.state.precioVenta - product.precio,
                ganancia: this.state.ganancia - product.profit,
                productOrder:[...this.state.productOrder, product]
            })
            var list = this.state.productOrder
            for (let i = 0; i < list.length; i++) {
                if (list[i].id == product.id) {
                
                    list.splice(list[i],1)
                
                    break
                }    
            }   
            this.setState({
                productOrder:list
            })
        }

    }

    render() {
        return (
            <div>

            {console.log(this.state.productOrder, "decrement")}
            <Products onhandlerIncrement = {this.onhandlerIncrement}
            onhandlerDecrement = {this.onhandlerDecrement}
            productlist = {this.state.productlist}
            ganancia = {this.state.ganancia}
            precioVenta = {this.state.precioVenta}
            pagoConsultor = {this.state.pagoConsultor}
            /> 
            </div>
        )
    }


}
const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)

