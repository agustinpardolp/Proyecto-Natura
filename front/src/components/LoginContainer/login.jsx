import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Tabs, Row, Col } from "antd";
const { TabPane } = Tabs;

function login({onPassChange, onCodeChange,onHandlerClick,onTabChange, noTitleKey, key}) {
   
  
    return (

    <Row>
    
    <Col span={12} offset={2}>

        <div className = "login-container">
        <h3>Ingreso</h3>
        
    <Tabs defaultActiveKey="1" >
    <TabPane  tab="Ingresar como consultor/a" key="1">
    <Form onSubmit={onHandlerClick} className="login-form"
    // labelCol={{ span: 5 }} wrapperCol={{ span: 8 }}
    >
        <Form.Item>

            <Input
              prefix={<Icon type="code" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              name="code" class="form-control" onChange = {onCodeChange}
              
              />

        </Form.Item>
        <Form.Item>
    
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="dni"
              name="dni" class="form-control" onChange = {onPassChange}
              // labelCol={{ span: 5 }}
              />

        </Form.Item>
        <Form.Item>
          <Button  htmlType="submit" className="login-form-button btn-home">
          Ingresar
          </Button>
        </Form.Item>
      </Form>
    </TabPane>
    <TabPane tab="Ingresar como supervisor/a" key="2">
    <Form onSubmit={onHandlerClick} className="login-form"
    
    // labelCol={{ span: 5 }} wrapperCol={{ span: 8 }}
    >
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              />
        </Form.Item>
        <Form.Item>
          <Button  htmlType="submit" className="login-form-button btn-home">
            Ingresar
          </Button>
       
        </Form.Item>
      </Form>
    </TabPane>
  </Tabs>
</div>
           
              </Col>
              </Row>
    )
  }

       
    // return (  
    //     <div>
    //         <nav class="navbar">
    //         </nav>
    //         <div class="row vertical-offset-100">
    //             <div class="col-md-4 col-md-offset-4">
    //                 <div class="panel panel-default">
    //                     <div class="text-center">
    //                         <h3 class="panel-title">Por favor, ingrese usuario y contraseña</h3>
    //                         <img class="img-responsive product-logo" src="{{logoBaseUri}}images/customer.png" alt="client" align="center" style={{display:"inline"}} />
    //                     </div>
    //                 </div>
    //                 <div class="panel panel-default">
    //                     <div class="panel-body">
    //                         <form role="form" accept-charset="UTF-8" onSubmit = {onHandlerClick }>
    //                             <fieldset>
    //                                 <div class="form-group">
    //                                     <input name="code" class="form-control" onChange = {onCodeChange}type="text" placeholder="numero de consultor"/>
    //                                 </div>
    //                                 <div class="form-group">
    //                                     <input name="dni" class="form-control" onChange ={onPassChange} type="password" placeholder="dni" />
    //                                 </div>
                                    
    //                                 <button class="btn btn-lg btn-primary btn-block" type="submit" value="Ingresar" />
    //                             </fieldset>
    //                         </form>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <footer class="footer" style={{textAlign: "center"}}>
    //             <p class="copyright">Copyright @ Q4Tech 2017 <a href="http://www.q4tech.com"> www.q4tech.com</a></p>
    //         </footer>
    //     </div>
    //     )
    // }
  

export default login
