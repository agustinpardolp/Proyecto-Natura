import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default function Navbar({ user, onHandlerLogout, productPath }) {
  return (
    <div>  
      <Layout>
        <Header className="header" style={{ boxShadow: "0px 3px 6px rgba(0,0,0,0.16)" }}>
          <div className="logo" />
          {user.code && user.code ? (
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
              {/* defaultSelectedKeys={[]} */}
              <SubMenu
                key="sub1"
                title={
                  <span>
                    {" "}
                    <Icon type="user" /> {user.name}{" "}
                  </span>
                }
              >
                <Menu.Item key="1">
                  <Link onClick={onHandlerLogout}>Logout </Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          ) : null}
        {user.code && user.code ?
          <div className="navbar-container-user">
            <div class="page-logo d-none d-sm-block">
              <img
                runat="server"
                id="imgLogo"
                class="logo-default"
                alt="Logo"
                src="/assets/img/natura_logo_40px.png"
              />
            </div>
           {productPath && productPath == "/pedidos" ?
            <div className= "navbar-container">
              <h6>Precio Venta: <span>1000</span></h6>
              <h6>Vos Pagas: <span>500</span></h6>
              <h6 className = "h6-ganancia">Ganancia: <span>4000</span> </h6>
            </div>:null
            }
          </div>:
             <div className="navbar-container">
             <div class="page-logo">
               <img
                 runat="server"
                 id="imgLogo"
                 class="logo-default"
                 alt="Logo"
                 src="/assets/img/natura_logo_40px.png"
               />
             </div>
          </div>
            }
        </Header>
        {user.code && user.code ? (
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Link to={"/"}>
                <Breadcrumb.Item>Inicio</Breadcrumb.Item>
              </Link>
              <Breadcrumb.Item>Pedido</Breadcrumb.Item>
              <Breadcrumb.Item>Showroom</Breadcrumb.Item>
            </Breadcrumb>
          </Content>
        ) : null}
      </Layout>
    </div>
  );
}


{/* <div class= "infoEnXs visible-xs">'+
        '<div class="pull-left">' +
        '<div class="info-key">' +
        '<div class="infoText">Unidades:</div>' +
        '<div class="infoText">Estuches:</div>' +
        '<div class="infoText">Puntos:<span></div>' +
        '</div>' +
        '<div class="info-values">' +
        '<div class="infoText">' + totalQuantity.toFixed(0)  + '</span></div>' +
        '<div class="infoText">' + totalDiffCases.toFixed(0) + '</span></div>' +
        '<div class="infoText">' + totalPoints.toFixed(0) + '</span></div>' +
        '</div>' +
        '</div>' +
        '<div class="pull-right">' +
            '<div class="info-key">'+
                '<div class="infoText">Precio venta:</div>' +
                '<div class="infoText">Vos pagás:</div>' +
                '<div class="infoText">Ganancia: <span></div>' +
            '</div>'+
            '<div class="info-values">'+
                '<div class="infoText">' + total.toFixed(2) + '</span></div>' +
                '<div class="infoText">' + (total - profit).toFixed(2) + '</span></div>' +
                '<div class="infoText">' + profit.toFixed(2) + '</span></div>' +
            '</div>'+
        '</div>' +
        '</div >') */}