import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { Layout } from "antd";

function orderConfirm({collapseView}) {
  return (
    <Layout className={collapseView? "home-container main-product-full":"home-container main-product-partial"}> 
    <div className = "container">

        <nav aria-label="breadcrumb main-header-advice">
            Recordá que tenes hasta las 18hrs del dia para cargar tu pedido
      </nav>
    </div>
      <div class="card main-card-grid">
        <div class="card-header header-pedidos">
          Pedido Completado correctamente
        </div>
      </div>

    </Layout>
  );
}
 
const mapStateToProps = (state, ownProps) => ({
 collapseView: state.product.collapseView,
  
 });
 
 export default connect(mapStateToProps, null)(orderConfirm)

