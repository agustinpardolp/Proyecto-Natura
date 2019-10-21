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
const inputStyle = {
 width:"100px"
}
export default function products({onhandlerIncrement, onhandlerDecrement, productlist, ganancia, precioVenta, pagoConsultor}) {

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to={"/home"}>Direccionn</Link>
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
        style={{ background: "#fff", padding: 0 }}>
        <div className = "container">
          <h2 className="main-pedidos-tittle"> Pedidos</h2>
          <h4 className="main-pedidos-tittle">Precio Venta: {precioVenta}</h4>
          <h4 className="main-pedidos-tittle">Vos Pagas: {pagoConsultor} </h4>
          <h4 className="main-pedidos-tittle">Ganancia: {ganancia} </h4>
          <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}>
            <Button>Seleccione una direccion</Button>
          </Dropdown>
        </div>
      </Header>

      <Content style={{ margin: "0 16px" }}>
        <Row>
          <Col className="gutter-row" span={12}>
            { productlist.length && productlist.map(product =>(
              <Card
                  title={product.name}
                  extra={<a href="#">More</a>}
                  style={{ width: 500 }}
                  >
                    <p>{product.precio}</p>
                    <p>{product.code}</p>
                    <p>{product.points}</p>
              <div class="input-group">
                 <span class="input-group-btn">
                    <button type="button" class="btn btn-danger btn-number"  data-type="minus" data-field="quant[2]" 
                    onClick = {()=>{onhandlerDecrement(product)}} >
                        <span class="glyphicon glyphicon-minus"></span>
                   </button>
              </span>
                <input type="text" name="quant[2]" class="input-number " style = {inputStyle} value="0" min="1" max="100" />
                <span class="input-group-btn">
                   <button type="button" class="btn btn-success btn-number" data-type="plus" data-field="quant[2]"
                       onClick = {()=>{onhandlerIncrement(product)}} >
                        <span class="glyphicon glyphicon-plus"></span>
                </button>
              </span>
              </div>
              </Card>)


            )

             
          }
            <br />
          </Col>

        </Row>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  );
}
