import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon, Card, Row, Col } from "antd";
const { Content, Footer, Sider, Header, Breadcrumb } = Layout;
const { SubMenu } = Menu;

export default function SideBar({ onCollapse, collapsed, hiddenSidebar, onScreenChange }) {
  return (
    <Sider
      breakpoint="md"
      display= "none"
      hidden = {hiddenSidebar}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      className = "sidebarContainer"
    >
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
            
            <Link to="/pedidos">
            <Icon type="shopping-cart" />
            Carga de pedidos
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            {" "}
            <Link to="/pedidos/consulta">
              <Icon type="file-search" />
              Consulta de pedidos
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="9">
          <Icon type="setting" />
          <span>Configuracion</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
