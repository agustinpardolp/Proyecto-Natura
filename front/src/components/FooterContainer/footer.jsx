import React from "react";
import {Link} from "react-router-dom";
import { Layout } from "antd";
const { Footer, Content } = Layout;

export default function footer({scrollChange, onHandlerClear, onConfirmOrder, totalOrderValue}) {

  return (
        <div className={`footer ${scrollChange}`}>
            <Footer className ="footer">
              <div className = "container">
                  <div className = "row">
                    <div class="col-lg-4 col-md-34 col-sm-3 col-xs-4 d-none d-sm-block">
                      <label className="control-label">Unidades: {totalOrderValue.totalQuantity}</label>	
					          </div>
					          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-4 d-none d-sm-block">
						          <label className="control-label">Estuches: {totalOrderValue.totalCases}</label>
					          </div>
					          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-4 d-none d-sm-block">
                      <label className="control-label">Puntos: {totalOrderValue.totalPoints}</label>
				          	</div>
                    {/* <div className = "col-lg-6 col-md-4 offset-3">
                        <div className = "footer-info-container">
                          <h6>Unidades: <span> 15</span></h6>
                          <h6>Estuches: <span>3</span></h6>
                          <h6>Puntos: <span> 142</span> </h6>
                        </div>
                     </div> */}
                     <div className = "col-lg-2 col-md-4">
                        <div className = "container btn-footer-container">
                          <div className=" btn-list-botton">
                              <button className="btn btn-clear" onClick = {onHandlerClear}> Limpiar</button>
                              <button className="btn btn-finalizar" onClick = {onConfirmOrder}>Finalizar </button>
                          </div> 
                        </div>  
                     </div>
                  </div>
              </div>
          </Footer>
         </div>


  );
}
