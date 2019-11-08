

function orderCounter(action){

    var newOrderList = action.product;
    newOrderList = newOrderList.filter((product)=>{  //filtro y devuelvo con todos los que tengan qty mayor a cero
        return product.userQuantity > 0
    })
    
    var totalOrderValue = newOrderList.length? newOrderList.map((acum) => {
        
        let profit = acum.profit  * acum.userQuantity //MAPEO LOS PRODUCTOS FILTRADOS QUE TIENE QTY MAYOR A 0
        let price = acum.price * acum.userQuantity    //ACUMULO VALORES TOTALES POR PRODUCTO
        let total = profit + price
        //sumo totales
        return {
            profit: profit,
            price: price,
            total: total
        };
    }).reduce(function(acum, order){  //ACUMULO VALORES TOTALES POR ORDEN
        return{
            profit: acum.profit + order.profit,
            price: acum.price + order.price,
            total: acum.total + order.total
        }
    }):0    
    return {
        order: newOrderList, // esta es la orden filtrada con los productos y cantidades elegidos por usuario
        totalOrderValue: totalOrderValue //devuelvo totales que se muestran en navbar
    };
    
}
    export default orderCounter