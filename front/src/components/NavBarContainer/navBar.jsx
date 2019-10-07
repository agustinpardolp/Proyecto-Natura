import React from "react";
import {Link} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default function Navbar({user, onHandlerLogout}) {
  return (
    <div>
  
      <Layout>
        <Header className="header">
          <div className="logo" />
          {user.code && user.code?
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
            {/* defaultSelectedKeys={[]} */}
            <SubMenu key="sub1"title={<span> <Icon type="user"/> User </span>}>
                <Menu.Item key="1"><Link onClick={onHandlerLogout}>Logout </Link></Menu.Item>
            </SubMenu>
          </Menu>:
          null
            }

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
        {user.code && user.code?
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Link to = {"/"}><Breadcrumb.Item>Inicio</Breadcrumb.Item></Link>
            <Breadcrumb.Item>Pedido</Breadcrumb.Item>
            <Breadcrumb.Item>Showroom</Breadcrumb.Item>
          </Breadcrumb>
         
        </Content>:null
        }
      </Layout>
      
            
     
    </div>
  );
}
