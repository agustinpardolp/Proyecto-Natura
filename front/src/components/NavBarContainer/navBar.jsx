import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default function Navbar({
  user,
  onHandlerLogout,
  productPath,
  totalOrderValue,
  mobileView
}) {
  
  return (
    <div>
      <Layout className="main-navbar-layout">
        <Header
          className="header"
          style={{ boxShadow: "0px 3px 6px rgba(0,0,0,0.16)" }}
        >
          <div className="logo" />
          {user && user.id ? (
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
              {/* defaultSelectedKeys={[]} */}
              <SubMenu
                key="sub1"
                title={
                  <span>
                    {" "}
                    <Icon type="user" /> <span className = "span-user-mobile-view">{user.name}</span>{" "}
                  </span>
                }
              >
                <Menu.Item key="1" style={{ zIndex: "10000000" }}>
                  <span onClick={onHandlerLogout}>Logout </span>
                </Menu.Item>
              </SubMenu>
            </Menu>
          ) : null}
          {user && user.id ? (
            <div className="navbar-container-user">
              <div className="page-logo d-none d-md-block">
                <img
                  runat="server"
                  id="imgLogo"
                  className="logo-default"
                  alt="Logo"
                  src="/assets/img/natura_logo_40px.png"
                />
              </div>
              {productPath && productPath ? (
                <div className= "container" id="navbar-main-container">
                  <div className="row" id="navbar-container">
                    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4 ">
                      <h6 className="navbar-data">
                        Precio Venta:{" "}
                        <span>
                          {totalOrderValue
                            ? `$ ${totalOrderValue.total}`
                            : `$ ${0}`}
                        </span>
                      </h6>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-4 ">
                      <h6 className="navbar-data">
                        Vos Pagas:{" "}
                        <span>
                          {totalOrderValue
                            ? `$ ${totalOrderValue.price}`
                            : `$ ${0}`}
                        </span>
                      </h6>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 ">
                      <h6 className="navbar-data">
                        Ganancia:{" "}
                        <span>
                          {totalOrderValue
                            ? `$ ${totalOrderValue.profit}`
                            : `$ ${0}`}
                        </span>{" "}
                      </h6>
                    </div>
                  </div>
                  {/* 
                  {mobileView ? ( */}
                  <div className="row " id="navbar-extra-info-mobile">
                    <div className="col-lg-3 col-md-34 col-sm-6 col-xs-4 ">
                      <h6 className="navbar-data">
                        Unidades:{" "}
                        <span>
                          {totalOrderValue
                            ? totalOrderValue.totalQuantity
                            : 0}
                        </span>
                      </h6>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-4 ">
                      <h6 className="navbar-data">
                        Estuches:{" "}
                        <span>
                          {totalOrderValue
                            ? totalOrderValue.totalCases
                            : 0}
                        </span>
                      </h6>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6 col-xs-4 ">
                      <h6 className="navbar-data">
                        Puntos:{" "}
                        <span>
                          {totalOrderValue
                            ? totalOrderValue.totalPoints
                            : 0}
                        </span>{" "}
                      </h6>
                    </div>
                  </div>
                  {/* ) : null} */}
                </div>
              ) : null}
            </div>
          ) : (
            <div className="navbar-container">
              <div className="page-logo">
                <img
                  runat="server"
                  id="imgLogo"
                  className="logo-default"
                  alt="Logo"
                  src="/assets/img/natura_logo_40px.png"
                />
              </div>
            </div>
          )}
        </Header>
        {user && user.id ? (
          <div className="d-none d-sm-block">
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>
                  <Link to={"/"}>Inicio </Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                  <Link to={"/pedidos"}>Pedido </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Showroom</Breadcrumb.Item>
              </Breadcrumb>
            </Content>
          </div>
        ) : null}
      </Layout>
    </div>
  );
}

{
  /* <div class= "infoEnXs visible-xs">'+
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
        '</div >') */
}

