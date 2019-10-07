import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon, Card } from "antd";
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function SideBar({ onCollapse, collapsed }) {
  return (
   
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <div className="menu-list">
              <Icon type="home" className="menu-icon" />
              <span>Inicio</span>
            </div>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="unordered-list" />
                <span>Pedidos</span>
              </span>
            }
          >
            <Menu.Item key="3">
              {" "}
              <Icon type="shopping-cart" />
              Carga de pedidos
            </Menu.Item>
            <Menu.Item key="4">
              {" "}
              <Icon type="file-search" />
              Consulta de pedidos
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="setting" />
            <span>Configuracion</span>
          </Menu.Item>
        </Menu>
      
      </Sider>
     
  

    // <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
    //   <div className="logo" />
    //   <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    //     <Menu.Item key="1">
    //       <Icon type="pie-chart" />
    //       <span>Option 1</span>
    //     </Menu.Item>
    //     <Menu.Item key="2">
    //       <Icon type="desktop" />
    //       <span>Option 2</span>
    //     </Menu.Item>
    //     <SubMenu
    //       key="sub1"
    //       title={
    //         <span>
    //           <Icon type="user" />
    //           <span>User</span>
    //         </span>
    //       }
    //     >
    //       <Menu.Item key="3">Tom</Menu.Item>
    //       <Menu.Item key="4">Bill</Menu.Item>
    //       <Menu.Item key="5">Alex</Menu.Item>
    //     </SubMenu>
    //     <SubMenu
    //       key="sub2"
    //       title={
    //         <span>
    //           <Icon type="team" />
    //           <span>Team</span>
    //         </span>
    //       }
    //     >
    //       <Menu.Item key="6">Team 1</Menu.Item>
    //       <Menu.Item key="8">Team 2</Menu.Item>
    //     </SubMenu>
    //     <Menu.Item key="9">
    //       <Icon type="file" />
    //       <span>File</span>
    //     </Menu.Item>
    //   </Menu>
    // </Sider>
   
 
  );
}
