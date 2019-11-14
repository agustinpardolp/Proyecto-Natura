import React from 'react'
import { Modal, Tabs, Button } from "antd"
const { TabPane } = Tabs;

function modalConfirmOrder({showModal, onConfirmShipping, handleCancel, handleChange, orderId, shippingType}) {
    return (
    <div>
        <Modal
          title= {`Detalle de la orden n ${orderId}`}
          okType= "danger"
          visible={showModal}
          onOk={()=>onConfirmShipping(orderId)}
          onCancel={handleCancel}
          centered
        
          > 
           <Tabs onTabClick = {handleChange} type="card">
                <TabPane tab="Envio Terrestre" key="terrestre">
                    <div class="custom-control custom-checkbox mb-3">
                        <label  for="customControlValidation1">Forma de envio seleccionada: <strong>{shippingType}</strong></label>
                        <div class="invalid-feedback">Example invalid feedback text</div>
                    </div>      
                </TabPane>
                <TabPane  tab="Envio Aereo" key="aereo">
                    <div class="custom-control custom-checkbox mb-3">
                        <label  for="customControlValidation1">Forma de envio seleccionada: <strong>{shippingType}</strong> </label>
                        <div class="invalid-feedback">Example invalid feedback text</div>
                    </div>
                </TabPane>
            </Tabs>

        </Modal>
   </div>
    )
}

export default modalConfirmOrder