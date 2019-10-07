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
  Button
} from "antd";
const { Content, Header } = Layout;

export default function products() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout>
      <Header
        className="main-advice-header"
        style={{ background: "#fff", padding: 0 }}
      >
        <span className="main-advice">
          {" "}
          Recordá que tenes hasta las 18hrs del dia para cargar tu pedido
        </span>
        <br />
      </Header>
      <Header
        className="main-pedidos-header "
        style={{ background: "#fff", padding: 0 }}
      >
        <div className = "container">
          <h2 className="main-pedidos-tittle"> Pedidos</h2>

          <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}>
            <Button>Seleccione una direccion</Button>
          </Dropdown>
        </div>
      </Header>

      <Content style={{ margin: "0 16px" }}>
        <Row>
          <Col className="gutter-row" span={12}>
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 500 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <br />
          </Col>

          <Col className="gutter-row" span={12}>
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 500 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <br />
          </Col>

          <Col className="gutter-row" span={12}>
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 500 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>

          <Col className="gutter-row" span={12}>
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 500 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <br />
          </Col>

          <Col className="gutter-row" span={12}>
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 500 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <br />
          </Col>

          <Col className="gutter-row" span={12}>
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 500 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <br />
          </Col>

          <Col className="gutter-row" span={12}>
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 500 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <br />
          </Col>

          <Col className="gutter-row" span={12}>
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 500 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <br />
          </Col>
          {/* <Col className="gutter-row" span={12}>
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 500 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col className="gutter-row" span={8}>
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col className="gutter-row" span={8}>
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col> */}
        </Row>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  );
}
