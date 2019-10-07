import React from "react";
import {Link} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default function Navbar() {
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />

          <Menu
            theme="dark"
            mode="horizontal"
            // defaultSelectedKeys={[]}
            style={{ lineHeight: "64px" }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  User
                </span>
              }
            >
              <Menu.Item key="1">Logout</Menu.Item>
             
            </SubMenu>
          </Menu>

          <div class="page-logo">
            <img
              runat="server"
              id="imgLogo"
              class="logo-default"
              alt="Logo"
              src="/assets/img/natura_logo_40px.png"
            />

            <div class="menu-toggler sidebar-toggler hide"></div>
          </div>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Link to = {"/"}><Breadcrumb.Item>Inicio</Breadcrumb.Item></Link>
            <Breadcrumb.Item>Pedido</Breadcrumb.Item>
            <Breadcrumb.Item>Showroom</Breadcrumb.Item>
          </Breadcrumb>
          {/* <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      Inicio
                    </span>
                  }
                >
                  <Menu.Item key="1">Pedidos</Menu.Item>
                </SubMenu>
               
                </Menu>
        
            </Sider>
          
          </Layout> */}
        </Content>
       
      </Layout>
     
    </div>
  );
}
