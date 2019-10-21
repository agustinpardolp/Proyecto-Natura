import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";

function orderConfirm() {
  return (
    <Layout>
      <nav aria-label="breadcrumb main-header-advice">
        <ol class="breadcrumb main-header-advice">
          <li class="breadcrumb-item active " aria-current="page">
            Recordá que tenes hasta las 18hrs del dia para cargar tu pedido
          </li>
        </ol>
      </nav>
      <div class="card main-card-grid">
        <div class="card-header header-pedidos">
          Pedido Completado correctamente
        </div>

        <div class="card-body">
          <div class="row card-list">
            <div class=" col-sm-12 col-md-12 col-lg-6">
              <div className="card-container" style={{ width: "18rem" }}>
                <img
                  class="card-img-top"
                  src="/assets/img/natura.png"
                  alt="Card image cap"
                />
                <div className="card-info-container">
                  <h5>Card title</h5>
                  <label>(0081222)20pts</label> <label>$1180</label>
                  <br />
                  <br />
                  <div className="btn-card-container">
                    <button className="btn btn-plus"> + </button>{" "}
                    <input className="imput-qnty-result"></input>{" "}
                    <button className="btn btn-minus"> - </button>
                  </div>
                  <h6>Puntos acumulados 60pts</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default orderConfirm;
