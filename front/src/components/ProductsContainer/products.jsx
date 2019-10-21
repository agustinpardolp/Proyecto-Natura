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
  user,
  cantidad,
  consultantList,
}) {
  return (
    <Layout>
      <nav aria-label="breadcrumb main-header-advice">
        <ol class="breadcrumb main-header-advice">
          <li class="breadcrumb-item active " aria-current="page">
            Recordá que tenes hasta las 18hrs del dia para cargar tu pedido
          </li>
        </ol>
      </nav>
      <div class="card main-card-grid">
        <div class="card-header header-pedidos">
          <div class="row">
            <div class="col-xs-12 col-sm-2 col-md-2 ">
              <div class="form-group">Pedido</div>
              </div>
              <div class="col-xs-12 col-sm-10 col-md-5 .offset-md-1 select-consultant-container">
              <div className="container-label-direccion">
                <label className="d-none d-sm-block"> Consultor </label>{" "}
                <select class="selectpicker" data-style="btn-info">
                  <option >Seleccione una direccion</option>
                  {consultantList &&
                    consultantList.map(consultant => {
                      return (
                        <option key={consultant.id}>{consultant.name}</option>
                      );
                    })}
                </select>
              </div>
              </div>
              <div class="col-xs-12 col-sm-10 col-md-5 .offset-md-2">
              <div className="container-label-direccion">
                <label className="d-none d-sm-block"> Direccion: </label>{" "}
                <select class="selectpicker">
                  <option>Seleccione una direccion</option>
                  {consultantList &&
                    consultantList.map(consultant => {
                      return (
                        <option key={consultant.id}>
                          {consultant.location}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="row card-list">
            {products.length &&
              products.map(product => (
                <div class=" col-sm-12 col-md-12 col-lg-6">
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
                            className="btn btn-plus"
                            onClick={() => {
                              onHandleIncrement(product);
                            }}
                          >
                            {" "}
                            +{" "}
                          </button>{" "}
                          <input
                            className="imput-qnty-result"
                            value={cantidad}
                            placeholder={cantidad}
                          ></input>{" "}
                          <button
                            className="btn btn-minus"
                            data-type="minus"
                            data-type="plus"
                            onClick={() => {
                              onHandlerDecrement(product);
                            }}
                          >
                            {" "}
                            -{" "}
                          </button>
                        </div>
                        <h6>Puntos acumulados {product.points}pts</h6>
                      </div>
                    </div>
                  </div>
                  <Divider dashed />
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* <Row type="flex" justify="center">
        <Col span={16} offset={0} xs={18} sm={20} md={22} lg={24} xl={24} >
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
        </Col>
        <Col span={20} offset={0} xs={18} sm={20} md={22} lg={24} xl={24}>
          <Header
            className="main-pedidos-header "
            style={{ background: "#fff", padding: 0 }}
          >
            <div className="container">
              <h2 className="main-pedidos-tittle"> Pedidos</h2>

              <Dropdown
                overlay={menu}
                placement="bottomLeft"
                trigger={["click"]}
              >
                <Button>Seleccione una direccion</Button>
              </Dropdown>
            </div>
          </Header>
        </Col>
      </Row>  */}
      {/* <Content style={{ margin: "0 16px" }}>
        <Row gutter={8}>
          <Col className="gutter-row"  xs={16} sm={18} md={24} lg={20} xl={12}>
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

          <Col className="gutter-row" xs={16} sm={18} md={24} lg={20} xl={12}>
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

          <Col className="gutter-row"  xs={16} sm={18} md={24} lg={20} xl={12}>
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

          <Col className="gutter-row"  xs={16} sm={18} md={24} lg={20} xl={12}>
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

          <Col className="gutter-row"  xs={16} sm={18} md={24} lg={20} xl={12}>
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

          <Col className="gutter-row" xs={16} sm={18} md={24} lg={20} xl={12}>
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

          <Col className="gutter-row" xs={24} sm={24} md={24} lg={20} xl={12}>
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

          <Col className="gutter-row"  xs={24} sm={24} md={24} lg={20} xl={12}>
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
         
        </Row>
      </Content> */}
      <Footer style={{ textAlign: "center" }}>
        <div className="btn-list-botton">
          <button className="btn btn-secondary"> Limpiar</button>
          <button className="btn btn-secondary">
            {" "}
            <Link to="/orden">Finalizar</Link>
          </button>
        </div>
      </Footer>
    </Layout>
  );
}
