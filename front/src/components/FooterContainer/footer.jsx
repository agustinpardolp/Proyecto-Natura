import React from "react";
import {Link} from "react-router-dom";
import { Layout } from "antd";
const { Footer, Content } = Layout;

export default function footer({scrollChange}) {
  return (
        <div className={`footer ${scrollChange}`}>
            <Footer className ="footer">
              <div className = "container btn-footer-container">
              <div className=" btn-list-botton">
           
            <button className="btn"> Limpiar</button>

          <button className="btn"> <Link to="/orden" className="btn-finalizar">Finalizar</Link> </button>
  
        </div> 
          {/* <div className="row btn-list-botton">
            <div className = "col-xs-6 col-sm-6 col-md-5 col-lg-1 offset-lg-1" >
            <button className="btn"> Limpiar</button>
            </div>
          <div className = "col-xs-6 col-sm-6 col-md-5 col-lg-1 offset-lg-1">
          <button className="btn"> <Link to="/orden" className="btn-finalizar">Finalizar</Link> </button>
          </div>
        </div> */}
              </div>
          </Footer>
         </div>


  );
}
