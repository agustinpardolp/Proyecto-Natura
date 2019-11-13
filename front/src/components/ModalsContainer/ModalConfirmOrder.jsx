import React from 'react'
import { Modal, Tabs, Button } from "antd"
const { TabPane } = Tabs;

function modalConfirmOrder({showModal, onConfirmShipping, handleCancel, orderId}) {
    return (
    <div>
        <Modal
          title= {`Detalle de la orden n ${orderId}`}
          okType= "danger"
          visible={showModal}
          onOk={(orderId)=>{onConfirmShipping(orderId)}}
          onCancel={handleCancel}
          centered
           
          >
           <Tabs type="card">
                <TabPane tab="Envio Terrestre" key="1">
                    <div class="custom-control custom-checkbox mb-3">
                        <input type="checkbox" class="custom-control-input" id="customControlValidation1" required/>
                        <label class="custom-control-label" for="customControlValidation1">Confirma forma de envio</label>
                        <div class="invalid-feedback">Example invalid feedback text</div>
                    </div>         
                </TabPane>
                <TabPane tab="Envio Aereo" key="2">
                    <div class="custom-control custom-checkbox mb-3">
                        <input type="checkbox" class="custom-control-input" id="customControlValidation2" required/>
                        <label class="custom-control-label" for="customControlValidation1">Confirma forma de envio</label>
                        <div class="invalid-feedback">Example invalid feedback text</div>
                    </div>
                </TabPane>
            </Tabs>
        </Modal>
   </div>
    )
}

export default modalConfirmOrder