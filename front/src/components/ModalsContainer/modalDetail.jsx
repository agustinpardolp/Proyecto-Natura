import React from 'react'
import { Modal, Tabs } from "antd"
const { TabPane } = Tabs;

function modalError({showModal, handleOk}) {
    return (
        <div>
        <Modal
          title="Detalle de la orden n"
          okType= "danger"
          visible={showModal}
          onOk={handleOk}
          cancelButtonProps="false"
        >
           <Tabs type="card">
                <TabPane tab="Tab 1" key="1">
                     Detalle
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                     Extras
                </TabPane>
            </Tabs>
        </Modal>
        </div>
    )
}



export default modalError
