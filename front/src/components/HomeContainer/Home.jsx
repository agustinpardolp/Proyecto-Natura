import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default function Home() {
  return (
    <div className="home-container">
      <br />
      <br />

      <h4>Bienvenido al ShowRoom de Natura</h4>
      <br />
      <Link to={"/pedidos"}>
        <Button className = "btn-home" >Cargar mi pedido</Button>
      </Link>
    </div>
  );
}
