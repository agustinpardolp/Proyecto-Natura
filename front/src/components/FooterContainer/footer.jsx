import React from "react";
import {Link} from "react-router-dom";
import { Layout } from "antd";
const { Footer, Content } = Layout;

export default function footer({scrollChange}) {
  return (
        <div className={`footer ${scrollChange}`}>
          <Footer style={{ textAlign: "center" }}>
          <div className="btn-list-botton">
          <button className="btn"> Limpiar</button>
          <button className="btn"> <Link to="/orden" className="btn-finalizar">Finalizar</Link> </button>
        </div>
          </Footer>
         </div>


  );
}
