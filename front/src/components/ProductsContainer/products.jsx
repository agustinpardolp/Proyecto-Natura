import React from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Card,
  Breadcrumb,
  Row,
  Col,
  Menu,
  Dropdown,
  Button,
  Divider,
  List
} from "antd";

const { Content, Header, Footer } = Layout;

export default function products({
  products,
  onHandleIncrement,
  onHandlerDecrement,
  onHandleSelectedConsultant,
  consultantList,
  totalOrderValue,
  consultantAdress,
  user
}) {
  
  return (
  
    <Layout className = "main-body-products">
      <nav aria-label="breadcrumb main-header-advice">
        <ol class="breadcrumb d-none d-sm-block" id= "main-header-advice">
          <li class="breadcrumb-item active " aria-current="page">
            Recordá que tenes hasta las 18hrs del dia para cargar tu pedido
          </li>
        </ol>
      </nav>
      <div class="card main-card-grid">
        <div class="card-header " id = "header-pedidos">
          <div class="row">
            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2 ">
              <div class="form-group">Pedido</div>
              </div>
              <div class="col-xs-12 col-sm-10 col-md-4 col-lg-3 offset-lg-2">
              <div className="container-label-direccion">
                  {user && user.identification?null:// si es consultor no muestro selector "consultores"
                  <>
                <label className="d-none d-sm-block"> Consultor </label>
                <select onChange = {onHandleSelectedConsultant} class="selectpicker" data-style="btn-info" >
                  <option  >Seleccione un consultor </option>
                  {consultantList && 
                    consultantList.map(consultant => {
                      return (
                        <option value = {JSON.stringify(consultant)} key={consultant.id} >{consultant.name}</option>
                        );
                      })}
                      </select>
                    </>
                    }
              </div>
              </div>
              <div class="col-xs-12 col-sm-10 col-md-5 col-lg-3 offset-lg-1 ">
              <div className="container-label-direccion">
                <label className="d-none d-sm-block"> Direccion: </label>{" "}
               
                {user && user.identification? //si hay user consultor, muestro su direccion
                 <select class="selectpicker" >
                 <option>Seleccione una direccion</option>
                       <option>
                         {user.location}
                       </option>
                     );
               </select>
                :
                <select class="selectpicker" >
                  <option>Seleccione una direccion</option>
                  {consultantAdress &&  //si hay user supervisor muestro direccion de consultores
                    consultantAdress.map(adress => {
                      return (
                        <option key={adress}>
                          {adress}
                        </option>
                      );
                    })}
                </select>
                }
              </div>
            </div>
          </div>
        </div>
        
        <div class="card-body">
          <div class="row card-list">
            {products.length &&
              products.map(product => (
                <div class=" col-sm-12 col-md-12 col-lg-6 products-container">                     
                  <div className="card-container" style={{ width: "18rem" }}>
                    <img
                      class="card-img-top"
                      src={`/assets/img/img-products/${product.image}`}
                      alt="Card image cap"
                    />
                    <div class="row">
                      <div className="card-info-container">
                        <h5>{product.name}</h5>
                        <label>{product.code} </label>{" "}
                        <label>
                          {"$ "}
                          {product.price}
                        </label>
                        <br />
                        <br />
                        <div className="btn-card-container">
                          <button
                            type="submit"
                            className="btn"
                            id = "btn-plus"
                            onClick={() => {
                              onHandlerDecrement(product);
                            }}>
                            {" "}
                            -{" "}
                          </button>{" "}
                          {totalOrderValue  && totalOrderValue?
                          <input
                          className="input-qnty-result"
                          value={product.userQuantity}
                          placeholder={product.userQuantity}
                          ></input>
                          :
                          <input
                          className="input-qnty-result"
                          value= {0}
                          placeholder={0}
                          ></input>
                        }

                          <button
                            className="btn"
                            id = "btn-minus"
                            data-type="minus"
                            data-type="plus"
                            onClick={() => {
                              onHandleIncrement(product);
                            }}
                          >
                            {" "}
                            +{" "}
                          </button>
                        </div>
                        <h6>Puntos acumulados {product.points}pts</h6>
                      </div>
                    </div>
                  </div>
                  <Divider dashed className = "divider-main-products"/>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
