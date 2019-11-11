import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { connect } from "react-redux";

function Home({ collapseView }) {
  return (
    <div
      className={
        collapseView
          ? "home-container main-product-full"
          : "home-container main-product-partial"
      }
    >
      <br />
      <br />
      <h4 className="h4-home-tittle">Bienvenido al ShowRoom de Natura</h4>
      <br />
      <Link to={"/pedidos"}>
        <Button className="btn-home">Cargar mi pedido</Button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collapseView: state.product.collapseView
});

export default connect(
  mapStateToProps,
  null
)(Home);
