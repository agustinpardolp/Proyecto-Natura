import React from 'react'
import {Layout} from "antd";
  const { Header } = Layout;

function orderHistory({onHandlerDetail}) {
    return (
        <div>

        <Header
        className="main-pedidos-header "
        style={{ background: "#fff", padding: 0 }}
        >
        <div className = "container">
          <h2 className="main-pedidos-tittle"> Lista de pedidos</h2>
        </div>
      </Header>
    <div class="panel panel-primary">
        <div class="panel-heading">
            <h3 class="panel-title">Lista de pedidos</h3>
            <div class="pull-right">
                <span class="clickable filter" data-toggle="tooltip" title="Toggle table filter" data-container="body">
                    <i class="glyphicon glyphicon-filter"></i>
                </span>
            </div>
        </div>
        <div class="panel-body">
            <input type="text" class="form-control" id="dev-table-filter" data-action="filter" data-filters="#dev-table" placeholder="Buscar por codigo" />
        </div>
        <table class="table table-hover" id="dev-table">
            <thead>
                <tr>
                    <th>Numero</th>
                    <th>Codigo de Consultor</th>
                    <th>Fecha</th>
                    <th>Monto</th>
                </tr>
            </thead>
            <tbody>
                <tr onClick={()=> {onHandlerDetail(orderId)}}>
                    <td>1</td>
                    <td>Kilgore</td>
                    <td>Trout</td>
                    <td>kilgore</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Bob</td>
                    <td>Loblaw</td>
                    <td>boblahblah</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Holden</td>
                    <td>Caulfield</td>
                    <td>penceyreject</td>
                </tr>
            </tbody>
        </table>
    </div>
{/* #fcf8e3!important
#F7931E!important
rgba(0, 0, 0, 0.65)
// <Link to="/pedidos/consulta"><Icon type="file-search" />Consulta de pedidos</Link>
*/}
        </div>
    )
}

export default orderHistory
